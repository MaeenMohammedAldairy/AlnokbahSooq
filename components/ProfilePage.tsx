
import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, ShieldCheck, CheckCircle2, 
  Camera, Settings, Bell, Lock, CreditCard, ExternalLink, 
  Star, TrendingUp, Award, ChevronLeft, LogOut
} from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'info' | 'security' | 'billing'>('info');

  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-in fade-in duration-700">
      {/* Header Banner */}
      <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
        <div className="max-w-7xl mx-auto px-4 h-full relative">
          <button 
            onClick={onBack}
            className="absolute top-8 right-0 p-3 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all flex items-center gap-2 font-black text-sm"
          >
            <ChevronLeft size={20} className="rotate-180" />
            العودة للرئيسية
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-blue-100/50 border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 opacity-50"></div>
              
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-[2.5rem] border-8 border-white shadow-xl overflow-hidden bg-gray-100">
                  <img src="https://i.pravatar.cc/150?u=user123" className="w-full h-full object-cover" alt="Profile" />
                </div>
                <button className="absolute -bottom-2 -left-2 p-3 bg-blue-600 text-white rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-all">
                  <Camera size={20} />
                </button>
              </div>

              <h2 className="text-3xl font-black text-gray-900 mb-2">محمد العتيبي</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-tighter">بائع موثوق</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-tighter">حساب نشط</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-900">4.9</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">التقييم</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-900">124</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">متابع</div>
                </div>
              </div>
            </div>

            {/* Verification Levels - Part 4.1 of doc */}
            <div className="bg-white rounded-[3rem] p-8 shadow-xl shadow-gray-100 border border-gray-100 space-y-6">
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <ShieldCheck size={24} className="text-blue-600" />
                مستويات التحقق
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: 'رقم الهاتف', verified: true, level: 1 },
                  { label: 'البريد الإلكتروني', verified: true, level: 2 },
                  { label: 'الهوية الوطنية', verified: true, level: 3 },
                  { label: 'بائع مضمون', verified: false, level: 4 },
                ].map((v) => (
                  <div key={v.level} className={`flex items-center justify-between p-4 rounded-2xl border ${v.verified ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100 grayscale'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${v.verified ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'}`}>
                        <CheckCircle2 size={16} />
                      </div>
                      <span className={`text-sm font-black ${v.verified ? 'text-green-700' : 'text-gray-400'}`}>{v.label}</span>
                    </div>
                    {v.verified ? (
                      <span className="text-[10px] font-black text-green-600 uppercase">موثق</span>
                    ) : (
                      <button className="text-[10px] font-black text-blue-600 underline">وثق الآن</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Form/Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-blue-100/30 border border-gray-100">
              <div className="flex flex-wrap gap-4 mb-10 pb-6 border-b border-gray-50">
                <button 
                  onClick={() => setActiveSection('info')}
                  className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeSection === 'info' ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  البيانات الشخصية
                </button>
                <button 
                  onClick={() => setActiveSection('security')}
                  className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeSection === 'security' ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  الأمان والخصوصية
                </button>
                <button 
                  onClick={() => setActiveSection('billing')}
                  className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeSection === 'billing' ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  الدفع والاشتراكات
                </button>
              </div>

              {activeSection === 'info' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in slide-in-from-left-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-4">الاسم الكامل</label>
                    <div className="relative">
                      <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                      <input type="text" defaultValue="محمد العتيبي" className="w-full pr-14 pl-6 py-5 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-4">البريد الإلكتروني</label>
                    <div className="relative">
                      <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                      <input type="email" defaultValue="m.otaibi@example.com" className="w-full pr-14 pl-6 py-5 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-4">رقم الجوال</label>
                    <div className="relative">
                      <Phone className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                      <input type="tel" defaultValue="+966 50 123 4567" className="w-full pr-14 pl-6 py-5 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold transition-all text-left" dir="ltr" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-4">المدينة</label>
                    <div className="relative">
                      <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                      <select className="w-full pr-14 pl-6 py-5 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold transition-all appearance-none">
                        <option>الرياض</option>
                        <option>جدة</option>
                        <option>الدمام</option>
                      </select>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black text-gray-400 mr-4">نبذة عنك</label>
                    <textarea rows={4} className="w-full px-8 py-5 bg-gray-50 rounded-[2.5rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold transition-all resize-none" placeholder="اكتب شيئاً عنك..." defaultValue="مهتم بالأجهزة التقنية الحديثة والسيارات الكلاسيكية. بائع نشط وموثوق منذ 2020."></textarea>
                  </div>
                  
                  <div className="md:col-span-2 pt-6">
                    <button className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-100">
                      حفظ التغييرات
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'security' && (
                <div className="space-y-8 animate-in slide-in-from-left-4">
                  <div className="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100">
                        <Lock size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">تغيير كلمة المرور</h4>
                        <p className="text-gray-600 font-bold">آخر تغيير كان قبل 3 أشهر</p>
                      </div>
                    </div>
                    <button className="px-8 py-3 bg-white border border-orange-200 text-orange-600 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all">تحديث</button>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-black text-gray-900">تنبؤات الأمان والخصوصية</h4>
                    <div className="grid gap-4">
                      {[
                        { title: 'المصادقة الثنائية (2FA)', desc: 'تأمين إضافي عبر رسائل SMS', active: true },
                        { title: 'إظهار رقم الهاتف', desc: 'السماح للجميع برؤية رقم جوالك', active: false },
                        { title: 'تنبيهات الدخول', desc: 'إشعارك عند دخول حسابك من جهاز جديد', active: true },
                      ].map((pref, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
                          <div>
                            <div className="font-black text-gray-900">{pref.title}</div>
                            <div className="text-xs font-bold text-gray-400 mt-1">{pref.desc}</div>
                          </div>
                          <div className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-all ${pref.active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                            <div className={`w-6 h-6 bg-white rounded-full transition-all shadow-sm ${pref.active ? 'mr-0' : 'mr-6'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'billing' && (
                <div className="space-y-8 animate-in slide-in-from-left-4 text-center py-10">
                  <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CreditCard size={48} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">الدفع والاشتراكات</h3>
                    <p className="text-gray-500 font-bold max-w-sm mx-auto leading-loose text-lg">
                      لم تقم بإضافة أي بطاقات دفع أو اشتراكات نشطة حالياً.
                    </p>
                  </div>
                  <button className="px-12 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-xl hover:scale-105 transition-all shadow-2xl">
                    إضافة وسيلة دفع
                  </button>
                </div>
              )}
            </div>

            {/* Dashboard Analytics Shortcut (Part 8 of doc) */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 blur-[100px] opacity-20"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center md:text-right">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <TrendingUp size={32} className="text-blue-400" />
                    <h3 className="text-3xl font-black">تقرير الأداء الشهري</h3>
                  </div>
                  <p className="text-gray-400 font-bold text-lg leading-relaxed">زادت مشاهدات إعلاناتك 24% هذا الشهر. الجمعة هو أفضل وقت للنشر لك.</p>
                </div>
                <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/50 flex items-center gap-3">
                  عرض التحليلات <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
