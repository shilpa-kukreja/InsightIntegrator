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
      title: 'Multi-Vertical Expertise',
      description: 'We bring five specialized verticals under one platform, giving you end-to-end advisory in one place. Deep expertise across five verticals ensures no gaps or overlaps.',
      icon:<img src="/icon/icon4.png" alt="Multi-Vertical Expertise" className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Single Point of Contact',
      description: 'Your entire engagement is managed through one dedicated relationship lead. This means seamless communication, zero confusion and faster execution.',
      icon: <img src="/icon/icon5.png" alt="Single Point of Contact" className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Enterprise-Grade Governance',
      description: 'Every service is delivered through defined methodologies, SLAs and structured processes. You get consistency, transparency and measurable results – every single time.',
      icon: <img src="/icon/icon1.png" alt="Enterprise-Grade Governance" className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Relationship-Driven Approach',
      description: 'We focus on long-term partnerships, not transactions. Your business growth, stability and continuity remain at the center of our work.',
      icon: <img src="/icon/icon6.png" alt="Relationship-Driven Approach" className="w-8 h-8" />,
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Structured & Timely Delivery',
      description: 'We work on defined scopes, clear timelines and consistent reporting. Your projects move forward without delays, ambiguity or guesswork.',
      icon: <img src="/icon/icon3.png" alt="Structured & Timely Delivery" className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Built for Growing Businesses',
      description: 'Stravision is designed to support SMEs, startups and expanding companies with clarity and confidence. You get a big-firm structure with boutique-firm attention – the best of both worlds.',
      icon: <img src="/icon/icon2.png" alt="Built for Growing Businesses" className="w-8 h-8" />,
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12 bg-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">Insight Integrators'</span>
            <span className="text-[#4f2e80] ml-3">Commitment</span>
          </h2>
          <div className="w-20 h-1 bg-[#4f2e80] mx-auto mt-5 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering excellence through unwavering dedication to quality and client success
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
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-3 tracking-tight">
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