// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Phone,
//   Mail,
//   User,
//   Calendar,
//   Clock3,
//   Globe,
//   Video,
//   CheckCircle,
// } from "lucide-react";

// export default function MasterclassPopup({
//   onClose,
//   selectedDate,
//   selectedTime,
// }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     email: "",
//     phone: "",
//     serviceType: "",
//     otherService: "",
//     date: selectedDate,
//     time: selectedTime,
//     venue: "Zoom",
//     language: "English",
//   });
//   const serviceOptions = [
//     {
//       value: "internal-audit",
//       label: "Internal Audit",
//     },
//     {
//       value: "aml",
//       label: "AML",
//     },
//     {
//       value: "enterprise-risk-management",
//       label: "Enterprise Risk Management",
//     },
//     {
//       value: "governance",
//       label: "Governance",
//     },
//     {
//       value: "business-valuation",
//       label: "Business Valuation",
//     },
//     {
//       value: "feasibility-study",
//       label: "Feasibility Study",
//     },
//     {
//       value: "VAT",
//       label: "VAT",
//     },{
//       value: "corporate-tax",
//       label: "Corporate Tax",
//     },{
//       value: "mainland-company-formation",
//       label: "Mainland Company Formation",
//     },{
//       value: "freezone-company-formation",
//       label: "Freezone Company Formation",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ];

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const GOOGLE_SHEET_URL =
//     // "https://script.google.com/macros/s/AKfycbycC_dHrLGFYzldh9FBiIgcVWYkEkEH618Qh4yJn55pUUYoMY-fOA3aE_AHMoWYKhdw/exec";
//     // "https://script.google.com/macros/s/AKfycbxjhecX_KGnWORRWdN_XQlbAKAq2_XpCb5STD1xbnWAuEcp3DOmmsWHEhoFqMtL756P/exec";
//     // "https://script.google.com/macros/s/AKfycbz3XD_U3QEQ1VHkBQR_Hb4tyybpPPLljIho1jK9kLU34JYk-ixlN8XKHIvLqerWp73X/exec";
//     // "https://script.google.com/macros/s/AKfycbzEuJdqMJw_koQBBBAzipSSZfh1aec8MS-yKXvJHg_AACCruzIoyUVB3rtH3HkqRCO7/exec";
//     "https://script.google.com/macros/s/AKfycbyZvHfKtVW22C-jDr0QcGexrEawnyFqJXhiVIRvrfqV6ER_wtHfF8zRnJ2CUaJylVCx/exec";

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     const formattedDate = new Date(formData.date).toLocaleDateString("en-GB");
//     // OUTPUT: 30/05/2026

//     const formattedTime = new Date(
//       `1970-01-01T${formData.time}`,
//     ).toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     });
//     // OUTPUT: 3:04 PM

//     const finalData = {
//       fullName: formData.fullName,
//       companyName: formData.companyName,
//       email: formData.email,
//       phone: formData.phone,

//       serviceType:
//         formData.serviceType === "other"
//           ? formData.otherService
//           : formData.serviceType,

//       date: formattedDate,
//       time: formattedTime,

//       venue: formData.venue,
//       language: formData.language,
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
//         setIsSubmitted(false);

//         setFormData({
//           fullName: "",
//           companyName: "",
//           email: "",
//           phone: "",
//           serviceType: "",
//           otherService: "",
//           date: selectedDate,
//           time: selectedTime,
//           venue: "Zoom",
//           language: "English",
//         });

//         onClose();
//       }, 2500);
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         {/* Backdrop */}
//         <div
//           className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//           onClick={onClose}
//         />

//         {/* Modal */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0, y: 30 }}
//           animate={{ scale: 1, opacity: 1, y: 0 }}
//           exit={{ scale: 0.9, opacity: 0, y: 30 }}
//           transition={{ duration: 0.3 }}
//           className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//         >
//           {/* Header */}
//           <div className="bg-[#4f2e80] p-8 text-white relative">
//             <button
//               onClick={onClose}
//               className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
//             >
//               <X size={20} />
//             </button>

//             <h2 className="text-2xl font-black">
//               Expert UAE Tax Guidance

//             </h2>

//             <p className="mt-2 text-white/80">
//      Book your free strategy session.
//             </p>
//           </div>

//           {/* Content */}
//           <div className="max-h-[80vh] overflow-y-auto p-6">
//             {isSubmitted ? (
//               <div className="py-10 text-center">
//                 <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
//                   <CheckCircle className="h-10 w-10 text-green-600" />
//                 </div>

//                 <h3 className="text-3xl font-bold">Registration Successful!</h3>

//                 <p className="mt-3 text-gray-600">
//                   Your seat has been reserved successfully.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold">
//                     Full Name
//                   </label>

//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                     <input
//                       type="text"
//                       name="fullName"
//                       required
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       placeholder="Enter your name"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                     />
//                   </div>
//                 </div>

//                 {/* Company Name */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold">
//                     Company Name
//                   </label>

