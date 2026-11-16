"use client";

import { useState } from "react";
import HeroSection from "../components/landingcomponents/HeroSection";
import AboutUs from "../components/landingcomponents/About-us";
import ProblemAwarenessSection from "../components/landingcomponents/Problemawarenesssection";
import CoreServicesSection from "../components/landingcomponents/CoreServices";
import TrustSection from "../components/landingcomponents/Insight";
import EngagementProcessSection from "../components/landingcomponents/EngagementProcess";
import LeadMagnetSection from "../components/landingcomponents/LeadMagnet";
import ContactPopup from "../components/landingcomponents/ContactPopup";
import ReviewsSection from "../components/landingcomponents/ReviewsSection";
import Footer from "../components/landingcomponents/Footer";

// Import the new packages component
import Header from "../components/AML/Header";
import AnnouncementBar from "../components/AML/AnnouncementBar";
import AMLCompliancePackages from "../components/AML/AMLCompliancePackages";
import AMLServices from "../components/AML/AMLServices";
import DNFBPCategories from "../components/AML/DNFBPCategories"
import WhyDNFBPCompliance from "../components/AML/WhyDNFBPCompliance"
import DNFBPCTA from "../components/AML/DNFBPCTA";
import AMLTypesSolutions from "../components/AML/AMLTypesSolutions";
import UAERegulations from "../components/AML/UAERegulations"
import WhyChooseUs from "../components/AML/WhyChooseUs";
import Testimonials from "../components/AML/Testimonials";
import ConsultationCTA from "../components/AML/ConsultationCTA";
import FAQSection from "../components/AML/FAQSection";

// HeroBanner related imports
import { Phone, CheckCircle, Users, Calendar, MessageSquare, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ==================== HERO BANNER STATE & LOGIC ====================
  // Added companyName back to the state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
  });

  const [isHeroPopupOpen, setIsHeroPopupOpen] = useState(false);
  const router = useRouter();

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzsJeIe--DM387zz9oK4tX9HoeWW5q7SOUArXb20ktOGS-PACKrO2-huZCZlZObMB0A/exec";

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const finalData = {
      ...formData,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      try {
        localStorage.setItem(
          'consultFormData',
          JSON.stringify({
            ...finalData,
            formType: 'hero-banner',
          })
        );
      } catch (storageErr) {
        console.error('localStorage save error:', storageErr);
      }

      setIsSubmitted(true);

      setFormData({
        fullName: "",
        companyName: "",
        phone: "",
        email: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setIsLoading(false);
        router.push('/thankyou');
      }, 1500);

    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong");
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // WhatsApp configuration for the left box button
  const whatsappNumber = "971526806400"; 
  const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // ==================== PAGE RENDER ====================
  return (
    <>
      <AnnouncementBar/>
      <Header />

      {/* ==================== HERO BANNER ==================== */}
      <section 
        className="relative flex items-center bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: "url('/aml/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative w-full">
          <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

              {/* Left Content - 7 columns */}
              <div className="lg:col-span-7 space-y-8">
                {isHeroPopupOpen && <ContactPopup onClose={() => setIsHeroPopupOpen(false)} />}
                
                <div className="bg-[#2a1247]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-white">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                    Expert AML (Anti Money Laundering) Compliance Services <span className="text-[#9d7dff]">in Dubai, UAE</span>
                  </h1>
                  
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
                    Ignoring AML rules can cost your business fines, frozen accounts, and credibility. At Insights Integrators, we make AML compliance simple for you.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f2e80] flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 text-[15px] sm:text-base">Meet AML requirements of UAE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f2e80] flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 text-[15px] sm:text-base">Simplify complex compliance into clear steps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f2e80] flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-200 text-[15px] sm:text-base">Tailored solutions for high-risk sectors</span>
                    </li>
                  </ul>

                  <p className="text-[#9d7dff] font-bold italic text-lg mb-10">
                    Audit Tomorrow? Be Ready Today.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#4f2e80] to-[#7b5aa6] hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#4f2e80]/40"
                    >
                      Whatsapp Now
                    </a>
                   <a 
  href="tel:+971526806400"
  className="group relative flex items-center justify-center gap-2 bg-[#4f2e80] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-[0_8px_20px_rgba(27,49,99,0.35)] hover:bg-[#152750] hover:scale-105 transition-all duration-300"
>
  {/* Exact same Phone Icon (or you can use an SVG) */}
  <img
    src="/footer/phone.png"
    alt="call"
    className="w-5 h-5"
  />
  <span>Call Us Now</span>
</a>
                  </div>
                </div>
              </div>

              {/* Right Contact Form - 5 columns */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                    <div className="relative p-8 bg-[#4f2e80]">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            <MessageSquare className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">GET STARTED NOW</h3>
                            <p className="text-blue-100 text-sm mt-1">Speak directly with our experts</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 max-h-[65vh] overflow-y-auto">
                      {isSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                          <p className="text-gray-600">Our CA expert will contact you within 30 minutes.</p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          
                          {/* Full Name */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                              />
                            </div>
                          </div>

                          {/* Company Name */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Company Name
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                              />
                            </div>
                          </div>

                          {/* Mobile Number */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="w-5 h-5 text-gray-400" />
                              </div>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                required
                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                              />
                            </div>
                          </div>

                          {/* Email Address */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                              />
                            </div>
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full bg-[#4f2e80] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <Calendar className="w-5 h-5" />
                              {isLoading ? "Submitting..." : "Get Free Consultation"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== END HERO BANNER ==================== */}

      <AMLCompliancePackages />
      <AMLServices/>
      <DNFBPCategories/>
      <WhyDNFBPCompliance/>
      <DNFBPCTA/>
      <AMLTypesSolutions/>
      <UAERegulations/>
      <WhyChooseUs/>
      <Testimonials/>
      <ConsultationCTA/>
      <FAQSection/>

      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
      <Footer onOpenPopup={() => setIsPopupOpen(true)} />
    </>
  );
}