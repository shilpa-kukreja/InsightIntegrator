"use client";

import { Shield, Users, Globe, FileText, BarChart, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function AMLServices() {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const services = [
        {
            title: "goAML Registration",
            description: "We take care of your FIU registration so your business is officially listed and ready for ongoing reporting.",
            icon: <Shield className="w-6 h-6 text-white" />
        },
        {
            title: "Custom AML Policies",
            description: "Tailored policies built for your business type, risk profile, and industry. Always legally compliant.",
            icon: <Users className="w-6 h-6 text-white" />
        },
        {
            title: "Periodic AML/CFT Report",
            description: "We prepare periodic AML compliance report for you to stay compliant and stress-free.",
            icon: <Globe className="w-6 h-6 text-white" />
        },
        {
            title: "Compliance Framework Setup",
            description: "Clear roles, responsibilities, and internal controls designed to pass regulatory review every time.",
            icon: <FileText className="w-6 h-6 text-white" />
        },
        {
            title: "Risk Assessments & KYC",
            description: "We guide you through risk questionnaires, transaction checks & KYC to build a strong, risk-based approach.",
            icon: <BarChart className="w-6 h-6 text-white" />
        },
        {
            title: "Inspection Support",
            description: "Facing an inspection? We prepare your documents, strategy, and team so you pass with confidence.",
            icon: <RefreshCw className="w-6 h-6 text-white" />
        },
        {
            title: "Sanctions Screening",
            description: "We implement tools to help you detect and block sanctioned entities before they become a risk.",
            icon: <FileText className="w-6 h-6 text-white" />
        },
        {
            title: "Regulatory Reporting",
            description: "Timely goAML and TFS reports filed correctly so you avoid fines or compliance issues.",
            icon: <BarChart className="w-6 h-6 text-white" />
        },
        {
            title: "AML Audit Assistance",
            description: "Be audit-ready at all times. Our team ensures your policies, reports, and records meet AML UAE standards.",
            icon: <RefreshCw className="w-6 h-6 text-white" />
        }
    ];

    return (
        <section id="aml-services" className="py-20 bg-gray-50/50">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-4">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            Services
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Anti Money Laundering Compliance Services in Dubai
                    </h2>
                    <p className="text-lg text-gray-600">
                        We help DNFBPs in the UAE meet all AML/CFT requirements with ease, whether you're setting up for the first time or upgrading your framework. Our experts ensure you're not just compliant, but always audit-ready.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Updated solid blue icon box matching the image */}
                            <div className="w-12 h-12 rounded-lg bg-[#4a72ff] flex items-center justify-center mb-6 shadow-sm">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                                {service.description}
                            </p>
                            
                            {/* WHATSAPP BUTTON (Text updated to Contact Now) */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-[#41BC4A] hover:opacity-90 transition-opacity w-max mt-auto shadow-sm"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    className="w-4 h-4"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Contact Now
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* NEW TEXT SECTION BELOW SERVICES */}
                <div className="mt-20 max-w-4xl text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-4">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            AML SERVICES
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        What Are AML Compliance Services in the UAE?
                    </h2>
                    
                    <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                        <p>
                            AML (Anti-Money Laundering) compliance services in the UAE are specialised solutions that help businesses identify, prevent, and report suspicious financial activities. These services protect companies from risks associated with money laundering, terrorist financing, and other unlawful financial practices, while ensuring full compliance with UAE regulations.
                        </p>
                        <p>
                            In the UAE, Designated Non-Financial Businesses and Professions (DNFBPs) are legally required to follow these rules, often without realising it.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}