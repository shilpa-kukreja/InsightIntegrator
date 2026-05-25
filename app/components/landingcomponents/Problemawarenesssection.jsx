"use client";

import {
  AlertTriangle,
  ShieldAlert,
  FileWarning,
  Users,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemAwarenessSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center lg:items-start">

          {/* LEFT SIDE – HEADLINE + CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Regulatory Expectations Are Increasing
              <span className="block text-[#4f2e80] mt-3">
                Are You Fully Prepared?
              </span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 sm:mt-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Businesses today face heightened regulatory scrutiny, evolving
              compliance standards, and increasing accountability from authorities.
            </p>

            {/* Divider */}
            <div className="w-20 sm:w-24 h-1 bg-[#4f2e80] rounded-full my-8 sm:my-10 mx-auto lg:mx-0" />

            {/* Bridge Statement */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md">
              <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                Most businesses fail not due to lack of effort —
                <span className="block text-[#4f2e80] font-semibold mt-2">
                  but due to lack of regulatory clarity and structured risk management.
                </span>
              </p>
            </div>
          </motion.div>

         {/* RIGHT SIDE – PAIN POINTS */}
<div className="">
  <div className="flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <FileWarning size={26} />
    </div>

    <div >
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Unclear or outdated compliance frameworks
      </h4>
    </div>
  </div>

  <div className="mt-2 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <ShieldAlert size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        High exposure to regulatory inspections and audits
      </h4>
    </div>
  </div>

  <div className="mt-2 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <Scale size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Weak internal controls and governance gaps
      </h4>
    </div>
  </div>

  <div className="mt-2 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <AlertTriangle size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Risk of penalties, enforcement action, and reputational damage
      </h4>
    </div>
  </div>

  <div className="mt-2 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md sm:col-span-2">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <Users size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Limited in-house compliance expertise
      </h4>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Pain Card */
function PainCard({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#4f2e80]/10 text-[#4f2e80] group-hover:bg-[#4f2e80]/20 transition">
          {icon}
        </div>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}