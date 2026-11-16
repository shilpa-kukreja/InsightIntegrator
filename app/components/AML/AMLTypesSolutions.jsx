"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

export default function AMLTypesSolutions() {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const [openIndex, setOpenIndex] = useState(0);

    const solutions = [
        {
            title: "Preventive Controls (The First Line of Defence)",
            description: "Preventive controls focus on stopping money laundering before it reaches your business. In the UAE, this includes proper KYC and CDD to verify clients and UBOs, sanctions screening against EOCN and global lists, risk-based client classification, and regular staff training to identify red flags early, even before onboarding is completed."
        },
        {
            title: "Detective Controls (The Continuous Watch)",
            description: "Detective controls monitor ongoing activity to identify risks that may bypass initial checks. UAE businesses are expected to track transactions for unusual patterns, conduct periodic reviews of high-risk clients, and perform internal AML audits. These measures ensure suspicious behaviour is identified promptly and compliance processes are consistently followed."
        },
        {
            title: "Reporting Controls (The Regulatory Obligation)",
            description: "Reporting controls ensure regulatory authorities are informed once suspicious activity is identified. This includes timely filing of STRs or SARs through the goAML system, maintaining records for at least five years, and ensuring MLRO oversight. These actions support transparency, regulatory cooperation, and legal accountability under UAE AML laws."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="aml-types" className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Types of Anti Money Laundering Solutions in Dubai
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2  items-center">
                    
                    {/* Left Column - Image (natural size on desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-lg mx-auto lg:max-w-md lg:mx-0"
                    >
                        {/* Outer Light Violet Border */}
                        <div className="p-3 sm:p-4 bg-[#4f2e80]/10 rounded-[32px]">
                            {/* Inner White Border */}
                            <div className="p-2 sm:p-3 bg-white rounded-[24px]">
                                {/* The Image */}
                                <img 
                                    src="/aml/image.jpeg" 
                                    alt="Types of AML Solutions" 
                                    className="w-full h-auto object-cover rounded-[16px] shadow-sm"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Accordion */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full"
                    >
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Understanding the different types of AML solutions helps businesses implement comprehensive compliance frameworks that protect against money laundering risks.
                        </p>

                        <div className="border-t border-gray-200">
                            {solutions.map((item, index) => {
                                const isOpen = openIndex === index;
                                
                                return (
                                    <div key={index} className="border-b border-gray-200 py-5">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between text-left focus:outline-none group"
                                        >
                                            <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#4f2e80] transition-colors">
                                                {item.title}
                                            </span>
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#4f2e80]/20' : 'bg-[#4f2e80]/10'}`}>
                                                {isOpen ? (
                                                    <X className="w-4 h-4 text-[#4f2e80]" />
                                                ) : (
                                                    <Plus className="w-4 h-4 text-[#4f2e80]" />
                                                )}
                                            </div>
                                        </button>
                                        
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-600 pt-4 pr-8 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-[#4f2e80] to-[#7b5aa6] text-white font-semibold py-3.5 px-8 rounded-full shadow-[0_4px_14px_0_rgba(79,46,128,0.39)] hover:shadow-[0_6px_20px_rgba(79,46,128,0.23)] hover:opacity-95 transition-all duration-300"
                            >
                                Request the Service
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}