// app/legal/cookie-settings/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const CookieSettingsPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
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
    if (type === 'necessary') return;
    setCookiePreferences(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const saveAllPreferences = () => {
    // Save to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setCookieSaved(true);
    setTimeout(() => setCookieSaved(false), 3000);
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    setCookieSaved(true);
    setTimeout(() => setCookieSaved(false), 3000);
  };

  const rejectAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }));
    setCookieSaved(true);
    setTimeout(() => setCookieSaved(false), 3000);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable basic features like page navigation, security, and access to secure areas. The website cannot function properly without these cookies.',
      required: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and saved items. They may be set by us or by third-party providers whose services we have added to our pages.',
      required: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance, user experience, and content relevance.',
      required: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements, measure the effectiveness of marketing campaigns, and build a profile of your interests.',
      required: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
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
                <span className="text-white/40 text-[12px] font-light tracking-[0.3em] uppercase">Privacy Preferences</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-light text-white mb-5 tracking-tight">
                Cookie <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Settings</span>
              </h1>
              
              <p className="text-white/30 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Manage your cookie preferences to control how we collect and process your data.
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
        <section className="py-8 md:py-10 lg:py-10 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            
            {/* Introduction */}
            <div 
              id="intro"
              data-observe="true"
              className={`mb-10 transition-all duration-700 transform ${visibleSections.intro ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[10px] font-light tracking-[0.2em] uppercase">Cookie Control</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Manage Your <span className="font-bold">Privacy Preferences</span>
              </h2>
              <p className="text-gray-500 text-justify text-base leading-relaxed font-light">
                When you visit our website, we use cookies and similar technologies to enhance your 
                browsing experience, analyze site traffic, and personalize content. You can choose 
                which types of cookies to accept below. Essential cookies are necessary for the 
                website to function and cannot be disabled.
              </p>
            </div>

            {/* Quick Actions */}
            <div 
              id="actions"
              data-observe="true"
              className={`mb-10 flex flex-wrap gap-4 transition-all duration-700 delay-100 transform ${visibleSections.actions ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium hover:bg-[#1a1a1a] transition-colors rounded-lg"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors rounded-lg"
              >
                Reject Non-Essential
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-5">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={cookie.id}
                  id={cookie.id}
                  data-observe="true"
                  className={`transition-all duration-700 transform ${visibleSections[cookie.id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${Math.min(index * 100 + 200, 600)}ms` }}
                >
                  <div className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md ${
                    cookie.required ? 'bg-gray-50/30' : ''
                  }`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                            {cookie.icon}
                          </div>
                          <span className="text-base font-semibold text-gray-900">
                            {cookie.title}
                          </span>
                          {cookie.required && (
                            <span className="text-[10px] px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
                              Always Active
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed pl-11">
                          {cookie.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[cookie.id]}
                            onChange={() => handleCookieChange(cookie.id)}
                            disabled={cookie.required}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full transition-all duration-300 ${
                            cookiePreferences[cookie.id] 
                              ? 'bg-[#0a0a0a]' 
                              : 'bg-gray-300'
                          } ${cookie.required ? 'opacity-60 cursor-not-allowed' : 'peer cursor-pointer'}`}>
                            <div className={`w-5 h-5 rounded-full bg-white transition-all duration-300 transform ${
                              cookiePreferences[cookie.id] ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5 shadow-sm`}></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div 
              id="save"
              data-observe="true"
              className={`mt-8 pt-4 flex flex-col items-center gap-4 transition-all duration-700 delay-600 transform ${visibleSections.save ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <button
                onClick={saveAllPreferences}
                className="px-8 py-3 bg-[#2c154f] text-white text-sm font-medium hover:bg-[#2c154f] transition-colors rounded-lg min-w-[200px]"
              >
                Save My Preferences
              </button>
              
              {cookieSaved && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-light animate-fadeIn">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Preferences saved successfully!
                </div>
              )}
            </div>

            {/* More Information */}
            {/* <div 
              id="more-info"
              data-observe="true"
              className={`mt-12 pt-6 border-t border-gray-100 text-center transition-all duration-700 delay-700 transform ${visibleSections['more-info'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <p className="text-gray-400 text-xs font-light">
                For more information about how we handle your data, please review our{' '}
                <Link href="/legal/privacy-policy" className="text-[#0a0a0a] hover:underline transition-all">
                  Privacy Policy
                </Link>
              </p>
              <p className="text-gray-400 text-xs font-light mt-2">
                © {new Date().getFullYear()} Insight Integrators Management Consultancies LLC-FZ. All rights reserved.
              </p>
            </div> */}
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
            from { opacity: 0; transform: translateY(-5px); }
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
      <Footer />
    </>
  );
};

export default CookieSettingsPage;