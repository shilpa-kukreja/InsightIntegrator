// "use client";
// import React, { useState, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const reviews1 = [
//   {
//     id: 1,
//     name: "Sarah L.",
//     role: "Questions Manager",
//     company: "TechCorp Solutions",
//     rating: 5,
//     review: "This platform works perfectly for our team. Setup was quick, and the features are exactly what we needed to streamline our processes.",
//     avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
//   },
//   {
//     id: 2,
//     name: "Michael T.",
//     role: "Questions Manager",
//     company: "Innovate Ltd.",
//     rating: 5,
//     review: "Exceptional service and outstanding support. The team went above and beyond to ensure our needs were met.",
//     avatarColor: "bg-gradient-to-br from-purple-500 to-pink-400"
//   },
//   {
//     id: 3,
//     name: "Robert Fox",
//     role: "Questions Manager",
//     company: "Global Enterprises",
//     rating: 4,
//     review: "A game-changer for our operations. The platform's flexibility allowed us to customize workflows perfectly.",
//     avatarColor: "bg-gradient-to-br from-amber-500 to-orange-400"
//   },
//   {
//     id: 4,
//     name: "Emma Wilson",
//     role: "Operations Director",
//     company: "NextGen Tech",
//     rating: 5,
//     review: "The implementation was seamless and the results were immediate. Our team adapted quickly.",
//     avatarColor: "bg-gradient-to-br from-emerald-500 to-teal-400"
//   },
//   {
//     id: 5,
//     name: "David Chen",
//     role: "IT Manager",
//     company: "Digital Solutions Inc.",
//     rating: 5,
//     review: "Outstanding platform that exceeded our expectations. The analytics features provide valuable insights.",
//     avatarColor: "bg-gradient-to-br from-red-500 to-rose-400"
//   },
//   {
//     id: 6,
//     name: "Sophia Martinez",
//     role: "Customer Success Lead",
//     company: "Growth Partners",
//     rating: 4,
//     review: "Intuitive design and powerful features. Our customer satisfaction scores have improved significantly.",
//     avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
//   },
//   {
//     id: 7,
//     name: "John Anderson",
//     role: "Project Manager",
//     company: "Cloud Systems",
//     rating: 5,
//     review: "The best decision we made for our team. Streamlined our processes and improved communication.",
//     avatarColor: "bg-gradient-to-br from-green-500 to-lime-400"
//   },
//   {
//     id: 8,
//     name: "Lisa Wong",
//     role: "CEO",
//     company: "StartUp Hub",
//     rating: 5,
//     review: "Transformative platform that helped us scale efficiently. The ROI was apparent within the first month.",
//     avatarColor: "bg-gradient-to-br from-violet-500 to-purple-400"
//   }
// ];

// const reviews2 = [
  // {
  //   id: 9,
  //   name: "Alex Johnson",
  //   role: "CTO",
  //   company: "DataTech Inc",
  //   rating: 5,
  //   review: "Exceptional platform with robust features. Our development cycle improved by 30% after implementation.",
  //   avatarColor: "bg-gradient-to-br from-rose-500 to-pink-400"
  // },
  // {
  //   id: 10,
  //   name: "Maria Garcia",
  //   role: "HR Director",
  //   company: "PeopleFirst Corp",
  //   rating: 4,
  //   review: "Simplified our recruitment process and improved candidate experience significantly.",
  //   avatarColor: "bg-gradient-to-br from-sky-500 to-blue-400"
  // },
  // {
  //   id: 11,
  //   name: "Kevin Smith",
  //   role: "Finance Manager",
  //   company: "WealthBuilders",
  //   rating: 5,
  //   review: "The reporting features alone are worth the investment. Gave us insights we never had before.",
  //   avatarColor: "bg-gradient-to-br from-orange-500 to-amber-400"
  // },
  // {
  //   id: 12,
  //   name: "Rachel Green",
  //   role: "Marketing Head",
  //   company: "BrandBoost",
  //   rating: 4,
  //   review: "Integrated perfectly with our existing tools and boosted our campaign performance.",
  //   avatarColor: "bg-gradient-to-br from-fuchsia-500 to-purple-400"
  // },
  // {
  //   id: 13,
  //   name: "Tom Wilson",
  //   role: "Operations Manager",
  //   company: "LogiTech Solutions",
  //   rating: 5,
  //   review: "Reduced our operational costs by 25% while improving efficiency. Excellent support team.",
  //   avatarColor: "bg-gradient-to-br from-teal-500 to-cyan-400"
  // },
  // {
  //   id: 14,
  //   name: "Nina Patel",
  //   role: "Product Manager",
  //   company: "InnovateLabs",
  //   rating: 5,
  //   review: "User-friendly interface with powerful capabilities. Our team adopted it without any training.",
  //   avatarColor: "bg-gradient-to-br from-yellow-500 to-amber-400"
  // },
  // {
  //   id: 15,
  //   name: "Carlos Ruiz",
  //   role: "Sales Director",
  //   company: "RevenueMax",
  //   rating: 4,
  //   review: "Our sales team's productivity increased dramatically. The CRM integration is seamless.",
  //   avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
  // },
  // {
  //   id: 16,
  //   name: "Samantha Lee",
  //   role: "Customer Support",
  //   company: "HelpDesk Pro",
  //   rating: 5,
  //   review: "Ticket resolution time decreased by 40%. The automation features are a game-changer.",
  //   avatarColor: "bg-gradient-to-br from-emerald-500 to-green-400"
  // }
