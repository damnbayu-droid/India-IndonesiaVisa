'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Globe,
  Plane,
  Briefcase,
  Laptop,
  Building2,
  TrendingUp,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  ChevronRight,
  Users,
  Clock,
  FileCheck,
  Award,
  ArrowRight,
} from 'lucide-react'

// Language types
type Language = 'hi' | 'en'

// Language context
const LanguageContext = createContext<{
  lang: Language
  setLang: (lang: Language) => void
}>({
  lang: 'hi',
  setLang: () => { },
})

// Translation data
const translations = {
  // Header
  header: {
    hi: {
      logo: 'इंडोनेशिया वीज़ा',
      tagline: 'भारतीय नागरिकों के लिए',
      langToggle: 'English',
    },
    en: {
      logo: 'Indonesia Visa',
      tagline: 'For Indian Citizens',
      langToggle: 'हिंदी',
    },
  },
  // Hero Section
  hero: {
    hi: {
      title: 'इंडोनेशिया वीज़ा सेवाएं भारतीय नागरिकों के लिए',
      subtitle: 'बाली की खूबसूरती का आनंद लें, रिमोट वर्क करें, या इंडोनेशिया में व्यापार और निवेश के अवसरों का लाभ उठाएं। हम आपके वीज़ा प्रक्रिया को आसान और तेज़ बनाते हैं।',
      touristVisa: 'टूरिस्ट वीज़ा',
      businessVisa: 'बिजनेस वीज़ा',
      digitalNomadVisa: 'डिजिटल नोमैड वीज़ा',
      allVisaOptions: 'सभी वीज़ा विकल्प',
    },
    en: {
      title: 'Indonesia Visa Services for Indian Citizens',
      subtitle: 'Enjoy the beauty of Bali, work remotely, or explore business and investment opportunities in Indonesia. We make your visa process simple and fast.',
      touristVisa: 'Tourist Visa',
      businessVisa: 'Business Visa',
      digitalNomadVisa: 'Digital Nomad Visa',
      allVisaOptions: 'All Visa Options',
    },
  },
  // Why Indians Love Indonesia
  whyIndonesia: {
    hi: {
      title: 'भारतीय इंडोनेशिया यात्रा क्यों पसंद करते हैं',
      subtitle: 'बाली - एक स्वर्गीय गंतव्य',
      baliTourism: 'बाली पर्यटन',
      baliTourismDesc: 'बाली दुनिया के सबसे खूबसूरत पर्यटन स्थलों में से एक है, जो अपने मंदिरों, समुद्र तटों और संस्कृति के लिए प्रसिद्ध है।',
      affordable: 'किफायती उष्णकटिबंधीय गंतव्य',
      affordableDesc: 'भारतीय यात्रियों के लिए इंडोनेशिया एक बजट-अनुकूल स्थान है जहां लग्जरी रिसॉर्ट्स से लेकर सस्ते होमस्टे तक उपलब्ध हैं।',
      indianTravelers: 'भारतीय यात्री',
      indianTravelersDesc: 'हर साल लाखों भारतीय बाली और इंडोनेशिया के अन्य द्वीपों की यात्रा करते हैं।',
      shortDistance: 'कम यात्रा दूरी',
      shortDistanceDesc: 'भारत से इंडोनेशिया की उड़ान केवल 5-7 घंटे की है, जो इसे एक आदर्श छुट्टी स्थल बनाती है।',
    },
    en: {
      title: 'Why Indians Love Traveling to Indonesia',
      subtitle: 'Bali - A Paradise Destination',
      baliTourism: 'Bali Tourism',
      baliTourismDesc: 'Bali is one of the most beautiful tourist destinations in the world, famous for its temples, beaches, and rich culture.',
      affordable: 'Affordable Tropical Destination',
      affordableDesc: 'Indonesia is a budget-friendly destination for Indian travelers, offering everything from luxury resorts to affordable homestays.',
      indianTravelers: 'Indian Travelers',
      indianTravelersDesc: 'Millions of Indians visit Bali and other Indonesian islands every year for vacations and honeymoons.',
      shortDistance: 'Short Travel Distance',
      shortDistanceDesc: 'Flights from India to Indonesia take only 5-7 hours, making it an ideal vacation destination.',
    },
  },
  // Visa Types
  visaTypes: {
    hi: {
      title: 'भारतीय नागरिकों के लिए इंडोनेशिया वीज़ा प्रकार',
      subtitle: 'आपकी यात्रा के लिए सही वीज़ा चुनें',
      apply: 'आवेदन करें',
      viewAll: 'सभी वीज़ा सेवाएं देखें',
      visas: [
        { code: 'B1', name: 'B1 VOA / एक्सटेंशन', desc: 'वीज़ा ऑन अरराइवल और एक्सटेंशन सेवाएं', link: 'https://indonesianvisas.com/en/services/B1' },
        { code: 'C1', name: 'C1 विज़िट वीज़ा', desc: 'पर्यटन और परिवार विज़िट के लिए', link: 'https://indonesianvisas.com/en/services/C1' },
        { code: 'C2', name: 'C2 बिजनेस वीज़ा', desc: 'व्यापारिक मीटिंग्स और सेमिनार के लिए', link: 'https://indonesianvisas.com/en/services/C2' },
        { code: 'C12', name: 'C12 प्री इन्वेस्टमेंट वीज़ा', desc: 'निवेश अवसरों की खोज के लिए', link: 'https://indonesianvisas.com/en/services/C12' },
        { code: 'D1', name: 'D1 टूरिस्ट वीज़ा', desc: 'लंबी अवधि पर्यटन वीज़ा', link: 'https://indonesianvisas.com/en/services/D1' },
        { code: 'D2', name: 'D2 बिजनेस वीज़ा', desc: 'विस्तारित व्यापार गतिविधियों के लिए', link: 'https://indonesianvisas.com/en/services/D2' },
        { code: 'D12', name: 'D12 प्री इन्वेस्टमेंट', desc: 'निवेश अनुसंधान के लिए', link: 'https://indonesianvisas.com/en/services/D12' },
        { code: 'E33G', name: 'E33G डिजिटल नोमैड', desc: 'रिमोट वर्कर्स और फ्रीलांसर्स के लिए', link: 'https://indonesianvisas.com/en/services/E33G' },
        { code: 'E28A', name: 'E28A इन्वेस्टमेंट KITAS', desc: 'निवेशक रहवाईया वीज़ा', link: 'https://indonesianvisas.com/en/services/E28A' },
      ],
    },
    en: {
      title: 'Indonesia Visa Types for Indian Citizens',
      subtitle: 'Choose the right visa for your travel needs',
      apply: 'Apply Now',
      viewAll: 'View All Visa Services',
      visas: [
        { code: 'B1', name: 'B1 VOA / Extension', desc: 'Visa on Arrival and extension services', link: 'https://indonesianvisas.com/en/services/B1' },
        { code: 'C1', name: 'C1 Visit Visa', desc: 'For tourism and family visits', link: 'https://indonesianvisas.com/en/services/C1' },
        { code: 'C2', name: 'C2 Business Visa', desc: 'For business meetings and seminars', link: 'https://indonesianvisas.com/en/services/C2' },
        { code: 'C12', name: 'C12 Pre Investment Visa', desc: 'For exploring investment opportunities', link: 'https://indonesianvisas.com/en/services/C12' },
        { code: 'D1', name: 'D1 Tourist Visa', desc: 'Long-term tourist visa', link: 'https://indonesianvisas.com/en/services/D1' },
        { code: 'D2', name: 'D2 Business Visa', desc: 'For extended business activities', link: 'https://indonesianvisas.com/en/services/D2' },
        { code: 'D12', name: 'D12 Pre Investment', desc: 'For investment research', link: 'https://indonesianvisas.com/en/services/D12' },
        { code: 'E33G', name: 'E33G Digital Nomad', desc: 'For remote workers and freelancers', link: 'https://indonesianvisas.com/en/services/E33G' },
        { code: 'E28A', name: 'E28A Investment KITAS', desc: 'Investor residence permit', link: 'https://indonesianvisas.com/en/services/E28A' },
      ],
    },
  },
  // Bali Tourist Visa
  baliTourist: {
    hi: {
      title: 'भारतीय यात्रियों के लिए बाली टूरिस्ट वीज़ा',
      subtitle: 'अपने सपनों की बाली यात्रा को साकार करें',
      beaches: 'समुद्र तट',
      beachesDesc: 'बाली के शानदार समुद्र तटों पर आराम करें - कुटा, सेमिन्याक, नुसा दुआ और अन्य।',
      temples: 'मंदिर',
      templesDesc: 'बाली के प्राचीन मंदिरों की खूबसूरती का आनंद लें - उलुवातु, तनाह लोट, बेसाकीह।',
      honeymoon: 'हनीमून ट्रिप्स',
      honeymoonDesc: 'बाली हनीमून के लिए एक आदर्श स्थान है, जो रोमांटिक रिसॉर्ट्स और खूबसूरत दृश्यों के लिए प्रसिद्ध है।',
      vacation: 'छुट्टी गंतव्य',
      vacationDesc: 'परिवार या दोस्तों के साथ एक यादगार छुट्टी बिताएं।',
      cta: 'टूरिस्ट वीज़ा के लिए आवेदन करें',
    },
    en: {
      title: 'Bali Tourist Visa for Indian Travelers',
      subtitle: 'Make your dream Bali trip a reality',
      beaches: 'Beaches',
      beachesDesc: 'Relax on Bali\'s stunning beaches - Kuta, Seminyak, Nusa Dua, and more.',
      temples: 'Temples',
      templesDesc: 'Experience the beauty of Bali\'s ancient temples - Uluwatu, Tanah Lot, Besakih.',
      honeymoon: 'Honeymoon Trips',
      honeymoonDesc: 'Bali is an ideal honeymoon destination, famous for romantic resorts and beautiful scenery.',
      vacation: 'Vacation Destination',
      vacationDesc: 'Enjoy a memorable vacation with family or friends.',
      cta: 'Apply for Tourist Visa',
    },
  },
  // Digital Nomad
  digitalNomad: {
    hi: {
      title: 'भारतीय रिमोट वर्कर्स के लिए डिजिटल नोमैड वीज़ा',
      subtitle: 'बाली में रिमोट वर्क करें और जीवन का आनंद लें',
      freelancers: 'फ्रीलांसर्स',
      freelancersDesc: 'अपने फ्रीलांस काम को बाली के खूबसूरत माहौल में जारी रखें।',
      itProfessionals: 'आईटी प्रोफेशनल्स',
      itProfessionalsDesc: 'सॉफ्टवेयर डेवलपर्स और इंजीनियर्स के लिए बाली एक आदर्श रिमोट वर्क डेस्टिनेशन है।',
      startupFounders: 'स्टार्टअप फाउंडर्स',
      startupFoundersDesc: 'अपने स्टार्टअप को बाली के इनोवेटिव इकोसिस्टम में विकसित करें।',
      benefits: 'लाभ',
      benefitsDesc: '1 साल तक रहें, बिना किसी टैक्स के आय कमाएं, और बाली की जीवनशैली का आनंद लें।',
      cta: 'डिजिटल नोमैड वीज़ा के लिए आवेदन करें',
    },
    en: {
      title: 'Digital Nomad Visa for Indian Remote Workers',
      subtitle: 'Work remotely in Bali and enjoy life',
      freelancers: 'Freelancers',
      freelancersDesc: 'Continue your freelance work in Bali\'s beautiful environment.',
      itProfessionals: 'IT Professionals',
      itProfessionalsDesc: 'Bali is an ideal remote work destination for software developers and engineers.',
      startupFounders: 'Startup Founders',
      startupFoundersDesc: 'Grow your startup in Bali\'s innovative ecosystem.',
      benefits: 'Benefits',
      benefitsDesc: 'Stay up to 1 year, earn income tax-free, and enjoy Bali\'s lifestyle.',
      cta: 'Apply for Digital Nomad Visa',
    },
  },
  // Business Opportunities
  business: {
    hi: {
      title: 'भारत-इंडोनेशिया व्यापार अवसर',
      subtitle: 'दक्षिण पूर्व एशिया के सबसे बड़े बाजार में विस्तार करें',
      trade: 'व्यापार संबंध',
      tradeDesc: 'भारत और इंडोनेशिया के बीच मजबूत व्यापारिक संबंध हैं, जो व्यापार विस्तार के अवसर प्रदान करते हैं।',
      expansion: 'व्यापार विस्तार',
      expansionDesc: 'इंडोनेशिया के बड़े बाजार में अपने व्यापार का विस्तार करें।',
      entrepreneurs: 'भारतीय उद्यमी',
      entrepreneursDesc: 'दक्षिण पूर्व एशिया में व्यापार अवसरों की खोज करने वाले भारतीय उद्यमियों के लिए आदर्श।',
      cta: 'बिजनेस वीज़ा के लिए आवेदन करें',
    },
    en: {
      title: 'India–Indonesia Business Opportunities',
      subtitle: 'Expand into Southeast Asia\'s largest market',
      trade: 'Trade Relations',
      tradeDesc: 'Strong trade relations between India and Indonesia provide opportunities for business expansion.',
      expansion: 'Business Expansion',
      expansionDesc: 'Expand your business into Indonesia\'s large market.',
      entrepreneurs: 'Indian Entrepreneurs',
      entrepreneursDesc: 'Ideal for Indian entrepreneurs exploring business opportunities in Southeast Asia.',
      cta: 'Apply for Business Visa',
    },
  },
  // Investment
  investment: {
    hi: {
      title: 'इंडोनेशिया में निवेश के अवसर',
      subtitle: 'एक बढ़ती हुई अर्थव्यवस्था में निवेश करें',
      tourism: 'पर्यटन व्यवसाय',
      tourismDesc: 'होटल, रिसॉर्ट और टूर कंपनियों में निवेश के अवसर।',
      hospitality: 'आतिथ्य क्षेत्र',
      hospitalityDesc: 'रेस्तरां, कैफे और आतिथ्य व्यवसायों में निवेश।',
      techStartups: 'टेक स्टार्टअप्स',
      techStartupsDesc: 'इंडोनेशिया के बढ़ते तकनीकी क्षेत्र में निवेश।',
      property: 'प्रॉपर्टी निवेश',
      propertyDesc: 'बाली और जकार्ता में रियल एस्टेट निवेश के अवसर।',
      cta: 'इन्वेस्टमेंट वीज़ा के लिए आवेदन करें',
    },
    en: {
      title: 'Investment Opportunities in Indonesia',
      subtitle: 'Invest in a growing economy',
      tourism: 'Tourism Business',
      tourismDesc: 'Investment opportunities in hotels, resorts, and tour companies.',
      hospitality: 'Hospitality Sector',
      hospitalityDesc: 'Investment in restaurants, cafes, and hospitality businesses.',
      techStartups: 'Tech Startups',
      techStartupsDesc: 'Invest in Indonesia\'s growing technology sector.',
      property: 'Property Investment',
      propertyDesc: 'Real estate investment opportunities in Bali and Jakarta.',
      cta: 'Apply for Investment Visa',
    },
  },
  // Why Professional Services
  whyServices: {
    hi: {
      title: 'प्रोफेशनल वीज़ा सेवाओं का उपयोग क्यों करें',
      subtitle: 'हम आपके वीज़ा प्रक्रिया को आसान बनाते हैं',
      expert: 'विशेषज्ञ वीज़ा सहायता',
      expertDesc: 'हमारी टीम में इंडोनेशियाई वीज़ा प्रक्रियाओं का गहन ज्ञान है।',
      verification: 'दस्तावेज़ सत्यापन',
      verificationDesc: 'हम आपके सभी दस्तावेजों की जांच और सत्यापन करते हैं।',
      faster: 'तेज़ आवेदन प्रक्रिया',
      fasterDesc: 'हम आपके वीज़ा आवेदन को जल्दी प्रोसेस करते हैं।',
      knowledge: 'स्थानीय ज्ञान',
      knowledgeDesc: 'इंडोनेशियाई आव्रजन नियमों और प्रक्रियाओं का गहन ज्ञान।',
    },
    en: {
      title: 'Why Use Professional Visa Services',
      subtitle: 'We make your visa process hassle-free',
      expert: 'Expert Visa Support',
      expertDesc: 'Our team has in-depth knowledge of Indonesian visa processes.',
      verification: 'Document Verification',
      verificationDesc: 'We check and verify all your documents before submission.',
      faster: 'Faster Application Process',
      fasterDesc: 'We process your visa application quickly and efficiently.',
      knowledge: 'Local Knowledge',
      knowledgeDesc: 'Deep understanding of Indonesian immigration rules and procedures.',
    },
  },
  // Process
  process: {
    hi: {
      title: 'वीज़ा आवेदन प्रक्रिया',
      subtitle: 'सरल 4-चरण प्रक्रिया',
      step1: 'चरण 1: हमसे संपर्क करें',
      step1Desc: 'व्हाट्सएप या ईमेल के माध्यम से हमसे संपर्क करें और अपनी आवश्यकताएं बताएं।',
      step2: 'चरण 2: दस्तावेज़ जमा करें',
      step2Desc: 'हमारी टीम आपको आवश्यक दस्तावेजों की सूची प्रदान करेगी।',
      step3: 'चरण 3: वीज़ा प्रोसेसिंग',
      step3Desc: 'हम आपके आवेदन को इंडोनेशियाई आव्रजन को सौंपते हैं।',
      step4: 'चरण 4: वीज़ा प्राप्त करें',
      step4Desc: 'आपका वीज़ा अनुमोदित होने पर आपको सूचित किया जाएगा।',
    },
    en: {
      title: 'Visa Application Process',
      subtitle: 'Simple 4-Step Process',
      step1: 'Step 1: Contact Us',
      step1Desc: 'Reach out via WhatsApp or email and share your requirements.',
      step2: 'Step 2: Submit Documents',
      step2Desc: 'Our team will provide you with the list of required documents.',
      step3: 'Step 3: Visa Processing',
      step3Desc: 'We submit your application to Indonesian immigration.',
      step4: 'Step 4: Receive Visa',
      step4Desc: 'You will be notified once your visa is approved.',
    },
  },
  // FAQ
  faq: {
    hi: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'आपके सवालों के जवाब',
      q1: 'क्या भारतीय नागरिकों को इंडोनेशिया के लिए वीज़ा की आवश्यकता है?',
      a1: 'हां, भारतीय नागरिकों को इंडोनेशिया के लिए वीज़ा की आवश्यकता है। आप वीज़ा ऑन अराइवल या ई-वीज़ा के लिए आवेदन कर सकते हैं।',
      q2: 'वीज़ा प्रोसेसिंग में कितना समय लगता है?',
      a2: 'वीज़ा ऑन अराइवल तुरंत उपलब्ध है। अन्य वीज़ा 3-7 कार्य दिवसों में प्रोसेस होते हैं।',
      q3: 'क्या भारतीय इंडोनेशिया में अपने ठहरने की अवधि बढ़ा सकते हैं?',
      a3: 'हां, आप वीज़ा एक्सटेंशन के लिए आवेदन कर सकते हैं। हम एक्सटेंशन सेवाएं भी प्रदान करते हैं।',
      q4: 'क्या बाली रिमोट वर्कर्स के लिए उपयुक्त है?',
      a4: 'हां, बाली रिमोट वर्कर्स के लिए एक उत्कृष्ट गंतव्य है। यहां अच्छा इंटरनेट, कोवर्किंग स्पेस और डिजिटल नोमैड कम्युनिटी है।',
      q5: 'वीज़ा आवेदन के लिए कौन से दस्तावेज़ चाहिए?',
      a5: 'आमतौर पर पासपोर्ट (6 महीने की वैधता), फोटो, रिटर्न टिकट, और होटल बुकिंग की आवश्यकता होती है। वीज़ा प्रकार के अनुसार अतिरिक्त दस्तावेज़ों की आवश्यकता हो सकती है।',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to your questions',
      q1: 'Do Indian citizens need a visa for Indonesia?',
      a1: 'Yes, Indian citizens need a visa for Indonesia. You can apply for Visa on Arrival or e-Visa.',
      q2: 'How long does visa processing take?',
      a2: 'Visa on Arrival is available immediately. Other visas are processed in 3-7 business days.',
      q3: 'Can Indians extend their stay in Indonesia?',
      a3: 'Yes, you can apply for a visa extension. We also provide extension services.',
      q4: 'Is Bali suitable for remote workers?',
      a4: 'Yes, Bali is an excellent destination for remote workers with good internet, coworking spaces, and a digital nomad community.',
      q5: 'What documents are required for visa application?',
      a5: 'Generally, a passport (6 months validity), photo, return ticket, and hotel booking are required. Additional documents may be needed depending on visa type.',
    },
  },
  // Contact
  contact: {
    hi: {
      title: 'संपर्क करें',
      subtitle: 'हमसे जुड़ें',
      email: 'ईमेल',
      whatsapp: 'व्हाट्सएप',
      address: 'पता',
      maps: 'Google Maps पर देखें',
      instagram: 'Instagram',
      telegram: 'Telegram',
      formTitle: 'वीज़ा पूछताछ फॉर्म',
      formName: 'नाम',
      formEmail: 'ईमेल',
      formNationality: 'राष्ट्रीयता',
      formVisaType: 'वीज़ा प्रकार',
      formMessage: 'संदेश',
      formSubmit: 'जमा करें',
      nationalityOptions: ['भारतीय', 'अन्य'],
      visaTypeOptions: ['टूरिस्ट वीज़ा', 'बिजनेस वीज़ा', 'डिजिटल नोमैड वीज़ा', 'इन्वेस्टमेंट वीज़ा', 'अन्य'],
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Address',
      maps: 'View on Google Maps',
      instagram: 'Instagram',
      telegram: 'Telegram',
      formTitle: 'Visa Inquiry Form',
      formName: 'Name',
      formEmail: 'Email',
      formNationality: 'Nationality',
      formVisaType: 'Visa Type',
      formMessage: 'Message',
      formSubmit: 'Submit',
      nationalityOptions: ['Indian', 'Other'],
      visaTypeOptions: ['Tourist Visa', 'Business Visa', 'Digital Nomad Visa', 'Investment Visa', 'Other'],
    },
  },
  // Footer
  footer: {
    hi: {
      quickLinks: 'त्वरित लिंक',
      visaServices: 'वीज़ा सेवाएं',
      contactInfo: 'संपर्क जानकारी',
      copyright: '© 2024 India Indonesia Visa. सर्वाधिकार सुरक्षित।',
      home: 'होम',
      about: 'हमारे बारे में',
      touristVisa: 'टूरिस्ट वीज़ा',
      businessVisa: 'बिजनेस वीज़ा',
      digitalNomad: 'डिजिटल नोमैड वीज़ा',
      investmentVisa: 'इन्वेस्टमेंट वीज़ा',
      language: 'भाषा',
    },
    en: {
      quickLinks: 'Quick Links',
      visaServices: 'Visa Services',
      contactInfo: 'Contact Information',
      copyright: '© 2024 India Indonesia Visa. All rights reserved.',
      home: 'Home',
      about: 'About Us',
      touristVisa: 'Tourist Visa',
      businessVisa: 'Business Visa',
      digitalNomad: 'Digital Nomad Visa',
      investmentVisa: 'Investment Visa',
      language: 'Language',
    },
  },
}

