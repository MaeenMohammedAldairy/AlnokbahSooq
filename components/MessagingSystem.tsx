
import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, ShieldAlert, Phone, MoreVertical, Search, 
  CheckCircle2, AlertTriangle, Image as ImageIcon, 
  MapPin, Clock, ArrowRight, Filter, ChevronLeft,
  ShoppingBag, Tag, CreditCard, Box, ThumbsUp, Loader2, Camera, X, MessageCircle, Shield
} from 'lucide-react';
import { MOCK_MESSAGES } from '../constants';

type MessageFilter = 'all' | 'buying' | 'selling' | 'unread';

const MessagingSystem: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [filter, setFilter] = useState<MessageFilter>('all');
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<any[]>([
    { id: '1', text: 'مرحباً، هل الجهاز لازال متوفر؟ وكم آخر سعر ممكن توصله؟', sender: 'other', time: '10:45 AM' },
    { id: '2', text: 'أهلاً بك، نعم متوفر. الجهاز بحالة الوكالة والسعر نهائي حالياً لقوة الطلب عليه.', sender: 'me', time: '10:48 AM' },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedChat) scrollToBottom();
  }, [messages, selectedChat]);

  const handleSendMessage = (text?: string, imageUrl?: string) => {
    const content = text || messageText;
    if (!content.trim() && !imageUrl) return;

    const newMessage = {
      id: Date.now().toString(),
      text: imageUrl ? undefined : content,
      imageUrl: imageUrl || undefined,
      sender: 'me' as const,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setMessageText('');
    setImagePreview(null);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] bg-gray-50 flex overflow-hidden relative" dir="rtl">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setIsUploading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
              setImagePreview(reader.result as string);
              setIsUploading(false);
            };
            reader.readAsDataURL(file);
          }
        }} 
      />

      {/* Sidebar */}
      <div className={`${selectedChat ? 'hidden md:flex' : 'flex'} w-full md:w-[350px] lg:w-[400px] bg-white border-l border-gray-100 flex-col shadow-sm`}>
        <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-white z-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black text-gray-900">المراسلات</h2>
            <button onClick={onBack} className="p-2 text-gray-400 hover:text-gray-900"><ArrowRight size={20} className="rotate-180" /></button>
          </div>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            <input type="text" placeholder="البحث..." className="w-full pr-10 pl-4 py-2.5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none text-xs font-bold transition-all text-right" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} onClick={() => setSelectedChat(msg)} className={`p-4 md:p-6 flex items-center gap-3 md:gap-4 cursor-pointer transition-all border-b border-gray-50 relative group ${selectedChat?.id === msg.id ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}>
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-white shadow-md"><img src={msg.avatar} className="w-full h-full object-cover" alt="" /></div>
                {msg.unreadCount > 0 && (<div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">{msg.unreadCount}</div>)}
              </div>
              <div className="flex-1 min-w-0 space-y-1 text-right">
                <div className="flex justify-between items-center"><h4 className="font-black text-gray-900 truncate text-xs md:text-sm">{msg.senderName}</h4><span className="text-[9px] font-black text-gray-400">{msg.time}</span></div>
                <p className="text-[10px] md:text-xs text-gray-500 truncate font-bold line-clamp-1">{msg.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`${selectedChat ? 'flex' : 'hidden md:flex'} flex-1 flex-col bg-white relative`}>
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-gray-100 flex flex-col bg-white/90 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <button onClick={() => setSelectedChat(null)} className="md:hidden p-2 -mr-2 text-gray-400 hover:text-blue-600"><ArrowRight size={24} className="rotate-180" /></button>
                  <div className="relative shrink-0">
                    <img src={selectedChat.avatar} className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-sm" alt="" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-black text-gray-900 text-sm md:text-base leading-tight">{selectedChat.senderName}</h3>
                    <div className="text-[9px] md:text-[10px] font-bold text-green-500">متصل الآن</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg"><Phone size={18} /></button>
                  <button className="p-2 text-gray-400 hover:text-gray-900 rounded-lg"><MoreVertical size={18} /></button>
                </div>
              </div>
              
              {/* Chat Safety Alert */}
              <div className="bg-orange-50 p-2 rounded-xl flex items-center gap-2 border border-orange-100 animate-in slide-in-from-top-2">
                <Shield size={14} className="text-orange-500" />
                <span className="text-[10px] font-black text-orange-700">تذكر: لا ترسل أموالاً قبل رؤية المنتج ومعاينته شخصياً.</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 bg-[#f9fafc]">
               {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`p-4 rounded-2xl shadow-sm max-w-[85%] md:max-w-[70%] ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'}`}>
                    {msg.imageUrl ? (
                      <div className="space-y-2">
                        <img src={msg.imageUrl} className="rounded-xl max-h-64 w-full object-cover" alt="sent" />
                        <div className="flex items-center justify-between gap-4 mt-2">
                          <span className="text-[8px] font-black opacity-60">تم الفحص الأمني ✓</span>
                          <span className="text-[8px] font-black opacity-40">{msg.time}</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs md:text-sm font-bold leading-relaxed text-right">{msg.text}</p>
                        <div className={`text-[8px] font-black mt-1.5 opacity-50 ${msg.sender === 'me' ? 'text-blue-100 text-right' : 'text-gray-400 text-left'}`}>{msg.time}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 md:p-6 bg-white border-t border-gray-100">
              {imagePreview && (
                <div className="mb-4 p-3 bg-white rounded-2xl shadow-lg border border-blue-100 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-2">
                  <div className="flex items-center gap-3">
                    <img src={imagePreview} className="h-16 w-16 object-cover rounded-xl border border-gray-100" alt="preview" />
                    <button onClick={() => handleSendMessage('', imagePreview)} className="px-5 py-2 bg-blue-600 text-white rounded-lg font-black text-[10px]">إرسال</button>
                  </div>
                  <button onClick={() => setImagePreview(null)} className="p-2 text-red-500"><X size={18} /></button>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 bg-gray-50 text-gray-400 hover:text-blue-600 rounded-xl transition-all"
                >
                  <ImageIcon size={20} />
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="اكتب هنا..." 
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-xl font-bold text-sm transition-all text-right" 
                    value={messageText} 
                    onChange={(e) => setMessageText(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
                  />
                  <button onClick={() => handleSendMessage()} disabled={!messageText.trim()} className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-md disabled:bg-gray-300 transition-all"><Send size={18} /></button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-6">
            <div className="w-32 h-32 bg-gray-50 text-gray-200 rounded-full flex items-center justify-center"><MessageCircle size={60} /></div>
            <h3 className="text-xl font-black text-gray-400">اختر محادثة للبدء</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingSystem;
