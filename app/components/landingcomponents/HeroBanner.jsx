"use client";

import { Phone, CheckCircle, Star, Users, Award, Clock, Shield, Calendar, MessageSquare, Building2, FileText, Calculator, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactPopup from "./ContactPopup";
import axios from "axios";




export default function HeroBanner() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceType: "",
        otherService: "",   // 👈 ADD THIS
        message: ""
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const GOOGLE_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbxAhWNPFf_xLhDY2j-CRa3WgOQMVvb9NHKmoS4JZmFrvHhK90oqmnl6JK7t-vR4GRrK/exec";


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
  e.preventDefault();
    setIsLoading(true);

  // ✅ FINAL DATA CREATE HERE
  const finalData = {
    ...formData,
    serviceType:
      formData.serviceType === "other"
        ? formData.otherService
        : formData.serviceType,
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

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceType: "",
        otherService: "", // ✅ reset this also
        message: "",
      });
      setIsSubmitted(false);
      setIsLoading(false);
      
    }, 3000);

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Something went wrong");
  } finally {
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


    const services = [
        { value: "tax", label: "Income Tax Filing", icon: <FileText className="w-4 h-4" /> },
        { value: "gst", label: "GST Registration & Filing", icon: <Building2 className="w-4 h-4" /> },
        { value: "company", label: "Company Registration", icon: <Building2 className="w-4 h-4" /> },
        { value: "audit", label: "Audit & Compliance", icon: <Calculator className="w-4 h-4" /> },
        { value: "advisory", label: "Business Advisory", icon: <MessageSquare className="w-4 h-4" /> },
        { value: "accounting", label: "Accounting Services", icon: <CreditCard className="w-4 h-4" /> },
        { value: "other", label: "Other", icon: <MessageSquare className="w-4 h-4" /> },
    ];

    return (
        <section className="relative min-h-screen flex  items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover    bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/landingimages/image/01.png')",
                    backgroundAttachment: 'sticky',
                    backgroundPosition: 'top'
                }}
            >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 " />

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTBIMTB2NDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />
            </div>

            {/* Content */}
            <div className="relative w-full ">
                <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                        {/* Left Content - 7 columns */}




                        {/* Right Side - Content */}
                        <div className="lg:col-span-7 space-y-8">

                       
                            {/* Contact Popup */}
                            {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}

                        </div>


                        {/* Right Contact Form - 5 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-5"
                        >
                            <div className="relative">
                                {/* Form Container with Premium Glass Effect */}
                                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                                    {/* Form Header */}
                                    <div className="relative p-8 bg-[#4f2e80]">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                                                    <MessageSquare className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">Free  Consultation</h3>
                                                    <p className="text-blue-100 text-sm mt-1">Speak directly with our experts</p>
                                                </div>
                                            </div>
                                           
                                        </div>

                                        
                                    </div>

                                    {/* Form Body */}
                                    <div  className="p-8 max-h-[65vh] overflow-y-auto">

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
                                                {/* Name Field */}
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


                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Company Name <span className="text-red-500"></span>
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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

                                                {/* Contact Fields */}
                                                <div className="grid md:grid-cols-2 gap-6">
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
                                                </div>

                                                {/* Service Selection */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Select Service <span className="text-red-500"></span>
                                                    </label>
                                                    <select
                                                        name="serviceType"
                                                        value={formData.serviceType}
                                                        onChange={handleChange}
                                                        
                                                        className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400 appearance-none"
                                                    >
                                                        <option value="">Select a service</option>
                                                        <option value="Internal Audit">Internal Audit</option>
                                                        <option value="AML / Compliance">AML / Compliance</option>
                                                        <option value="Corporate Governance">Corporate Governance</option>
                                                        <option value="VAT">VAT</option>
                                                        <option value="Corporate Tax">Corporate Tax</option>
                                                        <option value="DIFC / ADGM Support">DIFC / ADGM Support</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>

                                                {/* Other Service Input */}
                                                {formData.serviceType === "other" && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-4"
                                                    >
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Please specify your service <span className="text-red-500">*</span>
                                                        </label>

                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3 pointer-events-none">
                                                                <MessageSquare className="w-5 h-5 text-gray-400" />
                                                            </div>

                                                            <textarea
                                                                name="otherService"
                                                                value={formData.otherService}
                                                                onChange={handleChange}
                                                                required
                                                                rows={3}
                                                                placeholder="Describe the service you are looking for..."
                                                                className="w-full pl-10 pr-4 py-3 
    border border-gray-200 rounded-xl 
    focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent 
    outline-none transition-all 
    bg-gray-50 hover:bg-white focus:bg-white 
    text-gray-900 placeholder-gray-400 
    resize-none 
    max-h-32 overflow-y-auto"   // 👈 IMPORTANT
                                                            />

                                                        </div>
                                                    </motion.div>
                                                )}


                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    className="group relative w-full bg-[#4f2e80] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-0.5"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        <Calendar className="w-5 h-5" />
                                                        Get Free Consultation
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
    );
}