import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export const SilverPlacementScreen: React.FC = () => {
  const {
    selectedPlacement,
    setSelectedPlacement,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const options: { id: 'Intro' | 'Verse' | 'Outro'; desc: string }[] = [
    { id: 'Intro', desc: 'Right before the first beat drops as the track opens.' },
    { id: 'Verse', desc: 'Seamlessly woven directly into the main lyrics of the song.' },
    { id: 'Outro', desc: 'Personal studio sign-off as the master track fades.' },
  ];

  const handleSelect = (choice: 'Intro' | 'Verse' | 'Outro') => {
    playHapticAudio('tap');
    setSelectedPlacement(choice);
  };

  const handleContinue = () => {
    playHapticAudio('bloom');
    navigateTo('order_review');
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

        {/* Copy per spec */}
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
          Silver Tier Customization
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
          Where should their name appear?
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '24px' }}>
          Select the section of the song for the artist's shoutout placement.
        </p>

        {/* Radio Cards with Crisp White Selection Border */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {options.map((opt) => {
            const isSelected = selectedPlacement === opt.id;
            return (
              <div
                key={opt.id}
                id={`placement-opt-${opt.id.toLowerCase()}`}
                onClick={() => handleSelect(opt.id)}
                style={{
                  backgroundColor: '#101116',
                  border: isSelected ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: isSelected ? '0 6px 20px rgba(0,0,0,0.6)' : 'none',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                    {opt.id}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>{opt.desc}</p>
                </div>

                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '9999px',
                    border: isSelected ? 'none' : '1.5px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {isSelected && <Check size={14} color="#000000" strokeWidth={3} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <button
          id="btn-placement-continue"
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
