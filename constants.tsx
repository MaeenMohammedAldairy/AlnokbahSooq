
import { CategoryStructure, Ad, Message, PremiumPackage } from './types';

export const CATEGORIES: CategoryStructure[] = [
  {
    name: 'السيارات',
    icon: 'car',
    subCategories: [
      { name: 'سيارات للبيع', items: ['تويوتا', 'هيونداي', 'مرسيدس', 'لكزس'] },
      { name: 'باصات ونقل' },
      { name: 'دراجات نارية' },
      { name: 'قطع غيار واكسسوارات' }
    ]
  },
  {
    name: 'عقارات للبيع',
    icon: 'home',
    subCategories: [
      { name: 'بيوت للبيع', items: ['صنعاء', 'عدن', 'إب'] },
      { name: 'أراضي ومزارع' },
      { name: 'عمارات سكنية' }
    ]
  },
  {
    name: 'عقارات للايجار',
    icon: 'key',
    subCategories: [
      { name: 'شقق للايجار' },
      { name: 'محلات ومكاتب' },
      { name: 'استراحات' }
    ]
  },
  {
    name: 'الوظائف',
    icon: 'briefcase',
    subCategories: [
      { name: 'وظائف بدوام كامل' },
      { name: 'وظائف بدوام جزئي' },
      { name: 'مشاريع حرة (فريلانس)' },
      { name: 'تدريب وتعليم' }
    ]
  },
  {
    name: 'الخدمات',
    icon: 'hammer',
    subCategories: [
      { name: 'خدمات منزلية', items: ['سباكة', 'كهرباء', 'نظافة'] },
      { name: 'خدمات تعليمية', items: ['دروس خصوصية', 'دورات تدريبية'] },
      { name: 'خدمات مهنية', items: ['تصميم', 'برمجة', 'تسويق'] },
      { name: 'خدمات نقل وتوصيل' }
    ]
  },
  {
    name: 'طاقة شمسية',
    icon: 'zap',
    subCategories: [
      { name: 'ألواح شمسية', items: ['كندا شولر', 'جيكو', 'لونجي'] },
      { name: 'بطاريات جيل ونانو' },
      { name: 'محولات (انفرتر)' }
    ]
  },
  {
    name: 'لابتوب وكمبيوتر',
    icon: 'laptop',
    subCategories: [
      { name: 'لابتوبات للبيع', items: ['MacBook', 'Dell', 'HP'] },
      { name: 'قطع غيار واكسسوارات' },
      { name: 'كمبيوتر مكتبي' }
    ]
  },
  {
    name: 'ألعاب وألعاب الفيديو',
    icon: 'gamepad',
    subCategories: [
      { name: 'بلايستيشن' },
      { name: 'إكس بوكس' },
      { name: 'حسابات وبطاقات شحن' }
    ]
  },
  {
    name: 'أجهزة الكترونية ومنزلية',
    icon: 'microwave',
    subCategories: [
      { name: 'ثلاجات وغسالات' },
      { name: 'شاشات وتلفزيونات' },
      { name: 'أجهزة طبخ' }
    ]
  },
  {
    name: 'حيوانات وإكسسوارات',
    icon: 'dog',
    subCategories: [
      { name: 'قطط وكلاب' },
      { name: 'طيور' },
      { name: 'مستلزمات حيوانات' }
    ]
  },
  {
    name: 'موضة وأطفال',
    icon: 'shirt',
    subCategories: [
      { name: 'ملابس رجالي' },
      { name: 'ملابس نسائي' },
      { name: 'ألعاب ومستلزمات أطفال' }
    ]
  },
  {
    name: 'طعام - غذاء',
    icon: 'utensils',
    subCategories: [
      { name: 'عسل ومنتجات طبيعية' },
      { name: 'وجبات منزلية' },
      { name: 'فواكه وخضروات' }
    ]
  },
  {
    name: 'منزل وحديقة',
    icon: 'sofa',
    subCategories: [
      { name: 'أثاث منزلي' },
      { name: 'أدوات حدائق' },
      { name: 'تحف وديكور' }
    ]
  }
];

