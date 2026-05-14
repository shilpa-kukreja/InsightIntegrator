// app/services/tax/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TaxPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);
  const pageRef = useRef(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Create observer that keeps watching
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all sections with IDs
    const sections = document.querySelectorAll('[data-observe="true"]');
    sections.forEach((section) => {
      if (section.id) {
        observerRef.current.observe(section);
      }
    });

    // Set initial visible for hero
    setVisibleSections((prev) => ({ ...prev, hero: true }));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const serviceItems = [
    {
      id: "corporate-tax",
      name: "Corporate Tax",
      shortDescription:
        "Comprehensive corporate tax compliance and planning services.",
      description:
        "Our corporate tax services help businesses manage evolving tax obligations with greater clarity, compliance, and operational confidence. We support organizations in understanding regulatory requirements, improving tax processes, and maintaining accurate tax reporting practices.",
      detailedDescription:
        "Through a structured and practical approach, we assist businesses in managing tax-related responsibilities while supporting informed financial and operational decision-making. We work with organizations to address corporate tax requirements through compliance-focused support, reporting coordination, and strategic tax process management aligned with applicable regulations.",
      keyFeatures: [
        "Corporate tax compliance support",
        "Tax registration assistance",
        "Tax return preparation support",
        "Tax impact assessment",
        "Regulatory reporting coordination",
        "Tax process advisory",
      ],
      image:
        "/tak/CorporateTax.jpg",
    },
    {
      id: "vat",
      name: "VAT",
      shortDescription:
        "Value Added Tax registration, filing, and advisory services.",
      description:
        "Our VAT services are designed to help businesses manage regulatory obligations efficiently while maintaining accurate reporting and compliance standards. We assist organizations with VAT-related processes, documentation, and ongoing compliance requirements across various business activities. ",
      detailedDescription:
        "From registration support to return management, our approach focuses on reducing compliance risks and improving reporting accuracy through structured VAT practices.Our specialists support businesses in handling VAT procedures, maintaining proper documentation, and addressing operational VAT matters with practical and compliance-focused guidance.",
      keyFeatures: [
        "VAT registration support",
        "VAT return filing assistance",
        "VAT compliance reviews",
        " VAT documentation management",
        " Input and output VAT assessment",
        "VAT advisory for business transactions",
      ],
      image:
        "/tak/Vat.jpg",
    },
    // {
    //   id: 'transfer-pricing',
    //   name: 'Transfer Pricing',
    //   shortDescription: 'Documentation, compliance, and advisory for intercompany transactions.',
    //   description: 'Our transfer pricing specialists help multinational enterprises establish arm\'s length pricing for intercompany transactions, prepare documentation, and manage compliance with local and international requirements.',
    //   detailedDescription: 'Transfer pricing remains a key focus area for tax authorities worldwide. Our team helps you establish robust transfer pricing policies, maintain comprehensive documentation, and defend your positions during tax audits.',
    //   keyFeatures: [
    //     'Transfer pricing policy development and review',
    //     'Master file and local file preparation',
    //     'Benchmarking studies and economic analyses',
    //     'TP risk assessments and health checks',
    //     'Advance pricing agreements (APAs)',
    //     'Litigation support and defense'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'international-tax',
    //   name: 'International Tax and Tax Due Diligence',
    //   shortDescription: 'Cross-border tax planning and transaction advisory.',
    //   description: 'We provide international tax advisory services for cross-border transactions, helping you navigate complex tax treaties, permanent establishment risks, and global tax optimization strategies.',
    //   detailedDescription: 'Operating across borders introduces complex tax considerations. Our international tax team helps you structure cross-border operations efficiently while managing permanent establishment risks and leveraging tax treaty benefits.',
    //   keyFeatures: [
    //     'Cross-border transaction advisory and structuring',
    //     'Tax treaty analysis and benefits optimization',
    //     'Permanent establishment risk assessment',
    //     'Withholding tax optimization strategies',
    //     'Tax due diligence for M&A transactions',
    //     'Inbound and outbound investment advisory'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'customs-trade',
    //   name: 'Customs and International Trade',
    //   shortDescription: 'Customs compliance and trade optimization strategies.',
    //   description: 'Our customs and trade experts help organizations manage import/export compliance, optimize duty positions, and navigate complex customs regulations across multiple jurisdictions.',
    //   detailedDescription: 'International trade regulations are constantly evolving. Our customs specialists help you navigate complex import/export requirements, optimize duty positions, and maintain compliance with customs authorities.',
    //   keyFeatures: [
    //     'Customs classification (HS code determination)',
    //     'Valuation advisory and transfer pricing for customs',
    //     'Origin determination and preference programs',
    //     'Customs audit support and representation',
    //     'Trade compliance program development',
    //     'Authorized Economic Operator (AEO) certification'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'excise-tax',
    //   name: 'Excise Tax',
    //   shortDescription: 'Excise tax registration, filing, and compliance services.',
    //   description: 'We help businesses in the UAE comply with excise tax regulations, including registration, return filing, and compliance with specific requirements for excisable goods.',
    //   detailedDescription: 'Excise tax applies to specific goods including tobacco, energy drinks, and carbonated beverages. Our team ensures your business remains compliant with all registration, reporting, and payment obligations.',
    //   keyFeatures: [
    //     'Excise tax registration and deregistration',
    //     'Return preparation and monthly filing',
    //     'Stock and production record maintenance',
    //     'Tax audit support and representation',
    //     'Compliance health checks and reviews',
    //     'Excise tax planning for new products'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'pillar-two',
    //   name: 'Pillar Two Services in the UAE',
    //   shortDescription: 'Global minimum tax compliance and advisory.',
    //   description: 'Our team provides comprehensive advisory on Pillar Two global minimum tax rules, helping multinational enterprises assess impact, calculate top-up taxes, and meet compliance obligations.',
    //   detailedDescription: 'The OECD Pillar Two framework introduces a global minimum tax of 15% for large multinational enterprises. Our specialists help you understand the impact, calculate top-up taxes, and implement compliance frameworks.',
    //   keyFeatures: [
    //     'Pillar Two impact assessment for your group',
    //     'GloBE rules application and interpretation',
    //     'Top-up tax calculations and reporting',
    //     'Safe harbor assessments and elections',
    //     'Compliance framework design and implementation',
    //     'Transitional and ongoing compliance support'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 'fatca-crs',
    //   name: 'FATCA & CRS Compliance Services in the UAE',
    //   shortDescription: 'International tax information exchange compliance.',
    //   description: 'We help financial institutions comply with FATCA and CRS requirements, including registration, due diligence, reporting, and ongoing compliance management.',
    //   detailedDescription: 'Financial institutions face increasing obligations under FATCA and CRS for automatic exchange of financial account information. Our team helps you establish robust compliance frameworks and meet all reporting deadlines.',
    //   keyFeatures: [
    //     'FATCA/CRS registration with relevant authorities',
    //     'Due diligence procedures for account classification',
    //     'Annual reporting to tax authorities',
    //     'Compliance reviews and gap assessments',
    //     'Training and awareness for staff',
    //     'Ongoing compliance management support'
    //   ],
    //   image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // }
  ];

  const faqs = [
    {
      question:
        "When is the deadline for Corporate Tax registration in the UAE?",
      answer:
        "Corporate Tax registration deadlines are generally assigned based on the company’s license issuance date. Businesses should complete registration within the timeline announced by the Federal Tax Authority to avoid administrative penalties and compliance issues.",
    },
    {
      question: "Who is required to register for Corporate Tax in the UAE?",
      answer:
        "Most businesses and commercial entities operating in the UAE are required to register for Corporate Tax, including mainland companies and certain free zone entities, depending on their activities and taxable income.",
    },
    {
      question: "What documents are required for Corporate Tax registration?",
      answer:
        "Businesses typically need trade license details, Emirates ID or passport copies of authorized signatories, company incorporation documents, and relevant contact information during the registration process.",
    },
    {
      question: "Are free zone companies subject to Corporate Tax?",
      answer:
        "Free zone companies may qualify for tax benefits if they meet the conditions defined under UAE Corporate Tax regulations. However, registration and compliance requirements may still apply depending on business activities.",
    },
    {
      question: "What happens if a company fails to register on time?",
      answer:
        "Late registration may result in penalties, compliance complications, and delays in fulfilling tax obligations. Timely registration helps businesses maintain smooth regulatory operations.",
    },
    {
      question:
        "Can businesses get professional support for Corporate Tax compliance?",
      answer:
        "Yes, professional tax advisors can assist with registration, return filing, compliance reviews, documentation management, and ongoing tax-related support to help businesses meet regulatory requirements efficiently.",
    },
  ];

  const scrollToItem = (itemId) => {
    const element = sectionRefs.current[itemId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div ref={pageRef} className="min-h-screen bg-white mt-16">
        {/* Hero Section */}
        <section
          id="hero"
          data-observe="true"
          className="relative py-12 md:py-16 lg:py-16 flex items-center justify-center overflow-hidden bg-[#2c154f]"
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div
              className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase">
                  Tax Services
                </span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Strategic{" "}
                <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Tax Solutions
                </span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Structured tax advisory services focused on regulatory
                alignment, financial clarity, and efficient tax management for
                businesses.
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
            <div
              className={`text-center transition-all duration-800 transform ${visibleSections.overview ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-[#0a0a0a]/40"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Accuracy.
                <span className="font-bold"> Compliance.</span> Tax Efficiency.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/40 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
              Our tax services help businesses manage regulatory obligations, improve tax planning processes, and maintain greater financial clarity. We support organizations with structured advisory solutions designed to address evolving tax requirements while improving operational confidence and compliance readiness.

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
            <div
              className={`text-center mb-20 transition-all duration-800 transform ${visibleSections.services ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/40"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Comprehensive <span className="font-bold">Tax Services</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
               Structured tax advisory solutions designed to support compliance, reporting accuracy, and effective tax management.

              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/40 mx-auto mt-6"></div>
            </div>

            <div className="space-y-16">
              {serviceItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (sectionRefs.current[item.id] = el)}
                  id={item.id}
                  data-observe="true"
                  className={`scroll-mt-24 transition-all duration-700 transform ${visibleSections[item.id] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-500 ${activeItem === item.id ? "bg-gray-50 p-10 rounded-2xl -m-6" : ""}`}
                  >
                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-light text-gray-500 tracking-wider">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div className="w-12 h-px bg-gray-400"></div>
                        <span className="text-[12px] text-gray-500 font-light uppercase tracking-wider">
                          Tax Service
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-5 leading-tight">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-base leading-relaxed mb-4 text-justify">
                        {item.description}
                      </p>

                      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light border-l-2 border-gray-400 pl-4 text-justify">
                        {item.detailedDescription}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xs font-semibold text-gray-600 mb-4 tracking-wide uppercase">
                          Key Capabilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.keyFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/40 group-hover:bg-[#0a0a0a] transition-all"></div>
                              <span className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <button
                        onClick={() => scrollToItem(item.id)}
                        className="group inline-flex items-center gap-3 text-[#0a0a0a] text-sm font-medium tracking-wide transition-all"
                      >
                        <span className="border-b border-[#0a0a0a]/50 group-hover:border-[#0a0a0a] pb-0.5 transition-all">Learn More</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button> */}
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
              <div
                className={`transition-all duration-800 transform ${visibleSections.benefits ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#ffffff]/50"></div>
                  <span className="text-[#ffffff] text-[12px] font-light tracking-[0.2em] uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-4 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-8"></div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    "Structured tax planning and compliance support",
                    "Improved accuracy in tax reporting and filings",
                    "Better visibility into tax obligations and timelines",
                    "Support for regulatory and documentation requirements",
                    "Reduced compliance risks and reporting gaps",
                    "Practical guidance for evolving tax regulations",
                    "Streamlined tax processes and operational efficiency",
                    "Reliable support for business and transaction-related tax matters",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                      <div className="w-px h-8 bg-[#ffffff]/50 group-hover:h-12 transition-all duration-300"></div>
                      <span className="text-[#ffffff] text-base font-light group-hover:text-[#ffffff] transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section 
          id="faq"
          data-observe="true"
          className="py-24 md:py-32 bg-white"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center mb-16 transition-all duration-800 transform ${visibleSections.faq ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
                <span className="text-[#0a0a0a] text-[10px] font-light tracking-[0.2em] uppercase">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Frequently Asked <span className="font-bold">Questions</span>
              </h2>
              <p className="text-gray-400 text-base font-light max-w-2xl mx-auto">
                Find answers to common questions about tax compliance, registration, and planning
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/10 mx-auto mt-8"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-100 transition-all duration-300 ${openFaq === index ? 'pb-6' : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-5 text-left group"
                  >
                    <span className="text-base md:text-lg font-light text-gray-800 group-hover:text-[#0a0a0a] transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'border-[#0a0a0a] bg-[#0a0a0a]' : 'group-hover:border-gray-300'}`}>
                      <svg 
                        className={`w-3 h-3 transition-all duration-300 ${openFaq === index ? 'rotate-180 text-white' : 'text-gray-400 group-hover:text-gray-600'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-5 pr-8">
                      <div className="w-8 h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            

            {/* Additional Contact for FAQ */}
        {/* <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm font-light mb-4">
                Still have questions about tax compliance or planning?
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-[#0a0a0a] text-sm font-medium border-b border-[#0a0a0a]/20 hover:border-[#0a0a0a] transition-all pb-1"
              >
                Contact Our Tax Experts
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>  */}

        <section
          id="faq"
          data-observe="true"
          className="py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div
              className={`text-center mb-16 transition-all duration-800 transform ${visibleSections.faq ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#2c154f]/50"></div>
                <span className="text-[#2c154f] text-[11px] font-semibold tracking-[0.2em] uppercase">
                  Knowledge Base
                </span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2c154f]/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-5 tracking-tight">
                Frequently Asked{" "}
                <span className="font-bold bg-gradient-to-r from-[#2c154f] to-[#4a2a7a] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-400 text-base font-light max-w-2xl mx-auto">
                Everything you need to know about our audit and assurance
                services
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#2c154f]/20 via-[#2c154f]/60 to-[#2c154f]/20 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-500 ease-out ${
                    openFaq === index ? "lg:row-span-1" : ""
                  }`}
                >
                  <div
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl ${
                      openFaq === index
                        ? "shadow-2xl ring-2 ring-[#2c154f]/20 ring-offset-0"
                        : "hover:shadow-lg hover:border-gray-100"
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
                      <div
                        className={`relative flex-shrink-0 w-10 h-10 rounded-full border transition-all duration-400 flex items-center justify-center ${
                          openFaq === index
                            ? "border-[#2c154f] bg-[#2c154f] text-white shadow-md shadow-[#2c154f]/20"
                            : "border-gray-200 bg-gray-50 text-gray-400 group-hover/btn:border-[#2c154f]/30 group-hover/btn:bg-[#2c154f]/5"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-all duration-400 ${openFaq === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 lg:px-7 lg:pb-7 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#2c154f]/15 to-transparent mb-5"></div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#2c154f]/5 flex items-center justify-center">
                              <svg
                                className="w-3.5 h-3.5 text-[#2c154f]/40"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
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
          <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div
              className={`transition-all duration-800 transform ${visibleSections.cta ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">
                  Get Started
                </span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Need <span className="font-bold">Tax Expertise?</span>
              </h2>

              <p className="text-white/40 text-base mb-8 font-light max-w-2xl mx-auto">
                Get professional guidance for tax compliance, reporting, and regulatory requirements tailored to your business operations. Our team helps simplify complex tax processes with practical and structured support.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact"
                  className="group relative px-9 py-3.5 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-gray-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Our Team
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-9 py-3.5 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
                >
                 <span className="relative z-10 flex items-center justify-center gap-2">
                    View All Services
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes scroll {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(8px);
              opacity: 1;
            }
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
            }
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

export default TaxPage;
