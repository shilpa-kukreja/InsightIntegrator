"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Plus,
  Minus,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer({ onOpenPopup }) {
  const [openContact, setOpenContact] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 sm:py-16 py-12 grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <img src="/landingimages/image/logo-white.png" alt="Insight Integrators" className="w-36" />
            <p className="text-sm leading-relaxed text-gray-300">
              <strong>Insight Integrators L.L.C - FZ</strong> is an independent advisory firm
              specializing in compliance, audit, governance, and risk advisory.
            </p>
            <p className="text-xs text-gray-400">
              Confidential • Independent • Regulator-Focused
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <button
              onClick={() => setOpenContact(!openContact)}
              className="w-full flex items-center justify-between md:pointer-events-none"
            >
              <h4 className="text-lg font-semibold text-white">
                Contact Information
              </h4>
              <span className="md:hidden">
                {openContact ? <Minus /> : <Plus />}
              </span>
            </button>

            <ul
              className={`mt-4 space-y-3 text-sm
                ${openContact ? "block" : "hidden"} md:block`}
            >
               <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4f2e80]" />
                +971526806400
              </li> 
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4f2e80]" />
                https://insightintegrators.ae/
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#4f2e80]" />
                United Arab Emirates
              </li>
            </ul>
          </div>

          {/* Advisory Services */}
          {/* <div>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="w-full flex items-center justify-between md:pointer-events-none"
            >
              <h4 className="text-lg font-semibold text-white">
                Advisory Services
              </h4>
              <span className="md:hidden">
                {openServices ? <Minus /> : <Plus />}
              </span>
            </button>

            <ul
              className={`mt-4 space-y-2 text-sm text-gray-300
                ${openServices ? "block" : "hidden"} md:block`}
            >
              <li>Regulatory & Compliance Advisory</li>
              <li>Internal & Risk-Based Audit</li>
              <li>Corporate Governance Frameworks</li>
              <li>AML / CFT Advisory</li>
              <li>Risk & Control Assessments</li>
            </ul>
          </div> */}

          {/* CTA */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg font-semibold text-white">
              Free Strategy Consultation
            </h4>
            <p className="text-sm text-gray-300">
              Schedule a free  consultation with our senior advisory team.
            </p>
            <button
              onClick={onOpenPopup}
              className="inline-flex items-center gap-2 bg-[#4f2e80] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <CalendarDays className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Insight Integrators – UAE</p>
            <p>Compliance • Audit • Governance • Risk Advisory</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">

        {/* CALL BUTTON */}
        <a
          href="tel:+971526806400"
          aria-label="Call Us"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
            alt="call"
            className="relative w-5 h-5"
          />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/971526806400?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
            alt="whatsapp"
            className="relative w-5 h-5"
          />
        </a>

      </div>
    </>
  );
}