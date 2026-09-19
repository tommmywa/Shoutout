import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

export const RecognitionProfileScreen: React.FC = () => {
  const { viewingIdentity, navigateBack } = useApp();

  if (!viewingIdentity) return null;

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
      {/* Sticky Header */}
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
          Recognition Profile
        </span>
        <div style={{ width: '20px' }} />
      </div>

      <div style={{ padding: '20px 20px 32px' }}>
        {/* Recipient Profile Info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <img
            src={
              viewingIdentity.avatarUrl ||
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
            }
            alt={viewingIdentity.displayName}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '9999px',
              objectFit: 'cover',
              border: '2px solid #FFFFFF',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              marginBottom: '12px',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>
              {viewingIdentity.displayName}
            </h1>
            <CheckCircle2 size={18} color="#FFFFFF" />
          </div>

          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '14px' }}>
            {viewingIdentity.disambiguatorTag}
          </span>

          <div
            style={{
              backgroundColor: '#161820',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '9999px',
              padding: '6px 16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-solar-amber)',
              fontWeight: 800,
              fontSize: '15px',
            }}
          >
            <Sparkles size={16} />
            <span>{viewingIdentity.totalSocialCapital || 1240} Recognition</span>
          </div>

          {/* Stats Row per spec: 34 Mentions, 12 Songs, 8 Artists */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', width: '100%' }}>
            <div
              style={{
                flex: 1,
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '12px 8px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                {viewingIdentity.shoutoutCount || 34}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                Mentions
              </div>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '12px 8px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                {viewingIdentity.songCount || 12}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                Songs
              </div>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '12px 8px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                {viewingIdentity.artistCount || 8}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                Artists
              </div>
            </div>
          </div>
        </div>

        {/* Recent Recognition Moments */}
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
            Recent recognition
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                song: 'City Boys (Studio Cut)',
                artist: 'Burna Boy',
                pts: '+120',
                date: 'Yesterday',
              },
              {
                song: 'Midnight in Shoreditch',
                artist: 'Santan Dave',
                pts: '+180',
                date: 'Last week',
              },
              {
                song: 'Lonely At The Top',
                artist: 'Asake',
                pts: '+120',
                date: '2 weeks ago',
              },
            ].map((moment, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#101116',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{moment.song}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    {moment.artist} • {moment.date}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    color: 'var(--color-solar-amber)',
                  }}
                >
                  {moment.pts}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
