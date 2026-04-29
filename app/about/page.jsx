// // app/about/page.jsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const AboutPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredService, setHoveredService] = useState(null);
//   const pageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     if (pageRef.current) {
//       observer.observe(pageRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       id: 1,
//       title: 'Audit & Assurance',
//       description: 'Independent, objective assurance that enhances credibility and builds stakeholder confidence.',
//       features: ['External Audits', 'Internal Audits', 'Compliance Reviews', 'Financial Reporting']
//     },
//     {
//       id: 2,
//       title: 'Advisory',
//       description: 'Strategic guidance to navigate complexity and unlock sustainable growth opportunities.',
//       features: ['Strategic Planning', 'Business Transformation', 'M&A Advisory', 'Risk Management']
//     },
//     {
//       id: 3,
//       title: 'Tax',
//       description: 'Strategic tax solutions that minimize liability while ensuring full regulatory compliance.',
//       features: ['Corporate Tax', 'VAT Compliance', 'International Tax', 'Tax Planning']
//     },
//     {
//       id: 4,
//       title: 'Media',
//       description: 'Compelling brand narratives and creative solutions that captivate audiences.',
//       features: ['Brand Strategy', 'Content Creation', 'Digital Marketing', 'Video Production']
//     }
//   ];

//   const uniqueQualities = [
//     {
//       title: 'Multi-Vertical Integration',
//       description: 'Seamless collaboration across all four verticals to provide comprehensive, end-to-end solutions.'
//     },
//     {
//       title: 'Client-Centric Approach',
//       description: 'Solutions tailored to your unique challenges, never one-size-fits-all templates.'
//     },
//     {
//       title: 'Global Standards, Local Knowledge',
//       description: 'International best practices combined with deep regional market insights.'
//     },
//     {
//       title: 'Results-Driven Methodology',
//       description: 'Proven frameworks focused on measurable outcomes and tangible business value.'
//     },
//     {
//       title: 'Absolute Confidentiality',
//       description: 'Your trust is our priority with rigorous data protection and privacy protocols.'
//     },
//     {
//       title: 'Timely Excellence',
//       description: 'Unwavering commitment to deadlines without compromising quality or attention to detail.'
//     }
//   ];

//   const strategicDirections = [
//     {
//       title: 'Digital Transformation',
//       description: 'Leveraging cutting-edge technology to enhance service delivery and client outcomes.',
//       metric: '85%',
//       metricLabel: 'Digital Adoption'
//     },
//     {
//       title: 'Regional Expansion',
//       description: 'Strategic growth across MENA region to serve clients wherever they operate.',
//       metric: '5+',
//       metricLabel: 'Markets Served'
//     },
//     {
//       title: 'Talent Development',
//       description: 'Investing in exceptional people who drive innovation and service excellence.',
//       metric: '50+',
//       metricLabel: 'Industry Experts'
//     },
//     {
//       title: 'Sustainable Practices',
//       description: 'Integrating ESG principles into our advisory framework for lasting impact.',
//       metric: '100%',
//       metricLabel: 'ESG Compliant'
//     }
//   ];

//   const milestones = [
//     { year: '2014', title: 'Founded', description: 'Established in Dubai with a vision for integrated advisory excellence.' },
//     { year: '2016', title: 'Expansion', description: 'Launched Tax and Media verticals to serve diverse client needs.' },
//     { year: '2019', title: 'Regional Presence', description: 'Expanded operations across MENA with strategic partnerships.' },
//     { year: '2024', title: '100+ Clients', description: 'Served over 100 satisfied clients globally with proven results.' }
//   ];

//   const coreValues = [
//     { value: 'Integrity', description: 'We act with honesty, transparency, and ethical rigor in every engagement.' },
//     { value: 'Excellence', description: 'We pursue the highest standards of quality and continuous improvement.' },
//     { value: 'Collaboration', description: 'We work as trusted partners, building lasting relationships.' },
//     { value: 'Innovation', description: 'We embrace new thinking and adaptive solutions for complex challenges.' }
//   ];

//   return (
//     <>
//       <Navbar />
//       <div ref={pageRef} className="min-h-screen bg-white mt-16">
        
//         {/* Hero Section - Premium Minimal */}
//         <section className="relative pt-12 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-16  flex items-center justify-center overflow-hidden bg-[#2c154f]">
//           <div className="absolute inset-0 bg-[#2c154f]"></div>

