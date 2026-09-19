import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { MOCK_TIERS } from '../data/mockData';

export const SongDetailScreen: React.FC = () => {
  const { selectedSong, navigateTo, navigateBack, playHapticAudio } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(25);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!selectedSong) return null;

  const togglePlay = () => {
    playHapticAudio('bloom');
    setIsPlaying(!isPlaying);
  };

  const handleGetShoutout = () => {
    playHapticAudio('tap');
    navigateTo('person_search');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
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
            Song Preview
          </span>
          <div style={{ width: '20px' }} />
        </div>

        <div style={{ padding: '20px 20px 100px' }}>
          {/* Large Artwork */}
          <div
            style={{
              width: '100%',
              maxWidth: '280px',
              aspectRatio: '1/1',
              margin: '0 auto 20px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(0,0,0,0.8)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <img
              src={selectedSong.artworkUrl}
              alt={selectedSong.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Song Info */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}
            >
              {selectedSong.title}
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)' }}>
              {selectedSong.artistName}
            </p>
          </div>

          {/* Audio Player Component with Waveform */}
          <div
            style={{
              backgroundColor: '#101116',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                id="btn-play-pause-song"
                onClick={togglePlay}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
                }}
              >
                {isPlaying ? <Pause size={20} fill="#000000" /> : <Play size={20} fill="#000000" style={{ marginLeft: '2px' }} />}
              </button>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '6px' }}>
                  <span>{isPlaying ? '0:42' : '0:00'}</span>
                  <span>{selectedSong.duration}</span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${playbackProgress}%`,
                      backgroundColor: '#FFFFFF',
                      transition: 'width 0.2s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Available Shoutout Tiers Preview */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                Available Shoutout Tiers
              </h3>
              <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}>
                4 Tiers
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {MOCK_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  style={{
                    backgroundColor: '#101116',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>{tier.name}</span>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-solar-amber)' }}>
                      ${tier.price}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.3 }}>
                    {tier.headline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA per Section 10 */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          background: 'rgba(10, 11, 14, 0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 20px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          zIndex: 20,
        }}
      >
        <div>
          <span style={{ display: 'block', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
            Studio master slot
          </span>
          <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
            From ${selectedSong.startingPrice}
          </span>
        </div>

        <button
          id="btn-get-shoutout-cta"
          onClick={handleGetShoutout}
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: 'none',
            borderRadius: '9999px',
            padding: '14px 20px',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
          }}
        >
          Get a shoutout
        </button>
      </div>
    </div>
  );
};
