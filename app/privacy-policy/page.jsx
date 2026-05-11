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
      id: 'introduction',
      title: 'Introduction',
      content: 'Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, advisory services, and business solutions. By using our services, you agree to the practices described in this policy.'
    },
     {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: 'We may collect personal information such as your name, email address, phone number, and company details, along with business information shared during consultations or inquiries. We may also collect website usage data including IP address, browser type, pages visited, interaction behavior, and communication records from emails, contact forms, or support requests.'
    },
     {
      id: 'how-we-use-your-information',
      title: 'How We Use Your Information',
      content: 'The information collected may be used to provide and improve our advisory services, respond to inquiries and consultation requests, communicate important updates and business information, analyze website performance and user experience, maintain security and prevent unauthorized access, and comply with legal and regulatory obligations.'
    },
     {
      id: 'data-protection-and security',
      title: 'Data Protection & Security',
      content: 'We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, misuse, disclosure, or loss. While we strive to protect all data, no digital platform can guarantee complete security.'
    },
    {
      id: 'sharing-of-information',
      title: 'Sharing of Information',
      content: 'We do not sell, rent, or trade personal information to third parties. Information may only be shared with trusted service providers, legal authorities, or regulatory bodies when required for business operations or compliance purposes.'
    },
    {
      id: 'cookies-and-website-tracking',
      title: 'Cookies & Website Tracking',
      content: 'Our website may use cookies and similar technologies to improve browsing experience, analyze traffic, and understand user preferences. Users can modify browser settings to disable cookies if preferred.'
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      content: 'Our website may contain links to external websites or third-party platforms. We are not responsible for the privacy practices or content of those external sites.'
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: 'We retain information only for as long as necessary to fulfill business, legal, operational, or compliance requirements.'
    },
    {
      id: 'user-rights',
      title: 'User Rights',
      content: 'Depending on applicable laws and regulations, users may have the right to request access to their personal information, request correction or deletion of data, withdraw consent for communications, and request clarification regarding data usage.'
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      content: 'We may update this Privacy Policy periodically to reflect changes in business practices, legal requirements, or service improvements. Updated versions will be posted on this page.'
    },
     {
      id: 'contact-information',
      title: 'Contact Information',
      content: 'If you have any questions regarding this Privacy Policy or the handling of your information, please contact us through our official communication channels.'
    },
   
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