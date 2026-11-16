"use client";

import { Building, FileText, Briefcase, Users, Scale, Gem, Coins, Calculator, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function DNFBPCategories() {
    const categories = [
        {
            title: "Real Estate Brokers & Agents",
            description: "Involved in buying, selling, or leasing property",
            icon: <Building className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Auditors & Accountants",
            description: "Providing accounting, audit, bookkeeping, or financial services",
            icon: <FileText className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Corporate Service Providers",
            description: "Setting up or managing companies and legal structures",
            icon: <Briefcase className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Trust & Company Service Providers",
            description: "Offering nominee, directorship, or registered office services",
            icon: <Users className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Law Firms & Legal Consultants",
            description: "When involved in certain financial, corporate, or trust-related transactions",
            icon: <Scale className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Dealers in Precious Metals & Stones",
            description: "Such as gold, diamonds, and jewellery",
            icon: <Gem className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Virtual Asset Service Providers (VASPs)",
            description: "Including crypto exchanges and wallet providers",
            icon: <Coins className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Tax Consultants & Advisors",
            description: "Advising on tax and wealth structuring involving high-risk financial flows",
            icon: <Calculator className="w-5 h-5 text-[#4f2e80]" />
        },
        {
            title: "Luxury Goods & High-Value Dealers",
            description: "Trading art, cars, yachts & antiques, vulnerable to money laundering",
            icon: <Car className="w-5 h-5 text-[#4f2e80]" />
        }
    ];

    return (
        <section id="dnfbp-categories" className="py-20 bg-white">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-4">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            DNFBP Categories
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Who is Considered a DNFBP in the UAE?
                    </h2>
                    <p className="text-lg text-gray-600">
                        According to Federal Decree Law No. 20 of 2018 and Cabinet Decision No. 10 of 2019, the following entities are classified as DNFBPs:
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#4f2e80]/10 flex items-center justify-center flex-shrink-0">
                                    {category.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                                    {category.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {category.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-16 max-w-5xl text-left text-lg text-gray-600 leading-relaxed">
                    <p>
                        These sectors are particularly vulnerable to money laundering risks due to the nature of the transactions they handle, which are high-value, cross-border, or complex. If your business operates in any of these sectors, you are legally required to comply with AML/CFT regulations and register with the goAML system operated by the UAE's Financial Intelligence Unit (FIU).
                    </p>
                </div>

            </div>
        </section>
    );
}