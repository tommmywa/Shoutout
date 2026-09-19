import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft } from 'lucide-react';
import { NameIdentity } from '../types';

export const LeaderboardScreen: React.FC = () => {
  const { nameIdentities, setViewingIdentity, navigateTo, navigateBack, playHapticAudio } = useApp();
  const [periodTab, setPeriodTab] = useState<'today' | 'week' | 'all'>('week');

  const sorted = [...nameIdentities].sort((a, b) => b.totalSocialCapital - a.totalSocialCapital);

  const handleSelectPerson = (p: NameIdentity) => {
    playHapticAudio('tap');
    setViewingIdentity(p);
    navigateTo('recognition_profile');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 10,
          padding: '16px 20px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
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
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)' }}>
          Leaderboard
        </span>
        <div style={{ width: '20px' }} />
      </div>

      <div style={{ padding: '20px 20px 32px' }}>
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          Most recognized
        </h1>

        {/* Period Tabs with White Selection Border */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#101116',
            padding: '4px',
            borderRadius: '12px',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {(['Today', 'This Week', 'All Time'] as const).map((tab) => {
            const tabKey = tab === 'Today' ? 'today' : tab === 'This Week' ? 'week' : 'all';
            const isSelected = periodTab === tabKey;
            return (
              <button
                key={tab}
                onClick={() => {
                  playHapticAudio('tap');
                  setPeriodTab(tabKey);
                }}
                style={{
                  flex: 1,
                  backgroundColor: isSelected ? '#161820' : 'transparent',
                  color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                  border: isSelected ? '1.5px solid #FFFFFF' : 'none',
                  borderRadius: '9px',
                  padding: '8px 10px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Ranked Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sorted.map((person, idx) => {
            const rank = idx + 1;
            const isTop3 = rank <= 3;
            return (
              <div
                key={person.id}
                onClick={() => handleSelectPerson(person)}
                style={{
                  backgroundColor: '#101116',
                  border: isTop3 ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span
                    style={{
                      width: '24px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: rank === 1 ? 'var(--color-solar-amber)' : rank === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                      textAlign: 'center',
                    }}
                  >
                    #{rank}
                  </span>

                  <img
                    src={person.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'}
                    alt={person.displayName}
                    style={{ width: '38px', height: '38px', borderRadius: '9999px', objectFit: 'cover' }}
                  />

                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>
                      {person.displayName}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      {person.disambiguatorTag}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: 'var(--color-solar-amber)',
                    }}
                  >
                    {person.totalSocialCapital} pts
                  </span>
                  <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.4)' }}>
                    {person.shoutoutCount} mentions
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
