"use client";

import { Shield, Flag, MonitorSmartphone, UserCheck, LineChart, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const features = [
        {
            title: "End-to-End AML Compliance Support",
            description: "From risk assessment to reporting, Insights Integrators manages the complete AML lifecycle, ensuring nothing is missed or misinterpreted.",
            icon: <Shield className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "UAE-First Regulatory Alignment",
            description: "All AML frameworks are built strictly in line with UAE laws, Ministry guidelines, and regulator expectations across relevant authorities.",
            icon: <Flag className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Expertise in goAML Portal Management",
            description: "Expert management of the UAE's goAML portal, ensuring hassle-free registration, precise suspicious activity reporting, and full compliance with FIU regulations.",
            icon: <MonitorSmartphone className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Robust Due Diligence Frameworks",
            description: "Insights Integrators implements structured KYC, screening, and verification processes to reduce exposure to financial crime and regulatory risk.",
            icon: <UserCheck className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Ongoing Monitoring & AML Audits",
            description: "We support continuous transaction monitoring, internal reviews, and AML audits to maintain long-term compliance, not one-time filings.",
            icon: <LineChart className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Risk Mitigation Against Heavy Penalties",
            description: "Our approach focuses on preventing costly AML violations by identifying gaps early and ensuring timely corrective action.",
            icon: <AlertTriangle className="w-5 h-5 text-[#4f2e80]" />
        }
    ];

    return (
        <section id="why-choose-us" className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-5">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            Why Insights Integrators
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Why Choose Insights Integrators
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        We prepare your AML framework for the moment regulators look closely, not just when forms are filed.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#4f2e80]/10 flex items-center justify-center flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 leading-snug">
                                    {feature.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-600 text-[15px] leading-relaxed mt-1">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-[#4f2e80] to-[#7b5aa6] text-white font-semibold py-3.5 px-8 rounded-full shadow-[0_4px_20px_0_rgba(79,46,128,0.4)] hover:shadow-[0_6px_25px_rgba(79,46,128,0.5)] hover:opacity-95 transition-all duration-300"
                    >
                        Talk to an AML Expert
                    </a>
                </div>

            </div>
        </section>
    );
}