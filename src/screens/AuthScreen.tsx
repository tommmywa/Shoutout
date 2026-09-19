import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Mail, Apple, ArrowRight, ShieldCheck } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const { authMode, setAuthMode, loginDemoFan, handleAuthSuccess, navigateBack, playHapticAudio } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

  const isLogin = authMode === 'login';

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    playHapticAudio('tap');
    handleAuthSuccess(emailInput.trim());
  };

  const handleSocialAuth = (provider: string) => {
    playHapticAudio('bloom');
    handleAuthSuccess(`${provider.toLowerCase()}fan@shoutout.fm`);
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
        overflowY: 'auto',
      }}
    >
      <div>
        {/* Top bar with back button */}
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

        {/* Header */}
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            marginBottom: '6px',
          }}
        >
          {isLogin ? 'Welcome back.' : "Let's get you started."}
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
          {isLogin ? 'Sign in to access your shoutouts & recognition.' : 'Create an account to pick your favorite songs and shout out anyone.'}
        </p>

        {/* 1-Tap VIP Demo Login for immediate exploration */}
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            padding: '12px 14px',
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldCheck size={18} color="var(--color-solar-amber)" />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Demo Fan Profile</div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>Marcus Vance • 450 pts</div>
            </div>
          </div>
          <button
            id="btn-login-demo"
            onClick={loginDemoFan}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            1-Tap Demo
          </button>
        </div>

        {/* Social Auth Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => handleSocialAuth('Apple')}
            style={{
              width: '100%',
              backgroundColor: '#14151C',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            <Apple size={18} />
            Continue with Apple
          </button>

          <button
            onClick={() => handleSocialAuth('Google')}
            style={{
              width: '100%',
              backgroundColor: '#14151C',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {!isEmailFormOpen ? (
            <button
              onClick={() => setIsEmailFormOpen(true)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                padding: '14px 20px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
            >
              <Mail size={17} />
              Continue with email
            </button>
          ) : (
            <form onSubmit={handleEmailSubmit} style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    backgroundColor: '#101116',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)')}
                />
              </div>

              {isLogin && (
                <div>
                  <label style={{ display: 'block', fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: '#101116',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)')}
                  />
                </div>
              )}

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 20px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {isLogin ? 'Log in' : 'Continue'}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Mode Switcher */}
      <div style={{ textAlign: 'center', paddingTop: '16px' }}>
        <button
          onClick={() => setAuthMode(isLogin ? 'signup' : 'login')}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'underline' }}>
            {isLogin ? 'Sign up' : 'Log in'}
          </span>
        </button>
      </div>
    </div>
  );
};
