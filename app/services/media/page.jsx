// app/services/audit-assurance/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MediaPage = () => {
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
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          // Optional: Add a highlight effect to the target element
          targetElement.style.transition = "all 0.3s ease";
          targetElement.style.backgroundColor = "#f3f4f6";
          setTimeout(() => {
            targetElement.style.backgroundColor = "";
          }, 2000);
        }
      }, 500);
    }
  }, []); // Empty dependency array means this runs once when component mounts

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections((prev) => ({ ...prev, hero: true }));

    // Create observer that keeps watching
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all sections with data-observe attribute
    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach((section) => {
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


  const industryData = [
    {
      id: "graphic-designing",
      title: " Graphic Designing",
      description:
        "Creative visuals and brand-focused designs that help businesses communicate with clarity, consistency, and impact across digital and print platforms.",
      services: [
        {
          id: "logo-design",
          name: "Logo Design",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Create distinctive brand identities with professionally crafted logos designed to reflect your business vision, values, and market presence.",
          detailedDescription:
            "We design memorable and versatile logos that strengthen brand recognition and establish a strong visual foundation for businesses across industries.",
          keyFeatures: [
            "Custom brand identity design",
            "Modern and timeless logo concepts",
            "Typography and color selection",
            "Brand consistency guidelines",
            "Scalable vector design",
            "Rebranding and logo refresh solutions"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "packaging-design",
          name: " Packaging Design",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Create visually appealing and market-ready packaging solutions that enhance product presentation, strengthen brand identity, and attract customer attention.",
          detailedDescription:
            "Our packaging design services combine creativity, branding, and functionality to deliver packaging that not only looks premium but also communicates product value effectively across retail and digital markets.",
          keyFeatures: [
            "Product packaging concepts",
            "Label and box design",
            "Brand-focused packaging visuals",
            "Print-ready packaging layouts",
            "Minimal and premium design styles",
            "Retail and e-commerce packaging solutions"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "catelogue-brocheers",
          name: "Catelogue & Brocheers Design",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Present your products, services, and brand story through professionally designed catalogues and brochures that leave a lasting impression.",
          detailedDescription:
            "We create visually engaging and well-structured marketing materials that help businesses communicate information clearly while maintaining a strong and consistent brand identity.",
          keyFeatures: [
            "Corporate brochure design",
            "Product catalogue layouts",
            "Company profile design",
            "Creative print and digital formats",
            "Brand-aligned visual presentation",
            "Clean and professional content structuring"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },
     {
      id: "web-designing",
      title: "Web Designing",
      description:
        "Modern, responsive, and performance-focused websites designed to strengthen your online presence and deliver seamless user experiences across all devices.",
      services: [
        {
          id: "ecommerce-development",
          name: "Ecommerce Development",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Build scalable and user-friendly eCommerce platforms designed to enhance customer experience, streamline online sales, and support business growth.",
          detailedDescription:
            "We develop visually engaging and conversion-focused eCommerce websites with secure functionality, responsive layouts, and smooth navigation tailored to your business goals.",
          keyFeatures: [
            "Custom eCommerce website development",
            "Mobile-responsive online stores",
            "Secure payment gateway integration",
            "Product and inventory management",
            "User-friendly shopping experience",
            "Performance and speed optimization"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "web-development",
          name: "Web Development",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Develop high-performance and scalable websites tailored to your business needs with seamless functionality, responsive layouts, and modern technologies.",
          detailedDescription:
            "Our web development solutions focus on creating secure, fast, and user-centric websites that improve engagement, strengthen digital presence, and support long-term business growth.",
          keyFeatures: [
            "Custom website development",
            "Responsive and mobile-friendly layouts",
            "CMS integration and management",
            "Secure and scalable web architecture",
            "API and third-party integrations",
            "Website speed and performance optimization"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "ui-ux",
          name: "UI/UX Design",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Design intuitive and visually engaging digital experiences that improve user interaction, strengthen brand perception, and increase customer satisfaction.",
          detailedDescription:
            "Our UI/UX design services focus on creating user-centered interfaces with seamless navigation, modern aesthetics, and optimized functionality across websites and digital platforms.",
          keyFeatures: [
            "User interface design",
            "User experience optimization",
            "Wireframing and prototyping",
            "Responsive design systems",
            "Interactive user journeys",
            "Conversion-focused design strategy"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },
      {
      id: "digital-marketing",
      title: " Digital Marketing",
      description:
        "Driving operational excellence and efficiency across manufacturing value chains.",
      services: [
        {
          id: "ecommerce-development",
          name: "Digital Marketing",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Build a strong online presence with result-driven digital marketing strategies designed to increase visibility, generate qualified leads, and accelerate business growth.",
          detailedDescription:
            "Our digital marketing services combine creativity, analytics, and performance-focused strategies to help brands connect with the right audience across search engines, social media, and digital platforms.",
          keyFeatures: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing (SMM/SMO)",
            "Pay-Per-Click Advertising (PPC)",
            "Content Writing & Marketing",
            "Google Ads & Meta Ads management",
            "Brand strategy and online positioning"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
       
     
      ],
    }, 
    
  ];

  const faqs = [
    {
      question:
        "What media services do you provide?",
      answer:
        "We offer complete media solutions including graphic designing, web designing, digital marketing, branding, content creation, photography, video editing, social media management, and advertising campaigns.",
    },
    {
      question: "Do you create custom graphic designs for businesses?",
      answer:
        "Yes, we design custom logos, brand identities, packaging, brochures, social media creatives, catalogs, banners, and marketing materials tailored to your brand image and business goals.",
    },
    {
      question: "Can you design and develop websites?",
      answer:
        "Absolutely. We create responsive, user-friendly, and modern websites including corporate websites, ecommerce stores, landing pages, portfolio sites, and custom web solutions.",
    },
    {
      question:
        "What digital marketing services do you offer?",
      answer:
        "Our digital marketing services include SEO, social media marketing, PPC advertising, content marketing, email campaigns, lead generation, online branding, and performance marketing strategies.",
    },
    {
      question: "Can you help improve our Google rankings?",
      answer:
        "Yes, our SEO strategies focus on improving website visibility, keyword rankings, organic traffic, technical optimization, and long-term online growth.",
    },
    {
      question: "Do you provide product and corporate photoshoots?",
      answer:
        "Yes, we offer professional photoshoots for products, corporate branding, events, ecommerce listings, social media campaigns, and promotional materials.",
    },
    {
      question: "How do you ensure branding consistency across all platforms?",
      answer:
        "We follow a strategic brand approach that maintains consistency in design, messaging, tone, colors, and visual identity across digital and offline platforms.",
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
            <div
              className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/50 text-[11px] font-light tracking-[0.3em] uppercase">
                  Media
                </span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                
                <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Creative Media Solutions
                </span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Building impactful digital experiences through strategic design, branding, content creation, and performance-driven marketing solutions.
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
            <div
              className={`text-center transition-all duration-800 transform ${visibleSections.overview ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Creative.   <span className="font-bold">Results-Focused.</span> Engaging.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Our media services are designed to help businesses strengthen their digital presence, connect with their audience, and build lasting brand value. From graphic design and website development to digital marketing and professional shoots, we combine creativity with strategy to deliver visually powerful and business-focused solutions.
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
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Comprehensive <span className="font-bold">Media Solutions</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Tailored media services to meet your organization's need
                needs
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-5"></div>
            </div>

           

            {/* this is the services and sub services content  */}
            <div className="space-y-24 mt-10">
              {industryData.map((industry, index) => (
                <div key={industry.id} className="mb-20" id={industry.id}>
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
                        id={service.id}
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

                          <p className="text-gray-500 mb-4 text-justify">
                            {service.description}
                          </p>

                          <p className="text-sm text-gray-400 border-l-2 pl-4 mb-6 text-justify">
                            {service.detailedDescription}
                          </p>

                          {/* FEATURES */}
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.keyFeatures.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#2c154f] rounded-full"></div>
                                <span className="text-sm text-gray-500">
                                  {feature}
                                </span>
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
              <div
                className={`transition-all duration-800 transform ${visibleSections.benefits ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#ffffff]/50"></div>
                  <span className="text-[#ffffff] text-[10px] font-light tracking-[0.2em] uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-4 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    "Increased brand visibility and online reach",
                    "Higher quality lead generation",
                    "Improved search engine rankings",
                    "Stronger social media engagement",
                    "Better conversion and sales performance",
                    "Data-driven marketing insights",
                    "Targeted audience acquisition strategies",
                    "Consistent brand positioning across platforms",
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
        {/* FAQ Section */}
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
                Explore answers to the most common questions about our media, branding, web design, and digital marketing services.
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
          {/* <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div
              className={`transition-all duration-800 transform ${visibleSections.cta ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white text-[10px] tracking-[0.3em] uppercase">
                  Get Started
                </span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready for a{" "}
                <span className="font-bold">Trusted Audit Partner?</span>
              </h2>

              <p className="text-white/40 text-base mb-10 font-light max-w-md mx-auto">
                Contact our Audit & Assurance experts to discuss how we can help
                your organization achieve excellence in financial reporting and
                compliance.
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
                  View All Services
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

export default MediaPage;
