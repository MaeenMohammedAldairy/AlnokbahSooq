
import React from 'react';
import { 
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, 
  ShieldCheck, Globe, ArrowUpRight, Zap, Smartphone, Heart
} from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6 text-right">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-black text-blue-600 tracking-tighter flex items-center hover:scale-105 transition-transform"
            >
              سوق<span className="text-red-600">النخبة</span>
            </button>
            <p className="text-gray-500 font-bold leading-relaxed text-sm">
              المنصة رقم #1 في اليمن للتداول الذكي. نحن نربط البائعين والمشترين في بيئة آمنة وموثوقة باستخدام أحدث تقنيات الذكاء الاصطناعي.
            </p>
            <div className="flex items-center gap-4 justify-end">
              <a href="#" className="p-2.5 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-2.5 bg-gray-50 text-gray-400 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2.5 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Youtube size={20} /></a>
              <a href="#" className="p-2.5 bg-gray-50 text-gray-400 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2 justify-end">
              روابط سريعة <Zap size={16} className="text-blue-600" />
            </h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('search')} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">تصفح كافة الإعلانات</button></li>
              <li><button onClick={() => onNavigate('categories')} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">جميع التصنيفات</button></li>
              <li><button onClick={() => onNavigate('help')} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">مجتمع النخبة</button></li>
              <li><button onClick={() => onNavigate('plans')} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">باقات الترقية VIP</button></li>
              <li><button onClick={() => onNavigate('post')} className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">انشر إعلانك مجاناً</button></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="text-right">
            <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2 justify-end">
              الدعم والقانون <ShieldCheck size={16} className="text-green-600" />
            </h4>
            <ul className="space-y-4">
              <li><button className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">مركز المساعدة</button></li>
              <li><button className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">سياسة الخصوصية</button></li>
              <li><button className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">شروط الاستخدام</button></li>
              <li><button className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">نصائح الأمان والتعامل</button></li>
              <li><button className="text-gray-500 hover:text-blue-600 font-bold text-sm transition-colors">اتصل بنا</button></li>
            </ul>
          </div>

          {/* App Download / Contact */}
          <div className="text-right space-y-6">
            <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2 justify-end">
              تواصل معنا <Mail size={16} className="text-orange-600" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-end group">
                <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600 transition-colors">support@nokhba-market.com</span>
                <Mail size={18} className="text-blue-600" />
              </div>
              <div className="flex items-center gap-3 justify-end group">
                <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600 transition-colors" dir="ltr">+967 770 000 000</span>
                <Phone size={18} className="text-blue-600" />
              </div>
              <div className="flex items-center gap-3 justify-end group">
                <span className="text-sm font-bold text-gray-500 group-hover:text-blue-600 transition-colors">صنعاء، اليمن</span>
                <MapPin size={18} className="text-blue-600" />
              </div>
            </div>
            
            <div className="pt-4 flex flex-col gap-3">
              <button className="flex items-center justify-between gap-4 px-4 py-3 bg-gray-900 text-white rounded-2xl hover:bg-black transition-all group">
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                <div className="text-right">
                  <div className="text-[8px] font-bold text-gray-400">حمل التطبيق من</div>
                  <div className="text-xs font-black">Google Play</div>
                </div>
                <Smartphone size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-400">
            © {new Date().getFullYear()} سوق النخبة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
              <Globe size={14} /> <span>اليمن</span>
            </div>
            <p className="text-xs font-bold text-gray-400 flex items-center gap-1">
              صُنع بكل <Heart size={14} fill="currentColor" className="text-red-500" /> لمجتمعنا اليمني
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
