import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { Sparkles, CheckCircle2, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Song, Artist } from '../types';

export const FanHomeScreen: React.FC = () => {
  const {
    user,
    artists,
    songs,
    setSelectedArtist,
    setSelectedSong,
    navigateTo,
    playHapticAudio,
  } = useApp();

  const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'there';

  const handleSelectSong = (song: Song) => {
    playHapticAudio('tap');
    setSelectedSong(song);
    navigateTo('song_detail');
  };

  const handleSelectArtist = (artist: Artist) => {
    playHapticAudio('tap');
    setSelectedArtist(artist);
    navigateTo('artist_profile');
  };

  const handleOpenPublished = () => {
    playHapticAudio('bloom');
    navigateTo('published_shoutout');
  };

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
      {/* Scrollable Feed Container */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 18px 24px',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header & Greeting */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'rgba(255, 255, 255, 0.45)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Studio Recognition
            </span>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginTop: '2px',
              }}
            >
              Good to see you, {firstName}
            </h1>
          </div>

          <button
            onClick={() => navigateTo('notifications')}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9999px',
              backgroundColor: '#14151C',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFFFFF',
            }}
          >
            <Sparkles size={16} color="var(--color-solar-amber)" />
          </button>
        </div>

        {/* Hero Spotlight: Featured shoutout opportunity */}
        <div
          onClick={() => handleSelectSong(songs[0])}
          style={{
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '16px',
            marginBottom: '28px',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <img
              src={songs[0].artworkUrl}
              alt={songs[0].title}
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-solar-amber)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Open Studio Slots
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: '2px 0 4px' }}>
                {songs[0].title}
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)' }}>
                {songs[0].artistName} • from ${songs[0].startingPrice}
              </p>
            </div>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ArrowRight size={16} strokeWidth={2.4} />
            </div>
          </div>
        </div>

        {/* Section 1: Featured Artists */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Featured artists
            </h2>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>Verified Studio</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '6px',
              scrollbarWidth: 'none',
            }}
          >
            {artists.map((art) => (
              <div
                key={art.id}
                onClick={() => handleSelectArtist(art)}
                style={{
                  minWidth: '130px',
                  backgroundColor: '#101116',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <img
                  src={art.avatarUrl}
                  alt={art.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '9999px',
                    objectFit: 'cover',
                    marginBottom: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>{art.name}</span>
                  <CheckCircle2 size={12} color="#FFFFFF" />
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                  From ${art.startingPrice}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Trending Songs */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Trending songs
            </h2>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>4 available</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {songs.map((s) => (
              <div
                key={s.id}
                onClick={() => handleSelectSong(s)}
                style={{
                  backgroundColor: '#101116',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={s.artworkUrl}
                    alt={s.title}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{s.title}</h4>
                    <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      {s.artistName} • {s.genre}
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                    }}
                  >
                    from ${s.startingPrice}
                  </span>
                  <span style={{ fontSize: '10px', color: 'var(--color-solar-amber)' }}>Open slots</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Popular shoutouts / Recognition Highlights */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Popular shoutouts
            </h2>
            <button
              onClick={handleOpenPublished}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
              }}
            >
              Play demo <ChevronRight size={14} />
            </button>
          </div>

          <div
            onClick={handleOpenPublished}
            style={{
              backgroundColor: '#121319',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '14px',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Play size={18} fill="#000000" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>John Smith</span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-solar-amber)',
                      background: 'rgba(255, 156, 10, 0.12)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    +120 Recognition
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                  Burna Boy mentioned John Smith in City Boys (Studio Cut)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Bottom Navigation Shell */}
      <BottomNav />
    </div>
  );
};
