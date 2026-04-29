// app/services/advisory/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdvisoryPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Setup Intersection Observer for multiple sections
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

    // Observe all sections with data-observe attribute
    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach(section => {
        if (section.id && observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, []);

  const serviceItems = [
    {
      id: 'icv',
      name: 'In-Country Value (ICV)',
      shortDescription: 'ICV certification and optimization for government contracts.',
      description: 'We help organizations achieve and optimize their In-Country Value scores, ensuring compliance with ICV requirements for government contracts and tenders in the UAE.',
      detailedDescription: 'The UAE government has implemented ICV requirements to promote local economic development. Our experts help you navigate ICV certification, optimize your score, and maintain compliance. We provide end-to-end support including certificate preparation, score improvement strategies, and ongoing monitoring.',
      keyFeatures: [
        'ICV certificate preparation and submission',
        'Score optimization strategies and roadmaps',
        'Compliance documentation and record keeping',
        'Training and awareness for procurement teams',
        'Ongoing monitoring and quarterly updates',
        'Integration with supplier registration systems'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'strategy-transformation',
      name: 'Strategy & Transformation',
      shortDescription: 'Strategic planning and business transformation services.',
      description: 'Our strategy and transformation team helps organizations define their strategic direction, identify growth opportunities, and execute transformative initiatives.',
      detailedDescription: 'In today\'s rapidly evolving business landscape, organizations must constantly adapt and transform. Our strategy experts work with you to define clear strategic direction, identify growth opportunities, and execute transformative initiatives that drive sustainable value creation.',
      keyFeatures: [
        'Strategic planning and roadmap development',
        'Operating model design and optimization',
        'Digital transformation strategy',
        'Change management and organizational alignment',
        'Performance improvement and cost optimization',
        'M&A integration and separation management'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'financial-advisory',
      name: 'Financial Advisory',
      shortDescription: 'Financial analysis, modeling, and transaction support.',
      description: 'We provide comprehensive financial advisory services including financial analysis, modeling, valuation, and transaction support for mergers, acquisitions, and capital raising.',
      detailedDescription: 'Sound financial decisions require robust analysis and expert guidance. Our financial advisory team provides sophisticated financial modeling, valuation, and transaction support to help you make informed decisions, raise capital, and execute successful transactions.',
      keyFeatures: [
        'Financial due diligence for buy-side and sell-side',
        'Business valuation for various purposes',
        'Financial modeling and forecasting',
        'Capital raising advisory and debt restructuring',
        'Investment analysis and portfolio optimization',
        'Fairness opinions and independent assessments'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'risk-advisory',
      name: 'Risk Advisory',
      shortDescription: 'Enterprise risk management and internal audit services.',
      description: 'Our risk advisory team helps organizations identify, assess, and manage risks across their operations, implementing robust risk management frameworks and internal audit functions.',
      detailedDescription: 'Effective risk management is essential for long-term business success. Our risk advisory specialists help you identify, assess, and mitigate risks across your organization, implement robust internal controls, and build resilient risk management frameworks that protect value.',
      keyFeatures: [
        'Enterprise risk management (ERM) framework',
        'Internal audit outsourcing and co-sourcing',
        'Risk assessment and prioritization',
        'Controls testing and optimization',
        'Governance and compliance reviews',
        'Board and audit committee advisory'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'deal-advisory',
      name: 'Deal Advisory',
      shortDescription: 'Mergers, acquisitions, and divestiture support.',
      description: 'We provide end-to-end deal advisory services to help you navigate mergers, acquisitions, divestitures, and joint ventures successfully.',
      detailedDescription: 'Mergers and acquisitions are complex transactions with significant risks and rewards. Our deal advisory team provides end-to-end support throughout the transaction lifecycle, from target identification and due diligence to integration planning and execution.',
      keyFeatures: [
        'Buy-side and sell-side transaction advisory',
        'Transaction strategy and target identification',
        'Vendor due diligence and data room management',
        'Integration and separation planning',
        'Negotiation support and valuation',
        'Post-merger integration (PMI) services'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'restructuring',
      name: 'Restructuring Services',
      shortDescription: 'Business restructuring and turnaround management.',
      description: 'Our restructuring team helps organizations navigate financial distress, optimize capital structure, and implement turnaround strategies to restore profitability.',
      detailedDescription: 'When businesses face financial challenges, decisive action is required. Our restructuring specialists help you navigate financial distress, optimize capital structure, and implement turnaround strategies that restore profitability and create sustainable value for stakeholders.',
      keyFeatures: [
        'Financial restructuring and debt optimization',
        'Operational turnaround and cost reduction',
        'Liquidity management and cash flow forecasting',
        'Creditor negotiations and stakeholder management',
        'Insolvency advisory and formal proceedings',
        'Business plan development and monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'forensic-advisory',
      name: 'Forensic Advisory',
      shortDescription: 'Fraud investigation and dispute advisory services.',
      description: 'Our forensic advisory team conducts independent investigations, provides expert witness services, and helps resolve commercial disputes and fraud allegations.',
      detailedDescription: 'Financial irregularities and commercial disputes require specialized investigative expertise. Our forensic advisory team conducts independent investigations, analyzes complex financial data, provides expert witness testimony, and helps resolve disputes efficiently.',
      keyFeatures: [
        'Fraud investigation and asset tracing',
        'Forensic data analytics and e-discovery',
        'Dispute advisory and litigation support',
        'Expert witness testimony and reports',
        'Compliance reviews and fraud risk assessments',
        'Anti-money laundering (AML) investigations'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'valuation',
      name: 'Valuation Services',
      shortDescription: 'Business valuation and intangible asset assessment.',
      description: 'We provide independent valuation services for businesses, intangible assets, and financial instruments for various purposes including transactions, financial reporting, and tax planning.',
      detailedDescription: 'Accurate valuation is critical for transactions, financial reporting, tax planning, and dispute resolution. Our valuation experts provide independent, defensible valuations for businesses, intangible assets, and financial instruments using recognized methodologies and industry best practices.',
      keyFeatures: [
        'Business valuation for transactions and planning',
        'Intangible asset valuation (brands, patents, etc.)',
        'Purchase price allocation (PPA) under IFRS',
        'Impairment testing for goodwill and assets',
        'Fair value measurement for financial reporting',
        'Valuation for tax and restructuring purposes'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const faqs = [
    {
      question: 'What is In-Country Value (ICV) and why is it important?',
      answer: 'In-Country Value (ICV) is a UAE government initiative that measures the contribution of businesses to the local economy. A higher ICV score increases competitiveness for government contracts and tenders, demonstrating commitment to local economic development through local spending, Emiratization, and investment.'
    },
    {
      question: 'How can advisory services help my business grow?',
      answer: 'Advisory services provide strategic guidance, expert analysis, and practical solutions to help you overcome challenges and seize opportunities. Whether you need help with strategy development, financial analysis, risk management, or transaction support, our experts bring specialized knowledge and experience to accelerate your growth.'
    },
    {
      question: 'What is the difference between financial advisory and deal advisory?',
      answer: 'Financial advisory focuses on financial analysis, modeling, valuation, and capital raising. Deal advisory is a subset focused specifically on mergers, acquisitions, divestitures, and other transactions, including due diligence, integration planning, and transaction support.'
    },
    {
      question: 'When should a company consider restructuring services?',
      answer: 'Companies should consider restructuring when facing financial distress, declining profitability, liquidity challenges, or significant operational inefficiencies. Early intervention often leads to better outcomes, so seeking advisory support at the first signs of trouble is recommended.'
    },
    {
      question: 'What is the difference between internal audit and risk advisory?',
      answer: 'Internal audit focuses on evaluating and improving the effectiveness of governance, risk management, and control processes. Risk advisory is broader, encompassing enterprise risk management, risk assessment, control design, and strategic risk planning, often working alongside internal audit functions.'
    },
    {
      question: 'How do valuation services support financial reporting?',
      answer: 'Valuation services support financial reporting under IFRS and other standards for purchase price allocation (PPA), impairment testing of goodwill and intangible assets, fair value measurement of financial instruments, share-based payment valuations, and other accounting requirements requiring fair value estimates.'
    }
  ];

  const scrollToItem = (itemId) => {
    const element = sectionRefs.current[itemId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveItem(itemId);
      setTimeout(() => setActiveItem(null), 3000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white mt-16">
        
        {/* Hero Section */}
        <section 
          id="hero"
          data-observe="true"
          className="relative py-10 md:py-12 lg:py-16 flex items-center justify-center overflow-hidden bg-[#2c154f]"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c154f] via-[#2c154f]/98 to-[#2c154f]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">Advisory Services</span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Strategic <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Advisory</span>
              </h1>
              
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Strategic guidance to navigate complexity and unlock sustainable growth opportunities.
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

        {/* Overview Section */}
        <section 
          id="overview"
          data-observe="true"
          className="py-12 md:py-12 bg-gray-200 border-b border-gray-50"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-800 transform ${visibleSections.overview ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                Strategic. <span className="font-bold">Forward-thinking.</span> Results-driven.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Our Advisory practice delivers strategic guidance to help you navigate complexity and unlock sustainable growth opportunities. 
                We combine deep industry expertise with analytical rigor to solve your most pressing business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Services Items Section */}
        <section 
          id="services"
          data-observe="true"
          className="py-12 md:py-12 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center mb-12 transition-all duration-800 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Comprehensive <span className="font-bold">Advisory Services</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Strategic guidance to help you navigate complexity and unlock sustainable growth opportunities
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-6"></div>
            </div>

            <div className="space-y-12">
              {serviceItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => sectionRefs.current[item.id] = el}
                  id={item.id}
                  data-observe="true"
                  className={`scroll-mt-24 transition-all duration-700 transform ${visibleSections[item.id] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-500 ${activeItem === item.id ? 'bg-gray-50 p-10 rounded-2xl -m-6' : ''}`}>
                    
                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-light text-gray-500 tracking-wider">{(index + 1).toString().padStart(2, '0')}</span>
                        <div className="w-12 h-px bg-gray-500"></div>
                        <span className="text-[12px] text-gray-500 font-light uppercase tracking-wider">Advisory Service</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-5 leading-tight">
                        {item.name}
                      </h3>
                      
                      <p className="text-gray-500 text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light border-l-2 border-gray-400 pl-4">
                        {item.detailedDescription}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-600 mb-4 tracking-wide uppercase">Key Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a] transition-all"></div>
                              <span className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => scrollToItem(item.id)}
                        className="group inline-flex items-center gap-3 text-[#0a0a0a] text-sm font-medium tracking-wide transition-all"
                      >
                        <span className="border-b border-[#0a0a0a]/50 group-hover:border-[#0a0a0a] pb-0.5 transition-all">Learn More</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                    
                    {/* Right Side - Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group/image">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent rounded-md opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/50 via-transparent to-transparent z-10"></div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[430px] object-cover transition-transform duration-700 group-hover/image:scale-105"
                          />
                          {/* <div className="absolute bottom-0 left-0 w-24 h-px bg-white/20"></div>
                          <div className="absolute bottom-0 right-0 w-24 h-px bg-white/10"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {index < serviceItems.length - 1 && (
                    <div className="relative mt-12">
                      <div className="absolute left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gray-500 to-gray-300"></div>
                      <div className="flex justify-center">
                        <div className="w-2 h-1 rounded-full bg-gray-500"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          id="benefits"
          data-observe="true"
          className="py-12 md:py-12 bg-[#2c154f]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-800 transform ${visibleSections.benefits ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#ffffff]/50"></div>
                  <span className="text-[#ffffff] text-[12px] font-light tracking-[0.2em] uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-6 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    'Strategic clarity and actionable direction',
                    'Data-driven decision making and insights',
                    'Risk identification and mitigation strategies',
                    'Transaction success and value optimization',
                    'Sustainable growth and value creation',
                    'Expert guidance through business complexity',
                    'Industry-leading methodologies and frameworks',
                    'Cross-functional expertise and integrated solutions'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                      <div className="w-px h-8 bg-[#ffffff]/50 group-hover:h-12 transition-all duration-300"></div>
                      <span className="text-[#ffffff] text-base font-light group-hover:text-[#ffffff] transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="faq"
          data-observe="true"
          className="py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center mb-16 transition-all duration-800 transform ${visibleSections.faq ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#2c154f]/50"></div>
                <span className="text-[#2c154f] text-[11px] font-semibold tracking-[0.2em] uppercase">Knowledge Base</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2c154f]/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-5 tracking-tight">
                Frequently Asked <span className="font-bold bg-gradient-to-r from-[#2c154f] to-[#4a2a7a] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-gray-400 text-base font-light max-w-2xl mx-auto">
                Everything you need to know about our advisory services
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#2c154f]/20 via-[#2c154f]/60 to-[#2c154f]/20 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-500 ease-out ${
                    openFaq === index ? 'lg:row-span-1' : ''
                  }`}
                >
                  <div 
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl ${
                      openFaq === index 
                        ? 'shadow-2xl ring-2 ring-[#2c154f]/20 ring-offset-0' 
                        : 'hover:shadow-lg hover:border-gray-100'
                    }`}
                  >
                    {/* Premium gradient border accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2c154f] via-[#6b3fa0] to-[#2c154f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-6 lg:p-7 text-left group/btn"
                      aria-expanded={openFaq === index}
                    >
                      <div className="flex-1 pr-6">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[10px] font-mono text-[#2c154f]/40 font-medium tracking-wider">
                            {`0${index + 1}`.slice(-2)}
                          </span>
                          <div className="w-6 h-px bg-[#2c154f]/20"></div>
                        </div>
                        <span className="text-base lg:text-lg font-medium text-gray-800 group-hover/btn:text-[#2c154f] transition-colors duration-300 leading-relaxed">
                          {faq.question}
                        </span>
                      </div>
                      <div className={`relative flex-shrink-0 w-10 h-10 rounded-full border transition-all duration-400 flex items-center justify-center ${
                        openFaq === index 
                          ? 'border-[#2c154f] bg-[#2c154f] text-white shadow-md shadow-[#2c154f]/20' 
                          : 'border-gray-200 bg-gray-50 text-gray-400 group-hover/btn:border-[#2c154f]/30 group-hover/btn:bg-[#2c154f]/5'
                      }`}>
                        <svg 
                          className={`w-4 h-4 transition-all duration-400 ${openFaq === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Answer Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 lg:px-7 lg:pb-7 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#2c154f]/15 to-transparent mb-5"></div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#2c154f]/5 flex items-center justify-center">
                              <svg className="w-3.5 h-3.5 text-[#2c154f]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-light flex-1">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium contact card */}
            {/* <div className="mt-20 text-center">
              <div className="inline-block">
                <div className="relative bg-gradient-to-r from-[#2c154f]/5 via-white to-[#2c154f]/5 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-2xl border border-[#2c154f]/10 pointer-events-none"></div>
                  <p className="text-gray-500 text-sm font-light mb-5">
                    Still have questions? We're here to help you find answers.
                  </p>
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 text-[#2c154f] text-sm font-medium transition-all duration-300"
                  >
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#2c154f] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                      Contact Our Audit Experts
                    </span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          data-observe="true"
          className="py-12 bg-[#2c154f] relative overflow-hidden"
        >
          {/* <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">Get Started</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready to <span className="font-bold">Transform Your Business?</span>
              </h2>
              
              <p className="text-white/50 text-base mb-10 font-light max-w-md mx-auto">
                Contact our Advisory experts to discuss how we can help you achieve your strategic goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative px-9 py-3.5 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-gray-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Our Team
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                <Link 
                  href="/services" 
                  className="px-9 py-3.5 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
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

export default AdvisoryPage;