//           {/* Subtle decorative lines */}
//           {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
//             <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
//             <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
//           </div> */}

//           <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
//             <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
//               {/* <div className="inline-flex items-center gap-3 mb-8">
//                 <div className="h-px w-12 bg-white/15"></div>
//                 <span className="text-white/30 text-xs font-light tracking-[0.3em] uppercase">Since 2014</span>
//                 <div className="h-px w-12 bg-white/15"></div>
//               </div> */}

//               <h1 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight leading-[1.1]">
//                 Insight Integrators
//                 <br />
//                 <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
//                   Where Excellence Meets Integrity
//                 </span>
//               </h1>

//               <p className="text-white/30 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
//                 A premier multi-vertical advisory firm committed to delivering exceptional value 
//                 through integrity, innovation, and unwavering excellence.
//               </p>

//               {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
//                 <div className="flex flex-col items-center gap-2">
//                   <span className="text-white/15 text-[10px] tracking-[0.2em] uppercase">Explore</span>
//                   <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center">
//                     <div className="w-0.5 h-2 bg-white/20 rounded-full mt-2 animate-[scroll_2s_ease-in-out_infinite]"></div>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </section>

//         {/* Your Vision. Our Expertise. - With Image on Right */}
//         <section className="py-12 md:py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-20 items-center">
//               {/* Left Content */}
//               <div className={`transition-all duration-800 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
//                 <div className="mb-8">
//                   <div className="inline-flex items-center gap-3 mb-6">
//                     <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
//                     <span className="text-[#0a0a0a] text-xs font-light tracking-[0.2em] uppercase">Our Philosophy</span>
//                   </div>
//                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.15]">
//                     Your Vision.
//                     <br />
//                     <span className="font-bold relative inline-block mt-2">
//                       Our Expertise.
//                       <span className="absolute -bottom-3 left-0 w-full h-px bg-[#0a0a0a]/10"></span>
//                     </span>
//                   </h2>
//                 </div>
//                 <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light text-justify">
//                   We bridge the gap between your aspirations and reality. Our integrated approach combines deep industry expertise with strategic thinking to transform challenges into opportunities.
//                 </p>
//                 <p className="text-gray-400 text-lg leading-relaxed font-light text-justify">
//                   Whether you need audit assurance, strategic advisory, tax optimization, or creative media solutions — we bring the right expertise to help you succeed.
//                 </p>
//               </div>

//               {/* Right Image */}
//               <div className={`relative transition-all duration-800 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                 <div className="relative">
//                   {/* <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#0a0a0a]/8"></div>
//                   <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-[#0a0a0a]/8"></div> */}
//                   <div className="relative overflow-hidden shadow-2xl">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent"></div>
//                     <img
//                       src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                       alt="Insight Integrators Team"
//                       className="w-full h-[500px] object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values Banner - No Icons */}
//         <section className="py-16 bg-[#2c154f]">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="grid md:grid-cols-4 gap-8">
//               {coreValues.map((value, index) => (
//                 <div
//                   key={index}
//                   className={`text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
//                   style={{ transitionDelay: `${index * 100 + 300}ms` }}
//                 >
//                   <div className="w-px h-8 bg-white/50 mx-auto mb-4"></div>
//                   <h3 className="text-white text-xl font-light tracking-wide mb-3 uppercase">{value.value}</h3>
//                   <p className="text-gray-400 text-md leading-relaxed font-light max-w-[200px] mx-auto ">{value.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Our Strategic Direction - No Icons */}
//         <section className="py-12 md:py-14 bg-gray-200">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
//                 <span className="text-[#0a0a0a] text-xs font-light tracking-[0.2em] uppercase">Strategic Direction</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5 tracking-tight">
//                 Charting the <span className="font-bold">Path Forward</span>
//               </h2>
//               <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
//                 Our strategic pillars guide our growth and define how we create lasting value for our clients.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {strategicDirections.map((direction, index) => (
//                 <div
//                   key={index}
//                   className={`group text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
//                   style={{ transitionDelay: `${index * 100 + 400}ms` }}
//                 >
//                   <div className="mb-6">
//                     <div className="text-5xl font-light text-[#0a0a0a] mb-2">{direction.metric}</div>
//                     <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">{direction.metricLabel}</div>
//                   </div>
//                   <div className="w-12 h-px bg-[#0a0a0a]/10 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
//                   <h3 className="text-base font-semibold text-gray-900 mb-3 tracking-wide">{direction.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed font-light">{direction.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* What Makes Us Unique - No Icons */}
//         <section className="py-14 md:py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-20 items-start">
//               {/* Left - Title & Timeline */}
//               <div className={`transition-all duration-800 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
//                 <div className="inline-flex items-center gap-3 mb-6">
//                   <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
//                   <span className="text-[#0a0a0a] text-xs font-light tracking-[0.2em] uppercase">Our Distinction</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
//                   What Makes Us <span className="font-bold">Unique</span>
//                 </h2>
//                 <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
//                   In a crowded marketplace, we stand apart through our unwavering commitment to quality, integrity, and client success.
//                 </p>