// ];

// function ReviewsSection() {
//   const [isHovered, setIsHovered] = useState(false);
//   const slider1Ref = useRef(null);
//   const slider2Ref = useRef(null);

//   // Settings for first slider (right to left)
//   const settings1 = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 5000,
//     autoplaySpeed: 0,
//     cssEase: 'linear',
//     pauseOnHover: false,
//     rtl: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   // Settings for second slider (left to right)
//   const settings2 = {
//     ...settings1,
//     rtl: true, // This makes it scroll left to right
//   };

//   return (
//     <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Background Gradient Effects */}
//       <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 via-transparent to-amber-50/20"></div>
      
//       <div className="relative  mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             What Our
//             <span className="ml-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
//               Clients Say
//             </span>
//           </h2>
          
//           <p className="text-gray-600 text-lg  mx-auto">
//             Trusted by industry leaders who have experienced our commitment to excellence
//           </p>
//         </div>

//          {/* Fade overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

//         {/* Top Slider - Right to Left */}
//         <div className="relative mb-8">
         
          
//           <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <Slider ref={slider1Ref} {...settings1}>
//               {reviews1.map((review) => (
//                 <div key={`top-${review.id}`} className="px-2">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 min-w-[320px]">
//                     {/* Review Header */}
//                     <div className="flex items-start gap-4 mb-6">
//                       <div className={`${review.avatarColor} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}>
//                         <span className="text-xl font-bold">{review.name.charAt(0)}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
//                         <p className="text-sm text-gray-600">{review.role}</p>
//                         <p className="text-xs text-gray-500">{review.company}</p>
//                       </div>
//                     </div>
                    
//                     {/* Stars */}
//                     <div className="flex mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={`star-top-${review.id}-${i}`}
//                           className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
                    
//                     {/* Review Text */}
//                     <p className="text-gray-600 line-clamp-4">{review.review}</p>
                    
//                     {/* Decorative Line */}
//                     <div className="mt-6 pt-4 border-t border-gray-100">
//                       <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>


//         {/* Bottom Slider - Left to Right */}
//         <div className="relative">
          
          
//           <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <Slider ref={slider2Ref} {...settings2}>
//               {reviews2.map((review) => (
//                 <div key={`bottom-${review.id}`} className="px-2">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 min-w-[320px]">
//                     {/* Review Header */}
//                     <div className="flex items-start gap-4 mb-6">
//                       <div className={`${review.avatarColor} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}>
//                         <span className="text-xl font-bold">{review.name.charAt(0)}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
//                         <p className="text-sm text-gray-600">{review.role}</p>
//                         <p className="text-xs text-gray-500">{review.company}</p>
//                       </div>
//                     </div>
                    
//                     {/* Stars */}
//                     <div className="flex mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={`star-bottom-${review.id}-${i}`}
//                           className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
                    
//                     {/* Review Text */}
//                     <p className="text-gray-600 line-clamp-4">{review.review}</p>
                    
//                     {/* Decorative Line */}
//                     <div className="mt-6 pt-4 border-t border-gray-100">
//                       <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default ReviewsSection;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

/* ===================== REVIEWS DATA ===================== */

