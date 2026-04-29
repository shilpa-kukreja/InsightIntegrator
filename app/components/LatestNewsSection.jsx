// app/components/LatestNewsSection.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const LatestNewsSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const newsArticles = [
    {
      id: 1,
      title: 'Mastering VAT Audits in UAE: What Triggers FTA Scrutiny and How to Prepare',
      slug: 'mastering-vat-audits-uae',
      date: 'November 3, 2025',
      excerpt: 'The Federal Tax Authority (FTA) conducts periodic VAT audits to ensure accurate tax reporting and compliance. These reviews assess whether businesses are adhering to UAE tax laws and maintaining proper records.',
      image: '/blog/blog-image1.png',
      category: 'Tax & Compliance',
      link: '#'
    },
    {
      id: 2,
      title: 'Supply Chain Risk Management & Optimization: Building Resilient Global Supply Networks',
      slug: 'supply-chain-risk-management',
      date: 'November 3, 2025',
      excerpt: 'Global supply chains are under unprecedented pressure. From geopolitical tensions and inflationary shocks to cyber threats and sustainability concerns, modern supply networks face complex challenges.',
      image: '/blog/blog-image2.png',
      category: 'Advisory',
      link: '#'
    },
    {
      id: 3,
      title: 'UAE E-Invoicing 2026: Is Your Business Ready for the Mandatory Transition?',
      slug: 'uae-e-invoicing-2026',
      date: 'November 3, 2025',
      excerpt: 'The UAE is preparing to transform how businesses issue and process invoices. Under the Federal Tax Authority\'s (FTA) mandate, all businesses will need to adopt e-invoicing standards.',
      image: '/blog/blog-image3.png',
      category: 'Digital Transformation',
      link: '#'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12 bg-[#2c154f] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-14 md:mb-20 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-white/80 text-xs md:text-sm font-semibold tracking-wide uppercase">Stay Updated</span>
          </div> */}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">Latest</span>
            <span className="text-white/80 ml-3">News</span>
          </h2>
          
          <div className="w-20 h-1 bg-white/30 mx-auto mt-5 rounded-full"></div>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Insights, updates, and expert perspectives on the latest industry developments
          </p>
        </div>

        {/* Premium News Grid - Different Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              className={`group transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Premium Card with Image - Different Style */}
              <div className="bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                
                {/* Image Container with Overlay - Different Layout */}
                <Link href={`/blogs/${article.slug}`}>
                <div className="relative h-80 overflow-hidden">
                  {/* Image */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay for better text visibility */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4f2e80]/80 via-[#4f2e80]/20 to-transparent z-10"></div> */}
                  
                  {/* Category Badge - Bottom Left */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-[#4f2e80] shadow-md">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Date Badge - Bottom Right */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#4f2e80]/90 backdrop-blur-sm rounded-lg">
                      <svg className="w-3 h-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white/90 text-xs font-medium">{article.date}</span>
                    </div>
                  </div>
                </div>
                </Link>
                
                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-gray-900 text-lg md:text-xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-[#4f2e80] transition-colors duration-300">
                    <Link href={article.link} className="hover:underline decoration-2 underline-offset-4">
                      {article.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <Link 
                    href={article.link}
                    className="inline-flex items-center gap-2 text-[#4f2e80] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>

      {/* Custom Styles for line-clamp */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LatestNewsSection;