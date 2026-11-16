"use client";

import { Wrench, ShieldCheck, Search, Building2, Landmark, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyDNFBPCompliance() {
    const reasons = [
        {
            title: "Legal Obligation",
            description: "UAE Ministry of Economy & FIU enforce strict AML UAE rules. Fines range from AED 50,000 to AED 5M.",
            icon: <Wrench className="w-5 h-5 text-gray-700" />
        },
        {
            title: "Risk Mitigation",
            description: "Detect suspicious activity early and reduce exposure to money laundering in the UAE.",
            icon: <ShieldCheck className="w-5 h-5 text-gray-700" />
        },
        {
            title: "Regulatory Scrutiny",
            description: "Non-compliant DNFBPs face audits, penalties, and even license suspension.",
            icon: <Search className="w-5 h-5 text-gray-700" />
        },
        {
            title: "Business Continuity",
            description: "AML compliance keeps operations smooth and supports strong banking relationships.",
            icon: <Building2 className="w-5 h-5 text-gray-700" />
        },
        {
            title: "Reputation & Trust",
            description: "Builds long-term credibility with clients, banks, and regulators.",
            icon: <Landmark className="w-5 h-5 text-gray-700" />
        },
        {
            title: "Global Blacklisting",
            description: "Non-compliance can land your business on watchlists, blocking access to banks & international partners.",
            icon: <GlobeLock className="w-5 h-5 text-gray-700" />
        }
    ];

    return (
        <section id="why-dnfbp-aml" className="py-20 bg-gray-50/50">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column - Text Content */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30">
                            <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                                DNFBP Compliance
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Why DNFBPs Can't Ignore AML Compliance
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            DNFBPs are on the frontline of AML regulations. If you deal with large transactions, cross-border clients, or high-value assets, you're a target for money laundering in Dubai.
                        </p>
                        
                        <p className="text-base font-semibold text-gray-800 pt-2">
                            Anti-Money Laundering Compliance is Crucial and the Key Reasons are:
                        </p>
                    </div>

                    {/* Right Column - Cards Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-5">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-[#4f2e80]/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-[#4f2e80]/10 flex items-center justify-center flex-shrink-0">
                                            {reason.icon}
                                        </div>
                                        <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                                            {reason.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-[15px] leading-relaxed mt-1">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}