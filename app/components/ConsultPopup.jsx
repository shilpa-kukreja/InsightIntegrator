// app/components/ConsultPopup.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const ConsultPopup = ({ isOpen, onClose }) => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const popupRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    industry: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   setTimeout(() => {
  //     setSubmitStatus('success');
  //     setIsSubmitting(false);
  //     setFormData({
  //       fullName: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       designation: '',
  //       industry: '',
  //       message: ''
  //     });
  //     setTimeout(() => {
  //       setSubmitStatus(null);
  //       handleClose();
  //     }, 3000);
  //   }, 1500);
  // };


  // Update the handleSubmit function in ConsultPopup.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'consult-popup' // This identifies the form source
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          designation: '',
          industry: '',
          message: ''
        });

        // Close popup after 3 seconds on success
        setTimeout(() => {
          setSubmitStatus(null);
          handleClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };


  const industries = [
    'Select Industry',
    'Accounting & Finance',
    'Banking & Financial Services',
    'Real Estate & Construction',
    'Technology & IT',
    'Healthcare & Pharmaceuticals',
    'Retail & E-commerce',
    'Manufacturing',
    'Hospitality & Tourism',
    'Education & Training',
    'Oil & Gas',
    'Logistics & Supply Chain',
    'Legal & Professional Services',
    'Other'
  ];

  if (!isOpen && !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-500 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"></div>
      </div>

      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] sm:w-[35%] w-[90%]  rounded-lg max-w-5xl max-h-[92vh] overflow-y-auto scrollbar-hide  transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        ref={popupRef}
      >
        <div className="bg-white shadow-2xl overflow-hidden " id='consult'>
          {/* Premium Header */}
          <div className="relative bg-[#2c154f] px-8 pt-10 pb-8 text-center">
            <button
              onClick={handleClose}
              className="absolute top-4 right-6 cursor-pointer text-white/40 hover:text-white/70 transition-colors text-2xl font-light"
              aria-label="Close"
            >
              ×
            </button>
            {/*             
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/15"></div>
              <span className="text-white/30 text-[10px] font-light tracking-[0.3em] uppercase">Schedule a Consultation</span>
              <div className="h-px w-8 bg-white/15"></div>
            </div> */}

            <h2 className="text-xl md:text-2xl font-light text-white mb-3">
              Let's Discuss Your <span className="font-bold">Business Needs</span>
            </h2>
            {/* <p className="text-white/25 text-sm leading-relaxed font-light max-w-md mx-auto">
              Fill out the form below and one of our experts will contact you within 24 hours.
            </p> */}
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Full Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="fullName" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'fullName' ? 'text-[#0a0a0a]' : ''}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                    placeholder="John Anderson"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'email' ? 'text-[#0a0a0a]' : ''}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="phone" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'phone' ? 'text-[#0a0a0a]' : ''}`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="company" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'company' ? 'text-[#0a0a0a]' : ''}`}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                    placeholder="Your Organization"
                  />
                </div>
              </div>

              {/* Row 3: Designation & Industry */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="designation" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'designation' ? 'text-[#0a0a0a]' : ''}`}>
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('designation')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                    placeholder="Your Title / Role"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="industry" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'industry' ? 'text-[#0a0a0a]' : ''}`}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('industry')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light appearance-none cursor-pointer"
                  >
                    {industries.map((industry, index) => (
                      <option key={index} value={industry} className="text-gray-800 bg-white">
                        {industry}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-0 bottom-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className={`block text-[10px] font-light text-gray-400 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'message' ? 'text-[#0a0a0a]' : ''}`}>
                  Your Request *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300 resize-none"
                  placeholder="Please describe your inquiry or project requirements in detail..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-[#2c154f] text-white text-sm font-light tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#441d7f] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Consultation
                      <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-gray-50 border-l-2 border-[#0a0a0a] animate-fadeIn">
                  <p className="text-gray-600 text-sm font-light">
                    Thank you for your request! One of our experts will contact you within 24 hours.
                  </p>
                </div>
              )}


              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-l-2 border-red-500 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-red-800 font-medium text-sm">Failed to Submit</p>
                      <p className="text-red-600 text-sm font-light">Please try again later or contact us directly by phone.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Note */}
              {/* <p className="text-center text-[10px] text-gray-400 font-light tracking-wide pt-2">
                By submitting this form, you agree to our privacy policy and consent to being contacted.
              </p> */}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </>
  );
};

export default ConsultPopup;