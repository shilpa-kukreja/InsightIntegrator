"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 6,
    suffix: "+",
    label: "Years of Experience",
    description:
      "Delivering trusted accounting, tax, audit, and compliance solutions across the UAE.",
  },
  {
    number: 400,
    suffix: "+",
    label: "Successful Engagements",
    description:
      "Helping businesses achieve financial clarity and long-term operational growth.",
  },
  {
    number: 98,
    suffix: "+",
    label: "Satisfied Clients",
    description:
      "Trusted by startups, SMEs, and enterprises for professional business support.",
  },
//   {
//     number: 98,
//     suffix: "%",
//     label: "Client Retention",
//     description:
//       "Building long-term partnerships through reliable and strategic financial expertise.",
//   },
];

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const counterRef = useRef(null);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Run animation every time visible
  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef}>
      {count}
      {suffix}
    </div>
  );
}
const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-12 bg-[#120a24] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full"></div> */}

        <div className="absolute inset-0 bg-[#2b144d] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
       

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Number */}
              <div className="text-5xl md:text-6xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-4 text-white">
                {item.label}
              </h3>

              {/* Description */}
              {/* <p className="text-gray-300 leading-7 text-sm">
                {item.description}
              </p> */}

              {/* Bottom Line Animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#4d0daf] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
