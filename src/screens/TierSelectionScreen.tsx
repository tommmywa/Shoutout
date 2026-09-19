import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { MOCK_TIERS } from '../data/mockData';
import { TierLevel } from '../types';

export const TierSelectionScreen: React.FC = () => {
  const {
    selectedTier,
    setSelectedTier,
    selectedRecipient,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const handleSelectTier = (tierId: TierLevel) => {
    playHapticAudio('tap');
    setSelectedTier(tierId);
  };

  const handleContinue = () => {
    playHapticAudio('bloom');
    if (selectedTier === 'bronze') {
      navigateTo('order_review');
    } else if (selectedTier === 'silver') {
      navigateTo('silver_placement');
    } else if (selectedTier === 'gold') {
      navigateTo('gold_style');
    } else if (selectedTier === 'platinum') {
      navigateTo('platinum_instructions');
    }
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

          {/* Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
              Person
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FFFFFF' }}>
              Tier
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Personalize
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Review
            </span>
          </div>
          <div style={{ width: '20px' }} />
        </div>

        {/* Header per spec */}
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          How should they be shouted out?
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '20px' }}>
          {selectedRecipient ? `For ${selectedRecipient.displayName}` : 'Choose shoutout tier and delivery.'}
        </p>

        {/* Tier Selection Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {MOCK_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                id={`tier-card-${tier.id}`}
                onClick={() => handleSelectTier(tier.id)}
                style={{
                  backgroundColor: '#101116',
                  border: isSelected ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 8px 24px rgba(0,0,0,0.6)' : 'none',
                }}
              >
                <div style={{ flex: 1, paddingRight: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                      {tier.name} — {tier.headline}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.35 }}>
                    {tier.description}
                  </p>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      fontSize: '17px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: '#FFFFFF',
                    }}
                  >
                    ${tier.price}
                  </span>
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
                    }}
                  >
                    {isSelected && <Check size={14} color="#000000" strokeWidth={3} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div style={{ paddingTop: '20px' }}>
        <button
          id="btn-tier-continue"
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
