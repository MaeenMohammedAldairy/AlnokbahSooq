
import React, { useState } from 'react';
import { Sparkles, TrendingUp, Info } from 'lucide-react';
import { getSmartPricing } from '../services/geminiService';

const AISmartPricing: React.FC = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [pricing, setPricing] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!title) return;
    setLoading(true);
    const result = await getSmartPricing(title, desc);
    setPricing(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
          <Sparkles size={20} />
        </div>
        <h2 className="text-lg font-bold text-gray-900">مساعد التسعير الذكي (AI)</h2>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        أدخل تفاصيل سلعتك وسيقوم الذكاء الاصطناعي بتحليل السوق واقتراح أفضل سعر لبيع أسرع.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="ماذا تبيع؟ (مثال: آيفون 14 مستعمل)"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="وصف مختصر للحالة (اختياري)"
          rows={2}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          disabled={loading || !title}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:bg-gray-400 transition-all flex items-center justify-center gap-2"
        >
          {loading ? 'جاري التحليل...' : (
            <>
              <TrendingUp size={18} />
              حلل السعر الآن
            </>
          )}
        </button>
      </div>

      {pricing && (
        <div className="mt-6 p-4 bg-white rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold">الأقل</span>
              <div className="font-bold text-gray-700">{pricing.minPrice} ر.س</div>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-1 scale-110 shadow-sm border border-blue-100">
              <span className="text-[10px] text-blue-500 uppercase font-bold">الموصى به</span>
              <div className="font-black text-blue-700">{pricing.recommendedPrice} ر.س</div>
            </div>
            <div className="text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold">الأعلى</span>
              <div className="font-bold text-gray-700">{pricing.maxPrice} ر.س</div>
            </div>
          </div>
          <div className="flex gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
            <Info size={14} className="shrink-0 text-blue-400" />
            <p>{pricing.reasoning}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISmartPricing;
