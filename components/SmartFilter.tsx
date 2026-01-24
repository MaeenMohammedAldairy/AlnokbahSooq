
import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, CheckCircle2, Tag, ChevronUp, MapPin } from 'lucide-react';

const SmartFilter: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('category');

  const toggle = (section: string) => setOpenSection(openSection === section ? null : section);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 p-6 md:p-8 sticky top-28 space-y-8 animate-in fade-in slide-in-from-right-4 duration-700" dir="rtl">
      <div className="flex items-center justify-between border-b border-gray-50 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
            <SlidersHorizontal size={20} />
          </div>
          <h3 className="font-black text-gray-900 text-xl">الفلاتر الذكية</h3>
        </div>
      </div>

      <div className="space-y-6">
        {/* Category Section */}
        <div className="space-y-4">
          <button 
            onClick={() => toggle('category')}
            className="w-full flex items-center justify-between text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] group"
          >
            <span>التصنيف</span>
            {openSection === 'category' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {openSection === 'category' && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
              <div className="p-4 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-between font-black text-sm cursor-pointer border border-blue-100 transition-all hover:bg-blue-100">
                <div className="flex items-center gap-3">
                  <Tag size={18} />
                  <span>الإلكترونيات</span>
                </div>
                <CheckCircle2 size={18} />
              </div>
              <div className="ps-4 space-y-3 pt-1">
                {['هواتف ذكية', 'لابتوب', 'أجهزة لوحية'].map(sub => (
                  <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer" />
                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Location Filter */}
        <div className="space-y-4 pt-4 border-t border-gray-50">
           <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] block">الموقع الجغرافي</label>
           <div className="relative">
             <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
             <select className="w-full pe-10 ps-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl font-bold text-sm outline-none focus:bg-white focus:border-blue-500 appearance-none transition-all">
                <option>كل اليمن</option>
                <option>أمانة العاصمة</option>
                <option>صنعاء</option>
                <option>عدن</option>
                <option>حضرموت</option>
             </select>
             <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
           </div>
        </div>

        {/* Condition Filter */}
        <div className="space-y-4 pt-4 border-t border-gray-50">
          <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] block">حالة المنتج</label>
          <div className="grid grid-cols-2 gap-3">
            {['جديد', 'مستعمل'].map(cond => (
              <button key={cond} className={`py-3 rounded-2xl font-black text-sm border-2 transition-all ${cond === 'جديد' ? 'bg-white border-blue-600 text-blue-600 shadow-md' : 'bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-gray-200'}`}>
                {cond}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Filter */}
        <div className="space-y-4 pt-4 border-t border-gray-50">
          <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.1em] block">الميزانية</label>
          <div className="flex items-center gap-3">
            <input type="number" placeholder="من" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-black outline-none focus:bg-white focus:border-blue-500 text-center transition-all" />
            <span className="text-gray-300 font-bold">-</span>
            <input type="number" placeholder="إلى" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-black outline-none focus:bg-white focus:border-blue-500 text-center transition-all" />
          </div>
        </div>

        {/* Verified Sellers Toggle */}
        <div className="p-5 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-3xl border border-blue-100">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all after:content-[''] after:absolute after:top-1 after:right-1 peer-checked:after:right-auto peer-checked:after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </div>
            <div className="flex-1 text-right">
              <div className="text-sm font-black text-gray-900">بائعون موثقون</div>
              <p className="text-[10px] font-bold text-blue-500 mt-0.5">إعلانات من حسابات مؤكدة</p>
            </div>
          </label>
        </div>

        <button className="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-lg hover:bg-blue-700 hover:shadow-xl active:scale-95 transition-all shadow-lg shadow-blue-100">
          تطبيق الفلاتر
        </button>
      </div>
    </div>
  );
};

export default SmartFilter;