//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                     <input
//                       type="text"
//                       name="companyName"
//                       required
//                       value={formData.companyName}
//                       onChange={handleChange}
//                       placeholder="Enter your company name"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                     />
//                   </div>
//                 </div>

//                 {/* email and the phone number */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {/* Email */}
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Email Address
//                     </label>

//                     <div className="relative">
//                       <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Phone Number
//                     </label>

//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="tel"
//                         name="phone"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your number"
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Service Type */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold">
//                     Type of Service
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="serviceType"
//                       value={formData.serviceType}
//                       onChange={handleChange}
//                       className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-10 outline-none focus:border-[#4f2e80]"
//                     >
//                       <option value="">Select an service</option>

//                       {serviceOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>

//                     <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//                       <svg
//                         className="h-5 w-5 text-gray-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Other Service */}
//                 {formData.serviceType === "other" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                   >
//                     <label className="mb-2 block text-sm font-semibold">
//                       Please Specify
//                     </label>

//                     <textarea
//                       name="otherService"
//                       value={formData.otherService}
//                       onChange={handleChange}
//                       rows={4}
//                       placeholder="Write your requirement..."
//                       className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#4f2e80]"
//                     />
//                   </motion.div>
//                 )}

//                 {/* Date + Time */}
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Date
//                     </label>

//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Time
//                     </label>

//                     <div className="relative">
//                       <Clock3 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="time"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Venue + Language */}
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Venue
//                     </label>

//                     <div className="relative">
//                       <Video className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="text"
//                         name="venue"
//                         value={formData.venue}
//                         readOnly
//                         className="w-full rounded-xl border border-gray-200 bg-gray-100 py-3 pl-11 pr-4"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-semibold">
//                       Language
//                     </label>

//                     <div className="relative">
//                       <Globe className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//                       <input
//                         type="text"
//                         name="language"
//                         value={formData.language}
//                         readOnly
//                         className="w-full rounded-xl border border-gray-200 bg-gray-100 py-3 pl-11 pr-4"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full rounded-2xl bg-[#4f2e80] py-4 text-md font-bold text-white transition-all hover:bg-[#43256e]"
//                 >
//                   {isLoading ? "Submitting..." : "Schedule Free Consulation"}
//                 </button>
//               </form>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  X,
  Phone,
  Mail,
  User,
  Calendar,
  Globe,
  Video,
  CheckCircle,
  ArrowLeft,
  Clock3,
} from "lucide-react";

