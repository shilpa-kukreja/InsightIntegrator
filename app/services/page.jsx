// app/services/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'audit-assurance',
      title: 'Audit and Assurance',
      shortDescription: 'Independent, objective assurance that enhances credibility and builds stakeholder confidence.',
      description: 'Our Audit & Assurance services provide independent, objective assurance that enhances credibility and builds stakeholder confidence. We deliver thorough examinations of financial records, internal controls, and operational processes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      items: [
        'Financial Reporting Advisory Services (FRAS)',
        'Business risk services',
        'Business Process Solutions',
        'Regulatory Advisory Services',
        'Financial advisory',
        'Technology Advisory & Cybersecurity',
        'Forensics',
        'ESG Services',
      ],
      color: 'from-gray-900 to-gray-700',
      bgLight: 'bg-gray-50'
    },
    {
      id: 'tax',
      title: 'Tax',
      shortDescription: 'Strategic tax solutions that minimize liability while ensuring full regulatory compliance.',
      description: 'Our Tax practice provides strategic solutions that minimize liability while ensuring full regulatory compliance. We help you navigate complex tax landscapes, identify opportunities, and implement effective tax strategies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        'Corporate Tax',
        'VAT',
        'Transfer Pricing',
        'International Tax and Tax Due Diligence',
        'Customs and International Trade',
        'Excise Tax',
        'Pillar Two Services in the UAE',
        'FATCA & CRS Compliance Services in the UAE',
      ],
      color: 'from-gray-800 to-gray-600',
      bgLight: 'bg-gray-50'
    },
    {
      id: 'advisory',
      title: 'Advisory',
      shortDescription: 'Strategic guidance to navigate complexity and unlock sustainable growth opportunities.',
      description: 'Our Advisory practice delivers strategic guidance to help you navigate complexity and unlock sustainable growth opportunities. We combine deep industry expertise with analytical rigor to solve your most pressing business challenges.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      items: [
        'In-Country Value (ICV)',
        'Strategy & Transformation',
        'Financial Advisory',
        'Risk Advisory',
        'Deal Advisory',
        'Restructuring Services',
        'Forensic Advisory',
        'Valuation Services',
      ],
      color: 'from-gray-900 to-gray-700',
      bgLight: 'bg-gray-50'
    },
    {
      id: 'media',
      title: 'Media',
      shortDescription: 'Compelling brand narratives and creative solutions that captivate audiences and drive engagement.',
      description: 'Our Media practice delivers compelling brand narratives and creative solutions that captivate audiences and drive meaningful engagement. We blend creativity with strategy to tell your story in ways that resonate and inspire action.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      items: [
        'Press Releases',
        'News & Events',
        'Media Coverage',
        'Annual Reports',
        'Thought Leadership',
        'Podcasts',
        'Webinars',
        'Case Studies',
      ],
      color: 'from-gray-800 to-gray-600',
      bgLight: 'bg-gray-50'
    }
  ];

  return (
    <>
      <Navbar />
      <div ref={pageRef} className="min-h-screen bg-white mt-16">
        
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#2c154f]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c154f] via-[#2c154f]/98 to-[#2c154f]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase">Our Services</span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                Comprehensive <span className="font-bold">Solutions</span>
              </h1>
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Integrated professional services designed to meet your evolving business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className={`group block transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="relative bg-white p-8 border border-gray-300 hover:border-gray-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-0 h-1 bg-[#2c154f] group-hover:w-full transition-all duration-700"></div>
                    
                    <div className="mb-5 text-gray-500 group-hover:text-[#2c154f] transition-colors">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:tracking-tight transition-all">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-[#2c154f] text-sm font-light group-hover:gap-2 transition-all">
                      Explore Services
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#2c154f]">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-white/40"></div>
                <span className="text-white text-[10px] font-light tracking-[0.2em] uppercase">Need Help?</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                Let's Discuss Your <span className="font-bold">Business Needs</span>
              </h2>
              <p className="text-gray-300 text-sm mb-8 font-light max-w-md mx-auto">
                Contact our team to learn how our services can help your business grow.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-2 text-white text-sm font-light border-b border-white/40 hover:border-white transition-all pb-1">
                Contact Us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;