"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "At first, I wasn't sure whether my company even qualified as a DNFBP. Insights Integrators' experts made it simple, clarified the requirements, and built our AML framework without delays.",
            author: "Managing Director",
            role: "Real Estate Brokerage, Dubai"
        },
        {
            quote: "With regulations shifting so often, we struggled to keep up. Insights Integrators didn't just design our AML policies; they streamlined our audit prep by 40%. For once, we feel ahead of compliance instead of catching up.",
            author: "Finance Manager",
            role: "Gold Trading Company, UAE"
        },
        {
            quote: "We needed AML compliance fast to onboard international partners. Insights Integrators' team acted quickly, aligned our policies with VARA guidelines, and gave us the confidence to expand without fear of regulatory setbacks.",
            author: "CEO",
            role: "FinTech Startup, UAE"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#4f2e80]/10 border border-[#4f2e80]/30 mb-5">
                        <span className="text-sm font-bold tracking-wider text-[#4f2e80] uppercase">
                            Testimonials
                        </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Our Clients' Trust Says It All
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Behind every rating and review is a business that found AML clarity with Insights Integrators.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.03)] border border-[#4f2e80]/10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4 text-[#4f2e80] opacity-80">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 11H6.5C6.5 8.5 8.5 6.5 11 6.5V4C6.5 4 3 7.5 3 12V20H10V11ZM21 11H17.5C17.5 8.5 19.5 6.5 22 6.5V4C17.5 4 14 7.5 14 12V20H21V11Z" />
                                </svg>
                            </div>
                            
                            <p className="text-gray-700 text-[15.5px] leading-relaxed flex-grow mb-8">
                                {testimonial.quote}
                            </p>
                            
                            <div>
                                <h4 className="font-bold text-gray-900 text-[15px]">
                                    {testimonial.author}
                                </h4>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}