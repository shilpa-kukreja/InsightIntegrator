// app/services/media/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MediaPage = () => {
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
      id: 'press-releases',
      name: 'Press Releases',
      shortDescription: 'Professional press release writing and distribution services.',
      description: 'Our media team crafts compelling press releases that effectively communicate your news and announcements to target audiences through strategic distribution channels.',
      detailedDescription: 'Press releases remain a cornerstone of effective media relations. Our experienced writers craft compelling announcements that capture attention, deliver key messages, and generate meaningful media coverage across traditional and digital channels.',
      keyFeatures: [
        'Professional press release writing and editing',
        'Strategic messaging development',
        'Media distribution services',
        'Press release SEO optimization',
        'Coverage tracking and reporting',
        'Crisis communication support'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'news-events',
      name: 'News & Events',
      shortDescription: 'Event coverage and news story development.',
      description: 'We provide comprehensive news and event coverage services, including story development, event planning, and post-event reporting to maximize your visibility.',
      detailedDescription: 'Events provide powerful opportunities to connect with stakeholders and generate positive media coverage. Our team manages every aspect of event communications, from pre-event promotion to real-time coverage and post-event reporting.',
      keyFeatures: [
        'Event planning and coordination',
        'News story development and pitching',
        'Media attendance coordination',
        'Real-time event coverage',
        'Post-event reporting and analysis',
        'Speaker and spokesperson support'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'media-coverage',
      name: 'Media Coverage',
      shortDescription: 'Strategic media relations and coverage placement.',
      description: 'Our media relations experts help you secure positive media coverage through targeted outreach, relationship building, and strategic story placement.',
      detailedDescription: 'Securing positive media coverage requires strategic relationships and compelling stories. Our media relations team leverages established journalist relationships to secure meaningful coverage that enhances your reputation and reaches target audiences.',
      keyFeatures: [
        'Media relations strategy development',
        'Journalist relationship management',
        'Strategic media pitching',
        'Interview coordination and prep',
        'Coverage monitoring and analysis',
        'Media training for executives'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'annual-reports',
      name: 'Annual Reports',
      shortDescription: 'Annual report design, writing, and production.',
      description: 'We create compelling annual reports that effectively communicate your organization\'s achievements, financial performance, and strategic direction to stakeholders.',
      detailedDescription: 'Annual reports are critical communication tools that tell your organization\'s story to investors, employees, and other stakeholders. Our team creates visually stunning reports that effectively communicate achievements, financial performance, and strategic vision.',
      keyFeatures: [
        'Annual report strategy and planning',
        'Content development and writing',
        'Creative design and layout',
        'Print and digital production',
        'Stakeholder distribution',
        'Interactive digital reports'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'thought-leadership',
      name: 'Thought Leadership',
      shortDescription: 'Executive positioning and thought leadership content.',
      description: 'Our team helps position your executives as industry thought leaders through strategic content development, speaking engagements, and media placements.',
      detailedDescription: 'Establishing executives as thought leaders builds trust, differentiates your brand, and opens new opportunities. Our team develops comprehensive thought leadership programs including bylined articles, speaking engagements, and executive branding initiatives.',
      keyFeatures: [
        'Executive positioning strategy',
        'Thought leadership content development',
        'Byline article writing and placement',
        'Speaking engagement support',
        'Social media amplification',
        'Executive brand development'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortDescription: 'Podcast production and content strategy.',
      description: 'We help you launch and produce professional podcasts that engage your audience, build brand authority, and deliver valuable content consistently.',
      detailedDescription: 'Podcasts offer a powerful way to connect with audiences through authentic conversations. Our team handles everything from concept development and guest booking to recording, editing, and distribution, ensuring professional-quality episodes that build brand authority.',
      keyFeatures: [
        'Podcast strategy and concept development',
        'Episode content planning and scripting',
        'Professional recording and editing',
        'Guest coordination and booking',
        'Distribution and promotion',
        'Performance analytics'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'webinars',
      name: 'Webinars',
      shortDescription: 'Webinar planning, production, and promotion.',
      description: 'Our webinar services cover everything from planning and content development to production, promotion, and post-event follow-up to maximize engagement.',
      detailedDescription: 'Webinars deliver valuable content while generating qualified leads. Our end-to-end webinar services include topic development, speaker preparation, technical production, promotion, and post-event follow-up to maximize attendance and engagement.',
      keyFeatures: [
        'Webinar strategy and topic planning',
        'Content and presentation development',
        'Speaker preparation and coaching',
        'Technical production and platform management',
        'Promotion and registration management',
        'Post-webinar follow-up and analytics'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      shortDescription: 'Success story development and case study creation.',
      description: 'We transform your client successes into compelling case studies that demonstrate your value, build credibility, and support your sales and marketing efforts.',
      detailedDescription: 'Case studies provide powerful social proof that demonstrates your value to prospective clients. Our team conducts in-depth client interviews and crafts compelling success stories that highlight challenges, solutions, and measurable results.',
      keyFeatures: [
        'Case study strategy and planning',
        'Client interview management',
        'Success story development and writing',
        'Professional design and formatting',
        'Distribution and repurposing',
        'Sales enablement support'
      ],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const faqs = [
    {
      question: 'How do press releases differ from other media content?',
      answer: 'Press releases are formal announcements designed for journalists and media outlets, following specific formatting guidelines. They focus on newsworthy events, product launches, or company announcements. Other media content like blog posts or case studies are designed for direct audience consumption and can be more informal.'
    },
    {
      question: 'How long does it take to see results from media coverage?',
      answer: 'Media coverage timelines vary based on your industry, news cycle, and target publications. Some coverage may appear within days for timely news, while feature stories may take weeks or months to develop. Consistent media relations efforts typically show measurable results within 3-6 months.'
    },
    {
      question: 'What makes a successful webinar?',
      answer: 'Successful webinars combine valuable content, engaging presenters, effective promotion, and seamless production. Key elements include clear learning objectives, interactive elements like polls and Q&A, professional slide design, reliable technology, and strategic promotion to target audiences.'
    },
    {
      question: 'How do you measure media coverage success?',
      answer: 'We measure success through multiple metrics including media impressions, share of voice, sentiment analysis, key message inclusion, reach across target publications, and engagement metrics. We also track how coverage influences website traffic, lead generation, and brand perception.'
    },
    {
      question: 'What is the process for developing a case study?',
      answer: 'Our case study process includes identifying suitable client success stories, conducting in-depth interviews with client representatives, reviewing project results and metrics, drafting compelling narratives, obtaining client approvals, and designing professional layouts for distribution across sales and marketing channels.'
    },
    {
      question: 'How do you ensure brand consistency across media content?',
      answer: 'We maintain brand consistency through detailed style guides, approved messaging frameworks, regular team training, and multi-level review processes. Every piece of content undergoes quality assurance checks for brand voice, visual identity, and key message alignment before distribution.'
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
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">Media Services</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Creative <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Media Solutions</span>
              </h1>
              
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Compelling brand narratives and creative solutions that captivate audiences and drive engagement.
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
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                Creative. <span className="font-bold">Impactful.</span> Memorable.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-6"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Our Media practice delivers compelling brand narratives and creative solutions that captivate audiences 
                and drive meaningful engagement. We blend creativity with strategy to tell your story in ways that resonate and inspire action.
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
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Comprehensive <span className="font-bold">Media Services</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Creative solutions to tell your story and engage your audience effectively
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-6"></div>
            </div>

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
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-sm font-light text-gray-500 tracking-wider">{(index + 1).toString().padStart(2, '0')}</span>
                        <div className="w-12 h-px bg-gray-500"></div>
                        <span className="text-[12px] text-gray-500 font-light uppercase tracking-wider">Media Service</span>
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
                    'Enhanced brand visibility and awareness',
                    'Increased audience engagement and loyalty',
                    'Strategic message amplification',
                    'Measurable media impact and ROI',
                    'Consistent brand storytelling',
                    'Professional content creation',
                    'Crisis communication readiness',
                    'Integrated multi-channel strategies'
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
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">Get Started</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready to <span className="font-bold">Tell Your Story?</span>
              </h2>
              
              <p className="text-white/50 text-base mb-8 font-light max-w-md mx-auto">
                Contact our Media experts to discuss how we can help amplify your brand message.
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

export default MediaPage;