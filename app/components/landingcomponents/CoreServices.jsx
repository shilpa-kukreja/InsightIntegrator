"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Landmark,
  ChevronDown,
} from "lucide-react";

export default function CoreServicesSection() {
  const [open, setOpen] = useState("advisory");

  const toggle = (type) => {
    setOpen(open === type ? null : type);
  };

  return (
    <section className="bg-gray-200 sm:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/landingimages/image/04.png"
                alt="Professional Services"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Key Services
            </h2>

            {/* <p className="text-lg text-gray-600 mb-10">
              Choose a category to explore our advisory and consulting expertise.
            </p> */}

            {/* Advisory */}
            <Dropdown
              title="Advisory Services"
              isOpen={open === "advisory"}
              onClick={() => toggle("advisory")}
            >
              <ServiceItem icon={<FileText />} text="Internal Audit " />
              <ServiceItem icon={<ShieldCheck />} text="AML" />
              <ServiceItem icon={<Building2 />} text="Enterprise Risk Management" />
              <ServiceItem icon={<Landmark />} text="Governance" />
              <ServiceItem icon={<CheckCircle />} text="Business Valuation" />
              <ServiceItem icon={<CheckCircle />} text="Feasibility Study" />
            </Dropdown>

            {/* Consulting */}
            {/* <Dropdown
              title="Consulting Services"
              isOpen={open === "consulting"}
              onClick={() => toggle("consulting")}
            >
              <ServiceItem icon={<Scale />} text="Business Transformation" />
            </Dropdown> */}

            {/* Financial Advisory */}
            {/* <Dropdown
              title="Financial Advisory Services"
              isOpen={open === "financial"}
              onClick={() => toggle("financial")}
            >
              <ServiceItem icon={<Scale />} text="Business Valuations" />
             
            </Dropdown> */}

             {/* Tax */}
            <Dropdown
              title="Tax Services"
              isOpen={open === "tax"}
              onClick={() => toggle("tax")}
            >
              <ServiceItem icon={<Scale />} text="VAT" />
              <ServiceItem icon={<CheckCircle />} text="Corporate Tax" />
            </Dropdown>

            {/* Business Setup */}
            <Dropdown
              title="Business Set Up  "
              isOpen={open === "setup"}
              onClick={() => toggle("setup")}
            >
             <ServiceItem icon={<Scale />} text="Mainland company formation " />
             <ServiceItem icon={<Scale />} text="Freezone company formation" />
              {/* <ServiceItem icon={<Scale />} text="Company Formation" /> */}
            </Dropdown>

           



          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Dropdown Wrapper */
/* Dropdown Wrapper */
function Dropdown({ title, isOpen, onClick, children }) {
  return (
    <div className="mb-6">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between rounded-3xl bg-[#4f2e80] px-6 py-3 text-left text-white shadow-lg transition-all duration-300 hover:bg-[#43256e]"
      >
        <div>
          
          <h3 className="text-xl ">
            {title}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <ChevronDown
            size={24}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Service Item */
function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4f2e80] text-white">
        {icon}
      </div>

      <div>
        

        <h4 className="pt-2 text-lg font-medium">
          {text}
        </h4>
      </div>
    </div>
  );
}