//                 {/* Premium Timeline */}
//                 <div className="space-y-8">
//                   <h3 className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Our Journey</h3>
//                   <div className="relative">
//                     <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0a0a0a]/15 via-[#0a0a0a]/8 to-transparent"></div>
//                     {milestones.map((milestone, index) => (
//                       <div key={index} className="relative flex gap-6 pb-8 last:pb-0 group">
//                         <div className="relative z-10">
//                           <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#0a0a0a]/20 transition-all">
//                             <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/15 group-hover:bg-[#0a0a0a]/30 transition-all"></div>
//                           </div>
//                         </div>
//                         <div>
//                           <span className="text-[11px] font-mono text-gray-400 tracking-wide">{milestone.year}</span>
//                           <h4 className="text-base font-semibold text-gray-900 mt-1">{milestone.title}</h4>
//                           <p className="text-sm text-gray-400 leading-relaxed mt-1 font-light">{milestone.description}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Unique Qualities Grid - No Icons */}
//               <div className={`grid md:grid-cols-2 gap-6 transition-all duration-800 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                 {uniqueQualities.map((quality, index) => (
//                   <div
//                     key={index}
//                     className="group bg-white p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-200"
//                   >
//                     <div className="w-px h-8 bg-[#0a0a0a]/10 mb-5 group-hover:h-10 transition-all duration-500"></div>
//                     <h3 className="font-semibold text-gray-900 mb-3 text-base tracking-wide">{quality.title}</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed font-light">{quality.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Services - No Icons */}
//         <section className="py-14 md:py-16 bg-[#2c154f]">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <div className="h-px w-10 bg-[#0a0a0a]/60"></div>
//                 <span className="text-white text-xs font-light tracking-[0.2em] uppercase">What We Offer</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
//                 Comprehensive <span className="font-bold">Solutions</span>
//               </h2>
//               <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
//                 Integrated professional services designed to meet your evolving business needs.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className={`group relative bg-white p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-200 hover:shadow-2xl
//                     ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
//                   style={{ transitionDelay: `${index * 100 + 500}ms` }}
//                 >
//                   <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0a0a0a] to-[#0a0a0a]/60 group-hover:w-full transition-all duration-700"></div>
//                   <div className="text-4xl font-light text-gray-300 mb-5 group-hover:text-gray-400 transition-colors">{String(index + 1).padStart(2, '0')}</div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-5 font-light">{service.description}</p>
//                   <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
//                     {service.features.slice(0, 3).map((feature, idx) => (
//                       <span key={idx} className="text-xs text-gray-400 font-light tracking-wide">— {feature}</span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Leadership Principles - No Icons */}
//         <section className="py-14 md:py-16 bg-gray-200">
//           <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
//             <div className="grid lg:grid-cols-2 gap-20 items-center">
//               <div className={`order-2 lg:order-1 transition-all duration-800 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                     alt="Leadership Principles"
//                     className="w-full h-[500px] object-cover shadow-2xl"
//                   />
//                   {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#0a0a0a]/8"></div>
//                   <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#0a0a0a]/8"></div> */}
//                 </div>
//               </div>
//               <div className={`order-1 lg:order-2 transition-all duration-800 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                 <div className="inline-flex items-center gap-3 mb-6">
//                   <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
//                   <span className="text-[#0a0a0a] text-xs font-light tracking-[0.2em] uppercase">Our Promise</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
//                   Built on Trust, <br /><span className="font-bold">Driven by Excellence</span>
//                 </h2>
//                 <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
//                   At Insight Integrators, trust is our currency and excellence is our standard. Every engagement is built on a foundation of transparency, expertise, and unwavering commitment to your success.
//                 </p>
//                 <div className="space-y-6">
//                   {[
//                     '100% Client Satisfaction Commitment',
//                     'Confidentiality & Data Protection Certified',
//                     'International Standards Compliant'
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center gap-4 group">
//                       <div className="w-px h-6 bg-[#0a0a0a]/15 group-hover:h-8 transition-all duration-300"></div>
//                       <span className="text-gray-500 text-sm font-light tracking-wide">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section - Premium Minimal */}
//         <section className="py-12 bg-[#2c154f] relative overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
//           </div>

