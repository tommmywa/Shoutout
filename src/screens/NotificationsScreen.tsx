import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const NotificationsScreen: React.FC = () => {
  const { navigateBack, navigateTo, playHapticAudio } = useApp();

  const notifications = [
    {
      id: 'n1',
      title: 'Your shoutout is ready 🎉',
      body: 'John Smith was recognized in City Boys (Studio Cut).',
      time: '2 hours ago',
      unread: true,
      target: 'published_shoutout' as const,
    },
    {
      id: 'n2',
      title: 'Your shoutout is booked',
      body: "Marcus Vance's shoutout is now with Santan Dave.",
      time: '1 day ago',
      unread: false,
      target: 'shoutout_tracking' as const,
    },
    {
      id: 'n3',
      title: 'Recognition points credited',
      body: '+120 Recognition points added to your balance.',
      time: '3 days ago',
      unread: false,
      target: 'recognition_profile' as const,
    },
  ];

  const handleNotificationClick = (target: 'published_shoutout' | 'shoutout_tracking' | 'recognition_profile') => {
    playHapticAudio('tap');
    navigateTo(target);
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
          Notifications
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
          Updates
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotificationClick(item.target)}
              style={{
                backgroundColor: item.unread ? '#14161F' : '#101116',
                border: item.unread ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: item.unread ? 'var(--color-solar-amber)' : 'transparent',
                    marginTop: '6px',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.4 }}>
                    {item.body}
                  </p>
                  <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px', display: 'block' }}>
                    {item.time}
                  </span>
                </div>
              </div>

              <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" style={{ marginTop: '4px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