const generateAds = () => {
  const ads: Ad[] = [];
  
  // Helper to create basic seller
  const basicSeller = (name: string) => ({
    id: 's' + Math.random(),
    name,
    rating: { overall: 4.5, accuracy: 5, speed: 4, cleanliness: 5, punctuality: 4, ethics: 5 },
    isVerified: true,
    verificationLevel: 2 as 1|2|3|4,
    responseTime: 'خلال ساعة',
    memberSince: '2022'
  });

  // 1. السيارات (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `car-${i}`,
      title: i % 2 === 0 ? `تويوتا هيلوكس ${2015+i} غمارتين` : `هيونداي النترا ${2018+i} كرت`,
      price: 15000 + (i * 2000),
      category: 'السيارات',
      subCategory: 'سيارات للبيع',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'حدة' },
      images: [`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&sig=${i}`],
      description: 'سيارة نظيفة جداً، مجمرك، تواير جديدة، مكيف شغال ثلج.',
      isPremium: i < 3,
      premiumLevel: i < 3 ? 4 : 1,
      seller: basicSeller('معرض النخبة للسيارات'),
      postedAt: 'منذ يوم',
      attributes: { 'العملة': 'دولار أمريكي', 'الحالة': 'مستعمل' },
      stats: { views: 500 + i*10, favorites: 20, messages: 5 }
    });
  }

  // 2. عقارات للبيع (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `re-sale-${i}`,
      title: i % 3 === 0 ? `فيلا دورين ملحق في الأصبحي` : `بيت شعبي مسلح للبيع في دار سلم`,
      price: 50000 + (i * 10000),
      category: 'عقارات للبيع',
      subCategory: 'بيوت للبيع',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'الأصبحي' },
      images: [`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&sig=${i+10}`],
      description: 'موقع ممتاز، واجهة حجر، خزان أرضي، قريب من الخدمات.',
      isPremium: i === 1,
      premiumLevel: 4,
      seller: basicSeller('مكتب الصمود العقاري'),
      postedAt: 'منذ يومين',
      attributes: { 'العملة': 'دولار أمريكي' }
    });
  }

  // 3. عقارات للايجار (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `re-rent-${i}`,
      title: `شقة مفروشة راقية للايجار - ${i} غرف`,
      price: 250 + (i * 50),
      category: 'عقارات للايجار',
      subCategory: 'شقق للايجار',
      location: { region: 'عدن', city: 'عدن', neighborhood: 'خور مكسر' },
      images: [`https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&sig=${i+20}`],
      description: 'شقة واسعة، أثاث جديد، انترنت فايبر، تكييف مركزي.',
      isPremium: false,
      seller: basicSeller('إدارة أملاك عدن'),
      postedAt: 'منذ ساعات',
      attributes: { 'العملة': 'دولار أمريكي' }
    });
  }

  // 4. الوظائف (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `job-${i}`,
      title: i % 2 === 0 ? `مطلوب محاسب مالي خبرة` : `فرصة عمل مبرمج تطبيقات Flutter`,
      price: 400 + (i * 100),
      category: 'الوظائف',
      subCategory: 'وظائف بدوام كامل',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'شارع الزبيري' },
      images: [`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&sig=${i+30}`],
      description: 'نبحث عن كوادر مؤهلة للعمل ضمن فريقنا الاحترافي برواتب مجزية.',
      isPremium: true,
      premiumLevel: 2,
      type: 'job',
      jobType: 'full-time',
      seller: basicSeller('مجموعة هائل سعيد'),
      postedAt: 'منذ يوم'
    });
  }

  // 5. الخدمات (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `service-${i}`,
      title: i % 2 === 0 ? `نقل عفش وأثاث مع الفك والتركيب` : `صيانة وبرمجة منظومات الطاقة الشمسية`,
      price: 5000 + (i * 1000),
      category: 'الخدمات',
      subCategory: 'خدمات منزلية',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'الدائري' },
      images: [`https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&sig=${i+40}`],
      description: 'خدمة سريعة، أمانة في العمل، أسعار منافسة جداً.',
      isPremium: false,
      type: 'service',
      seller: basicSeller('المتخصص للخدمات'),
      postedAt: 'منذ ساعات'
    });
  }

  // 6. طاقة شمسية (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `solar-${i}`,
      title: `بطارية نانو جيل ${100 + i*10} أمبير - ضمان سنة`,
      price: 150 + (i * 20),
      category: 'طاقة شمسية',
      subCategory: 'بطاريات جيل ونانو',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'شارع خولان' },
      images: [`https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=800&sig=${i+50}`],
      description: 'أفضل أنواع البطاريات في اليمن، تتحمل التفريغ العميق، عمر افتراضي طويل.',
      isPremium: true,
      premiumLevel: 3,
      seller: basicSeller('العالمية للطاقة'),
      postedAt: 'منذ يوم',
      attributes: { 'العملة': 'دولار أمريكي' }
    });
  }

  // 7. لابتوب وكمبيوتر (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `laptop-${i}`,
      title: `لابتوب Dell Latitude Core i7 جيل ${8+i}`,
      price: 300 + (i * 50),
      category: 'لابتوب وكمبيوتر',
      subCategory: 'لابتوبات للبيع',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'شارع صخر' },
      images: [`https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&sig=${i+60}`],
      description: 'لابتوب عملي وقوي، رام 16 جيجا، هارد SSD، بطارية ممتازة.',
      isPremium: false,
      seller: basicSeller('كمبيوتر لاند'),
      postedAt: 'منذ 5 ساعات',
      attributes: { 'العملة': 'دولار أمريكي' }
    });
  }

  // 8. ألعاب فيديو (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `game-${i}`,
      title: `بلايستيشن ${i % 2 === 0 ? '5' : '4 Pro'} مستعمل نظيف`,
      price: 250 + (i * 40),
      category: 'ألعاب وألعاب الفيديو',
      subCategory: 'بلايستيشن',
      location: { region: 'عدن', city: 'عدن', neighborhood: 'المنصورة' },
      images: [`https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&sig=${i+70}`],
      description: 'مع كامل ملحقاته، يدتين أصليات، شغال 100%.',
      isPremium: false,
      seller: basicSeller('عالم الألعاب'),
      postedAt: 'منذ يوم'
    });
  }

  // 9. أجهزة منزلية (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `appliance-${i}`,
      title: `شاشة سمارت 4K مقاس ${32 + i*4} بوصة`,
      price: 150 + (i * 30),
      category: 'أجهزة الكترونية ومنزلية',
      subCategory: 'شاشات وتلفزيونات',
      location: { region: 'تعز', city: 'تعز', neighborhood: 'التحرير' },
      images: [`https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&sig=${i+80}`],
      description: 'ألوان رائعة، تدعم نتفلكس ويوتيوب، ضمان سنتين.',
      isPremium: false,
      seller: basicSeller('معرض الأجهزة الحديثة'),
      postedAt: 'منذ يومين'
    });
  }

  // 10. حيوانات (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `pet-${i}`,
      title: `قطة ${i % 2 === 0 ? 'شيرازي' : 'بيرشن'} لعوبة ونظيفة`,
      price: 20000 + (i * 5000),
      category: 'حيوانات وإكسسوارات',
      subCategory: 'قطط وكلاب',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'الحي السياسي' },
      images: [`https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&sig=${i+90}`],
      description: 'متعودة على الليتر بوكس، مطعمة، تحب اللعب جداً.',
      isPremium: false,
      seller: basicSeller('عشاق الحيوانات'),
      postedAt: 'منذ أسبوع'
    });
  }

  // 11. موضة (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `fashion-${i}`,
      title: `ساعة يد رجالي ${i % 2 === 0 ? 'كاسيو' : 'رولكس تقليد'} فاخرة`,
      price: 5000 + (i * 2000),
      category: 'موضة وأطفال',
      subCategory: 'ملابس رجالي',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'باب اليمن' },
      images: [`https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&sig=${i+100}`],
      description: 'تصميم أنيق جداً، ضد الماء، مع الضمان والعلبة.',
      isPremium: true,
      premiumLevel: 1,
      seller: basicSeller('بيت الساعات'),
      postedAt: 'منذ يومين'
    });
  }

  // 12. طعام (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `food-${i}`,
      title: `عسل سدر دوعني أصلي ${i} كيلو`,
      price: 25000 + (i * 5000),
      category: 'طعام - غذاء',
      subCategory: 'عسل ومنتجات طبيعية',
      location: { region: 'حضرموت', city: 'المكلا', neighborhood: 'دوعن' },
      images: [`https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&sig=${i+110}`],
      description: 'عسل صافي 100%، مفحوص مخبرياً، إنتاج هذا الموسم.',
      isPremium: true,
      premiumLevel: 2,
      seller: basicSeller('مناحل الحضرمي'),
      postedAt: 'منذ يوم'
    });
  }

  // 13. منزل (10)
  for(let i=1; i<=10; i++) {
    ads.push({
      id: `home-${i}`,
      title: `طقم كنب ${i % 2 === 0 ? 'كلاسيك' : 'مودرن'} مريح جداً`,
      price: 150000 + (i * 20000),
      category: 'منزل وحديقة',
      subCategory: 'أثاث منزلي',
      location: { region: 'صنعاء', city: 'صنعاء', neighborhood: 'الستين' },
      images: [`https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&sig=${i+120}`],
      description: 'قماش تركي، خشب قوي، تصميم فخم يناسب المجالس الكبيرة.',
      isPremium: false,
      seller: basicSeller('مفروشات الرويشان'),
      postedAt: 'منذ 3 أيام'
    });
  }

  return ads;
};

export const MOCK_ADS: Ad[] = generateAds();

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderName: 'محمد القاسمي',
    adTitle: 'تويوتا لاند كروزر 2022',
    lastMessage: 'كم السعر النهائي يا غالي؟',
    time: '10:45 AM',
    unreadCount: 2,
    avatar: 'https://ui-avatars.com/api/?name=محمد+القاسمي&background=random&bold=true'
  },
  {
    id: 'm2',
    senderName: 'سارة أحمد',
    adTitle: 'فيلا فاخرة للبيع',
    lastMessage: 'هل يمكنني معاينة الفيلا غداً؟',
    time: 'أمس',
    unreadCount: 0,
    avatar: 'https://ui-avatars.com/api/?name=سارة+أحمد&background=random&bold=true'
  }
];

export const PREMIUM_PACKAGES: PremiumPackage[] = [
  {
    id: 'p1',
    name: 'باقة النخبة الفضية',
    price: 15000,
    adsCount: 5,
    duration: 'شهر',
    features: ['5 إعلانات مميزة', 'ظهور في أول النتائج', 'دعم واتساب مباشر'],
    color: 'bg-slate-400'
  }
];
