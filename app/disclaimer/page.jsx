// app/disclaimer/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DisclaimerPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections(prev => ({ ...prev, hero: true }));

    // Create observer that keeps watching
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

  const disclaimerSections = [
    {
      id: 'general',
      title: 'General Information',
      content: 'The information contained on this website is for general information purposes only. Insight Integrators Management Consultancies LLC-FZ assumes no responsibility for errors or omissions in the contents of this website. In no event shall Insight Integrators Management Consultancies LLC-FZ be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of this website or the contents of this website.'
    },
    {
      id: 'professional',
      title: 'Professional Advice Disclaimer',
      content: 'The information provided on this website does not constitute professional advice. While we strive to provide accurate and up-to-date information, you should not act upon the information contained on this website without seeking appropriate professional advice. Insight Integrators Management Consultancies LLC-FZ expressly disclaims all liability in respect of actions taken or not taken based on any or all of the contents of this website.'
    },
    {
      id: 'external',
      title: 'External Links Disclaimer',
      content: 'This website may contain links to external websites that are not provided or maintained by Insight Integrators Management Consultancies LLC-FZ. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
    },
    {
      id: 'testimonials',
      title: 'Testimonials Disclaimer',
      content: 'Testimonials appearing on this website are received via text, audio, or video submission. They are individual experiences, reflecting real-life experiences of those who have used our services. However, individual results may vary. We do not claim that they are typical results that consumers will generally achieve.'
    },
    {
      id: 'financial',
      title: 'Financial Information Disclaimer',
      content: 'Any financial information, projections, or forecasts provided on this website are for illustrative purposes only and do not constitute financial advice. Past performance does not guarantee future results. You should consult with a qualified financial professional before making any investment or financial decisions.'
    },
    {
      id: 'tax',
      title: 'Tax Information Disclaimer',
      content: 'Tax information provided on this website is based on current laws and regulations, which are subject to change. We recommend consulting with a qualified tax professional for advice specific to your situation. Insight Integrators Management Consultancies LLC-FZ is not responsible for any penalties or liabilities arising from reliance on the tax information provided on this website.'
    },
    {
      id: 'accuracy',
      title: 'Accuracy of Information',
      content: 'We strive to ensure that all information on this website is accurate and current. However, we cannot guarantee that the information is free from errors or omissions. We reserve the right to modify the contents of this website at any time without prior notice.'
    },
    {
      id: 'copyright',
      title: 'Copyright and Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, images, and software, is the property of Insight Integrators Management Consultancies LLC-FZ and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or transmit any content without our prior written permission.'
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/40 text-[12px] font-light tracking-[0.3em] uppercase">Legal Information</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5 tracking-tight">
                Disclaimer
              </h1>
              
              <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Please read this disclaimer carefully before using our website or services
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated Section */}
        <section 
          id="last-updated"
          data-observe="true"
          className="py-6 bg-gray-50 border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-500 transform ${visibleSections['last-updated'] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <p className="text-gray-500 text-sm font-light">
                Last Updated: <span className="font-medium text-gray-700">April 30, 2025</span>
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-8 md:py-12 lg:py-10 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            
            {/* Introduction */}
            <div 
              id="intro"
              data-observe="true"
              className={`mb-12 transition-all duration-700 transform ${visibleSections.intro ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Important Notice</span>
              </div>
              <div className="bg-gray-50 border-l-4 border-[#2c154f] p-6 md:p-8">
                <p className="text-gray-600 text-base leading-relaxed font-light">
                  By accessing and using this website, you acknowledge that you have read, understood, 
                  and agree to be bound by the terms of this disclaimer. If you do not agree with any 
                  part of this disclaimer, please do not use our website.
                </p>
              </div>
            </div>

            {/* Disclaimer Sections */}
            <div className="space-y-10">
              {disclaimerSections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-observe="true"
                  className={`transition-all duration-700 transform ${visibleSections[section.id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
                >
                  <div className="border-b border-gray-200 pb-4 mb-5">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <div className="w-12 h-px text-justify bg-[#0a0a0a]/50 mt-3"></div>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Note */}
            <div 
              id="contact-note"
              data-observe="true"
              className={`mt-12 p-6 md:p-8 bg-gray-50 border border-gray-200 transition-all duration-700 transform ${visibleSections['contact-note'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Have Questions?</h3>
                  <p className="text-gray-500 text-sm font-light">
                    If you have any questions about this disclaimer, please contact us.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2c154f] text-white text-sm font-medium hover:bg-[#2c154f] transition-all duration-300 group"
                >
                  Contact Us
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

           
          </div>
        </section>

        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
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

export default DisclaimerPage;