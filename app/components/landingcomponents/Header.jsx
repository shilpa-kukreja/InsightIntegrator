"use client";

import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Shield,
  ChevronDown,
  Building2,
  Calendar,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactPopup from "./ContactPopup";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Taxation Services",
      items: [
        "Income Tax Filing",
        "GST Registration",
        "GST Filing",
        "TDS/TCS Compliance",
      ],
    },
    {
      title: "Company Services",
      items: [
        "Private Limited",
        "LLP Registration",
        "One Person Company",
        "Startup Registration",
      ],
    },
    {
      title: "Compliance Services",
      items: [
        "Annual Compliance",
        "ROC Filing",
        "Audit Services",
        "Secretarial Services",
      ],
    },
    {
      title: "Advisory Services",
      items: [
        "Business Advisory",
        "Tax Planning",
        "Financial Consulting",
        "Legal Services",
      ],
    },
  ];

  // const contactInfo = {
  //   phone: "+971 56 834 0225",
  //   // email: "lakeshgrover@gmail.com",
  // };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-2 text-sm">
         
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-300" />
                <span className="font-medium">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-300" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-300" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

          
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-green-400" />
                <span className="text-blue-100">ICAI Registered</span>
              </div>
              <div className="w-px h-4 bg-blue-700" />
              <div className="text-blue-100">
                <span className="font-semibold">10+</span> Years Experience
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/10 border-b border-blue-100"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              {/* <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-20" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div> */}
         <Link href="/" className="flex items-center gap-3"><div>
                <img src="/landingimages/image/logos.png" alt="CA Firm" className="w-32" />
              </div></Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* <a 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </a> */}

              {/* <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {services.map((service, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-gray-900 mb-3 text-sm">{service.title}</h3>
                            <ul className="space-y-2">
                              {service.items.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href="#" 
                                    className="text-sm text-gray-600 hover:text-blue-600 hover:font-medium transition-colors duration-200 flex items-center gap-2"
                                  >
                                    <div className="w-1 h-1 rounded-full bg-blue-200" />
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <a 
                          href="/all-services" 
                          className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2"
                        >
                          View All Services
                          <ChevronDown size={16} className="rotate-90" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              <div className="flex items-center gap-6">
                {/* <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#4f2e80]" />
                <span className="font-medium">{contactInfo.phone}</span>
              </div> */}
                {/* <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#4f2e80]" />
                <span>{contactInfo.email}</span>
              </div> */}
                {/* <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-300" />
                <span>{contactInfo.address}</span>
              </div> */}
              </div>

              {/* {["About Us", "Case Studies", "Blog", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`} 
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </a>
              ))} */}

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="relative group overflow-hidden bg-[#4f2e80] text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Phone size={18} className="relative z-10" />
                <span className="relative z-10">Free Consultation</span>
              </motion.button> */}

              <motion.a
                href="https://insight-integrator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden bg-[#4f2e80] text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <Globe size={18} className="relative z-10" />

                <span className="relative z-10">Visit Website</span>
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-6 border-t border-gray-100">
                  <div className="space-y-4">
                    {/* <a href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Home</a> */}

                    {/* Mobile Services Accordion */}
                    {/* <div className="border-b border-gray-100 pb-4">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === "mobile-services" ? null : "mobile-services")}
                        className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium py-2"
                      >
                        Services
                        <ChevronDown size={18} className={`transition-transform duration-200 ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "mobile-services" && (
                        <div className="mt-3 pl-4 space-y-3">
                          {services.flatMap(service => service.items).slice(0, 6).map((item, idx) => (
                            <a key={idx} href="#" className="block text-sm text-gray-600 hover:text-blue-600 py-1.5">
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div> */}

                    {/* {["About Us", "Case Studies", "Blog", "Contact"].map((item) => (
                      <a 
                        key={item}
                        href={`/${item.toLowerCase().replace(" ", "-")}`} 
                        className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                      >
                        {item}
                      </a>
                    ))} */}

                    {/* Mobile CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <motion.a
                       href="https://insight-integrator.vercel.app/"
                        className="w-full bg-[#4f2e80] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg flex items-center justify-center gap-3"
                      >
                        <Phone size={18} />
                        Visit Website
                      </motion.a>

                      {/* Mobile Contact Info */}
                      <div className="mt-6 space-y-3 text-sm text-gray-600">
                        {/* <div className="flex items-center gap-2">
                          <Phone size={14} className="text-[#4f2e80]" />
                          <span>{contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-[#4f2e80]" />
                          <span>{contactInfo.email}</span>
                        </div> */}
                        {/* <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-blue-600" />
                          <span>{contactInfo.address}</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Contact Popup */}
      {open && <ContactPopup onClose={() => setOpen(false)} />}
    </>
  );
}