
import React, { useState } from 'react';
import { Target, ArrowUpRight, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

interface NegotiationToolProps {
  initialPrice: number;
  onStartChat?: () => void;
}

const NegotiationTool: React.FC<NegotiationToolProps> = ({ initialPrice, onStartChat }) => {
  const [offer, setOffer] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'rejected' | 'accepted'>('idle');

  const handleSendOffer = () => {
    setStatus('sent');
    // Simulated logic: if offer is within 10% of price, it might be "accepted" after a delay
    setTimeout(() => {
      const numOffer = Number(offer);
      if (numOffer >= initialPrice * 0.9) setStatus('accepted');
      else setStatus('rejected');
    }, 2000);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl shadow-sm">
            <Target size={24} />
          </div>
          <div>
            <h3 className="font-black text-gray-900 text-xl">التفاوض الذكي</h3>
            <p className="text-xs font-bold text-gray-400">قدم عرضك وسيرد البائع فوراً</p>
          </div>
        </div>
        <div className="text-left">
          <span className="text-xs font-black text-gray-400 block">السعر المطلوب</span>
          <span className="text-xl font-black text-gray-900">{initialPrice.toLocaleString()} ر.س</span>
        </div>
      </div>

      {status === 'idle' && (
        <div className="space-y-4 animate-in fade-in duration-500">
          <div className="relative">
            <input 
              type="number" 
              placeholder="أدخل سعرك المقترح..." 
              className="w-full px-6 py-5 bg-white border-2 border-gray-100 rounded-3xl outline-none focus:border-indigo-500 font-black text-2xl transition-all text-center"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-gray-300">ريال</span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {[initialPrice * 0.95, initialPrice * 0.9, initialPrice * 0.85].map(val => (
              <button 
                key={val} 
                onClick={() => setOffer(Math.round(val).toString())}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black whitespace-nowrap border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all"
              >
                {Math.round(val).toLocaleString()} ر.س
              </button>
            ))}
          </div>
          <button 
            disabled={!offer}
            onClick={handleSendOffer}
            className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl hover:bg-indigo-700 shadow-xl shadow-indigo-100 disabled:bg-gray-200 transition-all flex items-center justify-center gap-3"
          >
            إرسال العرض <ArrowUpRight size={24} />
          </button>
        </div>
      )}

      {status === 'sent' && (
        <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="font-black text-gray-900">جاري إرسال عرضك للبائع...</p>
        </div>
      )}

      {status === 'accepted' && (
        <div className="py-8 bg-green-50 rounded-[2rem] border border-green-100 text-center space-y-4 animate-in zoom-in-95">
          <CheckCircle2 size={48} className="text-green-500 mx-auto" />
          <div>
            <h4 className="font-black text-green-900 text-xl">تهانينا! البائع وافق</h4>
            <p className="text-sm font-bold text-green-700 mt-1">تم الاتفاق على مبلغ {Number(offer).toLocaleString()} ر.س</p>
          </div>
          <button 
            onClick={onStartChat}
            className="mx-auto px-8 py-3 bg-green-600 text-white rounded-2xl font-black shadow-lg shadow-green-100 hover:bg-green-700 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} /> بدء المراسلة لإتمام البيع
          </button>
        </div>
      )}

      {status === 'rejected' && (
        <div className="py-8 bg-red-50 rounded-[2rem] border border-red-100 text-center space-y-4 animate-in zoom-in-95">
          <AlertCircle size={48} className="text-red-500 mx-auto" />
          <div>
            <h4 className="font-black text-red-900 text-xl">تم رفض العرض</h4>
            <p className="text-sm font-bold text-red-700 mt-1">عرضك بعيد جداً عن توقعات البائع.</p>
          </div>
          <button onClick={() => setStatus('idle')} className="text-sm font-black text-red-600 underline">حاول مرة أخرى بسعر أعلى</button>
        </div>
      )}
    </div>
  );
};

export default NegotiationTool;
