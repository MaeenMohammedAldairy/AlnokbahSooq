
import React from 'react';
import { BookOpen, Star, Camera, Zap, ChevronLeft, ArrowLeft, Heart, Play, HelpCircle } from 'lucide-react';

const CommunityHub: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-in fade-in duration-700">
      {/* Header Banner */}
      <div className="h-80 bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="absolute top-8 right-8 z-20">
          <button onClick={onBack} className="p-3 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all flex items-center gap-2 font-black text-sm">
            <ChevronLeft size={20} className="rotate-180" /> العودة للرئيسية
          </button>
        </div>
        <div className="text-center relative z-10 space-y-4 px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">مجتمع <span className="text-blue-400">النخبة</span></h1>
          <p className="text-blue-100 text-xl font-bold max-w-2xl mx-auto">تعلم، شارك قصص نجاحك، واكتشف أسرار التداول الذكي في المملكة.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 space-y-16">
        {/* Main Sections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'مركز المساعدة', icon: <HelpCircle size={32} />, color: 'bg-blue-600', desc: 'كل ما تحتاجه للبدء' },
            { title: 'دليل التصوير', icon: <Camera size={32} />, color: 'bg-orange-500', desc: 'صور تزيد مبيعاتك 300%' },
            { title: 'تقارير السوق', icon: <Zap size={32} />, color: 'bg-green-600', desc: 'أسعار السلع المحدثة' },
          ].map(card => (
            <div key={card.title} className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-blue-100/30 border border-gray-100 text-center space-y-6 group hover:-translate-y-2 transition-all cursor-pointer">
              <div className={`w-20 h-20 ${card.color} text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">{card.title}</h3>
                <p className="text-gray-500 font-bold mt-1">{card.desc}</p>
              </div>
              <button className="text-sm font-black text-blue-600 group-hover:underline">تصفح الآن</button>
            </div>
          ))}
        </div>

        {/* Success Stories Section (Part 9.2) */}
        <div className="space-y-10">
          <div className="flex justify-between items-end px-4">
            <div>
              <h2 className="text-4xl font-black text-gray-900">قصص نجاح ملهمة</h2>
              <p className="text-gray-500 font-bold mt-2">مستخدمون حققوا أهدافهم عبر المنصة</p>
            </div>
            <button className="text-blue-600 font-black flex items-center gap-2 hover:underline">مشاهدة الكل <ArrowLeft size={18} /></button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col md:flex-row h-full group">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl"><Play fill="currentColor" size={24} /></div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest">
                  <Star size={16} fill="currentColor" /> قصة مميزة
                </div>
                <h3 className="text-3xl font-black text-gray-900 leading-tight">بعت سيارتي خلال ساعتين فقط!</h3>
                <p className="text-gray-500 font-bold leading-relaxed">أحمد استخدم مساعد التسعير الذكي وحصل على أفضل عرض في وقت قياسي.</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <img src="https://i.pravatar.cc/150?u=a1" className="w-10 h-10 rounded-xl" alt="" />
                  <span className="text-sm font-black text-gray-900">أحمد بن فهد</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col md:flex-row h-full group">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
              </div>
              <div className="md:w-1/2 p-10 space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest">
                  <Heart size={16} fill="currentColor" /> تجربة بيع
                </div>
                <h3 className="text-3xl font-black text-gray-900 leading-tight">أسست مشروعي الصغير هنا</h3>
                <p className="text-gray-500 font-bold leading-relaxed">ليلى بدأت ببيع اللابتوبات المستعملة والآن تملك شركة صيانة بـ 20 موظف.</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <img src="https://i.pravatar.cc/150?u=l1" className="w-10 h-10 rounded-xl" alt="" />
                  <span className="text-sm font-black text-gray-900">ليلى عبدالله</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-blue-100/50 border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black border border-blue-100">
                <BookOpen size={16} /> دليل خطوة بخطوة
              </div>
              <h2 className="text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">5 خطوات لبيع سريع وناجح</h2>
              <p className="text-xl text-gray-500 font-bold leading-relaxed">اكتشف أسرار المحترفين في عرض منتجاتهم لضمان الحصول على أفضل العروض في أقل وقت ممكن.</p>
              <ul className="space-y-6">
                {[
                  'التقط صوراً واضحة في ضوء النهار',
                  'استخدم مساعد التسعير الذكي (AI)',
                  'صف حالة المنتج بكل صدق ووضوح',
                  'فعل التنبيهات للرد الفوري على المشترين',
                  'وثق حسابك لزيادة الثقة لدى المشترين'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-black text-gray-700">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">{i+1}</div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl shadow-gray-200">اقرأ الدليل الكامل</button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000" className="relative rounded-[3rem] shadow-2xl border-8 border-white group-hover:rotate-1 transition-transform" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;
