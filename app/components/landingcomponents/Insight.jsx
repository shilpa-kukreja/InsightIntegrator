"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Users,
  FileSearch,
  Landmark,
} from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-gray-50 sm:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#4f2e80] uppercase tracking-wide mb-4">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Why Businesses Across UAE Trust
              <span className="block text-[#4f2e80] mt-2">
                Insight Integrators
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Organizations operating in highly regulated environments rely on us
              for clarity, confidence, and hands-on regulatory support — not just
              theoretical advice.
            </p>

          {/* Trust Points */}
<div className="">
  <div className=" flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
      <Landmark size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Deep knowledge of UAE regulations
      </h4>
    </div>
  </div>

  <div className="mt-3 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
      <ShieldCheck size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Strong focus on financial crime prevention
      </h4>
    </div>
  </div>

  <div className="mt-3 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <Users size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Senior professionals lead every engagement
      </h4>
    </div>
  </div>

  <div className="mt-3 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <FileSearch size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Practical remediation, not just audit reports
      </h4>
    </div>
  </div>

  <div className="mt-3 flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md sm:col-span-2">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
      <CheckCircle2 size={26} />
    </div>

    <div>
      <h4 className="pt-2 text-lg font-medium leading-snug text-[#111]">
        Trusted support during regulatory inspections
      </h4>
    </div>
  </div>
</div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/landingimages/image/Untitleddesign.jpeg" // replace with your image
                alt="Trusted Regulatory & Compliance Advisory in UAE"
                width={650}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Trust Badge */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-200 hidden md:block">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Regulatory Confidence
              </p>
              <p className="text-lg font-semibold text-gray-900">
                UAE • DIFC • ADGM
              </p>
            </div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Trust Item */
function TrustItem({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-4 bg-white border border-[#4f2e80] rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-100 text-#4f2e80 flex-shrink-0">
        {icon}
      </div>
      <p className="text-lg text-gray-800 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}