"use client";

import { Scale, ListChecks, FileText, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function UAERegulations() {
    const regulations = [
        {
            title: "Federal Decree Law No. 20 of 2018",
            description: "The foundational legislation on Anti-Money Laundering (AML) and Combating the Financing of Terrorism (CFT) is applicable to all financial institutions and DNFBPs operating in the UAE.",
            icon: <Scale className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Cabinet Decision No. 74 of 2020",
            description: "Focuses on implementing UN Security Council Resolutions relating to the combating of terrorism financing and proliferation of weapons, and managing local terrorism lists.",
            icon: <ListChecks className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Cabinet Decision No. 10 of 2019",
            description: "Issued to implement the provisions of Decree Law No. 20 of 2018, this decision outlines detailed AML compliance obligations for DNFBPs, including risk assessments, policies, and reporting.",
            icon: <FileText className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Guidelines for DNFBPs",
            description: "Sector-specific AML/CFT guidance issued by the Ministry of Economy helps DNFBPs understand how to apply legal requirements based on their operational risks and activities.",
            icon: <BookOpen className="w-5 h-5 text-[#4f2e80]" />
        }
    ];

    return (
        <section id="uae-regulations" className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-5">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            UAE Regulations
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Key Anti Money Laundering Regulations <br className="hidden md:block" /> in the UAE
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        A quick overview of the core UAE AML/CFT legal instruments and guidance affecting Financial Institutions and DNFBPs.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {regulations.map((reg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-[#4f2e80]/10 flex items-center justify-center flex-shrink-0">
                                    {reg.icon}
                                </div>
                                <h3 className="text-[19px] font-bold text-gray-900 leading-snug">
                                    {reg.title}
                                </h3>
                            </div>
                            
                            <p className="text-gray-600 text-[15px] leading-relaxed mt-2">
                                {reg.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}