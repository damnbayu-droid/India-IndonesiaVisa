import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaindonesiavisa.online"),
  title: "इंडोनेशिया वीज़ा | Indonesia Visa for Indian Citizens | Bali Tourist Visa",
  description: "भारतीय नागरिकों के लिए इंडोनेशिया वीज़ा सेवाएं। बाली टूरिस्ट वीज़ा, बिजनेस वीज़ा, डिजिटल नोमैड वीज़ा और इन्वेस्टमेंट वीज़ा। Professional Indonesia visa services for Indian citizens. Apply for Bali tourist visa, business visa, digital nomad visa.",
  keywords: [
    // Hindi Keywords
    "इंडोनेशिया वीज़ा",
    "इंडोनेशिया वीज़ा भारतीय नागरिकों के लिए",
    "बाली वीज़ा भारतीयों के लिए",
    "इंडोनेशिया टूरिस्ट वीज़ा",
    "इंडोनेशिया बिजनेस वीज़ा",
    "इंडोनेशिया डिजिटल नोमैड वीज़ा",
    // English Keywords
    "Indonesia visa for Indians",
    "Bali visa for Indian citizens",
    "Indonesia business visa India",
    "Indonesia tourist visa",
    "Indonesia digital nomad visa",
    "Bali tourist visa",
    "Indonesia visa application",
    "Indonesia e-visa",
    "Visa on arrival Indonesia",
    "Indonesia investment visa",
  ],
  authors: [{ name: "Indonesian Visas Agency" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "इंडोनेशिया वीज़ा | Indonesia Visa for Indian Citizens",
    description: "भारतीय नागरिकों के लिए इंडोनेशिया वीज़ा सेवाएं। Professional Indonesia visa services for Indian citizens.",
    url: "https://indiaindonesiavisa.online",
    siteName: "India Indonesia Visa",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/images/hero-bali.png",
        width: 1344,
        height: 768,
        alt: "Indonesia Visa Services for Indian Citizens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "इंडोनेशिया वीज़ा | Indonesia Visa for Indian Citizens",
    description: "भारतीय नागरिकों के लिए इंडोनेशिया वीज़ा सेवाएं। Professional Indonesia visa services.",
    images: ["/images/hero-bali.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://indiaindonesiavisa.online",
    languages: {
      "hi-IN": "https://indiaindonesiavisa.online",
      "en-IN": "https://indiaindonesiavisa.online",
    },
  },
};

// JSON-LD Schema for Travel Agency / Visa Services
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "India Indonesia Visa",
  "description": "Professional Indonesia visa services for Indian citizens. We provide tourist visa, business visa, digital nomad visa, and investment visa services.",
  "url": "https://indiaindonesiavisa.online",
  "logo": "https://indiaindonesiavisa.online/logo.svg",
  "image": "https://indiaindonesiavisa.online/images/hero-bali.png",
  "telephone": "+62 85727041992",
  "email": "contact@indonesianvisas.agency",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bali",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.3405",
    "longitude": "115.0920"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": [
    "Indonesia Tourist Visa",
    "Indonesia Business Visa",
    "Indonesia Digital Nomad Visa",
    "Indonesia Investment Visa",
    "Bali Visa Services"
  ],
  "sameAs": [
    "https://instagram.com/balihelp.id",
    "https://t.me/IndonesianVisas"
  ],
  "openingHours": "Mo-Su 00:00-24:00",
  "priceRange": "$$"
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://indiaindonesiavisa.online"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Indonesia Visa Services",
      "item": "https://indiaindonesiavisa.online/#visa-services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tourist Visa",
      "item": "https://indonesianvisas.com/en/services/D1"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Business Visa",
      "item": "https://indonesianvisas.com/en/services/C2"
    }
  ]
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "इंडोनेशिया वीज़ा के लिए भारतीय नागरिकों को क्या चाहिए?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "भारतीय नागरिकों को पासपोर्ट, फोटो, रिटर्न टिकट और वीज़ा शुल्क की आवश्यकता होती है। आप बाली टूरिस्ट वीज़ा या बिजनेस वीज़ा के लिए ऑनलाइन आवेदन कर सकते हैं।"
      }
    },
    {
      "@type": "Question",
      "name": "बाली वीज़ा भारतीयों के लिए कितने समय के लिए वैध है?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "बाली वीज़ा (VOA) आमतौर पर 30 दिनों के लिए वैध होता है और इसे और 30 दिनों के लिए बढ़ाया जा सकता है।"
      }
    },
    {
      "@type": "Question",
      "name": "Do Indian citizens need a visa for Indonesia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian citizens need a visa for Indonesia. You can apply for Visa on Arrival or e-Visa through our professional visa services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Indonesia visa processing take for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visa on Arrival is available immediately at the airport. Other visas like tourist visa, business visa, and digital nomad visa are typically processed in 3-7 business days."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://indiaindonesiavisa.online" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="author" content="Indonesian Visas Agency" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
