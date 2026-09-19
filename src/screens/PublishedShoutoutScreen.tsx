import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Play, Pause, Sparkles, ArrowRight } from 'lucide-react';

export const PublishedShoutoutScreen: React.FC = () => {
  const { selectedOrder, setViewingIdentity, navigateTo, setActiveTab, playHapticAudio } = useApp();
  const [isPlaying, setIsPlaying] = useState(true);
  const [playSeconds, setPlaySeconds] = useState(12);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaySeconds((s) => (s >= 30 ? 0 : s + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!selectedOrder) return null;

  const recipientName = selectedOrder.recipientIdentity.displayName;
  const artistName = selectedOrder.artistName;
  const songTitle = selectedOrder.songTitle;
  const recognitionPoints = selectedOrder.recognitionPointsAwarded || 120;

  const handleSeeRecognition = () => {
    playHapticAudio('bloom');
    setViewingIdentity(selectedOrder.recipientIdentity);
    navigateTo('recognition_profile');
  };

  const handleDone = () => {
    playHapticAudio('tap');
    setActiveTab('activity');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '20px 20px 24px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button
            onClick={handleDone}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.7)',
              cursor: 'pointer',
              padding: '4px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-solar-amber)' }}>
            STUDIO MASTER RELEASE
          </span>
          <div style={{ width: '20px' }} />
        </div>

        {/* Celebration Header per spec */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '6px',
            }}
          >
            {recipientName} just got recognized 🎉
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.4 }}>
            {artistName} mentioned {recipientName} in <strong style={{ color: '#FFFFFF' }}>{songTitle}</strong>.
          </p>
        </div>

        {/* Studio Player & Waveform Visualizer */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <img
              src={selectedOrder.artworkUrl}
              alt={songTitle}
              style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>{songTitle}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>{artistName}</p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  color: 'var(--color-solar-amber)',
                  fontWeight: 600,
                  marginTop: '4px',
                }}
              >
                <span>⚡ Shoutout timestamp: 0:14</span>
              </div>
            </div>
          </div>

          {/* Interactive Player Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {isPlaying ? <Pause size={18} fill="#000000" /> : <Play size={18} fill="#000000" style={{ marginLeft: '2px' }} />}
            </button>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '6px' }}>
                <span>0:{playSeconds < 10 ? `0${playSeconds}` : playSeconds}</span>
                <span>2:58</span>
              </div>
              <div
                style={{
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(playSeconds / 30) * 100}%`,
                    backgroundColor: '#FFFFFF',
                    transition: 'width 0.2s ease',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Value Badge Card */}
        <div
          style={{
            backgroundColor: '#161820',
            border: '2px solid #FFFFFF',
            borderRadius: '16px',
            padding: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Recognition Score
            </span>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-solar-amber)', marginTop: '2px' }}>
              +{recognitionPoints} Recognition
            </div>
          </div>

          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 156, 10, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={20} color="var(--color-solar-amber)" />
          </div>
        </div>
      </div>

      {/* Primary Action: See recognition */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
        <button
          id="btn-see-recognition"
          onClick={handleSeeRecognition}
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
            boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
          }}
        >
          See recognition
          <ArrowRight size={18} />
        </button>

        <button
          id="btn-published-done"
          onClick={handleDone}
          style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            padding: '14px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
