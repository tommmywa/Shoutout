import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { navigateTo, setAuthMode, playHapticAudio } = useApp();

  const handleGetStarted = () => {
    playHapticAudio('tap');
    navigateTo('how_it_works');
  };

  const handleExistingAccount = () => {
    playHapticAudio('tap');
    setAuthMode('login');
    navigateTo('auth');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '24px 20px 28px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Brand Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '15px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
            }}
          >
            SHOUTOUT<sup style={{ fontSize: '9px', fontWeight: 600 }}>®</sup>
          </span>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '2px 6px',
              borderRadius: '4px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            PHASE 1
          </span>
        </div>

        <button
          onClick={handleGetStarted}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '4px 8px',
          }}
        >
          Skip
        </button>
      </div>

      {/* Hero Visual Area: Master Vinyl on Solid Dark Canvas */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: '12px 0',
        }}
      >
        <div
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            backgroundColor: '#08080A',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          <img
            src="/hero_vinyl.jpg"
            alt="Studio Master Vinyl"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              background: 'rgba(10, 11, 14, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>
              Master Studio Stems
            </span>
            <span
              style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-solar-amber)',
              }}
            >
              24-BIT 96kHz
            </span>
          </div>
        </div>
      </div>

      {/* Value Proposition & CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '8px',
            }}
          >
            Get their name heard.
          </h1>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.45,
              color: 'rgba(255, 255, 255, 0.65)',
            }}
          >
            Have your favorite artist shout out someone special in one of their songs.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Primary Button */}
          <button
            id="btn-get-started"
            onClick={handleGetStarted}
            style={{
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
              boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
              transition: 'transform 0.1s ease',
            }}
          >
            Get started
            <ArrowRight size={18} strokeWidth={2.4} />
          </button>

          {/* Secondary Button */}
          <button
            id="btn-existing-account"
            onClick={handleExistingAccount}
            style={{
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
            I already have an account
          </button>
        </div>
      </div>
    </div>
  );
};
