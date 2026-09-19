// Core Domain Entities based on docs/06-data-model.md & docs/07-state-model.md

export type UserRole = 'fan' | 'artist' | 'admin';

export interface User {
  id: string;
  email: string;
  phone: string;
  role: UserRole;
  displayName: string;
  createdAt: string;
}

export interface FanProfile {
  userId: string;
  pointsBalance: number;
  preferredGenres: string[];
  claimedIdentityId?: string;
  avatarUrl?: string;
}

export type IdentityVerificationStatus = 'unclaimed' | 'verification_pending' | 'verified';

export interface NameIdentity {
  id: string;
  displayName: string;
  disambiguatorTag: string; // e.g. "@marcus_ldn • Photographer"
  username?: string;
  location?: string;
  avatarUrl?: string;
  claimedUserId?: string;
  verificationStatus: IdentityVerificationStatus;
  creatorId: string;
  createdAt: string;
  totalSocialCapital: number;
  shoutoutCount: number;
  songCount?: number;
  artistCount?: number;
  recentTrackTitle?: string;
}

export type TierLevel = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface ShoutoutTier {
  id: TierLevel;
  name: string;
  headline: string;
  price: number;
  description: string;
  placementChoice?: string;
  styleChoice?: string;
  voiceNotePermission?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  verified: boolean;
  bio: string;
  startingPrice: number;
  availableForShoutouts: boolean;
  songCount: number;
  shoutoutsCompleted: number;
}

export interface Song {
  id: string;
  artistId: string;
  artistName: string;
  title: string;
  artworkUrl: string;
  duration: string;
  genre: string;
  startingPrice: number;
  bpm?: number;
  audioUrl?: string;
  availableTiers: TierLevel[];
  isAvailable: boolean;
  shoutoutsDelivered: number;
}

export type FulfillmentStatus =
  | 'request_received'
  | 'payment_confirmed'
  | 'artist_recording'
  | 'published'
  | 'revision_required';

export type PaymentStatus = 'pending' | 'processing' | 'succeeded' | 'failed';

export interface ShoutoutOrder {
  id: string;
  songId: string;
  songTitle: string;
  artistId: string;
  artistName: string;
  artworkUrl: string;
  buyerUserId: string;
  recipientIdentity: NameIdentity;
  tier: TierLevel;
  tierPrice: number;
  placement?: 'Intro' | 'Verse' | 'Outro';
  style?: 'Hype' | 'Chill' | 'Comedic';
  instructions?: string;
  voiceNoteDuration?: number;
  voiceNoteAudioUrl?: string;
  paymentMethod: 'apple_pay' | 'credit_card' | 'recognition_points';
  paymentStatus: PaymentStatus;
  fulfillmentStatus: FulfillmentStatus;
  recognitionPointsAwarded: number;
  createdAt: string;
  publishedAt?: string;
  shoutoutTimestampSec?: number;
}

export type BottomNavTab = 'home' | 'explore' | 'activity' | 'profile';

export type FanScreenId =
  | 'splash'
  | 'welcome'
  | 'how_it_works'
  | 'auth'
  | 'fan_home'
  | 'explore'
  | 'artist_profile'
  | 'song_detail'
  | 'person_search'
  | 'person_disambiguate'
  | 'add_person'
  | 'tier_select'
  | 'silver_placement'
  | 'gold_style'
  | 'platinum_instructions'
  | 'platinum_voice_recorder'
  | 'order_review'
  | 'payment'
  | 'payment_processing'
  | 'purchase_success'
  | 'activity'
  | 'shoutout_tracking'
  | 'published_shoutout'
  | 'recognition_profile'
  | 'leaderboard'
  | 'notifications'
  | 'profile_settings';
