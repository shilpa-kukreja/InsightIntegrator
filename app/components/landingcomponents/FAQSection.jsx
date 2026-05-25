"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Clock,
  Calculator,
  FileText,
  DollarSign,
  CheckCircle,
  Users,
  Building2,
} from "lucide-react";

const faqs = [
  // --- NEW FAQ ITEMS ---
  {
    question: "Do you work with DIFC and ADGM regulated entities?",
    answer:
      "Yes, we support regulated and non-regulated entities across UAE, DIFC, and ADGM.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The initial consultation is complimentary and confidential.",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    question: "Do you help during regulatory inspections?",
    answer:
      "Yes, we provide full regulatory support and remediation assistance.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    question: "Can you assist with AML and risk-based reviews?",
    answer:
      "Absolutely. We provide AML advisory, risk-based internal audits, and ongoing support to ensure your organization remains compliant with UAE regulations.",
    icon: <Calculator className="w-5 h-5" />,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-sm font-semibold text-[#4f2e80] bg-blue-50 rounded-full mb-4"
          >
            Knowledge Base
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Clear answers to common questions on taxation, compliance, and corporate services.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1  gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#4f2e80] flex items-center justify-center">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20 text-gray-700 leading-relaxed">
                      {faq.answer}

                      <div className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <p className="text-sm text-blue-800">
                          For tailored advice, consult our Chartered Accountants based on your specific requirements.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}