export default function MasterclassPopup({
  onClose,
  selectedDate,
  selectedTime,
}) {
  const [step, setStep] = useState(1);

  const [selectedDateValue, setSelectedDateValue] = useState(
    selectedDate ? new Date(selectedDate) : null,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "",
    otherService: "",
    date: selectedDate || "",
    time: selectedTime || "",
    venue: "Zoom",
    language: "English",
  });

  const serviceOptions = [
    {
      value: "internal-audit",
      label: "Internal Audit",
    },
    {
      value: "aml",
      label: "AML",
    },
    {
      value: "enterprise-risk-management",
      label: "Enterprise Risk Management",
    },
    {
      value: "governance",
      label: "Governance",
    },
    {
      value: "business-valuation",
      label: "Business Valuation",
    },
    {
      value: "feasibility-study",
      label: "Feasibility Study",
    },
    {
      value: "VAT",
      label: "VAT",
    },
    {
      value: "corporate-tax",
      label: "Corporate Tax",
    },
    {
      value: "mainland-company-formation",
      label: "Mainland Company Formation",
    },
    {
      value: "freezone-company-formation",
      label: "Freezone Company Formation",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const timeSlots = [
    "06:30 PM",
    "06:45 PM",
    "07:00 PM",
    "07:15 PM",
    "07:30 PM",
    "07:45 PM",
    "08:00 PM",
    "08:15 PM",
    "08:30 PM",
    "08:45 PM",
    "09:00 PM",
    "09:15 PM",
    "09:30 PM",
    "09:45 PM",
    "10:00 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
    "11:00 PM",
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbxAhWNPFf_xLhDY2j-CRa3WgOQMVvb9NHKmoS4JZmFrvHhK90oqmnl6JK7t-vR4GRrK/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formattedDate = new Date(formData.date).toLocaleDateString("en-GB");

    const finalData = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,

      serviceType:
        formData.serviceType === "other"
          ? formData.otherService
          : formData.serviceType,

      date: formattedDate,
      time: formData.time,

      venue: formData.venue,
      language: formData.language,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          serviceType: "",
          otherService: "",
          date: "",
          time: "",
          venue: "Zoom",
          language: "English",
        });

        setStep(1);

        onClose();
      }, 2500);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-y-auto overscroll-none touch-none flex items-center justify-center p-3 md:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="relative bg-[#4f2e80] p-8 text-white">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-black">Expert UAE Tax Guidance</h2>

            <p className="mt-2 text-white/80">
              Book your free strategy session.
            </p>

            {/* Step Indicator */}
            {/* <div className="mt-6 flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  step >= 1
                    ? "bg-white text-[#4f2e80]"
                    : "bg-white/20 text-white"
                }`}
              >
                1
              </div>

              <div className="h-[2px] flex-1 bg-white/20" />

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                  step >= 2
                    ? "bg-white text-[#4f2e80]"
                    : "bg-white/20 text-white"
                }`}
              >
                2
              </div>
            </div> */}
          </div>

          {/* Content */}
          <div className="max-h-[82vh] overflow-y-auto p-5 md:p-7">
            {" "}
            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>

                <h3 className="text-4xl font-bold">Registration Successful!</h3>

                <p className="mt-4 text-lg text-gray-600">
                  Your consultation has been booked successfully.
                </p>
              </div>
            ) : (
              <>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="grid gap-8 lg:grid-cols-[220px_1fr_240px]">
                    {/* LEFT SIDE */}
                    <div className="border-b pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                      <h3 className="text-2xl font-bold text-black">
                        Discovery Meeting
                      </h3>

                      <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock3 className="h-5 w-5" />
                          <span className="font-medium">30 min</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <Video className="h-5 w-5" />
                          <span className="font-medium">Zoom Meeting</span>
                        </div>
                      </div>
                    </div>

                    {/* CENTER */}
                    <div>
                      <h3 className="mb-6 text-xl font-bold">
                        Select Date & Time
                      </h3>

                      <div className="custom-calendar">
                        <ReactCalendar
                          onChange={(date) => {
                            setSelectedDateValue(date);

                            setFormData((prev) => ({
                              ...prev,
                              date: date.toISOString(),
                            }));
                          }}
                          value={selectedDateValue}
                          minDate={new Date()}
                        />
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    {/* RIGHT SIDE */}
                    <div className="flex flex-col">
                      <h3 className="mb-5 text-xl font-bold">
                        Available Slots
                      </h3>

                      {/* Scrollable Slots */}
                      <div className="custom-scrollbar h-[420px] overflow-y-auto pr-2 space-y-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                time: slot,
                              }))
                            }
                            className={`w-full rounded-xl border py-3 text-sm font-bold transition-all
          ${
            formData.time === slot
              ? "border-[#4f2e80] bg-[#4f2e80] text-white"
              : "border-[#4f2e80] text-[#4f2e80] hover:bg-[#f7f3fc]"
          }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        disabled={!formData.date || !formData.time}
                        onClick={() => {
                          if (!formData.date || !formData.time) return;

                          setStep(2);
                        }}
                        className={`mt-5 w-full rounded-2xl py-4 font-bold transition-all
  ${
    !formData.date || !formData.time
      ? "cursor-not-allowed bg-gray-300 text-gray-500"
      : "bg-[#4f2e80] text-white hover:bg-[#43256e]"
  }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-3xl space-y-6"
                  >
                    {/* Selected Slot */}
                    <div className="rounded-2xl border border-[#4f2e80]/20 bg-[#f7f3fc] p-5">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm text-gray-500">
                            Selected Meeting Slot
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-[#4f2e80]" />

                            <span className="font-bold text-[#4f2e80]">
                              {formData.date && formData.time
                                ? `${new Date(formData.date).toDateString()} • ${formData.time}`
                                : "Please select date & time"}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex items-center gap-2 rounded-xl border border-[#4f2e80] px-4 py-2 text-sm font-semibold text-[#4f2e80]"
                        >
                          <ArrowLeft size={16} />
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Full Name */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Full Name
                        </label>

                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Company Name
                        </label>

                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Phone Number
                        </label>

                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your number"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-[#4f2e80]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Type of Service
                      </label>

                      <div className="relative">
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-10 outline-none focus:border-[#4f2e80]"
                        >
                          <option value="">Select a service</option>

                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>

                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Other Service */}
                    {formData.serviceType === "other" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <label className="mb-2 block text-sm font-semibold">
                          Please Specify
                        </label>

                        <textarea
                          name="otherService"
                          value={formData.otherService}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Write your requirement..."
                          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#4f2e80]"
                        />
                      </motion.div>
                    )}

                    {/* Venue + Language */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Venue
                        </label>

                        <div className="relative">
                          <Video className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="text"
                            name="venue"
                            value={formData.venue}
                            readOnly
                            className="w-full rounded-xl border border-gray-200 bg-gray-100 py-3 pl-11 pr-4"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Language
                        </label>

                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                          <input
                            type="text"
                            name="language"
                            value={formData.language}
                            readOnly
                            className="w-full rounded-xl border border-gray-200 bg-gray-100 py-3 pl-11 pr-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-2xl bg-[#4f2e80] py-4 text-md font-bold text-white transition-all hover:bg-[#43256e]"
                    >
                      {isLoading
                        ? "Submitting..."
                        : "Schedule Free Consultation"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}