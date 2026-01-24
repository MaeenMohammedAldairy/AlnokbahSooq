
import React, { useState } from 'react';
import { 
  Camera, Tag, MapPin, Sparkles, CheckCircle2, 
  ChevronRight, ArrowLeft, TrendingUp,
  Loader2, Image as ImageIcon, Target, ChevronLeft
} from 'lucide-react';
import { optimizeAdContent, getSmartPricing } from '../services/geminiService';

const PostAdFlow: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [analyzingImage, setAnalyzingImage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    city: 'صنعاء'
  });
  const [aiSuggestions, setAiSuggestions] = useState<any>(null);
  const [aiPricing, setAiPricing] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleAiOptimize = async () => {
    setLoading(true);
    const result = await optimizeAdContent(formData.title, formData.description);
    if (result) {
      setAiSuggestions(result);
      setFormData(prev => ({
        ...prev,
        title: result.newTitle,
        description: result.newDescription
      }));
    }
    setLoading(false);
  };

  const handlePricingAnalyze = async () => {
    setLoading(true);
    const result = await getSmartPricing(formData.title, formData.description);
    if (result) setAiPricing(result);
    setLoading(false);
  };

  const simulateImageUpload = () => {
    setAnalyzingImage(true);
    setTimeout(() => {
      setImages(['https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400']);
      setAnalyzingImage(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4" dir="rtl">
      {/* Stepper - Flows from Right to Left */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div className={`w-12 h-12 rounded-[1.2rem] flex items-center justify-center font-black transition-all ${step >= s ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'bg-gray-100 text-gray-400'}`}>
              {step > s ? <CheckCircle2 size={24} /> : s}
            </div>
            {s < 3 && <div className={`flex-1 h-1.5 mx-4 rounded-full ${step > s ? 'bg-blue-600' : 'bg-gray-100'}`}></div>}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/40 p-8 md:p-14 border border-gray-100 relative overflow-hidden">
        {analyzingImage && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-6 animate-in fade-in">
            <Loader2 className="animate-spin text-blue-600" size={56} />
            <div className="text-center">
              <h3 className="text-2xl font-black text-gray-900">جاري فحص الصور بذكاء...</h3>
              <p className="text-gray-500 font-bold mt-2">نتأكد من جودة الصورة وعدم تكرارها.</p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4">
            <div className="text-right">
              <h2 className="text-4xl font-black text-gray-900 mb-3">ماذا تريد أن تبيع اليوم؟</h2>
              <p className="text-gray-500 font-bold text-lg">ابدأ بإضافة الصور الأساسية والتفاصيل الرئيسية</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <button 
                onClick={simulateImageUpload}
                className="aspect-square border-3 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-all bg-gray-50 group overflow-hidden"
              >
                {images.length > 0 ? (
                  <img src={images[0]} className="w-full h-full object-cover" alt="" />
                ) : (
                  <>
                    <Camera size={40} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-black mt-3">أضف صور</span>
                  </>
                )}
              </button>
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center justify-center text-gray-200"><ImageIcon size={40} /></div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900 ps-2">عنوان الإعلان</label>
                <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-[1.8rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold text-lg transition-all text-right" placeholder="مثال: تويوتا كورولا 2022 نظيفة كرت" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900 ps-2">الوصف التفصيلي</label>
                <textarea rows={5} className="w-full px-8 py-5 bg-gray-50 rounded-[1.8rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-bold text-lg transition-all resize-none text-right" placeholder="صف حالة المنتج والعيوب إن وجدت..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
              </div>
              <button onClick={handleAiOptimize} disabled={loading || !formData.title} className="w-full py-5 bg-blue-50 text-blue-700 rounded-[1.5rem] font-black text-md flex items-center justify-center gap-3 border border-blue-100 hover:bg-blue-100 transition-all">
                <Sparkles size={20} /> {loading ? 'جاري التحسين بذكاء...' : 'تحسين العنوان والوصف بالذكاء الاصطناعي'}
              </button>
            </div>

            <button onClick={() => setStep(2)} className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-4">
              التالي <ChevronLeft size={28} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4">
            <div className="text-right space-y-4">
              <h2 className="text-4xl font-black text-gray-900">السعر والموقع الجغرافي</h2>
              <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-[2rem] flex items-center gap-4">
                <Target className="text-indigo-600 shrink-0" size={24} />
                <p className="text-sm font-black text-indigo-900 leading-relaxed">تحديد سعر منطقي ومنافس في السوق اليمني يسرع عملية البيع بشكل كبير.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-900 ps-2">السعر المتوقع</label>
                <div className="relative">
                  <input type="number" className="w-full px-8 py-6 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-black text-4xl text-blue-600 text-center transition-all" placeholder="0" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                  <span className="absolute left-8 top-1/2 -translate-y-1/2 font-black text-gray-400 text-xl">ر.ي</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-right">
                  <label className="text-sm font-black text-gray-900 ps-2">المدينة</label>
                  <select className="w-full px-8 py-5 bg-gray-50 rounded-[1.8rem] border-2 border-transparent outline-none font-bold text-lg text-right appearance-none">
                    <option>صنعاء</option>
                    <option>عدن</option>
                    <option>تعز</option>
                    <option>إب</option>
                    <option>حضرموت</option>
                  </select>
                </div>
                <div className="space-y-3 text-right">
                  <label className="text-sm font-black text-gray-900 ps-2">الحي / المنطقة</label>
                  <input type="text" className="w-full px-8 py-5 bg-gray-50 rounded-[1.8rem] border-2 border-transparent outline-none font-bold text-lg text-right" placeholder="مثال: حي حدة" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="flex-1 py-6 bg-gray-100 text-gray-500 rounded-[2rem] font-black text-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-4"><ChevronRight size={28} /> السابق</button>
              <button onClick={() => setStep(3)} className="flex-[2] py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-4">التالي <ChevronLeft size={28} /></button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4 text-center py-6">
            <div className="w-28 h-28 bg-green-100 text-green-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce">
              <CheckCircle2 size={56} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-gray-900 tracking-tight">جاهز للنشر!</h2>
              <p className="text-gray-500 font-bold max-w-sm mx-auto text-lg leading-relaxed">إعلانك الآن يتبع كافة معايير سوق النخبة وهو جاهز للوصول لآلاف المشترين.</p>
            </div>
            
            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-right space-y-4 max-w-md mx-auto">
               <div className="flex items-center gap-3 text-blue-600 font-black">
                 <Sparkles size={24} />
                 <span className="text-xl">تثبيت الإعلان</span>
               </div>
               <p className="text-sm text-blue-900 font-bold leading-relaxed">قم بتثبيت إعلانك في أعلى الصفحة لمدة 24 ساعة لضمان مشاهدات أكثر بـ 10 أضعاف.</p>
               <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">ترقية لـ VIP (1000 ر.ي)</button>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => setStep(2)} className="flex-1 py-6 bg-gray-100 text-gray-500 rounded-[2rem] font-black text-xl hover:bg-gray-200 transition-all">السابق</button>
              <button onClick={onComplete} className="flex-[2] py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">نشر الإعلان الآن</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostAdFlow;
