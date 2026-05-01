// app/components/HeroSection.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('audit');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceTabs = [
    {
      id: 'audit',
      title: 'Audit & Assurance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      description: 'Comprehensive audit services that build trust and transparency. Our independent assurance helps you navigate complex regulatory requirements with confidence.',
     
      image: '/images/audit-bg.jpg'
    },
    {
      id: 'advisory',
      title: 'Advisory',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'Strategic advisory services that drive growth and transformation. We help you navigate complex business challenges and seize new opportunities.',
     
      image: '/images/advisory-bg.jpg'
    },
    {
      id: 'tax',
      title: 'Tax',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Expert tax solutions that optimize your position and ensure compliance. Our global network delivers local expertise for complex tax matters.',
     
      image: '/images/tax-bg.jpg'
    },
     {
      id: 'media',
      title: 'Media',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      description: 'Expert media solutions that optimize your position and ensure compliance. Our global network delivers local expertise for complex media matters.',
     
      image: '/images/media-bg.jpg'
    }
  ];

  const currentService = serviceTabs.find(tab => tab.id === activeTab);

  return (
    <section className="relative min-h-[650px] bg-[#2b144d] overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4f2d80]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4f2d80]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#4f2d80]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-10 lg:py-12">
        <div className="grid  gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4f2d80]/10 rounded-full">
              <span className="w-2 h-2 bg-[#fefff2] rounded-full animate-pulse"></span>
              <span className="text-[#fefff2] text-sm font-semibold tracking-wide">Global Excellence • Local Expertise</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-[#ffffff]">Driving your ambition in</span>
              <span className="text-[#fefff2] block mt-2">the UAE and beyond.</span>
            </h1>

            {/* Description */}
            <p className="text-[#ffffff] text-lg leading-relaxed">
              Expert assurance, advisory, tax and media solutions, powered by global scale 
              and local market intelligence.
            </p>

            {/* Service Tabs */}
            <div className="flex flex-wrap gap-4 pt-2">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-[#4f2d80] text-white shadow-lg shadow-[#4f2d80]/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className={`transition-transform duration-300 group-hover:scale-110 ${activeTab === tab.id ? 'text-white' : 'text-[#4f2d80]'}`}>
                    {tab.icon}
                  </span>
                  {tab.title}
                  {activeTab === tab.id && (
                    <span className="absolute inset-0 rounded-full bg-[#4f2d80] -z-10 animate-pulse opacity-50"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Content based on active tab */}
            <div className="space-y-6 pt-4 animate-fadeIn">
              {/* <div className="prose">
                <p className="text-[#ffffff] leading-relaxed">
                  {currentService?.description}
                </p>
              </div> */}
{/*               
              <div className="grid grid-cols-1 gap-3">
                {currentService?.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-[#4f2d80] rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-600 text-sm group-hover:text-[#4f2d80] transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div> */}

          
            </div>
          </div>

       
        </div>

       
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;