import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Loader2 } from 'lucide-react';

export const PaymentProcessingScreen: React.FC = () => {
  const { submitOrder } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      submitOrder();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '9999px',
          backgroundColor: '#101116',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Loader2 size={32} color="#FFFFFF" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
      </div>

      <h1
        style={{
          fontSize: '24px',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          marginBottom: '8px',
        }}
      >
        Processing your payment
      </h1>
      <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
        Please don't close the app.
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
