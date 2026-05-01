// app/legal/privacy-policy/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const PrivacyPolicyPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookieSaved, setCookieSaved] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    setVisibleSections(prev => ({ ...prev, hero: true }));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id) {
            setVisibleSections(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach(section => {
        if (section.id && observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    };

    const timer = setTimeout(observeElements, 100);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, []);

  const handleCookieChange = (type) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setCookiePreferences(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const saveCookiePreferences = () => {
    setCookieSaved(true);
    setTimeout(() => setCookieSaved(false), 3000);
  };

  const privacySections = [
    {
      id: 'information',
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, fill out a form, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, company name, and any other information you choose to provide.'
    },
    {
      id: 'usage',
      title: 'Usage Information',
      content: 'When you visit our website, we automatically collect certain information about your device and usage patterns. This includes your IP address, browser type, operating system, pages visited, time and date of访问, referring URLs, and other analytical data.'
    },
    {
      id: 'cookies',
      title: 'Cookies and Similar Technologies',
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us remember your preferences, understand how you use our site, and improve our services.'
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services; to communicate with you; to personalize your experience; to analyze usage patterns; to detect and prevent fraud; and to comply with legal obligations.'
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law. All third-party service providers are contractually obligated to protect your information.'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.'
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.'
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data. To exercise these rights, please contact us at privacy@insightintegrators.ae.'
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      content: 'Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.'
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'If you have any questions about this privacy policy or our data practices, please contact us at:'
    }
  ];

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.',
      required: true
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.'
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and user experience.'
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of marketing campaigns.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white mt-16">
        
        {/* Hero Section */}
        <section 
          id="hero"
          data-observe="true"
          className="relative overflow-hidden bg-[#2c154f] py-8 md:py-10 lg:py-12"
        >
          {/* <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/40 text-[12px] font-light tracking-[0.3em] uppercase">Legal Information</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5 tracking-tight">
                Privacy <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Policy</span>
              </h1>
              
              <p className="text-white/30 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Your privacy matters to us. Learn how we collect, use, and protect your information.
              </p>

              {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/15 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                  <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center">
                    <div className="w-0.5 h-2 bg-white/20 rounded-full mt-2 animate-[scroll_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-5 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <p className="text-gray-500 text-sm font-light text-center">
              Last Updated: <span className="font-medium text-gray-700">April 30, 2025</span>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            
            {/* Introduction */}
            <div 
              id="intro"
              data-observe="true"
              className={`mb-10 transition-all duration-700 transform ${visibleSections.intro ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <p className="text-gray-600 text-base leading-relaxed font-light">
                At Insight Integrators Management Consultancies LLC-FZ, we are committed to protecting 
                your privacy and ensuring the security of your personal information. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {privacySections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-observe="true"
                  className={`transition-all duration-700 transform ${visibleSections[section.id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
                >
                  <div className="border-b border-gray-300 pb-3 mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <div className="w-12 h-px bg-[#0a0a0a]/50 mt-2"></div>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    {section.content}
                  </p>
                  {section.id === 'contact' && (
                    <div className="mt-4 space-y-1">
                      <p className="text-gray-500 text-base font-light">📧 privacy@insightintegrators.ae</p>
                      <p className="text-gray-500 text-base font-light">📍 Meydan Grandstand, Nad Al Sheba, Dubai, UAE</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          

         
          </div>
        </section>

        <style jsx global>{`
          @keyframes scroll {
            0%, 100% { transform: translateY(0); opacity: 0.3; }
            50% { transform: translateY(8px); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicyPage;