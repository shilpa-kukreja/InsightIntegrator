"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    // You can fill in the answers where the text says "Add your answer here..."
    const faqs = [
        {
            question: "Who needs to comply with AML regulations in the UAE?",
            answer: "Under AML UAE laws, all Financial Institutions (FIs) and Designated Non-Financial Businesses and Professions (DNFBPs), including Real Estate Firms, Jewellery Dealers, Accountants, Legal Consultants, and Corporate Service Providers, must comply with anti-money laundering regulations in the UAE."
        },
        {
            question: "What is AML registration, and is it mandatory?",
            answer: "Yes. goAML is the UAE’s official reporting platform for suspicious transactions. All DNFBPs operating under AML Dubai regulations must register and regularly report any suspicious activity to stay compliant."
        },
        {
            question: "What are the key AML compliance requirements for DNFBPs?",
            answer: "Key requirements include goAML registration, preparing AML policies and procedures, conducting Risk Assessments, screening against Sanctions Lists, maintaining proper records, and submitting reports to the FIU."
        },
        {
            question: "What are the penalties for non-compliance with AML regulations in the UAE?",
            answer: "Non-compliance can lead to heavy fines (up to AED 5 million per violation), license suspension or revocation, and even criminal charges in serious cases."
        },
        {
            question: "What is an AML risk assessment, and why is it important?",
            answer: "An AML risk assessment helps identify and evaluate exposure to money laundering in the UAE based on your business activities. It’s a regulatory requirement that ensures your controls are risk-based, effective, and aligned with the UAE’s AML/CFT framework."
        },
        {
            question: "Do you assist with Ministry of Economy (MOE) inspections?",
            answer: "Yes. We provide full inspection support, from documentation to preparation, ensuring your business is ready and compliant during MoE inspections."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-5">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            FAQ
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        FAQs on Anti Money Laundering in the UAE
                    </h2>
                    
                    <p className="text-lg text-gray-600">
                        Find quick answers to the most common queries about our services and compliance.
                    </p>
                </div>

                {/* FAQ Container */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-4 sm:p-8">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div 
                                key={index} 
                                className={`${
                                    index !== faqs.length - 1 ? "border-b border-gray-100" : ""
                                } py-5`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between text-left focus:outline-none group gap-4"
                                >
                                    <span className="text-[17px] font-semibold text-gray-900 group-hover:text-[#4f2e80] transition-colors leading-snug">
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#4f2e80]/20' : 'bg-[#4f2e80]/10'}`}>
                                        {isOpen ? (
                                            <X className="w-4 h-4 text-[#4f2e80]" strokeWidth={3} />
                                        ) : (
                                            <Plus className="w-4 h-4 text-[#4f2e80]" strokeWidth={3} />
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
                                            <p className="text-gray-600 pt-4 pr-12 leading-relaxed text-[15px]">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}