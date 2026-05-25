"use client";

import { useState } from "react";
import MasterclassPopup from "./MasterclassPopup";

import {
  CalendarDays,
  Globe,
  Video,
  Clock3,
  Check,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-14">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d8d8d8 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Top Badge */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-[#4f2e80] px-8 py-4 text-sm font-semibold text-white shadow-lg md:px-14 md:text-lg">
            Live Compliance & Tax Risk Workshop{" "}
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-2xl font-black leading-tight text-black md:text-4xl">
            Avoid Costly{" "}
            <span className="text-[#4f2e80]">VAT Penalties & Tax Mistakes</span>{" "}
            Roadmap
            <br />
            Before They Cost Your UAE Business
          </h1>

          <p className="mt-4 text-lg font-medium text-[#333] md:text-xl">
            Book Your Free 30-Minute Tax Consultation And Stay Protected From
            Costly FTA Penalties
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-25 md:mt-22 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
       <div className="flex flex-col items-center">
  <div className="relative">
    
    {/* Circle */}
    <div className="relative mt-[-90px] flex h-[330px] w-[330px] items-center justify-center rounded-full border-[12px] border-[#ece3f7] bg-[#4f2e80] shadow-2xl overflow-visible">

      {/* Bigger Image */}
      <img
        src="/landingimages/image/man.png"
        alt="Founder"
        className="absolute bottom-0 object-contain grayscale scale-[1.2] pt-[800px]"
      />
    </div>

    {/* Floating Card */}
    <div className="absolute -bottom-4 left-1/2 w-[145%] -translate-x-1/2 rounded-2xl border border-[#ddd] bg-white px-6 py-4 text-center shadow-xl">
      <h3 className="text-2xl font-bold text-black">
        CEO of Insights Integrators
      </h3>
    </div>
  </div>
</div>

          {/* Right Side */}
          <div>
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 ">
              {/* Time */}
              <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
                  <BriefcaseBusiness
                    size={22}
                    className="sm:w-[26px] sm:h-[26px]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#555] sm:text-sm">
                    Business Focus
                  </p>

                  <h4 className="text-lg font-medium sm:text-[18px]">
                    Growth & Compliance
                  </h4>
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
                  <BadgeCheck size={22} className="sm:w-[26px] sm:h-[26px]" />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#555] sm:text-sm">
                    Consultation Type
                  </p>

                  <h4 className="text-lg font-medium sm:text-xl">
                    Strategic Advisory
                  </h4>
                </div>
              </div>

              {/* Venue */}
              <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
                  <Video size={22} className="sm:w-[26px] sm:h-[26px]" />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#555] sm:text-sm">
                    Venue
                  </p>

                  <h4 className="text-lg font-medium sm:text-2xl">Zoom</h4>
                </div>
              </div>

              {/* Language */}
              <div className="flex flex-col items-center text-center gap-3 rounded-3xl border border-[#ddd] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:text-left sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white sm:h-12 sm:w-12">
                  <Globe size={22} className="sm:w-[26px] sm:h-[26px]" />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#555] sm:text-sm">
                    Language
                  </p>

                  <h4 className="text-lg font-medium sm:text-2xl">English</h4>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="mt-8 w-full rounded-3xl bg-[#4f2e80] px-6 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#43256e] sm:mt-10 sm:px-8 sm:py-4 sm:text-2xl"
            >
              BOOK A CALL
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid gap-10 border-t border-[#ddd] pt-10 text-center md:grid-cols-3"></div>

        {/* Features */}
        <div className="mt-2 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10">
          {[
            "500+ VAT Filings",
            "Zero Client Penalties",
            "Senior CPAs Only",
            "48-Hour Response",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md sm:rounded-full sm:px-5 sm:py-2"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4f2e80] text-white">
                <Check size={16} />
              </div>

              <span className="text-sm font-semibold leading-snug text-[#222] sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <MasterclassPopup
          onClose={() => setShowPopup(false)}
          
        />
      )}
    </section>
  );
}