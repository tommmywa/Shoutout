import React from 'react';
import { useApp } from '../context/AppContext';
import { BottomNavTab } from '../types';
import { Home, Compass, Radio, User as UserIcon, LucideIcon } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const tabs: { id: BottomNavTab; label: string; icon: LucideIcon }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'activity', label: 'Activity', icon: Radio },
    { id: 'profile', label: 'Profile', icon: UserIcon },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#0D0E12',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 12px 18px',
        zIndex: 100,
      }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              padding: '6px 14px',
              borderRadius: '8px',
              transition: 'all 0.18s ease',
            }}
          >
            <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} color={isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)'} />
            <span
              style={{
                fontSize: '11px',
                fontWeight: isActive ? 600 : 500,
                letterSpacing: '0.01em',
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
