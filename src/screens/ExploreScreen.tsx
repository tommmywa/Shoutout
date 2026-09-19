import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BottomNav } from '../components/BottomNav';
import { Search, X, CheckCircle2, User } from 'lucide-react';
import { Artist, Song, NameIdentity } from '../types';

export const ExploreScreen: React.FC = () => {
  const {
    artists,
    songs,
    nameIdentities,
    setSelectedArtist,
    setSelectedSong,
    setViewingIdentity,
    navigateTo,
    playHapticAudio,
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Artists' | 'Songs' | 'Shoutouts'>('All');

  const filteredArtists = artists.filter(
    (a) => a.name.toLowerCase().includes(query.toLowerCase()) || a.handle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSongs = songs.filter(
    (s) => s.title.toLowerCase().includes(query.toLowerCase()) || s.artistName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPeople = nameIdentities.filter(
    (p) => p.displayName.toLowerCase().includes(query.toLowerCase()) || p.disambiguatorTag.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectArtist = (a: Artist) => {
    playHapticAudio('tap');
    setSelectedArtist(a);
    navigateTo('artist_profile');
  };

  const handleSelectSong = (s: Song) => {
    playHapticAudio('tap');
    setSelectedSong(s);
    navigateTo('song_detail');
  };

  const handleSelectPerson = (p: NameIdentity) => {
    playHapticAudio('tap');
    setViewingIdentity(p);
    navigateTo('recognition_profile');
  };

  const hasAnyResults =
    (activeFilter === 'All' || activeFilter === 'Artists' ? filteredArtists.length > 0 : false) ||
    (activeFilter === 'All' || activeFilter === 'Songs' ? filteredSongs.length > 0 : false) ||
    (activeFilter === 'All' || activeFilter === 'Shoutouts' ? filteredPeople.length > 0 : false);

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
            marginBottom: '16px',
          }}
        >
          Explore
        </h1>

        {/* Search Field with White Focus Border */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            padding: '0 12px',
            marginBottom: '14px',
          }}
        >
          <Search size={18} color="rgba(255, 255, 255, 0.4)" />
          <input
            id="input-explore-search"
            type="text"
            placeholder="Search artists, songs or people"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              padding: '12px 10px',
              color: '#FFFFFF',
              fontSize: '14px',
            }}
            onFocus={(e) => {
              if (e.target.parentElement) e.target.parentElement.style.borderColor = '#FFFFFF';
            }}
            onBlur={(e) => {
              if (e.target.parentElement) e.target.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Chips with White Selection Border */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto' }}>
          {(['All', 'Artists', 'Songs', 'Shoutouts'] as const).map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  playHapticAudio('tap');
                  setActiveFilter(filter);
                }}
                style={{
                  backgroundColor: isSelected ? '#161820' : '#101116',
                  color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                  border: isSelected ? '1.5px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Result Groups */}
        {!hasAnyResults ? (
          <div
            style={{
              padding: '48px 20px',
              textAlign: 'center',
              backgroundColor: '#101116',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              Nothing found
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
              Try a different artist, song or name.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Artists Group */}
            {(activeFilter === 'All' || activeFilter === 'Artists') && filteredArtists.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  Artists
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {filteredArtists.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => handleSelectArtist(a)}
                      style={{
                        backgroundColor: '#101116',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                          src={a.avatarUrl}
                          alt={a.name}
                          style={{ width: '40px', height: '40px', borderRadius: '9999px', objectFit: 'cover' }}
                        />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{a.name}</span>
                            <CheckCircle2 size={13} color="#FFFFFF" />
                          </div>
                          <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>{a.handle}</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        from ${a.startingPrice}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Songs Group */}
            {(activeFilter === 'All' || activeFilter === 'Songs') && filteredSongs.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  Songs
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {filteredSongs.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => handleSelectSong(s)}
                      style={{
                        backgroundColor: '#101116',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '10px 14px',
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
                          style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <div>
                          <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>{s.title}</h4>
                          <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                            {s.artistName}
                          </span>
                        </div>
                      </div>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#FFFFFF' }}>
                        ${s.startingPrice}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* People Group (Disambiguated recipients) */}
            {(activeFilter === 'All' || activeFilter === 'Shoutouts') && filteredPeople.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  People Recognized
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {filteredPeople.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectPerson(p)}
                      style={{
                        backgroundColor: '#101116',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '9999px',
                            backgroundColor: '#161820',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <User size={16} color="#FFFFFF" />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                            {p.displayName}
                          </div>
                          <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                            {p.disambiguatorTag}
                          </span>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-solar-amber)',
                        }}
                      >
                        {p.totalSocialCapital} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};