const reviews1 = [
  {
    id: 1,
    name: "Ahmed Al Mansoori",
    role: " Chief Financial Officer",
    company: "TechCorp Solutions",
    rating: 5,
    review: "Insight Integrators demonstrated exceptional professionalism and regulatory knowledge. Their internal audit approach was structured, practical, and aligned with UAE regulatory expectations. We particularly valued their clear recommendations and hands-on remediation support.",
    avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Finance Director",
    company: "Innovate Ltd.",
    rating: 5,
    review: "We engaged Insight Integrators for compliance and internal audit support. The outcomes were clear—better controls, clearer reporting, and improved confidence during management reviews. Their approach is practical and business-friendly.",
    avatarColor: "bg-gradient-to-br from-purple-500 to-pink-400"
  },
  {
    id: 3,
    name: "Fatima Khalid",
    role: " Head of Compliance",
    company: "Global Enterprises",
    rating: 4,
    review: "Working with Insight Integrators gave us confidence that our compliance framework could withstand regulatory scrutiny. Their understanding of UAE regulations is impressive, and their guidance was always clear and actionable.",
    avatarColor: "bg-gradient-to-br from-amber-500 to-orange-400"
  },
  {
    id: 4,
    name: "Daniel Roberts",
    role: "Operations Manager",
    company: "NextGen Tech",
    rating: 5,
    review: "From the first discussion, the team understood our challenges. They didn’t just audit us—they guided us. Insight Integrators felt more like a partner than a service provider.",
    avatarColor: "bg-gradient-to-br from-emerald-500 to-teal-400"
  },
  {
    id: 5,
    name: "Khaled Al Suwaidi",
    role: "Real Estate Investor",
    company: "Board Member",
    rating: 5,
    review: "The insights provided by Insight Integrators were valuable at both management and board levels. Their risk-based reporting helped us prioritize issues that truly mattered to the business.",
    avatarColor: "bg-gradient-to-br from-red-500 to-rose-400"
  },
  {
    id: 6,
    name: "Neha Sharma",
    role: "Internal Audit Manager",
    company: "Growth Partners",
    rating: 4,
    review: "The team’s technical understanding of internal controls, AML, and governance frameworks is very strong. Their audit findings were well-reasoned, evidence-based, and aligned with international standards.",
    avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
  },
 
];

const reviews2 = [
   {
    id: 7,
    name: "Ayesha Khan",
    role: "Head of Finance",
    company: "DataTech Inc",
    rating: 5,
    review: "What stood out was their commitment beyond the engagement. They followed up, supported implementation, and ensured our teams understood the recommendations.",
    avatarColor: "bg-gradient-to-br from-rose-500 to-pink-400"
  },
  {
    id: 8,
    name: "Omar Al Hashmi",
    role: "Chief Executive Officer",
    company: "PeopleFirst Corp",
    rating: 4,
    review: "Insight Integrators brought structure and discipline to our risk and governance processes. Their senior-led approach ensured quality delivery and minimal disruption to operations.",
    avatarColor: "bg-gradient-to-br from-sky-500 to-blue-400"
  },
  {
    id: 9,
    name: "Priya Nair",
    role: "Risk Manager",
    company: "WealthBuilders",
    rating: 5,
    review: "In a highly regulated environment, having Insight Integrators as our advisors gave us peace of mind. Their calm, knowledgeable, and methodical approach helped us navigate complex requirements with ease.",
    avatarColor: "bg-gradient-to-br from-orange-500 to-amber-400"
  },
  {
    id: 10,
    name: "James Wilson",
    role: "Managing Director",
    company: "BrandBoost",
    rating: 4,
    review: "I would highly recommend Insight Integrators to any organization looking for reliable audit and compliance support. Their integrity, expertise, and practical mindset truly set them apart.",
    avatarColor: "bg-gradient-to-br from-fuchsia-500 to-purple-400"
  },
   {
    id: 11,
    name: "Mohammed Rahman",
    role: "Compliance Officer",
    company: "Cloud Systems",
    rating: 5,
    review: "Insight Integrators supported us during a compliance review and helped us close regulatory gaps efficiently. Their regulator-focused mindset made a real difference in how we approached compliance.",
    avatarColor: "bg-gradient-to-br from-green-500 to-lime-400"
  },
  {
    id: 12,
    name: "Steven Clarke",
    role:  "General Manager",
    company: "StartUp Hub",
    rating: 5,
    review: "Clear advice. Strong execution. No unnecessary complexity. Insight Integrators delivered exactly what we needed.",
    avatarColor: "bg-gradient-to-br from-violet-500 to-purple-400"
  }
 
];

/* ===================== CARD ===================== */

const ReviewCard = ({ review }) => (
  <div className="px-2">
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition border border-gray-100">
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`${review.avatarColor} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
        >
          <span className="text-xl font-bold">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-600">{review.role}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? "text-amber-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 line-clamp-3">{review.review}</p>
    </div>
  </div>
);

/* ===================== SECTION ===================== */

export default function ReviewsSection() {
  return (
    <section className="py-20 overflow-hidden bg-gray-200">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          What Our <span className="font-bold text-[#4f2e80]">Clients Say</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Trusted by industry leaders
        </p>
      </div>

      {/* TOP SLIDER */}
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="mb-10"
      >
        {reviews1.map((r) => (
          <SwiperSlide key={r.id}>
            <ReviewCard review={r} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTTOM SLIDER (REVERSE) */}
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {reviews2.map((r) => (
          <SwiperSlide key={r.id}>
            <ReviewCard review={r} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}