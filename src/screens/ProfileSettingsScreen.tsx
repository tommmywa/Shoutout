import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { Sparkles, Radio, Trophy, Bell, LogOut, ChevronRight, User } from 'lucide-react';

export const ProfileSettingsScreen: React.FC = () => {
  const { user, fanProfile, logout, navigateTo, playHapticAudio } = useApp();

  const handleOpenActivity = () => {
    playHapticAudio('tap');
    navigateTo('activity');
  };

  const handleOpenLeaderboard = () => {
    playHapticAudio('tap');
    navigateTo('leaderboard');
  };

  const handleOpenNotifications = () => {
    playHapticAudio('tap');
    navigateTo('notifications');
  };

  const points = fanProfile?.pointsBalance || 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 18px 24px',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}
        >
          Profile
        </h1>

        {/* User Card */}
        <div
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '9999px',
              backgroundColor: '#161820',
              border: '1.5px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <User size={24} color="#FFFFFF" />
          </div>

          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
              {user?.displayName || 'Music Fan'}
            </h2>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
              {user?.email || '+44 7911 123456'}
            </p>
          </div>
        </div>

        {/* Recognition Balance Card */}
        <div
          style={{
            backgroundColor: '#161820',
            border: '1.5px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Recognition Balance
            </span>
            <div style={{ fontSize: '24px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--color-solar-amber)', marginTop: '2px' }}>
              {points} Points
            </div>
          </div>

          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 156, 10, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={20} color="var(--color-solar-amber)" />
          </div>
        </div>

        {/* Action Menu List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
          <div
            onClick={handleOpenActivity}
            style={{
              backgroundColor: '#101116',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Radio size={18} color="#FFFFFF" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>My shoutouts</span>
            </div>
            <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" />
          </div>

          <div
            onClick={handleOpenLeaderboard}
            style={{
              backgroundColor: '#101116',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Trophy size={18} color="#FFFFFF" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Leaderboard</span>
            </div>
            <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" />
          </div>

          <div
            onClick={handleOpenNotifications}
            style={{
              backgroundColor: '#101116',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Bell size={18} color="#FFFFFF" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Notifications</span>
            </div>
            <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" />
          </div>
        </div>

        {/* Log Out Button */}
        <div>
          <button
            id="btn-logout"
            onClick={logout}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
