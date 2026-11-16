"use client";

import { Check, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AMLCompliancePackages() {
    // Replace this with your actual WhatsApp number (include country code, no + or spaces)
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const silverFeatures = [
        "goAML Registration",
        "EOCN Clarification/Sanctions List Subscription",
        "Policies & Procedures",
        "Reliable PEP & Sanction Screening"
    ];

    const goldFeatures = [
        "goAML Registration",
        "EOCN Clarification/Sanctions List Subscription",
        "Policies & Procedures",
        "Reliable PEP & Sanction Screening",
        "CDD & EDD",
        "Risk Assessment",
        "Ongoing Transaction Monitoring Framework",
        "Training to Compliance/Employees/Agents",
        "Quarterly Compliance Report",
        "Filing STR/SAR to goAML Portal"
    ];

    return (
        <section id="aml-packages" className="py-20 bg-gray-50/50">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-4">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            Packages
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our AML Compliance Packages
                    </h2>
                    <p className="text-lg text-gray-600">
                        Choose an AML (Anti Money Laundering) compliance package that fits your business needs.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    
                    {/* Silver Package */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                    >
                        <div className="p-8 flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">Silver</h3>
                                    <p className="text-gray-500 italic mt-1">For a newly registered company</p>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <Award className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>

                            <ul className="space-y-4 mt-8">
                                {silverFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#4f2e80] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="p-8 pt-0 mt-auto">
                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3.5 rounded-lg text-white font-semibold bg-gradient-to-r from-[#4f2e80] to-[#7b5aa6] hover:opacity-90 transition-opacity"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>

                    {/* Gold Package */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                    >
                        <div className="p-8 flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">Gold</h3>
                                    <p className="text-gray-500 italic mt-1">For a scaling or established company</p>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <Trophy className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>

                            <ul className="space-y-4 mt-8">
                                {goldFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#4f2e80] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="p-8 pt-0 mt-auto">
                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3.5 rounded-lg text-white font-semibold bg-gradient-to-r from-[#4f2e80] to-[#7b5aa6] hover:opacity-90 transition-opacity"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}