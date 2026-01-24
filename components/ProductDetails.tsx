
import React, { useState } from 'react';
import { 
  MapPin, Clock, Eye, Zap, Star, CheckCircle2, 
  Share2, AlertTriangle, MessageCircle, Phone, 
  ChevronRight, ShieldCheck, TrendingUp, Info,
  ArrowRight, Heart, Calendar, Tag, ShieldAlert,
  Smartphone, Car, Home, Layers
} from 'lucide-react';
import { Ad, PageView } from '../types';
import NegotiationTool from './NegotiationTool';

interface ProductDetailsProps {
  ad: Ad;
  onBack: () => void;
  onNavigate: (page: PageView) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ ad, onBack, onNavigate }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [revealedNumber, setRevealedNumber] = useState(false);

  const isUSD = ad.attributes?.['العملة'] === 'دولار أمريكي';
  const currencySymbol = isUSD ? '$' : 'ر.ي';

  const getAttributeIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case 'الموديل': return <Calendar size={18} />;
      case 'الحالة': return <Layers size={18} />;
      case 'اللون': return <Tag size={18} />;
      default: return <Info size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 animate-in fade-in duration-700" dir="rtl">
      {/* Breadcrumbs & Actions Header */}
      <div className="bg-white border-b border-gray-100 pt-32 pb-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-400">
            <button onClick={onBack} className="hover:text-blue-600 transition-colors">الرئيسية</button>
            <ChevronRight size={14} className="rotate-180" />
            <button onClick={() => onNavigate('search')} className="hover:text-blue-600 transition-colors">{ad.category}</button>
            <ChevronRight size={14} className="rotate-180" />
            <span className="text-gray-900 truncate max-w-[150px] md:max-w-none">{ad.title}</span>
          </nav>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all font-black text-xs ${isFavorite ? 'bg-red-50 border-red-100 text-red-600' : 'bg-white border-gray-100 text-gray-400 hover:border-red-500 hover:text-red-500'}`}
            >
              <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? 'في المفضلة' : 'حفظ'}
            </button>
            <button className="p-2.5 bg-white border-2 border-gray-100 text-gray-400 rounded-xl hover:text-blue-600 hover:border-blue-100 transition-all">
              <Share2 size={18} />
            </button>
            <button className="p-2.5 bg-white border-2 border-gray-100 text-gray-400 rounded-xl hover:text-red-600 hover:border-red-100 transition-all">
              <AlertTriangle size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Content (Images & Info) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Gallery Section */}
            <div className="bg-white rounded-[3rem] p-4 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-gray-50 mb-4 group">
                <img 
                  src={ad.images[activeImage]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={ad.title} 
                />
                {ad.isPremium && (
                  <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-2xl text-[10px] font-black flex items-center gap-2 shadow-xl">
                    <Zap size={14} fill="currentColor" /> إعلان موثق VIP
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-2">
                {ad.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative shrink-0 w-20 md:w-28 aspect-square rounded-2xl overflow-hidden border-4 transition-all ${activeImage === idx ? 'border-blue-600 scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Attributes */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest">
                  <Layers size={18} /> تفاصيل المنتج
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">{ad.title}</h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-bold whitespace-pre-line">
                  {ad.description}
                </p>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-gray-50">
                {Object.entries(ad.attributes || {}).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white hover:border-blue-100 transition-all">
                    <div className="flex items-center gap-2 text-gray-400 mb-1 group-hover:text-blue-500 transition-colors">
                      {getAttributeIcon(key)}
                      <span className="text-[10px] font-black uppercase tracking-tighter">{key}</span>
                    </div>
                    <div className="text-sm font-black text-gray-900">{value}</div>
                  </div>
                ))}
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <MapPin size={18} />
                    <span className="text-[10px] font-black uppercase tracking-tighter">الموقع</span>
                  </div>
                  <div className="text-sm font-black text-gray-900">{ad.location.city}</div>
                </div>
              </div>

              {/* Stats & Metadata */}
              <div className="flex flex-wrap items-center gap-6 pt-8 text-gray-400 font-bold text-xs border-t border-gray-50">
                <div className="flex items-center gap-2"><Clock size={16} /> نُشر {ad.postedAt}</div>
                <div className="flex items-center gap-2"><Eye size={16} /> {ad.stats?.views} مشاهدة</div>
                <div className="flex items-center gap-2"><Heart size={16} /> {ad.stats?.favorites} شخص حفظ الإعلان</div>
                <div className="mr-auto text-blue-600 font-black">رقم الإعلان: #{ad.id}</div>
              </div>
            </div>
          </div>

          {/* Sidebar (Conversion Column) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Price & AI Insights Card */}
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-blue-100/50 border border-gray-100 space-y-6 sticky top-28 transition-all">
              <div className="space-y-2">
                <span className="text-sm font-black text-gray-400">السعر المطلوب</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter">{ad.price.toLocaleString()}</span>
                  <span className="text-xl font-black text-gray-400">{currencySymbol}</span>
                </div>
              </div>

              {/* AI Badge */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                <div className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
                  <TrendingUp size={20} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black text-blue-600 uppercase">تحليل ذكي (AI)</div>
                  <p className="text-xs font-bold text-gray-700">هذا السعر ضمن النطاق العادل للسوق اليمني.</p>
                </div>
              </div>

              {/* Main Actions */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={() => setRevealedNumber(true)}
                  className="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-xl shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-4"
                >
                  <Phone size={24} />
                  {revealedNumber ? '0770 000 000' : 'إظهار رقم الهاتف'}
                </button>
                <button 
                  onClick={() => onNavigate('messages')}
                  className="w-full py-5 bg-white text-blue-600 border-2 border-blue-600 rounded-[1.5rem] font-black text-xl hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-4"
                >
                  <MessageCircle size={24} />
                  دردشة فورية
                </button>
              </div>

              <div className="pt-4">
                <NegotiationTool initialPrice={ad.price} onStartChat={() => onNavigate('messages')} />
              </div>
            </div>

            {/* Seller Info Card */}
            <div className="bg-white rounded-[3rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6">
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gray-100 overflow-hidden border-4 border-white shadow-md">
                    <img src={`https://ui-avatars.com/api/?name=${ad.seller.name}&background=random&bold=true`} className="w-full h-full object-cover" alt="" />
                  </div>
                  {ad.seller.isVerified && (
                    <div className="absolute -bottom-1 -left-1 bg-green-500 text-white p-1 rounded-lg border-2 border-white shadow-sm">
                      <CheckCircle2 size={12} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-black text-gray-900 truncate">{ad.seller.name}</h4>
                  <div className="flex items-center gap-2 text-orange-500 font-black text-xs mt-1">
                    <Star size={14} fill="currentColor" /> {ad.seller.rating.overall} (تقييم ممتاز)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-xl text-center border border-gray-100">
                  <div className="text-[10px] font-black text-gray-400 uppercase">وقت الرد</div>
                  <div className="text-xs font-black text-gray-900 mt-1">{ad.seller.responseTime}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl text-center border border-gray-100">
                  <div className="text-[10px] font-black text-gray-400 uppercase">عضو منذ</div>
                  <div className="text-xs font-black text-gray-900 mt-1">{ad.seller.memberSince}</div>
                </div>
              </div>

              <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-black transition-all flex items-center justify-center gap-3">
                زيارة المتجر الشخصي <ArrowRight size={18} className="rotate-180" />
              </button>
            </div>

            {/* Safety Card */}
            <div className="bg-red-50 rounded-[3rem] p-8 border-2 border-red-100 space-y-4">
              <div className="flex items-center gap-3 text-red-600 font-black">
                <ShieldAlert size={24} />
                <span className="text-lg">دليل الأمان</span>
              </div>
              <ul className="space-y-3">
                {[
                  'لا ترسل عربون قبل رؤية السلعة.',
                  'قابل البائع في مكان عام وآمن.',
                  'افحص المنتج بدقة قبل الدفع.',
                  'يفضل استلام فاتورة أو عقد مبايعة.'
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-bold text-red-800">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
