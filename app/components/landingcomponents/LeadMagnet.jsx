"use client";

import { motion } from "framer-motion";
import { CheckCircle, CalendarDays, ShieldCheck,CheckCircle2,ShieldAlert,Lightbulb} from "lucide-react";

export default function LeadMagnetSection({ onOpenPopup }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-50">

      {/* Decorative Blur - subtle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border-2 border-gray-400 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-14 text-center shadow-lg"
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-xs sm:text-sm font-semibold text-gray-800 mb-5 md:mb-6">
            <ShieldCheck className="w-4 h-4 text-gray-600" />
            Free Confidential Consultation
          </div> */}

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Get a Free Compliance & Risk Health Check
          </h2>

          {/* Offer Copy */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            In a 30-minute confidential consultation, we will help you gain clarity
            on your regulatory position and next steps.
          </p>

          
         {/* Bullet Points */}
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 md:mb-12">

  <div className="flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
      <CheckCircle2 size={22} />
    </div>

    <div>
     
      <h4 className="text-lg font-medium leading-snug text-[#111]">
        Review your current compliance framework
      </h4>
    </div>
  </div>

  <div className="flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
      <ShieldAlert size={22} />
    </div>

    <div>
     
      <h4 className="text-lg font-medium leading-snug text-[#111]">
        Identify key regulatory risks
      </h4>
    </div>
  </div>

  <div className="flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
      <Lightbulb size={22} />
    </div>

    <div>
     

      <h4 className="text-lg font-medium leading-snug text-[#111]">
        Provide high-level improvement recommendations
      </h4>
    </div>
  </div>

</div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenPopup}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#4f2e80] text-white font-semibold px-6 sm:px-10 py-4 rounded-xl shadow hover:opacity-90 transition"
          >
            <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6" />
            Book Free Consultation Now
          </motion.button>

          {/* Trust Note */}
          <p className="mt-5 md:mt-6 text-xs sm:text-sm text-gray-500">
            No obligation • Confidential • Senior-led discussion
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Bullet Item */
function Bullet({ text }) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5 text-left">
      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}