import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Disc, User, Sparkles } from 'lucide-react';

export const HowItWorksScreen: React.FC = () => {
  const { navigateTo, navigateBack, playHapticAudio } = useApp();

  const handleContinue = () => {
    playHapticAudio('tap');
    navigateTo('auth');
  };

  const steps = [
    {
      num: '01',
      title: 'Pick a song',
      desc: 'Choose an artist and song.',
      icon: Disc,
      accent: '#FFFFFF',
    },
    {
      num: '02',
      title: 'Pick a person',
      desc: 'Tell us whose name should be mentioned.',
      icon: User,
      accent: '#FFFFFF',
    },
    {
      num: '03',
      title: 'Make it personal',
      desc: 'Choose how the artist should deliver the shoutout.',
      icon: Sparkles,
      accent: 'var(--color-solar-amber)',
    },
  ];

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
      }}
    >
      {/* Top Bar with Back Action */}
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

        <span
          style={{
            display: 'block',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '6px',
          }}
        >
          How It Works
        </span>
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Pick a song. Pick a name. Make it personal.
        </h1>
      </div>

      {/* 3 Step Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              style={{
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '18px 16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#161820',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color={s.accent} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.4)',
                      fontWeight: 700,
                    }}
                  >
                    {s.num}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.4 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Continue CTA */}
      <div>
        <button
          id="btn-how-it-works-continue"
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
          <ArrowRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
};
