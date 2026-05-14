// app/components/CommitmentSection.jsx
'use client';

import { useState, useEffect, useRef } from 'react';

const CommitmentSection = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const commitments = [
    {
      id: 1,
      title: 'Multi-Domain Expertise',
      description: 'We combine multiple advisory disciplines into a unified approach, ensuring your business receives complete, well-aligned solutions without gaps or overlaps.',
      icon:<img src="/iconlogo/Multi-DomainExprtise.png" alt="Multi-Vertical Expertise" className="w-8 h-8 text-white" />,
      gradient: 'from-blue-900 to-blue-900'
    },
    {
      id: 2,
      title: 'Dedicated Engagement Lead',
      description: 'Every engagement is managed by a single senior professional, giving you clear communication, faster decisions, and full accountability at every stage.',
      icon: <img src="/iconlogo/DedicatedEngagementLead.png" alt="Single Point of Contact" className="w-8 h-8" />,
      gradient: 'from-blue-900 to-blue-900'
    },
    {
      id: 3,
      title: 'Governance-Led Delivery',
      description: 'Our work follows defined frameworks and structured methodologies, ensuring transparency, consistency, and outcomes that stand up to regulatory expectations.',
      icon: <img src="/iconlogo/Governance-LedDelivery.png" alt="Enterprise-Grade Governance" className="w-8 h-8" />,
      gradient: 'from-blue-900 to-blue-900'
    },
    {
      id: 4,
      title: 'Partnership Approach',
      description: 'We focus on long-term relationships, working closely with your team to support stability, compliance, and sustainable business growth.',
      icon: <img src="/iconlogo/PartnershipApproach.png" alt="Relationship-Driven Approach" className="w-8 h-8" />,
      gradient: 'from-blue-900 to-blue-900'
    },
    {
      id: 5,
      title: 'Structured Execution',
      description: 'With clearly defined scope, timelines, and reporting, we ensure smooth execution, minimal disruption, and predictable outcomes.',
      icon: <img src="/iconlogo/StructuredExecution.png" alt="Structured & Timely Delivery" className="w-8 h-8" />,
      gradient: 'from-blue-900 to-blue-900'
    },
    {
      id: 6,
      title: 'Scalable for Growth',
      description: 'Our solutions are designed to evolve with your business, supporting both growing companies and established organizations with equal effectiveness.',
      icon: <img src="/iconlogo/growth.png" alt="Built for Growing Businesses" className="w-8 h-8" />,
      gradient: 'from-blue-900 to-blue-900'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12 bg-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">Our</span>
            <span className="text-[#4f2e80] ml-3">Commitment</span>
          </h2>
          <div className="w-20 h-1 bg-[#4f2e80] mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Consistent, structured, and regulator-aligned delivery you can rely on.
          </p>
        </div>

        {/* Premium Grid Layout - Professional Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {commitments.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Professional Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-7 h-full transition-all duration-300 hover:shadow-md hover:border-gray-200">
                {/* Icon Container */}
                <div className={`mb-5 inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} shadow-sm`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-[#4f2e80] text-lg md:text-xl font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;