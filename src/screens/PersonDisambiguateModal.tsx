import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const PersonDisambiguateModal: React.FC = () => {
  const { selectedRecipient, navigateTo, navigateBack, playHapticAudio } = useApp();

  if (!selectedRecipient) return null;

  const handleConfirm = () => {
    playHapticAudio('bloom');
    navigateTo('tier_select');
  };

  const handleChooseAnother = () => {
    playHapticAudio('tap');
    navigateBack();
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
          Disambiguation Check
        </span>
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Is this the right person?
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4 }}>
          Make sure we shout out the intended recipient.
        </p>

        <div
          style={{
            backgroundColor: '#101116',
            border: '2px solid #FFFFFF',
            borderRadius: '20px',
            padding: '24px 20px',
            marginTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
          }}
        >
          <img
            src={
              selectedRecipient.avatarUrl ||
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
            }
            alt={selectedRecipient.displayName}
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '9999px',
              objectFit: 'cover',
              border: '2px solid #FFFFFF',
              marginBottom: '14px',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF' }}>
              {selectedRecipient.displayName}
            </h2>
            <CheckCircle2 size={16} color="#FFFFFF" />
          </div>

          <span
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '12px',
            }}
          >
            {selectedRecipient.disambiguatorTag}
          </span>

          {selectedRecipient.totalSocialCapital > 0 && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '12px',
                color: 'var(--color-solar-amber)',
                fontWeight: 600,
              }}
            >
              <span>{selectedRecipient.totalSocialCapital} Recognition points</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          id="btn-confirm-recipient"
          onClick={handleConfirm}
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: 'none',
            borderRadius: '9999px',
            padding: '16px 24px',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
          }}
        >
          Yes, that's them
        </button>

        <button
          id="btn-choose-someone-else"
          onClick={handleChooseAnother}
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
          }}
        >
          Choose someone else
        </button>
      </div>
    </div>
  );
};
