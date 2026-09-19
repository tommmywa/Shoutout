import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Flame, Smile, CloudMoon, Check, LucideIcon } from 'lucide-react';

export const GoldStyleScreen: React.FC = () => {
  const { selectedStyle, setSelectedStyle, navigateTo, navigateBack, playHapticAudio } = useApp();

  const styles: { id: 'Hype' | 'Chill' | 'Comedic'; desc: string; icon: LucideIcon }[] = [
    { id: 'Hype', desc: 'Energetic and exciting delivery with maximum vocal punch.', icon: Flame },
    { id: 'Chill', desc: 'Smooth, soulful, and relaxed tone over the instrumental.', icon: CloudMoon },
    { id: 'Comedic', desc: 'Playful, clever, and funny insider banter.', icon: Smile },
  ];

  const handleSelect = (s: 'Hype' | 'Chill' | 'Comedic') => {
    playHapticAudio('tap');
    setSelectedStyle(s);
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
          Gold Tier Customization
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
          What's the vibe?
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '24px' }}>
          Choose how the artist should deliver the vocal shoutout.
        </p>

        {/* Style Selection Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {styles.map((style) => {
            const isSelected = selectedStyle === style.id;
            const Icon = style.icon;
            return (
              <div
                key={style.id}
                id={`style-opt-${style.id.toLowerCase()}`}
                onClick={() => handleSelect(style.id)}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: '#161820',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                      {style.id}
                    </h3>
                    <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>{style.desc}</p>
                  </div>
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
          id="btn-style-continue"
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
