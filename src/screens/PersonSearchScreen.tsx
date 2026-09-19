import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Search, UserPlus, ChevronRight } from 'lucide-react';
import { NameIdentity } from '../types';

export const PersonSearchScreen: React.FC = () => {
  const {
    nameIdentities,
    setSelectedRecipient,
    navigateTo,
    navigateBack,
    playHapticAudio,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const filtered = nameIdentities.filter(
    (p) =>
      p.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.disambiguatorTag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPerson = (person: NameIdentity) => {
    playHapticAudio('tap');
    setSelectedRecipient(person);
    navigateTo('person_disambiguate');
  };

  const handleAddNewPerson = () => {
    playHapticAudio('tap');
    navigateTo('add_person');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#000000',
        padding: '16px 20px 24px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        overflowY: 'auto',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FFFFFF' }}>
              Person
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Tier
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Personalize
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)' }}>
              Review
            </span>
          </div>
          <div style={{ width: '20px' }} />
        </div>

        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          Who should we shout out?
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '18px' }}>
          Search by name or username.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#101116',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            padding: '0 12px',
            marginBottom: '16px',
          }}
        >
          <Search size={18} color="rgba(255, 255, 255, 0.4)" />
          <input
            id="input-person-search"
            type="text"
            placeholder="Search for someone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              padding: '14px 10px',
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
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {filtered.map((person) => (
            <div
              key={person.id}
              onClick={() => handleSelectPerson(person)}
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
                  src={person.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'}
                  alt={person.displayName}
                  style={{ width: '42px', height: '42px', borderRadius: '9999px', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                    {person.displayName}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    {person.disambiguatorTag}
                  </div>
                </div>
              </div>

              <ChevronRight size={16} color="rgba(255, 255, 255, 0.4)" />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#101116',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
            Can't find them?
          </h4>
          <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.4 }}>
            Add the person you're looking for and we'll create their recognition profile.
          </p>
        </div>

        <button
          id="btn-add-person"
          onClick={handleAddNewPerson}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '9999px',
            padding: '12px 16px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <UserPlus size={16} />
          Add person
        </button>
      </div>
    </div>
  );
};
