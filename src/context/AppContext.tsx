import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  FanProfile,
  NameIdentity,
  Artist,
  Song,
  TierLevel,
  ShoutoutOrder,
  FanScreenId,
  BottomNavTab,
} from '../types';
import {
  MOCK_ARTISTS,
  MOCK_SONGS,
  MOCK_NAME_IDENTITIES,
  INITIAL_ORDERS,
  MOCK_TIERS,
} from '../data/mockData';

interface AppContextType {
  currentScreen: FanScreenId;
  setCurrentScreen: (screen: FanScreenId) => void;
  screenHistory: FanScreenId[];
  navigateTo: (screen: FanScreenId) => void;
  navigateBack: () => void;
  activeTab: BottomNavTab;
  setActiveTab: (tab: BottomNavTab) => void;

  user: User | null;
  fanProfile: FanProfile | null;
  nameIdentity: NameIdentity | null;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;

  // Audio / Tactile Feedback
  playHapticAudio: (type?: 'tap' | 'bloom' | 'chime' | 'success' | 'record') => void;

  // Auth
  authMode: 'signup' | 'login';
  setAuthMode: (mode: 'signup' | 'login') => void;
  loginDemoFan: () => void;
  handleAuthSuccess: (emailOrPhone: string) => void;
  logout: () => void;

  // Discovery
  artists: Artist[];
  songs: Song[];
  selectedArtist: Artist | null;
  setSelectedArtist: (artist: Artist | null) => void;
  selectedSong: Song | null;
  setSelectedSong: (song: Song | null) => void;

  // Shoutout Draft Flow
  nameIdentities: NameIdentity[];
  selectedRecipient: NameIdentity | null;
  setSelectedRecipient: (recipient: NameIdentity | null) => void;
  addNameIdentity: (name: string, username?: string, location?: string) => NameIdentity;

  selectedTier: TierLevel;
  setSelectedTier: (tier: TierLevel) => void;
  selectedPlacement: 'Intro' | 'Verse' | 'Outro';
  setSelectedPlacement: (placement: 'Intro' | 'Verse' | 'Outro') => void;
  selectedStyle: 'Hype' | 'Chill' | 'Comedic';
  setSelectedStyle: (style: 'Hype' | 'Chill' | 'Comedic') => void;
  customInstructions: string;
  setCustomInstructions: (inst: string) => void;
  voiceNoteDuration: number;
  setVoiceNoteDuration: (dur: number) => void;
  voiceNoteBlobUrl: string | null;
  setVoiceNoteBlobUrl: (url: string | null) => void;

  selectedPaymentMethod: 'apple_pay' | 'credit_card' | 'recognition_points';
  setSelectedPaymentMethod: (pm: 'apple_pay' | 'credit_card' | 'recognition_points') => void;

  // Orders & Activity
  orders: ShoutoutOrder[];
  selectedOrder: ShoutoutOrder | null;
  setSelectedOrder: (order: ShoutoutOrder | null) => void;
  submitOrder: () => void;
  simulatePublishOrder: (orderId: string) => void;

  // Post-purchase & Recognition
  viewingIdentity: NameIdentity | null;
  setViewingIdentity: (identity: NameIdentity | null) => void;
}

const STORAGE_KEY = 'shoutout_fan_state_v2';

const AppContext = createContext<AppContextType | undefined>(undefined);

