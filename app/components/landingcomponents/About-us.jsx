"use client";

import {
  Building2,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-200">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTBIMTB2NDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-blue-600/5 to-blue-400/10 rounded-3xl -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] w-full relative">
                  <img
                    src="/landingimages/image/03.png"
                    alt="Senior Compliance & Audit Professionals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Trust Badge */}
              {/* <div className="absolute -top-3 -left-3 bg-[#4f2e80] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                15+ Years Regulatory Experience
              </div> */}
            </div>
          </motion.div>

          {/* Right Content Section */}
          <div className="lg:col-span-7 space-y-8">

            {/* Section Header */}
            <div className="space-y-4">
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-[#4f2e80]" />
                <span className="text-[#4f2e80] font-semibold text-sm uppercase tracking-wider">
                  Authority & Credibility
                </span>
              </motion.div> */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Led by Experienced{" "}
                <span className="text-[#4f2e80]">
                   Professionals
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl text-justify leading-relaxed"
              >
                Senior-led  audit, advisory and tax services delivers clarity,
                confidence, and regulator-aligned outcomes.
              </motion.p>
            </div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 text-justify leading-relaxed">
               Our firm is led by seasoned professionals with extensive expertise in Internal Audit, Risk Management, Anti-Money Laundering (AML), Value Added Tax (VAT), Corporate Tax, Company Formation, and Accounting services.
              </p>

              <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Our engagements are led by Auditors, Chief Compliance Officers, Engineers, Tax Consultants, and industry specialists, collectively bringing over 15 years of hands-on experience.
              </p>

              <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Our expertise spans a diverse range of sectors, including Financial Services, Real Estate, Retail, Hospitality, Manufacturing, and Family Offices, supported by a deep understanding of regulatory requirements.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="relative">Learn More About Us</span>
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 rounded-xl font-semibold"
                >
                  <Building2 className="w-5 h-5" />
                  View Our Services
                </a>
              </div>
            </motion.div> */}

            {/* Social Proof */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-6 border-t border-gray-100"
            >
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <span>Confidential & Independent Engagements</span>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Proven Track Record in Audits & Remediation</span>
                </div>
              </div>
            </motion.div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;