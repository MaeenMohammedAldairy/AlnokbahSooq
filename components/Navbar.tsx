
import React, { useState, useEffect } from 'react';
import { Search, User, PlusCircle, MessageCircle, LogIn, X, ChevronLeft, Menu, Bell, Globe } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  isLoggedIn: boolean;
  onLoginRequest: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isLoggedIn, onLoginRequest }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-gray-100 py-2 shadow-sm' 
          : 'bg-white border-transparent py-4'
      }`} 
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-10">
            <button 
              onClick={() => onNavigate('home')}
              className="group flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                <PlusCircle size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">
                سوق<span className="text-blue-600">النخبة</span>
              </span>
            </button>
            
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: 'تصفح الكل', view: 'search' as PageView },
                { name: 'التصنيفات', view: 'categories' as PageView },
                { name: 'المجتمع', view: 'help' as PageView }
              ].map((link) => (
                <button 
                  key={link.view}
                  onClick={() => onNavigate(link.view)} 
                  className={`relative text-sm font-bold transition-all hover:text-blue-600 ${
                    currentPage === link.view ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                  {currentPage === link.view && (
                    <span className="absolute -bottom-2 right-0 left-0 h-1 bg-blue-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-10">
            <div className="relative w-full group">
              <input
                type="text"
                className="w-full pe-14 ps-6 py-3 bg-gray-50/50 border-2 border-transparent group-focus-within:border-blue-500/20 group-focus-within:bg-white rounded-2xl text-sm font-bold transition-all text-right outline-none shadow-sm group-focus-within:shadow-md"
                placeholder="ابحث عن سيارات، عقارات، وظائف..."
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-white rounded-lg border border-gray-100 text-[10px] font-black text-gray-400">
                <span>CTRL</span>
                <span>K</span>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('post')}
              className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              <PlusCircle size={20} />
              <span>أضف إعلان</span>
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button className="hidden sm:flex p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all relative">
                  <Bell size={22} />
                  <span className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button 
                  onClick={() => onNavigate('messages')}
                  className={`p-3 rounded-2xl transition-all ${
                    currentPage === 'messages' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <MessageCircle size={22} />
                </button>
                <button 
                  onClick={() => onNavigate('profile')}
                  className="w-11 h-11 rounded-2xl bg-gray-100 overflow-hidden border-2 border-white shadow-sm hover:border-blue-600 transition-all"
                >
                  <img src="https://ui-avatars.com/api/?name=User&background=random&bold=true" className="w-full h-full object-cover" alt="Profile" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginRequest}
                className="flex items-center gap-2 px-5 py-3 text-blue-600 bg-blue-50 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-sm border border-blue-100"
              >
                <LogIn size={20} />
                <span className="hidden sm:inline">تسجيل الدخول</span>
              </button>
            )}

            <button 
              className="lg:hidden p-3 text-gray-500 hover:bg-gray-50 rounded-2xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-[90] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-6 space-y-6">
            <div className="relative">
              <input type="text" placeholder="ماذا تبحث عنه في اليمن؟" className="w-full pe-14 ps-6 py-4 bg-gray-50 rounded-2xl text-sm font-bold text-right outline-none border border-gray-100" />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: 'الرئيسية', view: 'home' as PageView },
                { name: 'تصفح الإعلانات', view: 'search' as PageView },
                { name: 'كافة التصنيفات', view: 'categories' as PageView },
                { name: 'مركز المجتمع', view: 'help' as PageView },
                { name: 'باقات الترقية VIP', view: 'plans' as PageView }
              ].map((link) => (
                <button 
                  key={link.view}
                  onClick={() => { onNavigate(link.view); setIsMobileMenuOpen(false); }} 
                  className="w-full text-right p-4 text-gray-700 font-black hover:bg-blue-50 hover:text-blue-600 rounded-2xl flex items-center justify-between transition-all"
                >
                  {link.name}
                  <ChevronLeft size={18} className="text-gray-300" />
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button 
                onClick={() => { onNavigate('post'); setIsMobileMenuOpen(false); }}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
              >
                <PlusCircle size={22} />
                أضف إعلانك الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
