// app/components/TestimonialsSection.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      id: 1,
      name: 'Bora Incekara',
      date: 'August 8, 2025',
      rating: 5,
      review: 'If you\'re doing business in the UAE and looking for a reliable and highly skilled financial advisory firm for all your tax-related matters, this is the team to trust. Their deep understanding of local regulations and proactive approach made a significant difference for our operations.',
      initial: 'BI',
      verified: true
    },
    {
      id: 2,
      name: 'maria belen daya',
      date: 'July 26, 2025',
      rating: 5,
      review: 'We engaged Insightintegrators to perform statutory audit services for 3 consecutive financial years from 2022. Thanks to Praveen and his team for their exceptional professionalism, attention to detail, and timely delivery. Highly recommended for audit and assurance services.',
      initial: 'MD',
      verified: true
    },
    {
      id: 3,
      name: 'Alex N',
      date: 'July 24, 2025',
      rating: 5,
      review: 'Outstanding service from start to finish. The team at Insightintegrators provided invaluable advice on our tax strategy and helped us navigate complex regulatory requirements. Their expertise in the UAE market is unparalleled. Will definitely work with them again.',
      initial: 'AN',
      verified: true
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      date: 'August 15, 2025',
      rating: 5,
      review: 'Insightintegrators has been our trusted partner for over 5 years. Their advisory services have helped us grow our business significantly. The team is responsive, knowledgeable, and always goes the extra mile to ensure client satisfaction.',
      initial: 'SJ',
      verified: true
    },
    {
      id: 5,
      name: 'Michael Chen',
      date: 'July 30, 2025',
      rating: 5,
      review: 'Exceptional tax consulting services! The team provided clear guidance on corporate tax compliance and helped us optimize our tax position. Their proactive approach and attention to detail are truly commendable.',
      initial: 'MC',
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12 bg-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-3 md:mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-indigo-700 text-xs md:text-sm font-semibold tracking-wide uppercase">Testimonials</span>
          </div> */}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            What <span className="bg-[#4f2e80] bg-clip-text text-transparent">Our Clients</span> Are Saying
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-[#2c154f] mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Trusted by businesses across the UAE for our expertise and commitment to excellence
          </p>
        </div>

        {/* Google Reviews Badge */}
        {/* <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Insightintegrators Chartered Accountants</div>
                <div className="text-sm text-gray-500">2,051 Google reviews</div>
              </div>
            </div>
            <Link 
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 text-sm"
            >
              <span>Write a review</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </Link>
          </div>
        </div> */}

        {/* Swiper Slider */}
        <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{testimonial.date}</span>
                        <span className="inline-flex items-center gap-0.5 text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    "{testimonial.review}"
                  </p>

                  {/* Quote Icon */}
                  <div className="mt-4 flex justify-end">
                    <svg className="w-8 h-8 text-indigo-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
      </div>

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 50px !important;
        }
        
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #4f46e5;
        }
        
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background-color: #4f46e5;
          color: white;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          background-color: #c7d2fe;
          opacity: 1;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          background-color: #4f46e5;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;