// Get translation helper
function t<T extends keyof typeof translations>(section: T) {
  return translations[section]
}

// Header Component
function Header() {
  const { lang, setLang } = useContext(LanguageContext)
  const content = t('header')[lang]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">{content.logo}</span>
            <span className="text-xs text-gray-500">{content.tagline}</span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
          className="gap-2"
        >
          <Globe className="h-4 w-4" />
          {content.langToggle}
        </Button>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('hero')[lang]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bali.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
            {content.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
            >
              <a href="https://indonesianvisas.com/en/services/D1" target="_blank" rel="noopener noreferrer">
                <Plane className="h-4 w-4" />
                {content.touristVisa}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
            >
              <a href="https://indonesianvisas.com/en/services/C2" target="_blank" rel="noopener noreferrer">
                <Briefcase className="h-4 w-4" />
                {content.businessVisa}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
            >
              <a href="https://indonesianvisas.com/en/services/E33G" target="_blank" rel="noopener noreferrer">
                <Laptop className="h-4 w-4" />
                {content.digitalNomadVisa}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 gap-2"
            >
              <a href="https://indonesianvisas.com/en/services" target="_blank" rel="noopener noreferrer">
                {content.allVisaOptions}
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Indonesia Section
function WhyIndonesiaSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('whyIndonesia')[lang]

  const features = [
    { icon: Plane, title: content.baliTourism, desc: content.baliTourismDesc },
    { icon: Award, title: content.affordable, desc: content.affordableDesc },
    { icon: Users, title: content.indianTravelers, desc: content.indianTravelersDesc },
    { icon: Clock, title: content.shortDistance, desc: content.shortDistanceDesc },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-orange-500 font-medium">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Visa Types Section
function VisaTypesSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('visaTypes')[lang]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.visas.map((visa, index) => (
            <Card key={index} className="border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">{visa.code}</span>
                  </div>
                  <CardTitle className="text-lg">{visa.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{visa.desc}</CardDescription>
                <Button
                  asChild
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a href={visa.link} target="_blank" rel="noopener noreferrer">
                    {content.apply}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            <a href="https://indonesianvisas.com/en/services" target="_blank" rel="noopener noreferrer">
              {content.viewAll}
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Bali Tourist Section
function BaliTouristSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('baliTourist')[lang]

  const features = [
    { title: content.beaches, desc: content.beachesDesc },
    { title: content.temples, desc: content.templesDesc },
    { title: content.honeymoon, desc: content.honeymoonDesc },
    { title: content.vacation, desc: content.vacationDesc },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-orange-500 font-medium mb-8">{content.subtitle}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <a href="https://indonesianvisas.com/en/services/D1" target="_blank" rel="noopener noreferrer">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/bali-beach.png"
              alt="Beautiful Bali Beach for Indian Tourists"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Digital Nomad Section
function DigitalNomadSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('digitalNomad')[lang]

  const features = [
    { title: content.freelancers, desc: content.freelancersDesc },
    { title: content.itProfessionals, desc: content.itProfessionalsDesc },
    { title: content.startupFounders, desc: content.startupFoundersDesc },
    { title: content.benefits, desc: content.benefitsDesc },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/digital-nomad.png"
              alt="Digital Nomad working in Bali Indonesia"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-orange-500 font-medium mb-8">{content.subtitle}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <a href="https://indonesianvisas.com/en/services/E33G" target="_blank" rel="noopener noreferrer">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Business Section
function BusinessSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('business')[lang]

  const features = [
    { title: content.trade, desc: content.tradeDesc },
    { title: content.expansion, desc: content.expansionDesc },
    { title: content.entrepreneurs, desc: content.entrepreneursDesc },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-orange-500 font-medium mb-8">{content.subtitle}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <a href="https://indonesianvisas.com/en/services/C2" target="_blank" rel="noopener noreferrer">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div>
            <Image
              src="/images/business-indonesia.png"
              alt="Business and Trade Opportunities in Indonesia for Indians"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Investment Section
function InvestmentSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('investment')[lang]

  const features = [
    { icon: Building2, title: content.tourism, desc: content.tourismDesc },
    { icon: TrendingUp, title: content.hospitality, desc: content.hospitalityDesc },
    { icon: Laptop, title: content.techStartups, desc: content.techStartupsDesc },
    { icon: Building2, title: content.property, desc: content.propertyDesc },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-orange-500 font-medium">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <a href="https://indonesianvisas.com/en/services/E28A" target="_blank" rel="noopener noreferrer">
              {content.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Why Services Section
function WhyServicesSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('whyServices')[lang]

  const features = [
    { icon: Shield, title: content.expert, desc: content.expertDesc },
    { icon: FileCheck, title: content.verification, desc: content.verificationDesc },
    { icon: Clock, title: content.faster, desc: content.fasterDesc },
    { icon: Award, title: content.knowledge, desc: content.knowledgeDesc },
  ]

  return (
    <section className="py-16 sm:py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Process Section
function ProcessSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('process')[lang]

  const steps = [
    { step: 1, title: content.step1, desc: content.step1Desc },
    { step: 2, title: content.step2, desc: content.step2Desc },
    { step: 3, title: content.step3, desc: content.step3Desc },
    { step: 4, title: content.step4, desc: content.step4Desc },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-orange-500 font-medium">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ChevronRight className="h-6 w-6 text-orange-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('faq')[lang]

  const faqs = [
    { q: content.q1, a: content.a1 },
    { q: content.q2, a: content.a2 },
    { q: content.q3, a: content.a3 },
    { q: content.q4, a: content.a4 },
    { q: content.q5, a: content.a5 },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-500">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const { lang } = useContext(LanguageContext)
  const content = t('contact')[lang]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{content.email}</h3>
                    <a href="mailto:contact@indonesianvisas.agency" className="text-orange-500 hover:underline">
                      contact@indonesianvisas.agency
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{content.whatsapp}</h3>
                    <a
                      href="https://wa.me/6285727041992"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      +62 85727041992
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{content.address}</h3>
                    <p className="text-gray-600">Bali, Indonesia</p>
                    <a
                      href="https://maps.app.goo.gl/N87NgLvE4Ma3qREK7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline text-sm"
                    >
                      {content.maps}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <a
                    href="https://instagram.com/balihelp.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">@balihelp.id</span>
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="https://t.me/IndonesianVisas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    <span className="text-sm">IndonesianVisas</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{content.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/xdaogqve" method="POST" className="space-y-4">
                <div>
                  <Label htmlFor="name">{content.formName}</Label>
                  <Input id="name" name="name" type="text" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">{content.formEmail}</Label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="nationality">{content.formNationality}</Label>
                  <select
                    id="nationality"
                    name="nationality"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    {content.nationalityOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="visa-type">{content.formVisaType}</Label>
                  <select
                    id="visa-type"
                    name="visa_type"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    {content.visaTypeOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">{content.formMessage}</Label>
                  <Textarea id="message" name="message" required className="mt-1 min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  {content.formSubmit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const { lang } = useContext(LanguageContext)
  const content = t('footer')[lang]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">India Indonesia Visa</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {lang === 'hi'
                ? 'भारतीय नागरिकों के लिए प्रोफेशनल इंडोनेशिया वीज़ा सेवाएं।'
                : 'Professional Indonesia visa services for Indian citizens.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.home}
                </a>
              </li>
              <li>
                <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.visaServices}</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://indonesianvisas.com/en/services/D1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.touristVisa}
                </a>
              </li>
              <li>
                <a href="https://indonesianvisas.com/en/services/C2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.businessVisa}
                </a>
              </li>
              <li>
                <a href="https://indonesianvisas.com/en/services/E33G" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.digitalNomad}
                </a>
              </li>
              <li>
                <a href="https://indonesianvisas.com/en/services/E28A" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {content.investmentVisa}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.contactInfo}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                contact@indonesianvisas.agency
              </li>
              <li className="text-gray-400 text-sm">
                +62 85727041992
              </li>
              <li className="text-gray-400 text-sm">
                Bali, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{content.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/balihelp.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://t.me/IndonesianVisas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function Home() {
  const [lang, setLang] = useState<Language>('hi')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WhyIndonesiaSection />
          <VisaTypesSection />
          <BaliTouristSection />
          <DigitalNomadSection />
          <BusinessSection />
          <InvestmentSection />
          <WhyServicesSection />
          <ProcessSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}
