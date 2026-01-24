
import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../constants';
import { 
  Smartphone, Car, Home, Briefcase, Wrench, Sofa, 
  ChevronLeft, ArrowRight, Zap, Search, TrendingUp, 
  Target, Star, Users, Map as MapIcon, Grid, LayoutList,
  Laptop, Gamepad2, Microwave, Dog, Shirt, Utensils, Hammer, Key,
  Sparkles, Flame, Clock, Filter, X
} from 'lucide-react';
import { PageView } from '../types';

interface AllCategoriesPageProps {
  onNavigate: (page: PageView) => void;
  onBack: () => void;
}

const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({ onNavigate, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (name: string) => {
    switch(name) {
      case 'car': return <Car size={32} />;
      case 'home': return <Home size={32} />;
      case 'key': return <Key size={32} />;
      case 'briefcase': return <Briefcase size={32} />;
      case 'hammer': return <Hammer size={32} />;
      case 'laptop': return <Laptop size={32} />;
      case 'gamepad': return <Gamepad2 size={32} />;
      case 'microwave': return <Microwave size={32} />;
      case 'dog': return <Dog size={32} />;
      case 'shirt': return <Shirt size={32} />;
      case 'utensils': return <Utensils size={32} />;
      case 'zap': return <Zap size={32} />;
      case 'sofa': return <Sofa size={32} />;
      default: return <Zap size={32} />;
    }
  };

  const getCategoryTheme = (name: string) => {
    const themes: Record<string, string> = {
      'السيارات': 'from-orange-500 to-red-600 shadow-orange-100',
      'عقارات للبيع': 'from-emerald-500 to-teal-700 shadow-emerald-100',
      'عقارات للايجار': 'from-blue-500 to-indigo-700 shadow-blue-100',
      'الوظائف': 'from-slate-700 to-slate-900 shadow-slate-100',
      'الخدمات': 'from-amber-500 to-orange-700 shadow-amber-100',
      'طاقة شمسية': 'from-yellow-400 to-orange-500 shadow-yellow-100',
      'لابتوب وكمبيوتر': 'from-blue-600 to-cyan-500 shadow-blue-100',
      'ألعاب وألعاب الفيديو': 'from-purple-600 to-pink-600 shadow-purple-100',
      'أجهزة الكترونية ومنزلية': 'from-indigo-500 to-purple-700 shadow-indigo-100',
      'حيوانات وإكسسوارات': 'from-lime-500 to-green-700 shadow-lime-100',
      'موضة وأطفال': 'from-pink-500 to-rose-600 shadow-pink-100',
      'طعام - غذاء': 'from-red-500 to-orange-600 shadow-red-100',
      'منزل وحديقة': 'from-teal-500 to-cyan-700 shadow-teal-100',
    };
    return themes[name] || 'from-blue-600 to-indigo-700';
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    return CATEGORIES.filter(cat => 
      cat.name.includes(searchQuery) || 
      cat.subCategories.some(sub => sub.name.includes(searchQuery))
    );
  }, [searchQuery]);

  const trendingCategories = CATEGORIES.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-32 animate-in fade-in duration-700" dir="rtl">
      {/* Dynamic Immersive Header */}
      <div className="bg-white border-b border-gray-100 pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 text-right">
              <button onClick={onBack} className="group inline-flex items-center gap-3 text-gray-400 font-black text-sm hover:text-blue-600 transition-all mb-4">
                <ArrowRight size={20} /> العودة للرئيسية
              </button>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                دليل <span className="text-blue-600">نخبة</span> السوق
              </h1>
              <p className="text-xl text-gray-500 font-bold max-w-2xl leading-relaxed">
                تصفح آلاف العروض المنظمة بعناية فائقة لتجد ما تحتاجه في قلب اليمن.
              </p>
            </div>
            
            {/* Trending Tags */}
            <div className="flex flex-wrap gap-2 justify-end">
              <span className="text-xs font-black text-gray-400 w-full text-right mb-2 uppercase tracking-widest">الأكثر رواجاً:</span>
              {['سيارات 2024', 'شقق تمليك', 'وظائف تقنية', 'طاقة شمسية'].map(tag => (
                <button key={tag} className="px-4 py-2 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-100 rounded-full text-xs font-black transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search Categories Bar */}
          <div className="relative max-w-3xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center bg-white rounded-[2rem] shadow-xl border border-gray-100 p-2">
              <div className="flex-1 flex items-center px-6">
                <Search className="text-gray-400 group-focus-within:text-blue-600 transition-colors" size={24} />
                <input 
                  type="text" 
                  placeholder="ابحث عن قسم معين.. (مثل: تويوتا، شقق، مبرمج)"
                  className="w-full bg-transparent border-none outline-none px-4 py-4 font-black text-lg text-gray-800 placeholder:text-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="p-4 text-gray-400 hover:text-red-500"><X size={20} /></button>
              )}
              <button className="bg-blue-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-sm shadow-lg hover:bg-blue-700 transition-all">
                ابحث الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        {/* Featured Section */}
        {!searchQuery && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 px-4">
              <Flame className="text-orange-500" size={24} fill="currentColor" />
              <h2 className="text-2xl font-black text-gray-900">أقسام مختارة لك</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {trendingCategories.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => onNavigate('search')}
                  className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-200/40 flex flex-col items-center gap-4 group hover:border-blue-500 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryTheme(cat.name)} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {getIcon(cat.icon)}
                  </div>
                  <span className="font-black text-gray-900 text-sm">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* All Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, idx) => (
              <div 
                key={cat.name} 
                className="group bg-white rounded-[3.5rem] p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-600/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getCategoryTheme(cat.name)} opacity-[0.03] rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-[0.07]`}></div>

                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className={`w-20 h-20 shrink-0 bg-gradient-to-br ${getCategoryTheme(cat.name)} text-white rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {getIcon(cat.icon)}
                  </div>
                  <div className="flex-1 text-right">
                    <h2 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{cat.name}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">+500 إعلان اليوم</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6 relative z-10">
                  {cat.subCategories.map((sub) => (
                    <div key={sub.name} className="group/sub">
                      <button 
                        onClick={() => onNavigate('search')}
                        className="w-full flex items-center justify-between text-right p-3 rounded-2xl hover:bg-gray-50 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover/sub:opacity-100 transition-opacity"></div>
                          <span className="text-md font-bold text-gray-700 group-hover/sub:text-blue-600 transition-colors">{sub.name}</span>
                        </div>
                        <ChevronLeft size={16} className="text-gray-300 group-hover/sub:text-blue-600 group-hover/sub:-translate-x-1 transition-all" />
                      </button>
                      
                      {sub.items && (
                        <div className="flex flex-wrap gap-2 pr-8 mt-2">
                          {sub.items.map(item => (
                            <button 
                              key={item}
                              onClick={() => onNavigate('search')}
                              className="px-3 py-1.5 bg-gray-50 hover:bg-blue-50 border border-gray-100 text-[10px] font-black text-gray-400 hover:text-blue-600 rounded-xl transition-all"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-50 relative z-10">
                  <button 
                    onClick={() => onNavigate('search')}
                    className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-200"
                  >
                    تصفح كافة العروض <ArrowRight size={18} className="rotate-180" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center space-y-6 bg-white rounded-[4rem] shadow-inner border-2 border-dashed border-gray-100 animate-in zoom-in-95">
              <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={48} />
              </div>
              <h3 className="text-3xl font-black text-gray-900">عذراً، لم نجد نتائج لبحثك</h3>
              <p className="text-gray-500 font-bold max-w-sm mx-auto">حاول استخدام كلمات مفتاحية أخرى أو تصفح الأقسام الرئيسية.</p>
              <button onClick={() => setSearchQuery('')} className="text-blue-600 font-black underline decoration-2 underline-offset-8">إعادة ضبط البحث</button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action - Immersive Experience */}
      <div className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-white text-center space-y-10 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
              <Sparkles size={48} className="text-blue-200 animate-pulse" />
            </div>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">هل تمتلك شيئاً للبيع؟</h3>
            <p className="text-blue-100 text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
              ضع إعلانك في القسم المناسب الآن واجعل آلاف المشترين يصلون إليك في دقائق معدودة.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => onNavigate('post')} className="bg-white text-blue-600 px-12 py-6 rounded-[2rem] font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">انشر إعلانك الآن</button>
              <button onClick={() => onNavigate('help')} className="bg-transparent border-2 border-white/30 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-white/10 transition-all">مركز المساعدة</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
