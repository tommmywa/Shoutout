import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Edit2 } from 'lucide-react';
import { MOCK_TIERS } from '../data/mockData';

export const OrderReviewScreen: React.FC = () => {
  const {
    selectedSong,
    selectedRecipient,
    selectedTier,
    selectedPlacement,
    selectedStyle,
    customInstructions,
    voiceNoteDuration,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const tierObj = MOCK_TIERS.find((t) => t.id === selectedTier) || MOCK_TIERS[0];
  const price = tierObj.price;

  const handleContinueToPayment = () => {
    playHapticAudio('bloom');
    navigateTo('payment');
  };

  const getCustomizationSummary = () => {
    if (selectedTier === 'silver') return `Placement: ${selectedPlacement}`;
    if (selectedTier === 'gold') return `Vibe: ${selectedStyle}`;
    if (selectedTier === 'platinum') {
      const parts = [];
      if (customInstructions) parts.push(`"${customInstructions}"`);
      if (voiceNoteDuration > 0) parts.push(`Voice note (${voiceNoteDuration}s)`);
      return parts.join(' • ') || 'Personalized studio request';
    }
    return 'Single vocal mention';
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
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Person
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Tier
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Personalize
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FFFFFF' }}>
              Review
            </span>
          </div>
          <div style={{ width: '20px' }} />
        </div>

        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '6px',
          }}
        >
          Your shoutout
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '20px' }}>
          Review the details before proceeding to payment.
        </p>

        {/* Summary Card with Crisp White Border on Selected Items */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Song Row */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Song & Artist
              </span>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                {selectedSong?.title}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                {selectedSong?.artistName}
              </div>
            </div>
            <button
              onClick={() => navigateTo('song_detail')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Edit2 size={13} />
              Edit
            </button>
          </div>

          {/* Recipient Row */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Shouting Out
              </span>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                {selectedRecipient?.displayName}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                {selectedRecipient?.disambiguatorTag}
              </div>
            </div>
            <button
              onClick={() => navigateTo('person_search')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Edit2 size={13} />
              Edit
            </button>
          </div>

          {/* Tier Row */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Tier
              </span>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                {tierObj.name} — {tierObj.headline}
              </div>
            </div>
            <button
              onClick={() => navigateTo('tier_select')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Edit2 size={13} />
              Edit
            </button>
          </div>

          {/* Customization Row */}
          <div
            style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: '80%' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Personalization
              </span>
              <div style={{ fontSize: '13px', color: '#FFFFFF', marginTop: '2px' }}>
                {getCustomizationSummary()}
              </div>
            </div>
            {selectedTier !== 'bronze' && (
              <button
                onClick={() => {
                  if (selectedTier === 'silver') navigateTo('silver_placement');
                  if (selectedTier === 'gold') navigateTo('gold_style');
                  if (selectedTier === 'platinum') navigateTo('platinum_instructions');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Edit2 size={13} />
                Edit
              </button>
            )}
          </div>

          {/* Total Price Row */}
          <div
            style={{
              padding: '16px',
              backgroundColor: '#161820',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>Total</span>
            <span
              style={{
                fontSize: '20px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: '#FFFFFF',
              }}
            >
              ${price}
            </span>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <button
          id="btn-review-continue"
          onClick={handleContinueToPayment}
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
          Continue to payment
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
