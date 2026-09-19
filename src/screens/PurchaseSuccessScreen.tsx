import React from 'react';
import { useApp } from '../context/AppContext';
import { Check, ArrowRight } from 'lucide-react';

export const PurchaseSuccessScreen: React.FC = () => {
  const { selectedOrder, navigateTo, setActiveTab, playHapticAudio } = useApp();

  const handleTrackShoutout = () => {
    playHapticAudio('bloom');
    navigateTo('shoutout_tracking');
  };

  const handleBackToHome = () => {
    playHapticAudio('tap');
    setActiveTab('home');
  };

  const recipientName = selectedOrder?.recipientIdentity?.displayName || 'Recipient';
  const artistName = selectedOrder?.artistName || 'Artist';
  const songTitle = selectedOrder?.songTitle || 'Song';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '24px 20px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
        {/* Celebration Brand Visual */}
        <div style={{ textAlign: 'center', margin: '20px 0 28px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 8px 24px rgba(255, 255, 255, 0.25)',
            }}
          >
            <Check size={32} strokeWidth={3} />
          </div>

          <h1
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}
          >
            Your shoutout is booked 🎉
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.45, maxWidth: '300px', margin: '0 auto' }}>
            {recipientName} will be shouted out by {artistName} in {songTitle}.
          </p>
        </div>

        {/* Status Tracker Stepper per spec */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '18px 20px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255, 255, 255, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            Fulfillment Progression
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Step 1: Request received */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Check size={13} strokeWidth={3} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Request received</span>
              </div>
            </div>

            {/* Step 2: Payment confirmed */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Check size={13} strokeWidth={3} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Payment confirmed</span>
              </div>
            </div>

            {/* Step 3: Artist recording (In progress) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '9999px',
                  border: '2px solid #FFFFFF',
                  backgroundColor: '#161820',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#FFFFFF' }} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>Artist recording</span>
                <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                  In studio master booth
                </span>
              </div>
            </div>

            {/* Step 4: Published */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}>Published</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          id="btn-track-shoutout"
          onClick={handleTrackShoutout}
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
          Track shoutout
          <ArrowRight size={18} />
        </button>

        <button
          id="btn-back-home"
          onClick={handleBackToHome}
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
          Back to home
        </button>
      </div>
    </div>
  );
};
