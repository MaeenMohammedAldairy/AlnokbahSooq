
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AdCard from './components/AdCard';
import SmartFilter from './components/SmartFilter';
import PostAdFlow from './components/PostAdFlow';
import NegotiationTool from './components/NegotiationTool';
import ProfilePage from './components/ProfilePage';
import MessagingSystem from './components/MessagingSystem';
import CommunityHub from './components/CommunityHub';
import AllCategoriesPage from './components/AllCategoriesPage';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { CATEGORIES, MOCK_ADS } from './constants';
import { PageView, Ad, DashboardTab } from './types';
import { 
  Car, Home, Briefcase, Zap, Sparkles, Plus, Eye,
  ChevronLeft, Star, MapPin, Share2, MessageCircle, Phone,
  LayoutDashboard, Megaphone, Heart, Settings, CheckCircle2, TrendingUp, Search,
  Filter, Laptop, Gamepad2, Microwave, Dog, Shirt, Utensils, Dribbble, HeartPulse, 
  Hammer, ShieldAlert, ArrowRight, X, Smartphone, Loader2, Grid, Map as MapIcon, ArrowUpRight,
  Key, Users, Trophy, Building2, Rocket
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('الكل');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAdClick = (ad: Ad) => {
    setSelectedAd(ad);
    setCurrentPage('details');
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'car': return <Car size={28} />;
      case 'home': return <Home size={28} />;
      case 'key': return <Key size={28} />;
      case 'briefcase': return <Briefcase size={28} />;
      case 'hammer': return <Hammer size={28} />;
      case 'laptop': return <Laptop size={28} />;
      case 'gamepad': return <Gamepad2 size={28} />;
      case 'microwave': return <Microwave size={28} />;
      case 'dog': return <Dog size={28} />;
      case 'shirt': return <Shirt size={28} />;
      case 'utensils': return <Utensils size={28} />;
      case 'zap': return <Zap size={28} />;
      case 'dribbble': return <Dribbble size={28} />;
      case 'heart-pulse': return <HeartPulse size={28} />;
      default: return <Zap size={28} />;
    }
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-blue-50/40 rounded-bl-[15rem] md:rounded-bl-[30rem] -z-10 animate-pulse duration-[10s]"></div>
        <div className="absolute top-40 left-20 w-32 h-32 bg-red-50 rounded-full blur-3xl -z-10 animate-bounce duration-[8s]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 text-right space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-600/5 text-blue-600 rounded-2xl text-xs md:text-sm font-black border border-blue-600/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                أكبر منصة إعلانات موثوقة في اليمن
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                بع واشترِ <span className="text-blue-600 relative inline-block">بذكاء<span className="absolute bottom-2 right-0 left-0 h-4 bg-blue-600/10 -rotate-1 -z-10"></span></span>، <br />
                في قلب <span className="text-red-600">اليمن</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-bold max-w-xl leading-relaxed">
                انضم لآلاف اليمنيين في بيئة تداول آمنة. من صنعاء إلى عدن، نحن هنا لنحقق طموحاتك في البيع والشراء.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setCurrentPage('post')} 
                className="group px-12 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                ابدأ البيع الآن
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('search')} 
                className="px-12 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-[2rem] font-black text-xl hover:bg-gray-50 hover:border-blue-600/20 hover:text-blue-600 transition-all shadow-sm"
              >
                تصفح كافة العروض
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
            <div className="relative grid grid-cols-2 gap-8 rotate-3 md:rotate-6">
              <div className="space-y-8 pt-16">
                <div className="bg-white p-5 rounded-[3rem] shadow-2xl transform -translate-x-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
                <div className="bg-white p-5 rounded-[3rem] shadow-2xl">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-5 rounded-[3rem] shadow-2xl">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9bedd094b?q=80&w=400" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
                <div className="bg-white p-5 rounded-[3rem] shadow-2xl transform translate-x-6">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-square">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {[
            { label: 'إعلان نشط', value: '+50,000', icon: <Megaphone className="text-blue-500" size={24} /> },
            { label: 'مستخدم مسجل', value: '+200,000', icon: <Users className="text-blue-500" size={24} /> },
            { label: 'عملية بيع ناجحة', value: '+120,000', icon: <Trophy className="text-blue-500" size={24} /> },
            { label: 'مدينة ومحافظة', value: '22', icon: <Building2 className="text-blue-500" size={24} /> }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2 group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
              <div className="text-sm font-bold text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Hub */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 px-2">
            <div className="text-right space-y-3">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">استكشف حسب التصنيف</h2>
              <p className="text-gray-500 font-bold text-xl">انطلق في رحلة بحث ممتعة داخل أقسامنا المتنوعة</p>
            </div>
            <button 
              onClick={() => setCurrentPage('categories')}
              className="px-8 py-4 bg-white text-blue-600 border border-blue-100 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center gap-2 group"
            >
              عرض كافة الأقسام <ArrowRight size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
            {CATEGORIES.slice(0, 12).map((cat, idx) => (
              <button 
                key={cat.name} 
                onClick={() => { setActiveCategoryFilter(cat.name); setCurrentPage('search'); }} 
                className="flex flex-col items-center gap-5 group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-200 group-hover:-translate-y-3 transition-all duration-500 border border-gray-100 shadow-sm relative overflow-hidden">
                  {getIcon(cat.icon)}
                </div>
                <div className="text-center space-y-1">
                  <span className="text-sm md:text-base font-black text-gray-900 group-hover:text-blue-600 transition-colors block">{cat.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Premium Ads */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16 md:mb-20 px-2">
            <div className="text-right space-y-3">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 flex items-center gap-6">عروض النخبة VIP <Zap className="text-orange-500 animate-pulse" fill="currentColor" /></h2>
              <p className="text-gray-500 font-bold text-xl">أفضل الصفقات الموثقة والمضمونة في محافظتك</p>
            </div>
            <button onClick={() => setCurrentPage('search')} className="text-blue-600 font-black flex items-center gap-3 hover:translate-x-2 transition-transform text-lg">عرض الكل <ChevronLeft size={24} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {MOCK_ADS.filter(ad => ad.isPremium).slice(0, 4).map(ad => (
              <AdCard key={ad.id} ad={ad} onClick={() => handleAdClick(ad)} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Ads Section */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-right space-y-3 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">أحدث الإعلانات</h2>
            <p className="text-gray-500 font-bold text-xl">إعلانات جديدة تضاف كل دقيقة في كافة أنحاء اليمن</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {MOCK_ADS.slice(0, 8).map(ad => (
              <AdCard key={ad.id} ad={ad} onClick={() => handleAdClick(ad)} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => setCurrentPage('search')}
              className="px-12 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-[2rem] font-black text-xl hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
            >
              استكشف كافة الإعلانات (100+)
            </button>
          </div>
        </div>
      </section>

      {/* Safety Alert */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-l from-red-50 to-white border-2 border-red-100 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-red-50">
          <div className="flex items-center gap-8 text-right">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-[2rem] flex items-center justify-center shadow-inner shrink-0"><ShieldAlert size={44} /></div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-gray-900">دليل الأمان في التداول</h4>
              <p className="text-lg font-bold text-gray-500">لضمان سلامتك، تجنب تحويل أي أموال قبل معاينة المنتج بشكل مباشر والتأكد من هويته.</p>
            </div>
          </div>
          <button onClick={() => setCurrentPage('help')} className="px-10 py-4 bg-white text-red-600 border-2 border-red-200 rounded-2xl font-black text-lg hover:bg-red-600 hover:text-white transition-all shrink-0 shadow-sm">اقرأ المزيد</button>
        </div>
      </section>

      {/* Success Story Teaser */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800" 
              className="relative rounded-[3rem] shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700" 
              alt="Success Story" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center"><CheckCircle2 size={24} /></div>
              <div className="text-right">
                <div className="text-xs font-black text-gray-400 uppercase">تم البيع عبرنا</div>
                <div className="text-sm font-black text-gray-900">في أقل من 3 ساعات</div>
              </div>
            </div>
          </div>
          <div className="space-y-8 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black border border-blue-100">
              <Sparkles size={16} /> قصص نجاح مجتمع النخبة
            </div>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">بعت لابتوبي القديم واشتريت جهازاً جديداً بذكاء!</h2>
            <p className="text-xl text-gray-500 font-bold leading-relaxed">
              "لم أتوقع أن تكون العملية بهذه السهولة. استخدمت مساعد التسعير وحصلت على 15 عرضاً في أول ساعة!"
            </p>
            <div className="flex items-center gap-4 justify-end">
              <div className="text-right">
                <div className="font-black text-gray-900 text-lg">صالح المحمدي</div>
                <div className="text-gray-400 font-bold">بائع نشط من صنعاء</div>
              </div>
              <img src="https://i.pravatar.cc/100?u=saleh" className="w-16 h-16 rounded-[1.5rem] border-4 border-white shadow-lg" alt="" />
            </div>
            <button onClick={() => setCurrentPage('help')} className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-gray-200">اقرأ المزيد من القصص</button>
          </div>
        </div>
      </section>

      {/* City Shortcuts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-black text-gray-900">البحث حسب المدينة</h2>
            <p className="text-gray-500 font-bold">اعثر على صفقات قريبة منك في ثوانٍ</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['صنعاء', 'عدن', 'تعز', 'إب', 'حضرموت', 'الحديدة', 'ذمار', 'مأرب'].map(city => (
              <button 
                key={city}
                onClick={() => setCurrentPage('search')}
                className="px-8 py-4 bg-white hover:bg-blue-600 hover:text-white border border-gray-100 rounded-2xl font-black text-lg transition-all shadow-sm flex items-center gap-3"
              >
                <MapPin size={20} />
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Join as Seller */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4rem] p-12 md:p-24 text-white text-center space-y-10 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 space-y-6">
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
              <Rocket size={48} className="text-blue-200 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">هل لديك شيء للبيع؟</h2>
            <p className="text-blue-100 text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
              انضم لأكبر تجمع للبائعين في اليمن. إعلانك سيصل لآلاف المشترين المهتمين في دقائق معدودة.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => setCurrentPage('post')}
                className="px-12 py-6 bg-white text-blue-600 rounded-[2rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                انشر إعلانك مجاناً
              </button>
              <button className="px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-[2rem] font-black text-2xl hover:bg-white/10 transition-all">
                تعرف على مميزات البائع
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSearch = () => (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="hidden lg:block w-80 shrink-0">
            <SmartFilter />
          </aside>
          <div className="flex-1 space-y-10">
            <div className="flex items-center justify-between bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
               <div className="flex items-center gap-4">
                 <button onClick={() => setViewMode('grid')} className={`p-4 rounded-2xl transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-400 hover:bg-gray-50'}`}><Grid size={24} /></button>
                 <button onClick={() => setViewMode('map')} className={`p-4 rounded-2xl transition-all ${viewMode === 'map' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-400 hover:bg-gray-50'}`}><MapIcon size={24} /></button>
               </div>
               <div className="text-right space-y-1">
                 <h2 className="text-3xl font-black text-gray-900">نتائج البحث</h2>
                 <p className="text-md font-bold text-gray-400">وجدنا {MOCK_ADS.length} إعلان مناسب</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {MOCK_ADS.map(ad => <AdCard key={ad.id} ad={ad} onClick={() => handleAdClick(ad)} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLoginRequest={() => setShowLoginModal(true)} />
      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'search' && renderSearch()}
        {currentPage === 'post' && <div className="bg-gray-50 min-h-screen pt-24"><PostAdFlow onComplete={() => setCurrentPage('home')} /></div>}
        {currentPage === 'profile' && <ProfilePage onBack={() => setCurrentPage('home')} />}
        {currentPage === 'messages' && <MessagingSystem onBack={() => setCurrentPage('home')} />}
        {currentPage === 'help' && <CommunityHub onBack={() => setCurrentPage('home')} />}
        {currentPage === 'categories' && <AllCategoriesPage onNavigate={setCurrentPage} onBack={() => setCurrentPage('home')} />}
        {currentPage === 'details' && selectedAd && (
          <ProductDetails ad={selectedAd} onBack={() => setCurrentPage('search')} onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />

      {showLoginModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md" dir="rtl">
          <div className="bg-white w-full max-w-md rounded-[3.5rem] p-12 shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-10 left-10 p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"><X size={26} /></button>
            <div className="space-y-10 text-center">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2.2rem] flex items-center justify-center mx-auto shadow-inner"><Smartphone size={48} /></div>
              <div className="space-y-3">
                <h3 className="text-4xl font-black text-gray-900">دخول سريع</h3>
                <p className="text-gray-500 font-bold text-lg">أدخل رقم هاتفك لتصلك رسالة تأكيد</p>
              </div>
              <div className="relative">
                <input type="tel" placeholder="7xxxxxxx" className="w-full pe-20 ps-8 py-6 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-black text-3xl text-left tracking-widest transition-all" dir="ltr" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 border-l ps-4"><img src="https://flagcdn.com/w20/ye.png" className="w-8" alt="Yemen" /><span>967</span></div>
              </div>
              <button onClick={() => { setIsLoggedIn(true); setShowLoginModal(false); }} className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-100 hover:bg-blue-700 transition-all">إرسال الرمز</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
