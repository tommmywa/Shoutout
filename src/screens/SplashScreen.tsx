import React from 'react';
import { useApp } from '../context/AppContext';
import { Disc3, ArrowRight } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  const { navigateTo, playHapticAudio } = useApp();

  const handleStart = () => {
    playHapticAudio('bloom');
    navigateTo('welcome');
  };

  return (
    <div
      onClick={handleStart}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px 24px 40px',
        backgroundColor: '#000000',
        cursor: 'pointer',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '9999px',
            padding: '6px 14px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Phase 1 Studio Release
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <div
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: '#101116',
            border: '2px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
          }}
        >
          <Disc3
            size={46}
            color="#FFFFFF"
            style={{
              animation: 'spin 8s linear infinite',
            }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '40px',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#FFFFFF',
              marginBottom: '8px',
            }}
          >
            SHOUTOUT<sup style={{ fontSize: '12px' }}>®</sup>
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '260px',
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Studio master vocal dedications.
          </p>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <button
          onClick={handleStart}
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
          <span>Get started</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
