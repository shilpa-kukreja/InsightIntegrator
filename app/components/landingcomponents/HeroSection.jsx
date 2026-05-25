// "use client";

// import { useState } from "react";
// import MasterclassPopup from "./MasterclassPopup";

// import {
//   CalendarDays,
//   Globe,
//   Video,
//   Clock3,
//   Check,
//   BriefcaseBusiness,
//   BadgeCheck,
// } from "lucide-react";

// export default function HeroSection() {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <section className="relative overflow-hidden bg-[#fafafa] py-14">
//       {/* Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: "radial-gradient(#d8d8d8 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-5">
//         {/* Top Badge */}
//         <div className="mb-8 flex justify-center">
//           <div className="rounded-full bg-[#4f2e80] px-8 py-4 text-sm font-semibold text-white shadow-lg md:px-14 md:text-lg">
//             Live Compliance & Tax Risk Workshop{" "}
//           </div>
//         </div>

//         {/* Heading */}
//         <div className="mx-auto max-w-6xl text-center">
//           <h1 className="text-2xl font-black leading-tight text-black md:text-4xl">
//             Avoid Costly{" "}
//             <span className="text-[#4f2e80]">VAT Penalties & Tax Mistakes</span>{" "}
//             Roadmap
//             <br />
//             Before They Cost Your UAE Business
//           </h1>

//           <p className="mt-4 text-lg font-medium text-[#333] md:text-xl">
//             Book Your Free 30-Minute Tax Consultation And Stay Protected From
//             Costly FTA Penalties
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="mt-25 md:mt-22 grid items-center gap-12 lg:grid-cols-1 max-w-4xl mx-auto">
       
  

         
//           <div >
          
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 max-w-4xl mx-auto ">
//               {/* Time */}
//               <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
//                   <BriefcaseBusiness
//                     size={22}
//                     className="sm:w-[26px] sm:h-[26px]"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-[#555] sm:text-sm">
//                     Business Focus
//                   </p>

//                   <h4 className="text-lg font-medium sm:text-[18px]">
//                     Growth & Compliance
//                   </h4>
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
//                   <BadgeCheck size={22} className="sm:w-[26px] sm:h-[26px]" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-[#555] sm:text-sm">
//                     Consultation Type
//                   </p>

//                   <h4 className="text-lg font-medium sm:text-xl">
//                     Strategic Advisory
//                   </h4>
//                 </div>
//               </div>

//               {/* Venue */}
//               <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
//                   <Video size={22} className="sm:w-[26px] sm:h-[26px]" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-[#555] sm:text-sm">
//                     Venue
//                   </p>

//                   <h4 className="text-lg font-medium sm:text-2xl">Zoom</h4>
//                 </div>
//               </div>

//               {/* Language */}
//               <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
//                   <Globe size={22} className="sm:w-[26px] sm:h-[26px]" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-medium text-[#555] sm:text-sm">
//                     Language
//                   </p>

//                   <h4 className="text-lg font-medium sm:text-2xl">English</h4>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button
//               onClick={() => setShowPopup(true)}
//               className="mt-8 w-full  rounded-3xl bg-[#4f2e80] px-6 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#43256e] sm:mt-10 sm:px-8 sm:py-4 sm:text-2xl"
//             >
//               BOOK A CALL
//             </button>
//           </div>
//         </div>

       
//         <div className="mt-10 grid gap-10 border-t border-[#ddd] pt-10 text-center md:grid-cols-3"></div>

//         {/* Features */}
//         <div className="mt-2 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10">
//           {[
//             "500+ VAT Filings",
//             "Zero Client Penalties",
//             "Senior CPAs Only",
//             "48-Hour Response",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md sm:rounded-full sm:px-5 sm:py-2"
//             >
//               <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4f2e80] text-white">
//                 <Check size={16} />
//               </div>

//               <span className="text-sm font-semibold leading-snug text-[#222] sm:text-base">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showPopup && (
//         <MasterclassPopup
//           onClose={() => setShowPopup(false)}
          
//         />
//       )}
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import MasterclassPopup from "./MasterclassPopup";

import {
  Globe,
  Video,
  Check,
  BriefcaseBusiness,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f8f8fc] py-8 md:py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#4f2e80]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#4f2e80]/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(#cfcfcf 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Top Badge */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4f2e80]/20 bg-white px-6 py-3 shadow-lg backdrop-blur-md md:px-8">
            <Sparkles size={18} className="text-[#4f2e80]" />

            <span className="text-sm font-semibold text-[#4f2e80] md:text-base">
              Live Compliance & Tax Risk Workshop
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-[#111] md:text-5xl">
            Avoid Costly{" "}
            <span className="text-[#4f2e80]">
              VAT Penalties & Tax Mistakes
            </span>
            <br />
            Before They Cost Your UAE Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#555] md:text-xl">
            Book your free 30-minute consultation with senior tax experts and
            protect your business from expensive FTA penalties, compliance
            issues, and reporting mistakes.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="group rounded-3xl border border-[#ececec] bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white shadow-lg">
                  <BriefcaseBusiness size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#777]">
                    Business Focus
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-[#111]">
                    Growth & Compliance
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-[#ececec] bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white shadow-lg">
                  <BadgeCheck size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#777]">
                    Consultation Type
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-[#111]">
                    Strategic Advisory
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-[#ececec] bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white shadow-lg">
                  <Video size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#777]">Venue</p>

                  <h4 className="mt-1 text-xl font-bold text-[#111]">
                    Zoom Meeting
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-3xl border border-[#ececec] bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white shadow-lg">
                  <Globe size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#777]">Language</p>

                  <h4 className="mt-1 text-xl font-bold text-[#111]">
                    English
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#4f2e80] px-8 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#43256e] md:w-auto md:min-w-[420px]"
            >
              <span className="relative z-10">
                BOOK YOUR FREE CONSULTATION
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>

            <p className="mt-4 text-sm text-[#666]">
              Limited consultation slots available this week
            </p>
          </div>
        </div>

        {/* Trust Features */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {[
            "500+ VAT Filings",
            "Zero Client Penalties",
            "Senior CPAs Only",
            "48-Hour Response",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-full border border-[#e9e9e9] bg-white px-5 py-3 shadow-md"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f2e80] text-white">
                <Check size={15} />
              </div>

              <span className="text-sm font-semibold text-[#222] md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <MasterclassPopup onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}