// Web Audio API synthesizer for rich tactile haptic feedback without external sound files
const playSynthesizedTone = (type: 'tap' | 'bloom' | 'chime' | 'success' | 'record' = 'tap') => {
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (type === 'tap') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'bloom') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(196, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(392, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'record') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'chime' || type === 'success') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.14, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.28);
      });
    }
  } catch {
    // Fallback if audio cannot play
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<FanScreenId>('welcome');
  const [screenHistory, setScreenHistory] = useState<FanScreenId[]>(['welcome']);
  const [activeTab, setActiveTabState] = useState<BottomNavTab>('home');

  const [user, setUser] = useState<User | null>({
    id: 'usr_fan_001',
    email: 'marcus.v@example.com',
    phone: '+44 7911 123456',
    role: 'fan',
    displayName: 'Marcus Vance',
    createdAt: new Date().toISOString(),
  });

  const [fanProfile, setFanProfile] = useState<FanProfile | null>({
    userId: 'usr_fan_001',
    pointsBalance: 450,
    preferredGenres: ['Hip-Hop', 'Afrobeats'],
    claimedIdentityId: 'nid_marcus_vance',
  });

  const [nameIdentity, setNameIdentity] = useState<NameIdentity | null>(MOCK_NAME_IDENTITIES[2]);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  // Discovery state
  const [artists] = useState<Artist[]>(MOCK_ARTISTS);
  const [songs] = useState<Song[]>(MOCK_SONGS);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(MOCK_ARTISTS[0]);
  const [selectedSong, setSelectedSong] = useState<Song | null>(MOCK_SONGS[0]);

  // Identities
  const [nameIdentities, setNameIdentities] = useState<NameIdentity[]>(MOCK_NAME_IDENTITIES);
  const [selectedRecipient, setSelectedRecipient] = useState<NameIdentity | null>(MOCK_NAME_IDENTITIES[0]);

  // Shoutout Draft State
  const [selectedTier, setSelectedTier] = useState<TierLevel>('silver');
  const [selectedPlacement, setSelectedPlacement] = useState<'Intro' | 'Verse' | 'Outro'>('Intro');
  const [selectedStyle, setSelectedStyle] = useState<'Hype' | 'Chill' | 'Comedic'>('Hype');
  const [customInstructions, setCustomInstructions] = useState<string>('Make it lively and mention our graduation year.');
  const [voiceNoteDuration, setVoiceNoteDuration] = useState<number>(0);
  const [voiceNoteBlobUrl, setVoiceNoteBlobUrl] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    'apple_pay' | 'credit_card' | 'recognition_points'
  >('apple_pay');

  // Orders
  const [orders, setOrders] = useState<ShoutoutOrder[]>(INITIAL_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<ShoutoutOrder | null>(INITIAL_ORDERS[0]);
  const [viewingIdentity, setViewingIdentity] = useState<NameIdentity | null>(MOCK_NAME_IDENTITIES[0]);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.currentScreen) setCurrentScreen(parsed.currentScreen);
        if (parsed.activeTab) setActiveTabState(parsed.activeTab);
        if (parsed.orders) setOrders(parsed.orders);
        if (parsed.user) setUser(parsed.user);
        if (parsed.fanProfile) setFanProfile(parsed.fanProfile);
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentScreen, activeTab, orders, user, fanProfile })
    );
  }, [currentScreen, activeTab, orders, user, fanProfile]);

  const playHapticAudio = (type: 'tap' | 'bloom' | 'chime' | 'success' | 'record' = 'tap') => {
    playSynthesizedTone(type);
  };

  const navigateTo = (screen: FanScreenId) => {
    playHapticAudio('tap');
    setScreenHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const navigateBack = () => {
    playHapticAudio('tap');
    if (screenHistory.length > 1) {
      const newHistory = [...screenHistory];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setScreenHistory(newHistory);
      setCurrentScreen(prevScreen);
    } else {
      // Fallback
      if (['explore', 'activity', 'profile_settings'].includes(currentScreen)) {
        setActiveTab('home');
      } else {
        setCurrentScreen('fan_home');
      }
    }
  };

  const setActiveTab = (tab: BottomNavTab) => {
    playHapticAudio('tap');
    setActiveTabState(tab);
    if (tab === 'home') {
      setCurrentScreen('fan_home');
      setScreenHistory(['fan_home']);
    } else if (tab === 'explore') {
      setCurrentScreen('explore');
      setScreenHistory(['explore']);
    } else if (tab === 'activity') {
      setCurrentScreen('activity');
      setScreenHistory(['activity']);
    } else if (tab === 'profile') {
      setCurrentScreen('profile_settings');
      setScreenHistory(['profile_settings']);
    }
  };

  const loginDemoFan = () => {
    const demoUser: User = {
      id: 'usr_fan_001',
      email: 'marcus.v@example.com',
      phone: '+44 7911 123456',
      role: 'fan',
      displayName: 'Marcus Vance',
      createdAt: new Date().toISOString(),
    };
    setUser(demoUser);
    setFanProfile({
      userId: demoUser.id,
      pointsBalance: 450,
      preferredGenres: ['Hip-Hop', 'Afrobeats'],
      claimedIdentityId: 'nid_marcus_vance',
    });
    setNameIdentity(MOCK_NAME_IDENTITIES[2]);
    playHapticAudio('bloom');
    setActiveTab('home');
  };

  const handleAuthSuccess = (emailOrPhone: string) => {
    const isEmail = emailOrPhone.includes('@');
    const newUser: User = {
      id: `usr_fan_${Math.floor(1000 + Math.random() * 9000)}`,
      email: isEmail ? emailOrPhone : '',
      phone: !isEmail ? emailOrPhone : '',
      role: 'fan',
      displayName: isEmail ? emailOrPhone.split('@')[0] : 'Music Fan',
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    setFanProfile({
      userId: newUser.id,
      pointsBalance: 100,
      preferredGenres: ['Hip-Hop', 'Afrobeats'],
    });
    playHapticAudio('success');
    setActiveTab('home');
  };

  const logout = () => {
    playHapticAudio('tap');
    setUser(null);
    setFanProfile(null);
    setNameIdentity(null);
    setCurrentScreen('welcome');
    setScreenHistory(['welcome']);
  };

  const addNameIdentity = (name: string, username?: string, location?: string): NameIdentity => {
    const tag = username
      ? `@${username.replace('@', '')}${location ? ` · ${location}` : ''}`
      : `@${name.toLowerCase().replace(/\s+/g, '_')}${location ? ` · ${location}` : ''}`;

    const newId: NameIdentity = {
      id: `nid_${Date.now()}`,
      displayName: name.trim(),
      disambiguatorTag: tag,
      username: username ? username.replace('@', '') : undefined,
      location: location?.trim() || undefined,
      verificationStatus: 'unclaimed',
      creatorId: user?.id || 'usr_guest',
      createdAt: new Date().toISOString(),
      totalSocialCapital: 0,
      shoutoutCount: 0,
      songCount: 0,
      artistCount: 0,
    };

    setNameIdentities((prev) => [newId, ...prev]);
    setSelectedRecipient(newId);
    playHapticAudio('chime');
    return newId;
  };

  const submitOrder = () => {
    if (!selectedSong || !selectedRecipient) return;

    const tierObj = MOCK_TIERS.find((t) => t.id === selectedTier);
    const price = tierObj ? tierObj.price : 49;

    const newOrder: ShoutoutOrder = {
      id: `ord_${Date.now()}`,
      songId: selectedSong.id,
      songTitle: selectedSong.title,
      artistId: selectedSong.artistId,
      artistName: selectedSong.artistName,
      artworkUrl: selectedSong.artworkUrl,
      buyerUserId: user?.id || 'usr_fan_001',
      recipientIdentity: selectedRecipient,
      tier: selectedTier,
      tierPrice: price,
      placement: selectedTier === 'silver' ? selectedPlacement : undefined,
      style: selectedTier === 'gold' ? selectedStyle : undefined,
      instructions: selectedTier === 'platinum' ? customInstructions : undefined,
      voiceNoteDuration: selectedTier === 'platinum' && voiceNoteDuration > 0 ? voiceNoteDuration : undefined,
      paymentMethod: selectedPaymentMethod,
      paymentStatus: 'succeeded',
      fulfillmentStatus: 'request_received',
      recognitionPointsAwarded: selectedTier === 'platinum' ? 250 : selectedTier === 'gold' ? 180 : 120,
      createdAt: new Date().toISOString(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setSelectedOrder(newOrder);

    // If paid with points, deduct points
    if (selectedPaymentMethod === 'recognition_points' && fanProfile) {
      setFanProfile({
        ...fanProfile,
        pointsBalance: Math.max(0, fanProfile.pointsBalance - price),
      });
    }

    playHapticAudio('success');
    navigateTo('purchase_success');
  };

  const simulatePublishOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          return {
            ...ord,
            fulfillmentStatus: 'published',
            publishedAt: new Date().toISOString(),
            shoutoutTimestampSec: 12,
          };
        }
        return ord;
      })
    );

    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({
        ...selectedOrder,
        fulfillmentStatus: 'published',
        publishedAt: new Date().toISOString(),
        shoutoutTimestampSec: 12,
      });
    }

    playHapticAudio('chime');
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        screenHistory,
        navigateTo,
        navigateBack,
        activeTab,
        setActiveTab,
        user,
        fanProfile,
        nameIdentity,
        notificationsEnabled,
        setNotificationsEnabled,
        playHapticAudio,
        authMode,
        setAuthMode,
        loginDemoFan,
        handleAuthSuccess,
        logout,
        artists,
        songs,
        selectedArtist,
        setSelectedArtist,
        selectedSong,
        setSelectedSong,
        nameIdentities,
        selectedRecipient,
        setSelectedRecipient,
        addNameIdentity,
        selectedTier,
        setSelectedTier,
        selectedPlacement,
        setSelectedPlacement,
        selectedStyle,
        setSelectedStyle,
        customInstructions,
        setCustomInstructions,
        voiceNoteDuration,
        setVoiceNoteDuration,
        voiceNoteBlobUrl,
        setVoiceNoteBlobUrl,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        orders,
        selectedOrder,
        setSelectedOrder,
        submitOrder,
        simulatePublishOrder,
        viewingIdentity,
        setViewingIdentity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
