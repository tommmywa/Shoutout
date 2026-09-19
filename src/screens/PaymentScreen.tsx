import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CreditCard, Apple, Sparkles, Check, LucideIcon } from 'lucide-react';
import { MOCK_TIERS } from '../data/mockData';

export const PaymentScreen: React.FC = () => {
  const {
    selectedSong,
    selectedRecipient,
    selectedTier,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    fanProfile,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const tierObj = MOCK_TIERS.find((t) => t.id === selectedTier) || MOCK_TIERS[0];
  const price = tierObj.price;
  const userPoints = fanProfile?.pointsBalance || 0;

  const paymentOptions: {
    id: 'apple_pay' | 'credit_card' | 'recognition_points';
    title: string;
    sub: string;
    icon: LucideIcon;
    disabled?: boolean;
  }[] = [
    {
      id: 'apple_pay',
      title: 'Apple Pay',
      sub: 'Default device card',
      icon: Apple,
    },
    {
      id: 'credit_card',
      title: 'Credit Card',
      sub: 'Visa ending in 4242',
      icon: CreditCard,
    },
    {
      id: 'recognition_points',
      title: 'Recognition Points',
      sub: `${userPoints} pts available`,
      icon: Sparkles,
      disabled: userPoints < price,
    },
  ];

  const handleSelectMethod = (method: 'apple_pay' | 'credit_card' | 'recognition_points', disabled?: boolean) => {
    if (disabled) return;
    playHapticAudio('tap');
    setSelectedPaymentMethod(method);
  };

  const handlePay = () => {
    playHapticAudio('bloom');
    navigateTo('payment_processing');
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

        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          You're almost there.
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '20px' }}>
          Select your payment method to book this shoutout.
        </p>

        {/* Order Preview Mini Card */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '14px 16px',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Your shoutout
          </span>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            {selectedRecipient?.displayName}
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '2px' }}>
            {selectedSong?.title} · {selectedSong?.artistName} ({tierObj.name})
          </div>

          <div
            style={{
              marginTop: '12px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>Total</span>
            <span style={{ fontSize: '18px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF' }}>
              ${price}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
            Payment method
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {paymentOptions.map((opt) => {
              const isSelected = selectedPaymentMethod === opt.id;
              const Icon = opt.icon;
              return (
                <div
                  key={opt.id}
                  id={`payment-method-${opt.id}`}
                  onClick={() => handleSelectMethod(opt.id, opt.disabled)}
                  style={{
                    backgroundColor: '#101116',
                    border: isSelected ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    cursor: opt.disabled ? 'not-allowed' : 'pointer',
                    opacity: opt.disabled ? 0.4 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: isSelected ? '0 6px 20px rgba(0,0,0,0.6)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#161820',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{opt.title}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>{opt.sub}</div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '9999px',
                      border: isSelected ? 'none' : '1.5px solid rgba(255, 255, 255, 0.2)',
                      backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isSelected && <Check size={12} color="#000000" strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '16px' }}>
        <button
          id="btn-confirm-pay"
          onClick={handlePay}
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: 'none',
            borderRadius: '9999px',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
          }}
        >
          Pay ${price}
        </button>
      </div>
    </div>
  );
};
