'use client';

import { useState, useEffect, useRef } from 'react';

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      title: 'Our People Philosophy',
      description:
        'We view our team as long-term partners built on trust, accountability, and performance.',
    },
    {
      title: 'Professional Growth & Exposure',
      description:
        'Work alongside experts and gain exposure across multiple domains and industries.',
    },
    {
      title: 'Structured Delivery Frameworks',
      description:
        'Defined processes and governance ensure clarity and consistent delivery standards.',
    },
    {
      title: 'Culture of Ownership',
      description:
        'Take ownership, contribute ideas, and grow in a performance-driven environment.',
    },
  ];

  const verticals = [
    'Stravi Core — Accounting, Audit & Tax',
    'Stravi Corp — Company Formation & PRO',
    'Stravi Risk — Risk, Compliance & AML',
    'Stravi Media — Branding & Digital',
    'Stravi Insights — Research & Intelligence',
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Why Work With Us
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT - IMAGE STYLE FEATURE CARD */}
          <div className={`lg:col-span-7 rounded-3xl overflow-hidden relative shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Background Gradient (acts like image) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c154f] to-[#4f2e80]"></div>

            {/* Overlay Content */}
            <div className="relative p-10 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                A Multi-Vertical Environment
              </h3>

              <p className="text-white/80 mb-8 max-w-lg">
                Work across specialized verticals designed to deliver excellence and innovation.
              </p>

              <div className="space-y-3">
                {verticals.map((item, i) => (
                  <div key={i} className="border-b border-white/20 pb-2 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - FLOATING CARDS */}
          <div className="lg:col-span-5 grid gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;