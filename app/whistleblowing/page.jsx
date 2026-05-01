// app/whistleblowing/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhistleblowingPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    relationship: '',
    awareness: '',
    location: '',
    description: ''
  });
  const [file, setFile] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    setVisibleSections(prev => ({ ...prev, hero: true }));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id) {
            setVisibleSections(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach(section => {
        if (section.id && observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    };

    const timer = setTimeout(observeElements, 100);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, []);

  const categories = [
    'Breach of legal obligations',
    'Conflict of interest',
    'Criminal activity',
    'Financial reporting and accounting',
    'Fraud, collusion, and connivance',
    'Harassment or discrimination',
    'Information security',
    'Privacy',
    'Product and customer service',
    'Substance abuse',
    'Suggestions for improvement',
    'Violence or abuse',
    'Data privacy and protection',
    'Ethics and independence'
  ];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      formDataToSend.append('categories', JSON.stringify(selectedCategories));
      formDataToSend.append('relationship', formData.relationship);
      formDataToSend.append('awareness', formData.awareness);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('source', 'whistleblowing');
      
      if (file) {
        formDataToSend.append('attachment', file);
      }

      const response = await fetch('/api/send-whistleblowing-email', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSelectedCategories([]);
        setFormData({
          relationship: '',
          awareness: '',
          location: '',
          description: ''
        });
        setFile(null);
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white mt-16">
        
        {/* Hero Section */}
        <section 
          id="hero"
          data-observe="true"
          className="relative overflow-hidden bg-[#2c154f] py-10 md:py-12 lg:py-12"
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/40 text-[12px] font-light tracking-[0.3em] uppercase">Confidential Reporting</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                Whistleblowing <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Service</span>
              </h1>
              
              <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Speak up with confidence. Your voice matters, and we're here to listen.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-12 md:py-10 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              
              {/* Left Side - Content */}
              <div className="space-y-10">
                {/* Info Box */}
                <div 
                  id="info"
                  data-observe="true"
                  className={`transition-all duration-800 delay-100 transform ${visibleSections.info ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="relative bg-gray-50 p-8 md:p-10 overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#2c154f]"></div>
                    <p className="text-gray-600 text-base leading-relaxed text-justify font-light relative z-10">
                      After completing the submission form, you will receive a password-protected link, 
                      under which it will be possible to conduct further communication. Your application 
                      will be delivered to the person responsible in the organization for handling 
                      whistleblower submissions.
                    </p>
                  </div>
                </div>

                {/* Introduction */}
                <div 
                  id="intro"
                  data-observe="true"
                  className={`transition-all duration-800 delay-200 transform ${visibleSections.intro ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-[#0a0a0a]/50"></div>
                    <span className="text-[#0a0a0a] text-[10px] font-light tracking-[0.2em] uppercase">Our Commitment</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-5 leading-tight">
                    Confidential <span className="font-bold">Whistleblowing Service</span>
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed text-justify mb-5 font-light">
                    We have established a confidential whistle-blowing service which ensures that anyone 
                    who has concerns about how team members are behaving has a means of raising their 
                    concerns confidentially.
                  </p>
                  <p className="text-gray-500 text-base leading-relaxed text-justify font-light">
                    If you do not wish to discuss a matter of concern with your people manager, practice 
                    leader or alternatively raise the concern to People & Culture in accordance with the 
                    internal grievance process, you can use this confidential whistleblowing service.
                  </p>
                </div>

                {/* Key Features */}
                <div 
                  id="features"
                  data-observe="true"
                  className={`transition-all duration-800 delay-300 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="w-12 h-px bg-[#0a0a0a]/50 mb-6"></div>
                  <h3 className="text-xs font-semibold text-gray-500 mb-5 tracking-[0.2em] uppercase">Key Features</h3>
                  <div className="space-y-4">
                    {[
                      'Completely anonymous reporting',
                      'Password-protected secure communication',
                      'Direct delivery to responsible person',
                      'No retaliation guaranteed',
                      '24/7 availability'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-px h-5 bg-[#0a0a0a]/50 group-hover:h-6 transition-all"></div>
                        <span className="text-gray-500 text-sm font-light group-hover:text-gray-700 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div 
                id="form"
                data-observe="true"
                className={`transition-all duration-800 delay-400 transform ${visibleSections.form ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="bg-white border border-gray-100 shadow-md p-8 md:p-10 rounded-md">
                  <div className="mb-8">
                    <div className="w-12 h-px bg-[#0a0a0a]/50 mb-5"></div>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                      Anonymous <span className="font-bold">Report</span>
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Categories */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-4 tracking-wide uppercase">
                        Select the category that matches the issue
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-3 custom-scrollbar">
                        {categories.map((category, index) => (
                          <label key={index} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-all">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryToggle(category)}
                              className="w-4 h-4 accent-[#0a0a0a] cursor-pointer"
                            />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-light">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Relationship */}
                    <div className="relative">
                      <label htmlFor="relationship" className={`block text-xs font-semibold text-gray-500 mb-2 tracking-wide uppercase transition-all duration-300 ${focusedField === 'relationship' ? 'text-[#0a0a0a]' : ''}`}>
                        Relationship with the Company
                      </label>
                      <input
                        type="text"
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('relationship')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g., Employee, Contractor, Former Employee, Customer"
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-light"
                        required
                      />
                    </div>

                    {/* Awareness */}
                    <div className="relative">
                      <label htmlFor="awareness" className={`block text-xs font-semibold text-gray-500 mb-2 tracking-wide uppercase transition-all duration-300 ${focusedField === 'awareness' ? 'text-[#0a0a0a]' : ''}`}>
                        How did you become aware?
                      </label>
                      <input
                        type="text"
                        id="awareness"
                        name="awareness"
                        value={formData.awareness}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('awareness')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g., Direct observation, Document review, Colleague report"
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-light"
                        required
                      />
                    </div>

                    {/* Location */}
                    <div className="relative">
                      <label htmlFor="location" className={`block text-xs font-semibold text-gray-500 mb-2 tracking-wide uppercase transition-all duration-300 ${focusedField === 'location' ? 'text-[#0a0a0a]' : ''}`}>
                        Location of Incident
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('location')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g., Dubai Office, Remote work, Client site"
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-light"
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="relative">
                      <label htmlFor="description" className={`block text-xs font-semibold text-gray-500 mb-2 tracking-wide uppercase transition-all duration-300 ${focusedField === 'description' ? 'text-[#0a0a0a]' : ''}`}>
                        Detailed Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('description')}
                        onBlur={() => setFocusedField(null)}
                        rows="5"
                        required
                        placeholder="Please provide a detailed description of the situation, including relevant dates, people involved, and any supporting information..."
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#0a0a0a] focus:outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-light resize-none"
                      ></textarea>
                    </div>

                    {/* File Attachment */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-3 tracking-wide uppercase">
                        Supporting Documents (Optional)
                      </label>
                      <div className="relative border-2 border-dashed border-gray-300 bg-gray-50/30 p-6 text-center hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer rounded-xl group">
                        <input
                          type="file"
                          id="attachment"
                          name="attachment"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.png,.txt"
                        />
                        <label htmlFor="attachment" className="cursor-pointer block">
                          <svg className="w-12 h-12 mx-auto text-gray-300 mb-3 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-gray-500 font-light">{file ? file.name : 'Click to upload or drag and drop'}</p>
                          <p className="text-xs text-gray-400 mt-2 font-light">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-3.5 bg-[#2c154f] text-white text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#2c154f] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? 'Submitting Report...' : 'Submit Anonymous Report'}
                        {!isSubmitting && (
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-xl animate-fadeIn">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-green-800 font-medium text-sm">Report Submitted Successfully!</p>
                            <p className="text-green-600 text-sm mt-1">You will receive a password-protected link for further communication.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-xl animate-fadeIn">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-red-800 font-medium text-sm">Submission Failed</p>
                            <p className="text-red-600 text-sm mt-1">Please try again later or contact us directly.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Privacy Note */}
                    <div className="pt-4 text-center">
                      <p className="text-[11px] text-gray-400 font-light tracking-wide">
                        Your report will be handled with strict confidentiality. You will receive a 
                        password-protected link for secure communication.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes scroll {
            0%, 100% { transform: translateY(0); opacity: 0.3; }
            50% { transform: translateY(8px); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d1d1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default WhistleblowingPage;