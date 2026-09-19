import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, User, MapPin, AtSign, ArrowRight } from 'lucide-react';

export const AddPersonScreen: React.FC = () => {
  const { addNameIdentity, navigateTo, navigateBack, playHapticAudio } = useApp();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    playHapticAudio('bloom');
    addNameIdentity(name.trim(), username.trim(), location.trim());
    navigateTo('tier_select');
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

        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '6px',
          }}
        >
          Add someone
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '24px' }}>
          Tell us who you'd like to shout out.
        </p>

        <form id="form-add-person" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Name Field (Required) */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '6px' }}>
              Full name <span style={{ color: 'var(--color-solar-amber)' }}>*</span>
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '0 12px',
              }}
            >
              <User size={18} color="rgba(255, 255, 255, 0.4)" />
              <input
                id="input-person-name"
                type="text"
                placeholder="e.g. Marcus Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
          </div>

          {/* Username Field (Optional) */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '6px' }}>
              Handle or username <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 400 }}>(optional)</span>
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '0 12px',
              }}
            >
              <AtSign size={18} color="rgba(255, 255, 255, 0.4)" />
              <input
                id="input-person-username"
                type="text"
                placeholder="e.g. marcus_ldn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
          </div>

          {/* Location Field (Optional) */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '6px' }}>
              City or location <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 400 }}>(optional)</span>
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#101116',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '0 12px',
              }}
            >
              <MapPin size={18} color="rgba(255, 255, 255, 0.4)" />
              <input
                id="input-person-location"
                type="text"
                placeholder="e.g. London, UK"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <div>
        <button
          id="btn-add-person-continue"
          type="submit"
          form="form-add-person"
          disabled={!name.trim()}
          style={{
            width: '100%',
            backgroundColor: name.trim() ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
            color: name.trim() ? '#000000' : 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            borderRadius: '9999px',
            padding: '16px 24px',
            fontSize: '15px',
            fontWeight: 700,
            cursor: name.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
