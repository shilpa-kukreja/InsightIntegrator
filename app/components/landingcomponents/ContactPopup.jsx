// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Phone,
//   Mail,
//   User,
//   Building,
//   FileText,
//   Shield,
//   CheckCircle,
//   Calendar,
//   MessageSquare,
// } from "lucide-react";

// export default function ContactPopup({ onClose }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     email: "",
//     phone: "",
//     serviceType: "",
//     message: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const serviceOptions = [
//     {
//       value: "internal-audit",
//       label: "Internal Audit",
//       icon: <FileText className="w-4 h-4" />,
//     },
//     {
//       value: "aml-compliance",
//       label: "AML / Compliance",
//       icon: <Shield className="w-4 h-4" />,
//     },
//     {
//       value: "corporate-governance",
//       label: "Corporate Governance",
//       icon: <Building className="w-4 h-4" />,
//     },
//     { value: "vat", label: "VAT", icon: <FileText className="w-4 h-4" /> },
//     {
//       value: "corporate-tax",
//       label: "Corporate Tax",
//       icon: <FileText className="w-4 h-4" />,
//     },
//     {
//       value: "difc-adgm",
//       label: "DIFC / ADGM Support",
//       icon: <Building className="w-4 h-4" />,
//     },
//     {
//       value: "company-registration",
//       label: "Company Registration",
//       icon: <Building className="w-4 h-4" />,
//     },
//     {
//       value: "gst-services",
//       label: "GST Services",
//       icon: <FileText className="w-4 h-4" />,
//     },
//     {
//       value: "accounting",
//       label: "Accounting & Bookkeeping",
//       icon: <FileText className="w-4 h-4" />,
//     },
//     {
//       value: "other",
//       label: "Other",
//       icon: <MessageSquare className="w-4 h-4" />,
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const GOOGLE_SHEET_URL =
//     // "https://script.google.com/macros/s/AKfycbycC_dHrLGFYzldh9FBiIgcVWYkEkEH618Qh4yJn55pUUYoMY-fOA3aE_AHMoWYKhdw/exec";
//     // "https://script.google.com/macros/s/AKfycbya1p_onnMF7OGMCU2jAPEF2y_g4EoX83xuD_u1GPOGVeLdp0IU3409D_B46MqyTbsu/exec";
//     // "https://script.google.com/macros/s/AKfycbyZvHfKtVW22C-jDr0QcGexrEawnyFqJXhiVIRvrfqV6ER_wtHfF8zRnJ2CUaJylVCx/exec";
//      "https://script.google.com/macros/s/AKfycbxAhWNPFf_xLhDY2j-CRa3WgOQMVvb9NHKmoS4JZmFrvHhK90oqmnl6JK7t-vR4GRrK/exec";









//     //  Deployment ID  AKfycbya1p_onnMF7OGMCU2jAPEF2y_g4EoX83xuD_u1GPOGVeLdp0IU3409D_B46MqyTbsu

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // ✅ FINAL DATA CREATE HERE
//     const finalData = {
//       ...formData,
//       serviceType:
//         formData.serviceType === "other"
//           ? formData.otherService
//           : formData.serviceType,
//     };

//     try {
//       await fetch(GOOGLE_SHEET_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalData),
//       });

//       setIsSubmitted(true);

//       setTimeout(() => {
//         setFormData({
//           fullName: "",
//           companyName: "",
//           email: "",
//           phone: "",
//           serviceType: "",
//           otherService: "", // ✅ reset this also
//           message: "",
//         });
//         setIsSubmitted(false);
//         onClose();
//       }, 3000);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       alert("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       >
//         {/* Backdrop */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="absolute inset-0  "
//           onClick={onClose}
//         />

//         {/* Modal */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0, y: 20 }}
//           animate={{ scale: 1, opacity: 1, y: 0 }}
//           exit={{ scale: 0.9, opacity: 0, y: 20 }}
//           transition={{ type: "spring", damping: 25, stiffness: 300 }}
//           className="relative w-full max-w-lg max-h-[90vh] "
//         >
//           {/* Modal Content */}
//           <div className="bg-white rounded-xl shadow-xl  overflow-hidden">
//             {/* Header */}
//             <div className="relative p-8 bg-[#4f2e80]">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
//               >
//                 <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
//               </button>

//               {/* Header Content */}
//               <div className="text-center">
//                 {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
//                   <Calendar className="w-8 h-8 text-white" />
//                 </div> */}

//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   Free Consultation
//                 </h3>

//                 <p className="text-blue-100 text-sm">
//                   Speak directly with our Chartered Accountant experts
//                 </p>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-8 max-h-[70vh] overflow-y-auto">
//               {isSubmitted ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="text-center py-8"
//                 >
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mx-auto mb-6">
//                     <CheckCircle className="w-10 h-10 text-green-600" />
//                   </div>
//                   <h4 className="text-2xl font-bold text-gray-900 mb-2">
//                     Thank You!
//                   </h4>
//                   <p className="text-gray-600 mb-6">
//                     Our CA expert will contact you within 30 minutes.
//                   </p>
//                   <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full">
//                     <Shield className="w-4 h-4" />
//                     <span>100% Confidential & Secure</span>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <User className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         required
//                         className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
//                       />
//                     </div>
//                   </div>

