// app/components/HomeAboutUs.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HomeAboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-10 md:py-12 bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 z-10">
        
        {/* Section Label - Premium */}
        <div className={`text-center mb-8 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#2c154f]"></div>
            <span className="text-[#0a0a0a] text-2xl font-semibold uppercase tracking-[0.2em]">About Us</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2c154f]"></div>
          </div>
        </div>

        {/* Main Content - Premium Layout */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side - Content with Premium Typography */}
          <div className={`transition-all duration-700 delay-150 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.2]">
              Redefining Professional 
              <span className="relative inline-block ml-2">
                Services Excellence
                <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 4" preserveAspectRatio="none">
                  <line x1="0" y1="2" x2="200" y2="2" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3"/>
                </svg>
              </span>
            </h2>
            
            <div className="space-y-5">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Insight Integrators is a premier multi-vertical advisory firm delivering high-quality solutions across <span className="font-semibold text-gray-800 border-b border-gray-300">Audit & Assurance, Advisory, Tax, and Media</span>.
              </p>
              
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We bring together exceptional talent, proven methodologies, and a client-first philosophy to drive real business outcomes.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="mt-10">
              <Link 
                href="/about" 
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#2c154f] text-white text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#502394]"
              >
                <span className="relative z-10">Learn More About Us</span>
                <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>
          </div>

          {/* Right Side - Premium Image with Overlay Effects */}
          <div className={`relative transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Premium Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#0a0a0a]/15"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#0a0a0a]/15"></div>
            
            {/* Top-right accent circle */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gray-100/50 -z-10"></div>
            
            {/* Bottom-left accent circle */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-gray-50/60 -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 via-transparent to-transparent z-10"></div>
              
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Insight Integrators Team"
                className="w-full h-[380px] md:h-[440px] object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Minimal Overlay Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>

           
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default HomeAboutUs;