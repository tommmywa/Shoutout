import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Mic } from 'lucide-react';

export const PlatinumInstructionsScreen: React.FC = () => {
  const {
    customInstructions,
    setCustomInstructions,
    voiceNoteDuration,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const handleContinue = () => {
    playHapticAudio('bloom');
    navigateTo('order_review');
  };

  const handleOpenVoiceRecorder = () => {
    playHapticAudio('tap');
    navigateTo('platinum_voice_recorder');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '16px 20px 24px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
        {/* Navigation & Progress Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
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
            }}
          >
            <ArrowLeft size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
              Person
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
              Tier
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FFFFFF' }}>
              Personalize
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Review
            </span>
          </div>
          <div style={{ width: '20px' }} />
        </div>

        <span
          style={{
            display: 'block',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '4px',
          }}
        >
          Platinum Personalization
        </span>
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '6px',
          }}
        >
          Make it personal
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '20px' }}>
          Tell the artist exactly how you'd like the shoutout delivered.
        </p>

        {/* Multiline Instructions Textarea with White Focus Border */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
            Add instructions
          </label>
          <textarea
            id="textarea-platinum-instructions"
            rows={4}
            placeholder="Tell the artist what you'd like..."
            value={customInstructions}
            onChange={(e) => setCustomInstructions(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#101116',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '14px',
              padding: '14px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontFamily: 'inherit',
              lineHeight: 1.5,
              outline: 'none',
              resize: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
          />
        </div>

        {/* Voice Note Entry Row */}
        <div
          onClick={handleOpenVoiceRecorder}
          style={{
            backgroundColor: '#101116',
            border: voiceNoteDuration > 0 ? '1.5px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mic size={18} color={voiceNoteDuration > 0 ? 'var(--color-solar-amber)' : '#FFFFFF'} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                {voiceNoteDuration > 0 ? `Voice Note Attached (${voiceNoteDuration}s)` : 'Send a voice note'}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                {voiceNoteDuration > 0 ? 'Tap to preview or re-record' : 'Speak your pronunciation & directions'}
              </div>
            </div>
          </div>

          <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)' }}>
            {voiceNoteDuration > 0 ? 'Edit' : 'Record'}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px' }}>
        <button
          id="btn-instructions-continue"
          onClick={handleContinue}
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
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
