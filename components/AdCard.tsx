
import React, { useState } from 'react';
import { MapPin, Heart, Clock, Eye, Zap, Star, CheckCircle2, ArrowUpLeft } from 'lucide-react';
import { Ad } from '../types';

interface AdCardProps {
  ad: Ad;
  onClick?: () => void;
}

const AdCard: React.FC<AdCardProps> = ({ ad, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const isUSD = ad.attributes?.['العملة'] === 'دولار أمريكي';
  const currencySymbol = isUSD ? '$' : 'ر.ي';

  const premiumConfig = {
    4: { border: 'border-blue-500', badge: 'bg-gradient-to-r from-blue-600 to-indigo-600', label: 'VIP مثبت' },
    3: { border: 'border-orange-400', badge: 'bg-orange-500', label: 'مميز +' },
    2: { border: 'border-indigo-400', badge: 'bg-indigo-500', label: 'مميز' },
    1: { border: 'border-gray-200', badge: 'bg-gray-500', label: 'عادي' }
  };

  const currentPremium = ad.premiumLevel ? premiumConfig[ad.premiumLevel] : premiumConfig[1];

  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer relative bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 ${ad.isPremium ? currentPremium.border : 'border-transparent hover:border-blue-50'} animate-in zoom-in-95 text-right`}
      dir="rtl"
    >
      {/* Category Badge - Right Aligned */}
      <div className="absolute top-3 right-3 z-20">
         <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm text-[10px] font-black text-blue-600 flex items-center gap-1.5">
           <Zap size={10} fill="currentColor" className="text-orange-500" />
           {ad.category}
         </div>
      </div>

      {/* Favorite Button - Left Aligned */}
      <div className="absolute top-3 left-3 z-20">
        <button 
          onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
          className={`p-2.5 rounded-xl backdrop-blur-md transition-all shadow-lg ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-400 hover:text-red-500'}`}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} strokeWidth={2.5} />
        </button>
      </div>
      
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={ad.images[0]} 
          alt={ad.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        {ad.isPremium && (
          <div className={`absolute bottom-3 right-3 ${currentPremium.badge} text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase flex items-center gap-1.5 shadow-md`}>
            <Star size={10} fill="currentColor" />
            <span>{currentPremium.label}</span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-black text-gray-900 leading-snug line-clamp-2 min-h-[3rem] text-sm md:text-lg group-hover:text-blue-600 transition-colors">{ad.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl md:text-3xl font-black text-gray-900">{ad.price.toLocaleString()}</span>
              <span className="text-[10px] md:text-xs font-black text-gray-400">{currencySymbol}</span>
            </div>
            {ad.jobType && (
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">{ad.jobType}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
           <MapPin size={14} className="text-blue-500" />
           <span className="truncate">{ad.location.city} - {ad.location.neighborhood}</span>
        </div>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={`https://ui-avatars.com/api/?name=${ad.seller.name}&background=random&bold=true`} className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" alt="" loading="lazy" />
              {ad.seller.isVerified && <div className="absolute -bottom-1 -left-1 bg-green-500 text-white p-0.5 rounded-md border-2 border-white"><CheckCircle2 size={8} /></div>}
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs font-black text-gray-900 truncate max-w-[100px]">{ad.seller.name}</span>
              <span className="text-[9px] font-bold text-gray-400">{ad.postedAt}</span>
            </div>
          </div>
          <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform group-hover:scale-110">
             <ArrowUpLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
