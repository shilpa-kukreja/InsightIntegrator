// app/careers/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CareersPage = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const observerRef = useRef(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections(prev => ({ ...prev, hero: true, about: true, values: true, expertise: true, howToApply: true, openings: true, form: true }));

    // Create observer that keeps watching
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

    // Observe all sections with data-observe attribute
    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach(section => {
        if (section.id && observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, []);

  const departments = ['All', 'Accounting', 'Corporate Services', 'Risk & Compliance', 'Branding', 'Research'];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Accountant',
      department: 'Accounting',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Looking for an experienced accountant to lead financial reporting and compliance for our diverse client portfolio.'
    },
    {
      id: 2,
      title: 'Corporate Services Manager',
      department: 'Corporate Services',
      location: 'Abu Dhabi, UAE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Seeking a strategic leader to manage corporate services and drive business setup solutions for international clients.'
    },
    {
      id: 3,
      title: 'Risk Analyst',
      department: 'Risk & Compliance',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our risk team to conduct assessments and develop compliance frameworks for clients across industries.'
    },
    {
      id: 4,
      title: 'Brand Strategist',
      department: 'Branding',
      location: 'Remote (UAE)',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Creative strategist needed to develop brand identities and marketing strategies for premium clients.'
    },
    {
      id: 5,
      title: 'Research Associate',
      department: 'Research',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Join our research vertical to deliver market insights and data-driven recommendations.'
    },
    {
      id: 6,
      title: 'Tax Consultant',
      department: 'Accounting',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Seeking tax professional with UAE VAT and Corporate Tax expertise for advisory services.'
    }
  ];

  const filteredPositions = openPositions.filter(position =>
    selectedDepartment === 'All' || position.department === selectedDepartment
  );

  const values = [
    {
      title: 'Professional Approach',
      description: 'We value responsibility, clarity, and consistency in how work is delivered and managed.',
    },
    {
      title: 'Learning & Exposure',
      description: 'Gain practical experience across advisory areas while working on real business challenges.'
    },
    {
      title: 'Structured Work Environment',
      description: 'Defined processes and clear expectations support efficient and consistent execution.'
    },
    {
      title: 'Ownership Mindset',
      description: 'Encouraged to take responsibility, contribute ideas, and develop a strong professional approach.'
    },
    {
      title: 'Collaborative Culture',
      description: 'Work in an environment that supports communication, coordination, and shared outcomes.'
    },
    {
      title: 'Quality Focus',
      description: 'A consistent focus on accuracy, discipline, and high standards in every engagement.'
    }
  ];

  const verticals = [
    {
      name: 'Audit & Assurance',
      description: 'Work on financial reviews, compliance processes, and assurance engagements that support transparency and operational reliability.',
      detail: 'Financial Reviews • Compliance Support • Assurance Processes'
    },
    {
      name: 'Corporate Services',
      description: 'Support business setup, operational coordination, and administrative processes across diverse business functions.',
      detail: 'Business Support • Documentation • Operational Coordination'
    },
    {
      name: 'Risk & Compliance',
      description: 'Contribute to risk evaluation, control assessments, and compliance-focused operational support activities.',
      detail: 'Risk assessment • Compliance Review  • Control Monitoring'
    },
    {
      name: 'Business Operations',
      description: 'Assist in managing day-to-day operational workflows, reporting coordination, and process support functions.',
      detail: 'Process Support • Reporting Coordination • Workflow Management'
    },
    {
      name: 'Research & Analysis',
      description: 'Support data evaluation, market analysis, and business research activities that assist strategic decision-making.',
      detail: 'Data Analysis • Market Research • Business Insights'
    }
  ];

  const howToApplySteps = [
    {
      step: '01',
      title: 'Explore Opportunities',
      description: 'Review available roles and identify positions that align with your skills, experience, and career goals.'
    },
    {
      step: '02',
      title: 'Prepare Your Application',
      description: 'Ensure your CV is updated and highlights relevant experience, along with a brief introduction outlining your interest.'
    },
    {
      step: '03',
      title: 'Submit Your Application',
      description: 'Complete the application form or share your profile through the provided contact details.'
    },
    {
      step: '04',
      title: 'Evaluation & Discussion',
      description: 'Shortlisted candidates will be contacted for further discussions to assess suitability and alignment.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('source', 'careers');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);

      if (resumeFile) {
        formDataToSend.append('resume', resumeFile);
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: ''
        });
        setResumeFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload PDF, DOC, or DOCX files only');
        return;
      }
      setResumeFile(file);
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
          className="relative overflow-hidden bg-[#2c154f] pt-12 pb-12 md:pt-14 md:pb-14"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-[#2c154f]"></div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-700 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-white">Grow Your Career with</span>
                <br />
                <span className="text-white/90">
                  Purpose and Expertise
                </span>
              </h1>

              <p className="text-white/50 text-lg md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                Be part of a professional environment focused on learning, accountability, and delivering meaningful outcomes across audit, risk, and advisory.

              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
                <button className="group px-6 sm:px-8 py-3 bg-white text-[#0a0a0a] font-semibold hover:bg-gray-100 transition-all duration-300 rounded-lg">
                  View Opportunities
                  <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-6 sm:px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section
          id="about"
          data-observe="true"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`transition-all duration-700 delay-100 transform ${visibleSections.about ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
                  <div className="h-px w-6 md:w-8 bg-[#0a0a0a]"></div>
                  <span className="text-[#0a0a0a] text-xs md:text-sm font-semibold uppercase tracking-wider">About Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                  Who We Are
                </h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  Insight Integrators Management Consultancies LLC-FZ is an advisory firm focused on delivering structured solutions across audit, risk, compliance, and business advisory. Our approach is grounded in clarity, discipline, and a strong understanding of regulatory requirements.

                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  We work with organizations to address complex challenges, strengthen internal processes, and support informed decision-making through practical and reliable advisory.

                </p>
              </div>

              <div className={`relative transition-all duration-700 delay-200 transform ${visibleSections.about ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                <div className="relative overflow-hidden shadow-2xl rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/10 to-transparent z-10"></div>
                  <img
                    src="/career/WhoWeAre.jpg"
                    alt="Insight Integrators Team"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section
          id="values"
          data-observe="true"
          className="py-12 md:py-16 bg-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                <div className="h-px w-5 md:w-6 bg-[#0a0a0a]"></div>
                <span className="text-[#0a0a0a] text-xs md:text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
                Why Work With Us
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
                We offer a structured environment focused on learning, accountability, and delivering meaningful professional outcomes.

              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 rounded-lg
                    ${visibleSections.values ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#2c154f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-lg"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section
          id="expertise"
          data-observe="true"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <div className="h-px w-5 md:w-6 bg-[#0a0a0a]"></div>
                <span className="text-[#0a0a0a] text-xs md:text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
                Career Areas &
 Professional Opportunities
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
                Explore diverse career paths across advisory, compliance, operations, and business support functions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {verticals.map((vertical, index) => (
                <div
                  key={index}
                  className={`group bg-white border border-gray-200 hover:border-gray-300 p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 rounded-lg
                    ${visibleSections.expertise ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-[#2c154f] transition-colors">
                    {vertical.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                    {vertical.description}
                  </p>
                  <div className="pt-3 md:pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 tracking-wide">
                      {vertical.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section
          id="howToApply"
          data-observe="true"
          className="py-12 md:py-16 bg-gray-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <div className="h-px w-5 md:w-6 bg-[#0a0a0a]"></div>
                <span className="text-[#0a0a0a] text-xs md:text-sm font-semibold uppercase tracking-wider">Join Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
                Application Process

              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
                A straightforward process designed to help you apply with clarity and confidence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`transition-all duration-700 transform ${visibleSections.howToApply ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                <div className="relative overflow-hidden shadow-xl rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent z-10"></div>
                  <img
                    src="/career/ApplicationProcess.jpg"
                    alt="How to apply at Insight Integrators"
                    className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              <div className={`space-y-6 md:space-y-8 transition-all duration-700 delay-200 transform ${visibleSections.howToApply ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                {howToApplySteps.map((step, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 border border-[#0a0a0a]/20 flex items-center justify-center text-[#0a0a0a] font-bold text-base md:text-lg group-hover:border-[#2c154f] group-hover:bg-[#2c154f] group-hover:text-white transition-all duration-300 rounded-lg">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section
          id="openings"
          data-observe="true"
          className="py-12 md:py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
                <div className="h-px w-5 md:w-6 bg-[#0a0a0a]"></div>
                <span className="text-[#0a0a0a] text-xs md:text-sm font-semibold uppercase tracking-wider">Current Openings</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
                Open Positions
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
                Whether you're an experienced professional or a talented graduate looking to build a meaningful career
              </p>
            </div>

            {/* Department Filters */}
            <div className={`flex flex-wrap justify-center gap-2 mb-8 md:mb-12 transition-all duration-700 transform ${visibleSections.openings ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-all duration-300 border rounded-lg
                    ${selectedDepartment === dept
                      ? 'bg-[#2c154f] text-white border-[#2c154f]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {filteredPositions.map((position, index) => (
                <div
                  key={position.id}
                  className={`group bg-white border border-gray-200 p-5 md:p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-sm rounded-lg
                    ${visibleSections.openings ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {position.experience}
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {position.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 mt-1 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        {position.department}
                      </span>
                      <button
                        onClick={() => {
                          document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group/btn flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-[#2c154f] border border-[#2c154f]/30 hover:bg-[#2c154f] hover:text-white transition-all duration-300 rounded-lg"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-16 bg-white border border-gray-200 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 flex items-center justify-center rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">No open positions in this department at the moment.</p>
                <p className="text-gray-400 text-sm mt-1">Please check back later or explore other departments.</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Form Section */}
        <section
          id="form"
          data-observe="true"
          className="py-12 md:py-16 bg-[#2c154f]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                Career Application Form
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 bg-white shadow-sm rounded-lg overflow-hidden">
              {/* Left Side - Image */}
              <div className="relative h-[300px] sm:h-[500px] lg:min-h-[720px]">
                <img
                  src="/career/CareerAplicationForm.jpg"
                  alt="Submit your application"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c154f]/40 to-transparent"></div>
              </div>

              {/* Right Side - Form */}
              <div className="p-6 md:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#2c154f] focus:bg-white focus:outline-none transition-all rounded-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#2c154f] focus:bg-white focus:outline-none transition-all rounded-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#2c154f] focus:bg-white focus:outline-none transition-all rounded-lg"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Position Interested In
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#2c154f] focus:bg-white focus:outline-none transition-all rounded-lg"
                      >
                        <option value="">Select a position</option>
                        <option value="Senior Accountant">Senior Accountant</option>
                        <option value="Corporate Services Manager">Corporate Services Manager</option>
                        <option value="Risk Analyst">Risk Analyst</option>
                        <option value="Brand Strategist">Brand Strategist</option>
                        <option value="Research Associate">Research Associate</option>
                        <option value="Tax Consultant">Tax Consultant</option>
                        <option value="Speculative Application">Speculative Application</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#2c154f] focus:bg-white focus:outline-none transition-all resize-none rounded-lg"
                      placeholder="Tell us why you'd be a great fit for Insight Integrators..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV/Resume *
                    </label>
                    <div className="border-2 border-dashed border-gray-200 bg-gray-50 p-4 md:p-6 text-center hover:border-gray-300 transition-all cursor-pointer rounded-lg">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                      <label htmlFor="resume" className="cursor-pointer block">
                        <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto text-gray-400 mb-2 md:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm text-gray-500 truncate max-w-[200px] mx-auto">{resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#2c154f] text-white font-medium hover:bg-[#2c154f]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-green-800 font-medium text-sm">Application Submitted Successfully!</p>
                          <p className="text-green-600 text-sm">Thank you for applying. We'll review your application and get back to you soon.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="text-red-800 font-medium text-sm">Submission Failed</p>
                          <p className="text-red-600 text-sm">Please try again later or email your application to careers@insightintegrators.ae</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-slideUp {
            animation: slideUp 0.8s ease-out;
          }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;