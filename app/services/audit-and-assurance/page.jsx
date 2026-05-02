// app/services/audit-assurance/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AuditAssurancePage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Add this useEffect to handle hash-based navigation
useEffect(() => {
  // Check if there's a hash in the URL
  const hash = window.location.hash;
  if (hash && hash.length > 1) {
    // Remove the '#' character
    const elementId = hash.substring(1);
    
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Optional: Add a highlight effect to the target element
        targetElement.style.transition = 'all 0.3s ease';
        targetElement.style.backgroundColor = '#f3f4f6';
        setTimeout(() => {
          targetElement.style.backgroundColor = '';
        }, 2000);
      }
    }, 500);
  }
}, []); // Empty dependency array means this runs once when component mounts

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
      id: 'financial-reporting-advisory',
      name: 'Financial Reporting Advisory Services (FRAS)',
      shortDescription: 'Expert guidance on financial reporting standards and compliance requirements.',
      description: 'Our FRAS team provides comprehensive support for financial reporting under IFRS, US GAAP, and other major accounting frameworks. We help organizations navigate complex accounting standards, implement new requirements, and ensure accurate financial statement presentation.',
      detailedDescription: 'Financial reporting requires specialized expertise to ensure compliance with evolving standards. Our FRAS specialists provide tailored guidance on IFRS implementation, technical accounting matters, and complex financial transactions to help you present accurate and transparent financial statements.',
      keyFeatures: [
        'IFRS implementation and transition support',
        'Technical accounting position papers',
        'Financial statement preparation and review',
        'Accounting policy development',
        'Complex transaction accounting guidance',
        'New standard adoption assistance'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'business-risk-services',
      name: 'Business Risk Services',
      shortDescription: 'Identify, assess, and mitigate business risks across your organization.',
      description: 'Our risk professionals help organizations build resilient risk management frameworks. We identify emerging risks, assess control effectiveness, and develop strategies to mitigate operational, financial, and compliance risks.',
      detailedDescription: 'In today\'s volatile business environment, proactive risk management is essential. Our risk specialists work with you to identify vulnerabilities, strengthen controls, and build resilience against operational, financial, and compliance risks.',
      keyFeatures: [
        'Enterprise risk management (ERM) framework development',
        'Risk assessment and prioritization',
        'Internal control evaluation',
        'Fraud risk assessment',
        'Business continuity planning',
        'Risk monitoring and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const industryData = [
  {
    id: "outsourcing",
    title: " Outsourcing and Business Solutions ",
    description: "Driving operational excellence and efficiency across manufacturing value chains.",
    services: [
      {
        id: "accounting",
        name: "Accounting and Book-keeping  ",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help streamline procurement, logistics, and distribution for cost efficiency.",
        detailedDescription: "Our experts analyze your end-to-end supply chain to eliminate bottlenecks, improve delivery timelines, and reduce operational costs while increasing resilience.",
        keyFeatures: [
          "Supply chain diagnostics",
          "Logistics optimization",
          "Vendor management strategy",
          "Demand forecasting",
          "Digital supply chain transformation"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "business-incorporation",
        name: " Business Incorporation",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "Enhance operational performance by eliminating waste and improving processes.",
        detailedDescription: "We implement lean frameworks to improve production cycles, reduce inefficiencies, and enhance overall productivity across manufacturing operations.",
        keyFeatures: [
          "Lean transformation",
          "Process optimization",
          "Waste reduction",
          "KPI tracking",
          "Continuous improvement frameworks"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "liquidation",
        name: "Liquidation and de",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "Improve stock visibility and warehouse operations.",
        detailedDescription: "We help design inventory systems that balance cost with availability while improving warehouse layout and automation.",
        keyFeatures: [
          "Inventory optimization",
          "Warehouse design",
          "Stock control systems",
          "Automation solutions",
          "Demand planning"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "stock-asset",
        name: "Stock & Asset Audit / Count",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "Improve stock visibility and warehouse operations.",
        detailedDescription: "We help design inventory systems that balance cost with availability while improving warehouse layout and automation.",
        keyFeatures: [
          "Inventory optimization",
          "Warehouse design",
          "Stock control systems",
          "Automation solutions",
          "Demand planning"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "hr",
        name: " HR and Payroll ",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "Improve stock visibility and warehouse operations.",
        detailedDescription: "We help design inventory systems that balance cost with availability while improving warehouse layout and automation.",
        keyFeatures: [
          "Inventory optimization",
          "Warehouse design",
          "Stock control systems",
          "Automation solutions",
          "Demand planning"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
    ]
  }
];

  const faqs = [
    {
      question: 'What is the difference between an audit and an assurance engagement?',
      answer: 'An audit is a specific type of assurance engagement that provides a reasonable level of assurance on historical financial information. Assurance engagements encompass a broader range of services, including reviews, agreed-upon procedures, and other attestation services that may provide different levels of assurance (reasonable or limited).'
    },
    {
      question: 'How often should my company undergo an audit?',
      answer: 'The frequency of audits depends on your regulatory requirements, stakeholder needs, and internal policies. Publicly traded companies typically require annual audits. Private companies may choose annual, bi-annual, or periodic audits based on shareholder requirements, lender covenants, or risk management considerations.'
    },
    {
      question: 'What is the typical timeline for completing an audit?',
      answer: 'Audit timelines vary based on company size, complexity, and readiness. Generally, audits take 4-8 weeks from commencement to completion, though larger organizations may require 8-12 weeks. We work with you to establish realistic timelines that meet your reporting deadlines.'
    },
    {
      question: 'How do you ensure independence and objectivity in your audits?',
      answer: 'We strictly adhere to international ethical standards and independence requirements. We maintain robust internal policies, rotating audit partners periodically, and conduct regular independence assessments to ensure our objectivity remains uncompromised.'
    },
    {
      question: 'What information do you need to begin an audit engagement?',
      answer: 'We typically require financial statements, general ledgers, trial balances, supporting documentation for significant transactions, internal control documentation, prior year audit reports, and access to key personnel for inquiries. We provide a detailed information request list at engagement commencement.'
    },
    {
      question: 'How do you handle confidential client information?',
      answer: 'Client confidentiality is paramount. We maintain strict data protection protocols, including secure data transfer methods, access controls, confidentiality agreements for all personnel, and compliance with relevant data protection regulations including GDPR and UAE data protection laws.'
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
          className="relative py-10 md:py-12 lg:py-16  flex items-center justify-center overflow-hidden bg-[#2c154f]"
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
                <span className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase">Audit & Assurance</span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Audit & <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Assurance</span>
              </h1>
              
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Independent, objective assurance that enhances credibility and builds stakeholder confidence.
              </p>
{/*               
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
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
          className="py-12 md:py-14 bg-gray-200 border-b border-gray-50"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-800 transform ${visibleSections.overview ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Precision. <span className="font-bold">Integrity.</span> Trust.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Our Audit & Assurance services provide independent, objective assurance that enhances credibility 
                and builds stakeholder confidence. We deliver thorough examinations of financial records, 
                internal controls, and operational processes to ensure accuracy, compliance, and transparency.
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
            <div className={`text-center mb-20 transition-all duration-800 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Comprehensive <span className="font-bold">Audit Solutions</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Tailored assurance services to meet your organization's unique needs
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-5"></div>
            </div>

            {/* this is only services content  */}
            <div className="space-y-24">
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
                        <div className="w-12 h-px bg-gray-400"></div>
                        <span className="text-[10px] text-gray-500 font-light uppercase tracking-wider">Service</span>
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
                      
                      <div className="mb-8">
                        <h4 className="text-xs font-semibold text-gray-600 mb-4 tracking-wide uppercase">Key Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a] transition-all"></div>
                              <span className="text-sm text-gray-600 font-light group-hover:text-gray-700 transition-colors">{feature}</span>
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
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-md shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/30 via-transparent to-transparent z-10"></div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[420px] object-cover transition-transform duration-700 group-hover/image:scale-105"
                          />
                          {/* <div className="absolute bottom-0 left-0 w-24 h-px bg-white/50"></div>
                          <div className="absolute bottom-0 right-0 w-24 h-px bg-white/50"></div> */}
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


{/* this is the services and sub services content  */}
            <div className="space-y-24 mt-10">
              {industryData.map((industry, index) => (
  <div key={industry.id} className="mb-20">

    {/* INDUSTRY HEADING */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {industry.title}
      </h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        {industry.description}
      </p>
    </div>

    {/* SERVICES INSIDE INDUSTRY */}
    <div className="space-y-16">
      {industry.services.map((service, i) => (
        <div
          key={service.id}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-400">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="w-10 h-px bg-gray-300"></div>
              <span className="text-xs uppercase text-gray-400">
                Service
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {service.name}
            </h3>

            <p className="text-gray-500 mb-4">
              {service.description}
            </p>

            <p className="text-sm text-gray-400 border-l-2 pl-4 mb-6">
              {service.detailedDescription}
            </p>

            {/* FEATURES */}
            <div className="grid md:grid-cols-2 gap-3">
              {service.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2c154f] rounded-full"></div>
                  <span className="text-sm text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (PER SERVICE ✅) */}
          <div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

        </div>
      ))}
    </div>
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
                  <span className="text-[#ffffff] text-[10px] font-light tracking-[0.2em] uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-4 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    'Enhanced stakeholder confidence and trust',
                    'Improved internal control environment',
                    'Regulatory compliance assurance',
                    'Risk identification and mitigation strategies',
                    'Operational efficiency gains',
                    'Independent objective perspective',
                    'Real-time issue identification',
                    'Actionable recommendations for improvement'
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
                Everything you need to know about our audit and assurance services
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white text-[10px] tracking-[0.3em] uppercase">Get Started</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready for a <span className="font-bold">Trusted Audit Partner?</span>
              </h2>
              
              <p className="text-white/40 text-base mb-10 font-light max-w-md mx-auto">
                Contact our Audit & Assurance experts to discuss how we can help your organization achieve excellence in financial reporting and compliance.
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

export default AuditAssurancePage;