// app/contact/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
  //       industry: '',
  //       message: ''
  //     });
  //     setTimeout(() => setSubmitStatus(null), 5000);
  //   }, 1500);
  // };


  // Update this function in your contact page
// In your /app/contact/page.jsx, update the handleSubmit:
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
        source: 'contact-page' 
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
        industry: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
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

  return (
    <>
      <Navbar />
      <div ref={pageRef} className="min-h-screen bg-white mt-16">

        {/* Hero Section - Premium */}
        <section className="relative pt-12 md:pt-14 pb-20 md:pb-16  flex items-center justify-center overflow-hidden bg-[#2c154f]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c154f] via-[#2c154f]/98 to-[#2c154f]"></div>

          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">Get in Touch</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-light text-white mb-4 tracking-tight leading-[1.1]">
                Let's <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Connect</span>
              </h1>

              <p className="text-white/50  text-lg md:text-shadow-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                Have a question or need support? Reach out – our team is ready to assist you
                with timely, clear and reliable guidance.
              </p>

              <div className="flex items-center justify-center gap-3 mt-8">
                <Link href="/" className="text-white/20 hover:text-white/50 transition-colors text-sm font-light">Home</Link>
                <span className="text-white/50 text-sm">/</span>
                <span className="text-white/50 text-sm font-light">Contact</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section - Premium Two Column */}
        <section className="py-12 md:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">

              {/* Left Side - Contact Form */}
              <div className={`transition-all duration-800 delay-100 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="mb-10">
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-[#0a0a0a]/15"></div>
                    <span className="text-[#0a0a0a] text-[11px] font-light tracking-[0.2em] uppercase">Send a Message</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                    Share your enquiry and one of our <span className="font-bold">experts will contact you</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="fullName" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'fullName' ? 'text-[#0a0a0a]' : ''}`}>
                        Full Name
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
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                        placeholder="John Anderson"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'email' ? 'text-[#0a0a0a]' : ''}`}>
                        Email Address
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
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                        placeholder="hello@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="phone" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'phone' ? 'text-[#0a0a0a]' : ''}`}>
                        Phone Number
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
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="company" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'company' ? 'text-[#0a0a0a]' : ''}`}>
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
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300"
                        placeholder="Your Organization"
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="relative">
                    <label htmlFor="industry" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'industry' ? 'text-[#0a0a0a]' : ''}`}>
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('industry')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light appearance-none cursor-pointer"
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

                  {/* Message */}
                  <div className="relative">
                    <label htmlFor="message" className={`block text-[10px] font-light text-gray-500 uppercase tracking-wide mb-2 transition-all duration-300 ${focusedField === 'message' ? 'text-[#0a0a0a]' : ''}`}>
                      Your Message
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
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-400 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 text-base font-light placeholder:text-gray-300 resize-none"
                      placeholder="Please describe your inquiry or project requirements in detail..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 bg-[#2c154f] text-white text-sm font-light tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#45207d] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-5 bg-green-50 border-l-2 border-green-500 animate-fadeIn">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-green-800 font-medium text-sm">Message Sent Successfully!</p>
                          <p className="text-green-600 text-sm font-light">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-5 bg-red-50 border-l-2 border-red-500 animate-fadeIn">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-red-800 font-medium text-sm">Failed to Send Message</p>
                          <p className="text-red-600 text-sm font-light">Please try again later or contact us directly by phone.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className={`transition-all duration-800 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>

                {/* Office Information */}
                <div className="mb-14">
                  <div className="inline-flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-[#0a0a0a]/15"></div>
                    <span className="text-[#0a0a0a] text-[11px] font-light tracking-[0.2em] uppercase">Our Office</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">UAE Office</h3>
                      <div className="space-y-2">
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                          Meydan Grandstand, Nad Al Sheba
                          <br />
                          Dubai, United Arab Emirates
                        </p>
                        <p className="text-gray-500 text-sm font-light">
                          <a href="mailto:info@insightintegrators.ae" className="hover:text-[#0a0a0a] transition-colors duration-300">
                            info@insightintegrators.ae
                          </a>
                        </p>
                        <p className="text-gray-500 text-sm font-light">
                          <a href="tel:+971508896810" className="hover:text-[#0a0a0a] transition-colors duration-300">
                            +971 50 889 6810
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="w-12 h-px bg-gray-400 my-10"></div>

                {/* Business Hours */}
                <div className="mb-14">
                  <h3 className="text-sm font-light text-gray-500 uppercase tracking-wide mb-5">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-light">Monday - Thursday</span>
                      <span className="text-gray-500 font-light">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-light">Friday</span>
                      <span className="text-gray-500 font-light">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-light">Saturday - Sunday</span>
                      <span className="text-gray-500 font-light">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="w-12 h-px bg-gray-400 my-10"></div>

                {/* Social Media */}
                {/* <div className="mb-14">
                  <h3 className="text-sm font-light text-gray-500 uppercase tracking-wide mb-5">Follow Us</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                    Stay connected for the latest industry insights, company news and updates.
                  </p>
                  
                  <div className="flex gap-4">
                    {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group flex items-center justify-center w-11 h-11 border border-gray-200 hover:border-[#0a0a0a] transition-all duration-300"
                      >
                        <span className="text-xs font-light text-gray-400 group-hover:text-[#0a0a0a] transition-colors uppercase tracking-wide">
                          {social.slice(0, 2)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div> */}

                {/* Map Preview */}
                {/* <div className="mt-8">
                  <div className="relative w-full h-[220px] bg-gray-50 overflow-hidden border border-gray-100">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-12 h-px bg-gray-200 mb-4"></div>
                      <span className="text-[10px] text-gray-400 font-light tracking-[0.2em] uppercase">Map View</span>
                      <div className="w-12 h-px bg-gray-200 mt-4"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/5 to-transparent"></div>
                  </div>
                  <p className="text-right text-[10px] text-gray-300 font-light tracking-wide mt-2">
                    Meydan Grandstand, Dubai
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-12 bg-[#2c154f] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0a0a0a]/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a0a0a]/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-[#0a0a0a]/15"></div>
                <span className="text-white text-[16px] font-light tracking-[0.2em] uppercase">Careers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-3">
                Join our <span className="font-bold">team of experts</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-light max-w-md mx-auto">
                Looking for new opportunities? We're always seeking talented professionals.
              </p>
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 text-white text-sm font-light border border-white px-6 py-3 hover:border-white transition-all duration-300 "
              >
                Explore Open Positions
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;