//                   {/* Company Name */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Company Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Building className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         name="companyName"
//                         value={formData.companyName}
//                         onChange={handleChange}
//                         placeholder="Your company name"
//                         className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
//                       />
//                     </div>
//                   </div>

//                   {/* Contact Details */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Email */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Email Address <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Mail className="w-5 h-5 text-gray-400" />
//                         </div>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="Enter your email address"
//                           required
//                           className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
//                         />
//                       </div>
//                     </div>

//                     {/* Phone */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Phone className="w-5 h-5 text-gray-400" />
//                         </div>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Enter your phone number"
//                           required
//                           className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Service Type */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Type of Service <span className="text-red-500"></span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FileText className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <select
//                         name="serviceType"
//                         value={formData.serviceType}
//                         onChange={handleChange}
//                         className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400 appearance-none"
//                       >
//                         <option value="">Select a service</option>
//                         {serviceOptions.map((option) => (
//                           <option key={option.value} value={option.value}>
//                             {option.label}
//                           </option>
//                         ))}
//                       </select>
//                       <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                         <svg
//                           className="w-5 h-5 text-gray-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Other Service Input */}
//                   {formData.serviceType === "other" && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="mt-4"
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Please specify your service{" "}
//                         <span className="text-red-500">*</span>
//                       </label>

//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3 pointer-events-none">
//                           <MessageSquare className="w-5 h-5 text-gray-400" />
//                         </div>

//                         <textarea
//                           name="otherService"
//                           value={formData.otherService}
//                           onChange={handleChange}
//                           required
//                           rows={3}
//                           placeholder="Describe the service you are looking for..."
//                           className="w-full pl-10 pr-4 py-3 
//     border border-gray-200 rounded-xl 
//     focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent 
//     outline-none transition-all 
//     bg-gray-50 hover:bg-white focus:bg-white 
//     text-gray-900 placeholder-gray-400 
//     resize-none 
//     max-h-32 overflow-y-auto" // 👈 IMPORTANT
//                         />
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Additional Message */}

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className={`w-full group relative bg-[#4f2e80]  text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 ${
//                       isLoading ? "opacity-80 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-2">
//                       {isLoading ? (
//                         <>
//                           <svg
//                             className="animate-spin h-5 w-5 text-white"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                             />
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             />
//                           </svg>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           <Calendar className="w-5 h-5" />
//                           Schedule Free Consultation
//                         </>
//                       )}
//                     </span>
//                     {!isLoading && (
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Calendar, CheckCircle } from "lucide-react";

export default function ContactPopup({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const autoShowTimer = useRef(null);

  // Clear any existing timer
  const clearTimer = () => {
    if (autoShowTimer.current) {
      clearTimeout(autoShowTimer.current);
      autoShowTimer.current = null;
    }
  };

  // Schedule popup to show after 30 seconds (only if not submitted yet)
  const scheduleAutoShow = () => {
    if (hasSubmitted) return;
    clearTimer();
    autoShowTimer.current = setTimeout(() => {
      setIsVisible(true);
    }, 15000);
  };

  // On mount, start the 30-second timer
  useEffect(() => {
    scheduleAutoShow();
    return () => clearTimer();
  }, [hasSubmitted]); // re-run if hasSubmitted changes (but it never becomes true until submit)

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      // Prevent numbers in name field
      const filteredValue = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
      if (filteredValue.length > 0 && /[0-9]/.test(value)) {
        setNameError("Numbers are not allowed in name");
      } else {
        setNameError("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxAhWNPFf_xLhDY2j-CRa3WgOQMVvb9NHKmoS4JZmFrvHhK90oqmnl6JK7t-vR4GRrK/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setNameError("Full name is required");
      return;
    }
    if (!formData.phone.trim()) {
      alert("Phone number is required");
      return;
    }

    setIsLoading(true);

    const finalData = {
      fullName: formData.fullName,
      email: formData.email || "",
      phone: formData.phone,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      // Successful submission
      setHasSubmitted(true);   // prevent any future auto-show
      clearTimer();            // stop any pending timer
      setIsSubmitted(true);    // show thank you message

      setTimeout(() => {
        setIsSubmitted(false);
        setIsVisible(false);    // close popup
        if (onClose) onClose();
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualClose = () => {
    setIsVisible(false);
    if (onClose) onClose();

    // If user hasn't submitted yet, schedule the popup to show again after 30 seconds
    if (!hasSubmitted) {
      scheduleAutoShow();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleManualClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative px-6 py-8 bg-gradient-to-br from-[#2c154f] to-[#4a2477] text-white">
                <button
                  onClick={handleManualClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Free Consultation</h3>
                  <p className="text-indigo-100 text-sm mt-1">
                    Speak directly with our CA experts
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      Our CA expert will contact you within 30 minutes.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g., John Doe"
                          className={`w-full pl-10 pr-4 py-3 border ${
                            nameError ? "border-red-300" : "border-gray-200"
                          } rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                        />
                      </div>
                      {nameError && (
                        <p className="text-red-500 text-xs mt-1">{nameError}</p>
                      )}
                    </div>

                    {/* Email (optional) */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email Address
                       
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 XX XXX XXXX"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f2e80] focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#3c1972] hover:bg-[#3b2363] text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Schedule Free Consultation
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      ✓ 100% confidential · No spam · Expert callback
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}