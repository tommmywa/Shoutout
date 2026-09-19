import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Mic, Square, Play, RotateCcw, Check, Pause } from 'lucide-react';

export const PlatinumVoiceRecorderScreen: React.FC = () => {
  const { setVoiceNoteDuration, setVoiceNoteBlobUrl, navigateBack, playHapticAudio } = useApp();

  const [recorderState, setRecorderState] = useState<'ready' | 'recording' | 'preview'>('ready');
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  useEffect(() => {
    let timer: any;
    if (recorderState === 'recording') {
      timer = setInterval(() => {
        setRecordSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [recorderState]);

  const handleStartRecord = () => {
    playHapticAudio('record');
    setRecordSeconds(0);
    setRecorderState('recording');
  };

  const handleStopRecord = () => {
    playHapticAudio('tap');
    setRecorderState('preview');
  };

  const handleReRecord = () => {
    playHapticAudio('tap');
    setRecordSeconds(0);
    setIsPlayingPreview(false);
    setRecorderState('ready');
  };

  const handleTogglePreview = () => {
    playHapticAudio('tap');
    setIsPlayingPreview(!isPlayingPreview);
  };

  const handleUseRecording = () => {
    playHapticAudio('bloom');
    setVoiceNoteDuration(recordSeconds || 12);
    setVoiceNoteBlobUrl('mock_voice_note_blob');
    navigateBack();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '20px 20px 28px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <button
          onClick={navigateBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            padding: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <ArrowLeft size={20} />
        </button>

        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '6px',
          }}
        >
          Record your instructions
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
          Speak clearly to give the artist vocal pronunciation and context.
        </p>
      </div>

      {/* Center Waveform & Recording Canvas */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 0',
        }}
      >
        {/* Timer display */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '36px',
            fontWeight: 800,
            color: recorderState === 'recording' ? 'var(--color-solar-amber)' : '#FFFFFF',
            marginBottom: '20px',
          }}
        >
          00:{recordSeconds < 10 ? `0${recordSeconds}` : recordSeconds}
        </div>

        {/* Animated Waveform Visualizer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            height: '60px',
            marginBottom: '32px',
          }}
        >
          {[20, 38, 55, 25, 60, 42, 18, 50, 32, 58, 22, 45].map((height, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: recorderState === 'recording' ? `${Math.max(12, (height * (recordSeconds % 3 + 1)) / 2)}px` : `${height / 2}px`,
                backgroundColor: recorderState === 'recording' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)',
                borderRadius: '9999px',
                transition: 'height 0.15s ease',
              }}
            />
          ))}
        </div>

        {/* Main Recording Action Button */}
        {recorderState === 'ready' && (
          <button
            id="btn-start-record"
            onClick={handleStartRecord}
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
            }}
          >
            <Mic size={32} />
          </button>
        )}

        {recorderState === 'recording' && (
          <button
            id="btn-stop-record"
            onClick={handleStopRecord}
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)',
            }}
          >
            <Square size={26} fill="#000000" />
          </button>
        )}

        {recorderState === 'preview' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={handleReRecord}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '9999px',
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              title="Record again"
            >
              <RotateCcw size={18} />
            </button>

            <button
              id="btn-preview-audio"
              onClick={handleTogglePreview}
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isPlayingPreview ? <Pause size={28} fill="#000000" /> : <Play size={28} fill="#000000" style={{ marginLeft: '3px' }} />}
            </button>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div>
        {recorderState === 'preview' ? (
          <button
            id="btn-use-recording"
            onClick={handleUseRecording}
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              borderRadius: '9999px',
              padding: '16px 24px',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <Check size={18} strokeWidth={2.4} />
            Use recording
          </button>
        ) : (
          <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
            {recorderState === 'recording' ? 'Tap stop when finished speaking' : 'Tap mic to start recording'}
          </div>
        )}
      </div>
    </div>
  );
};
