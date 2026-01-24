
export enum CategoryType {
  ELECTRONICS = 'الإلكترونيات',
  VEHICLES = 'السيارات والمركبات',
  REAL_ESTATE = 'العقارات',
  HOME_GARDEN = 'المنزل والحديقة',
  JOBS = 'الوظائف',
  SERVICES = 'الخدمات'
}

export type PageView = 'home' | 'search' | 'details' | 'post' | 'dashboard' | 'profile' | 'settings' | 'messages' | 'help' | 'plans' | 'categories';
export type DashboardTab = 'overview' | 'my-ads' | 'messages' | 'favorites' | 'ratings' | 'settings';

export interface Ad {
  id: string;
  title: string;
  price: number;
  category: string;
  subCategory: string;
  location: {
    region: string; // المنطقة (مثل: صنعاء)
    city: string;   // المدينة
    neighborhood: string; // الحي
    landmark?: string;    // المعلم القريب
    lat?: number;
    lng?: number;
  };
  images: string[];
  description: string;
  isPremium: boolean;
  premiumLevel?: 1 | 2 | 3 | 4; // 1:عادي, 2:مميز, 3:مميز+, 4:تثبيت
  seller: Seller;
  postedAt: string;
  attributes?: Record<string, string>;
  stats?: {
    views: number;
    favorites: number;
    messages: number;
    recentViews?: number;
  };
  status?: 'active' | 'sold' | 'expired' | 'hidden';
  negotiable?: boolean;
  type?: 'product' | 'service' | 'job';
  jobType?: 'full-time' | 'part-time' | 'freelance' | 'training';
}

export interface Seller {
  id: string;
  name: string;
  rating: {
    overall: number;
    accuracy: number;
    speed: number;
    cleanliness: number;
    punctuality: number;
    ethics: number;
  };
  isVerified: boolean;
  verificationLevel: 1 | 2 | 3 | 4; // 1:هاتف, 2:ايميل, 3:هوية, 4:بائع مضمون
  responseTime: string;
  memberSince: string;
  badge?: string;
}

export interface Message {
  id: string;
  senderName: string;
  adTitle: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
}

export interface CategoryStructure {
  name: string;
  icon: string;
  subCategories: {
    name: string;
    items?: string[]; // Level 3 items
  }[];
}

export interface PremiumPackage {
  id: string;
  name: string;
  price: number;
  adsCount: number;
  duration: string;
  features: string[];
  color: string;
}