//           <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
//             <div className={`transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <div className="inline-flex items-center gap-3 mb-8">
//                 <div className="h-px w-12 bg-white/8"></div>
//                 <span className="text-white/15 text-[10px] tracking-[0.3em] uppercase">Get Started</span>
//                 <div className="h-px w-12 bg-white/8"></div>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
//                 Ready to Work <span className="font-bold">With Us?</span>
//               </h2>
//               <p className="text-white/20 text-lg mb-10 max-w-xl mx-auto font-light">
//                 Let's discuss how Insight Integrators can help your business thrive.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-5 justify-center">
//                 <Link href="/contact" className="group px-9 py-3.5 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300">
//                   Schedule a Consultation
//                   <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
//                 </Link>
//                 <Link href="/contact" className="px-9 py-3.5 border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300">
//                   Contact Our Team
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <style jsx global>{`
//           @keyframes scroll {
//             0%, 100% { transform: translateY(0); opacity: 0.2; }
//             50% { transform: translateY(8px); opacity: 0.6; }
//           }
//         `}</style>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AboutPage;


// app/about/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [hoveredService, setHoveredService] = useState(null);
  const observerRef = useRef(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections(prev => ({ ...prev, hero: true, vision: true, values: true }));

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

  const services = [
    {
      id: 1,
      title: 'Audit & Assurance',
      description: 'Independent, objective assurance that enhances credibility and builds stakeholder confidence.',
      features: ['External Audits', 'Internal Audits', 'Compliance Reviews', 'Financial Reporting']
    },
    {
      id: 2,
      title: 'Advisory',
      description: 'Strategic guidance to navigate complexity and unlock sustainable growth opportunities.',
      features: ['Strategic Planning', 'Business Transformation', 'M&A Advisory', 'Risk Management']
    },
    {
      id: 3,
      title: 'Tax',
      description: 'Strategic tax solutions that minimize liability while ensuring full regulatory compliance.',
      features: ['Corporate Tax', 'VAT Compliance', 'International Tax', 'Tax Planning']
    },
    {
      id: 4,
      title: 'Media',
      description: 'Compelling brand narratives and creative solutions that captivate audiences.',
      features: ['Brand Strategy', 'Content Creation', 'Digital Marketing', 'Video Production']
    }
  ];

  const uniqueQualities = [
    {
      title: 'Multi-Vertical Integration',
      description: 'Seamless collaboration across all four verticals to provide comprehensive, end-to-end solutions.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Solutions tailored to your unique challenges, never one-size-fits-all templates.'
    },
    {
      title: 'Global Standards, Local Knowledge',
      description: 'International best practices combined with deep regional market insights.'
    },
    {
      title: 'Results-Driven Methodology',
      description: 'Proven frameworks focused on measurable outcomes and tangible business value.'
    },
    {
      title: 'Absolute Confidentiality',
      description: 'Your trust is our priority with rigorous data protection and privacy protocols.'
    },
    {
      title: 'Timely Excellence',
      description: 'Unwavering commitment to deadlines without compromising quality or attention to detail.'
    }
  ];

  const strategicDirections = [
    {
      title: 'Digital Transformation',
      description: 'Leveraging cutting-edge technology to enhance service delivery and client outcomes.',
      metric: '85%',
      metricLabel: 'Digital Adoption'
    },
    {
      title: 'Regional Expansion',
      description: 'Strategic growth across MENA region to serve clients wherever they operate.',
      metric: '5+',
      metricLabel: 'Markets Served'
    },
    {
      title: 'Talent Development',
      description: 'Investing in exceptional people who drive innovation and service excellence.',
      metric: '50+',
      metricLabel: 'Industry Experts'
    },
    {
      title: 'Sustainable Practices',
      description: 'Integrating ESG principles into our advisory framework for lasting impact.',
      metric: '100%',
      metricLabel: 'ESG Compliant'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Founded', description: 'Established in Dubai with a vision for integrated advisory excellence.' },
    { year: '2016', title: 'Expansion', description: 'Launched Tax and Media verticals to serve diverse client needs.' },
    { year: '2019', title: 'Regional Presence', description: 'Expanded operations across MENA with strategic partnerships.' },
    { year: '2024', title: '100+ Clients', description: 'Served over 100 satisfied clients globally with proven results.' }
  ];

  const coreValues = [
    { value: 'Integrity', description: 'We act with honesty, transparency, and ethical rigor in every engagement.' },
    { value: 'Excellence', description: 'We pursue the highest standards of quality and continuous improvement.' },
    { value: 'Collaboration', description: 'We work as trusted partners, building lasting relationships.' },
    { value: 'Innovation', description: 'We embrace new thinking and adaptive solutions for complex challenges.' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section 
          id="hero"
          data-observe="true"
          className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#2c154f]"
        >
          <div className="absolute inset-0 bg-[#2c154f]"></div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-[1.2]">
                Insight Integrators
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent block mt-2">
                  Where Excellence Meets Integrity
                </span>
              </h1>

              <p className="text-white/40 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light px-4">
                A premier multi-vertical advisory firm committed to delivering exceptional value 
                through integrity, innovation, and unwavering excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Your Vision. Our Expertise. */}
        <section 
          id="vision"
          data-observe="true"
          className="py-12 md:py-16 lg:py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className={`transition-all duration-800 delay-100 transform ${visibleSections.vision ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="mb-6 md:mb-8">
                  <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                    <div className="h-px w-8 md:w-10 bg-[#0a0a0a]/15"></div>
                    <span className="text-[#0a0a0a] text-[10px] md:text-xs font-light tracking-[0.2em] uppercase">Our Philosophy</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[1.2]">
                    Your Vision.
                    <br />
                    <span className="font-bold relative inline-block mt-2">
                      Our Expertise.
                      <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-[#0a0a0a]/10"></span>
                    </span>
                  </h2>
                </div>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
                  We bridge the gap between your aspirations and reality. Our integrated approach combines deep industry expertise with strategic thinking to transform challenges into opportunities.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                  Whether you need audit assurance, strategic advisory, tax optimization, or creative media solutions — we bring the right expertise to help you succeed.
                </p>
              </div>

              {/* Right Image */}
              <div className={`transition-all duration-800 delay-200 transform ${visibleSections.vision ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="relative">
                  <div className="relative overflow-hidden shadow-2xl rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent"></div>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Insight Integrators Team"
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Banner */}
        <section 
          id="values"
          data-observe="true"
          className="py-12 md:py-16 bg-[#2c154f]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 transform ${visibleSections.values ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-px h-8 bg-white/30 mx-auto mb-4"></div>
                  <h3 className="text-white text-lg md:text-xl font-light tracking-wide mb-3 uppercase">{value.value}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light max-w-xs mx-auto px-4">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Strategic Direction */}
        <section 
          id="strategic"
          data-observe="true"
          className="py-12 md:py-16 lg:py-20 bg-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-px w-8 md:w-10 bg-[#0a0a0a]/15"></div>
                <span className="text-[#0a0a0a] text-[10px] md:text-xs font-light tracking-[0.2em] uppercase">Strategic Direction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
                Charting the <span className="font-bold">Path Forward</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
                Our strategic pillars guide our growth and define how we create lasting value for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {strategicDirections.map((direction, index) => (
                <div
                  key={index}
                  className={`group text-center transition-all duration-700 transform ${visibleSections.strategic ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="mb-4 md:mb-6">
                    <div className="text-4xl md:text-5xl font-light text-[#0a0a0a] mb-2">{direction.metric}</div>
                    <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">{direction.metricLabel}</div>
                  </div>
                  <div className="w-12 h-px bg-[#0a0a0a]/10 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 tracking-wide">{direction.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light px-2">{direction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section 
          id="unique"
          data-observe="true"
          className="py-12 md:py-16 lg:py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left - Title & Timeline */}
              <div className={`transition-all duration-800 delay-100 transform ${visibleSections.unique ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                  <div className="h-px w-8 md:w-10 bg-[#0a0a0a]/50"></div>
                  <span className="text-[#0a0a0a] text-[10px] md:text-xs font-light tracking-[0.2em] uppercase">Our Distinction</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
                  What Makes Us <span className="font-bold">Unique</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-light">
                  In a crowded marketplace, we stand apart through our unwavering commitment to quality, integrity, and client success.
                </p>

                {/* Timeline */}
                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">Our Journey</h3>
                  <div className="relative">
                    <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/30 to-[#0a0a0a]/10"></div>
                    {milestones.map((milestone, index) => (
                      <div key={index} className="relative flex gap-4 md:gap-6 pb-6 md:pb-8 last:pb-0 group">
                        <div className="relative z-10">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#0a0a0a]/20 transition-all">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/15 group-hover:bg-[#0a0a0a]/30 transition-all"></div>
                          </div>
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-gray-400 tracking-wide">{milestone.year}</span>
                          <h4 className="text-base font-semibold text-gray-900 mt-1">{milestone.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed mt-1 font-light">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Unique Qualities Grid */}
              <div className={`grid sm:grid-cols-2 gap-5 md:gap-6 transition-all duration-800 delay-200 transform ${visibleSections.unique ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                {uniqueQualities.map((quality, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 md:p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-200 rounded-lg"
                  >
                    <div className="w-px h-8 bg-[#0a0a0a]/50 mb-4 md:mb-5 group-hover:h-10 transition-all duration-500"></div>
                    <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base tracking-wide">{quality.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{quality.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section 
          id="services"
          data-observe="true"
          className="py-12 md:py-16 lg:py-20 bg-[#2c154f]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-px w-8 md:w-10 bg-white/20"></div>
                <span className="text-white/60 text-[10px] md:text-xs font-light tracking-[0.2em] uppercase">What We Offer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                Comprehensive <span className="font-bold">Solutions</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
                Integrated professional services designed to meet your evolving business needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-gray-200 hover:shadow-2xl rounded-md
                    ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2c154f] to-[#4a2a7a] group-hover:w-full transition-all duration-700"></div>
                  <div className="text-3xl md:text-4xl font-light text-gray-300 mb-4 md:mb-5 group-hover:text-gray-400 transition-colors">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-5 font-light">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-3 md:pt-4 border-t border-gray-50">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-[11px] md:text-xs text-gray-400 font-light tracking-wide">— {feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Principles */}
        <section 
          id="leadership"
          data-observe="true"
          className="py-12 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`order-2 lg:order-1 transition-all duration-800 delay-100 transform ${visibleSections.leadership ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent"></div>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Leadership Principles"
                    className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover shadow-2xl rounded-lg"
                  />
                </div>
              </div>
              <div className={`order-1 lg:order-2 transition-all duration-800 delay-200 transform ${visibleSections.leadership ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
                  <div className="h-px w-8 md:w-10 bg-[#0a0a0a]/15"></div>
                  <span className="text-[#0a0a0a] text-[10px] md:text-xs font-light tracking-[0.2em] uppercase">Our Promise</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
                  Built on Trust, <br /><span className="font-bold">Driven by Excellence</span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-10 font-light">
                  At Insight Integrators, trust is our currency and excellence is our standard. Every engagement is built on a foundation of transparency, expertise, and unwavering commitment to your success.
                </p>
                <div className="space-y-4 md:space-y-6">
                  {[
                    '100% Client Satisfaction Commitment',
                    'Confidentiality & Data Protection Certified',
                    'International Standards Compliant'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 group">
                      <div className="w-px h-5 md:h-6 bg-[#0a0a0a]/15 group-hover:h-6 md:group-hover:h-8 transition-all duration-300"></div>
                      <span className="text-gray-600 text-sm font-light tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          data-observe="true"
          className="py-10 md:py-12 lg:py-12 bg-[#2c154f] relative overflow-hidden"
        >
          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px w-8 md:w-12 bg-white/40"></div>
                <span className="text-white/40 text-[12px] tracking-[0.3em] uppercase">Get Started</span>
                <div className="h-px w-8 md:w-12 bg-white/40"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 md:mb-5 tracking-tight">
                Ready to Work <span className="font-bold">With Us?</span>
              </h2>
              <p className="text-white/25 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto font-light px-4">
                Let's discuss how Insight Integrators can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center px-4">
                <Link href="/contact" className="group px-6 md:px-9 py-3 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 rounded-lg">
                  Schedule a Consultation
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/contact" className="px-6 md:px-9 py-3 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300 rounded-lg">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes scroll {
            0%, 100% { transform: translateY(0); opacity: 0.2; }
            50% { transform: translateY(8px); opacity: 0.6; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;