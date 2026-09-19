import React, { useState, useEffect } from 'react';
import { useApp } from './context/AppContext';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { HowItWorksScreen } from './screens/HowItWorksScreen';
import { AuthScreen } from './screens/AuthScreen';
import { FanHomeScreen } from './screens/FanHomeScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { ArtistProfileScreen } from './screens/ArtistProfileScreen';
import { SongDetailScreen } from './screens/SongDetailScreen';
import { PersonSearchScreen } from './screens/PersonSearchScreen';
import { PersonDisambiguateModal } from './screens/PersonDisambiguateModal';
import { AddPersonScreen } from './screens/AddPersonScreen';
import { TierSelectionScreen } from './screens/TierSelectionScreen';
import { SilverPlacementScreen } from './screens/SilverPlacementScreen';
import { GoldStyleScreen } from './screens/GoldStyleScreen';
import { PlatinumInstructionsScreen } from './screens/PlatinumInstructionsScreen';
import { PlatinumVoiceRecorderScreen } from './screens/PlatinumVoiceRecorderScreen';
import { OrderReviewScreen } from './screens/OrderReviewScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { PaymentProcessingScreen } from './screens/PaymentProcessingScreen';
import { PurchaseSuccessScreen } from './screens/PurchaseSuccessScreen';
import { ActivityScreen } from './screens/ActivityScreen';
import { ShoutoutTrackingScreen } from './screens/ShoutoutTrackingScreen';
import { PublishedShoutoutScreen } from './screens/PublishedShoutoutScreen';
import { RecognitionProfileScreen } from './screens/RecognitionProfileScreen';
import { LeaderboardScreen } from './screens/LeaderboardScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileSettingsScreen } from './screens/ProfileSettingsScreen';
import { Wifi, Battery, Volume2, Maximize2, Minimize2 } from 'lucide-react';

export const App: React.FC = () => {
  const { currentScreen } = useApp();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const hours = d.getHours();
      const mins = d.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'welcome':
        return <WelcomeScreen />;
      case 'how_it_works':
        return <HowItWorksScreen />;
      case 'auth':
        return <AuthScreen />;
      case 'fan_home':
        return <FanHomeScreen />;
      case 'explore':
        return <ExploreScreen />;
      case 'artist_profile':
        return <ArtistProfileScreen />;
      case 'song_detail':
        return <SongDetailScreen />;
      case 'person_search':
        return <PersonSearchScreen />;
      case 'person_disambiguate':
        return <PersonDisambiguateModal />;
      case 'add_person':
        return <AddPersonScreen />;
      case 'tier_select':
        return <TierSelectionScreen />;
      case 'silver_placement':
        return <SilverPlacementScreen />;
      case 'gold_style':
        return <GoldStyleScreen />;
      case 'platinum_instructions':
        return <PlatinumInstructionsScreen />;
      case 'platinum_voice_recorder':
        return <PlatinumVoiceRecorderScreen />;
      case 'order_review':
        return <OrderReviewScreen />;
      case 'payment':
        return <PaymentScreen />;
      case 'payment_processing':
        return <PaymentProcessingScreen />;
      case 'purchase_success':
        return <PurchaseSuccessScreen />;
      case 'activity':
        return <ActivityScreen />;
      case 'shoutout_tracking':
        return <ShoutoutTrackingScreen />;
      case 'published_shoutout':
        return <PublishedShoutoutScreen />;
      case 'recognition_profile':
        return <RecognitionProfileScreen />;
      case 'leaderboard':
        return <LeaderboardScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'profile_settings':
        return <ProfileSettingsScreen />;
      default:
        return <FanHomeScreen />;
    }
  };

  return (
    <div className={`device-environment ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      {/* Desktop Header Info Bar */}
      <header className="device-header-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="device-header-tag">⚡ SHOUTOUT®</span>
          <span style={{ color: 'var(--text-tertiary)' }}>Phase 1 Fan Experience</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-solar-amber)',
            }}
          >
            Screen: {currentScreen.toUpperCase()}
          </span>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: '#FFF',
              padding: '4px 8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
            }}
            title={isFullscreen ? 'Exit Fullscreen' : 'Expand to Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            {isFullscreen ? 'Framed View' : 'Full Screen'}
          </button>
        </div>
      </header>

      {/* Mobile Device Frame */}
      <main
        className="device-frame"
        style={
          isFullscreen
            ? {
                maxWidth: '100%',
                height: '100vh',
                maxHeight: '100vh',
                borderRadius: 0,
                border: 'none',
              }
            : undefined
        }
      >
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="dynamic-island-sensor" />
          <div className="dynamic-island-lens" />
        </div>

        {/* Mobile Status Bar */}
        <div className="status-bar">
          <span>{currentTime}</span>
          <div className="status-bar-icons">
            <Volume2 size={12} color="var(--color-solar-amber)" />
            <Wifi size={13} />
            <Battery size={15} />
          </div>
        </div>

        {/* Viewport Screen Area */}
        <div className="screen-viewport">{renderCurrentScreen()}</div>

        {/* Home Indicator */}
        <div className="home-indicator-bar">
          <div className="home-indicator" />
        </div>
      </main>
    </div>
  );
};
