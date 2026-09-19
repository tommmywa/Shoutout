import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Song } from '../types';

export const ArtistProfileScreen: React.FC = () => {
  const { selectedArtist, songs, setSelectedSong, navigateTo, navigateBack, playHapticAudio } = useApp();

  if (!selectedArtist) return null;

  const artistSongs = songs.filter((s) => s.artistId === selectedArtist.id);

  const handleSelectSong = (song: Song) => {
    playHapticAudio('tap');
    setSelectedSong(song);
    navigateTo('song_detail');
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
      {/* Top Header with Back Action */}
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
          Artist Profile
        </span>
        <div style={{ width: '20px' }} />
      </div>

      <div style={{ padding: '20px 20px 32px' }}>
        {/* Artist Header Info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <img
            src={selectedArtist.avatarUrl}
            alt={selectedArtist.name}
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '9999px',
              objectFit: 'cover',
              border: '2px solid #FFFFFF',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              marginBottom: '12px',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              {selectedArtist.name}
            </h1>
            <CheckCircle2 size={18} color="#FFFFFF" />
          </div>

          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '10px' }}>
            {selectedArtist.handle}
          </span>

          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.45, maxWidth: '320px' }}>
            {selectedArtist.bio}
          </p>

          {/* Stats Badges */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <div
              style={{
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '8px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                {selectedArtist.shoutoutsCompleted}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>Shoutouts delivered</div>
            </div>

            <div
              style={{
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '8px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-solar-amber)' }}>
                ${selectedArtist.startingPrice}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>Starting price</div>
            </div>
          </div>
        </div>

        {/* Section: Available for shoutouts */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF' }}>
              Available for shoutouts
            </h2>
            <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              {artistSongs.length} songs
            </span>
          </div>

          {artistSongs.length === 0 ? (
            <div
              style={{
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '32px 16px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                No shoutouts available yet
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
                This artist hasn't enabled shoutouts for any songs.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {artistSongs.map((song) => (
                <div
                  key={song.id}
                  onClick={() => handleSelectSong(song)}
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
                      src={song.artworkUrl}
                      alt={song.title}
                      style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                    <div>
                      <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{song.title}</h3>
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                        Shoutout from ${song.startingPrice} • {song.genre}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowRight size={15} color="#FFFFFF" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
