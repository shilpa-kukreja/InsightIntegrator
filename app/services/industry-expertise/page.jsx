// app/services/advisory/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IndustryExpertisePage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections(prev => ({ ...prev, hero: true }));

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

 const industryData = [

  // manufacturing
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Supporting manufacturers with practical strategies, process improvement, and scalable operational solutions designed to drive efficiency, quality, and sustainable growth.",
    services: [
      {
        id: "supply-chain",
        name: "Supply Chain & Logistics Strategy",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help manufacturing businesses build agile and efficient supply chain systems that improve operational flow, reduce disruptions, and support scalable production growth.",
        detailedDescription: "Our strategic approach focuses on optimizing procurement, warehousing, transportation, and distribution networks to enhance productivity, control costs, and strengthen supply chain resilience.",
        keyFeatures: [
          "Supply chain performance analysis",
          "Procurement and sourcing strategy",
          "Logistics and distribution planning",
          "Inventory flow optimization",
          "Demand and production alignment",
          "Operational risk management"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "operational-efficiency",
        name: "Operational Efficiency (Lean Management)",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help manufacturing businesses streamline workflows, improve productivity, and reduce operational inefficiencies through practical lean management strategies and process optimization.",
        detailedDescription: "Our approach focuses on building efficient production systems that minimize waste, strengthen operational control, and improve overall business performance across manufacturing operations.",
        keyFeatures: [
          "Lean process improvement",
          "Production workflow optimization",
          "Operational waste reduction",
          "Performance monitoring systems",
          "Resource utilization enhancement",
          "Continuous improvement strategies"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "inventory",
        name: "Inventory & Warehouse Management",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help manufacturing businesses improve inventory accuracy, optimize warehouse operations, and create efficient storage and distribution systems that support smooth business operations.",
        detailedDescription: "Our solutions focus on enhancing inventory visibility, reducing stock-related inefficiencies, and improving warehouse productivity through smarter operational planning and process control.",
        keyFeatures: [
          "Inventory planning and control",
          "Warehouse space optimization",
          "Stock movement management",
          "Demand and supply coordination",
          "Storage and distribution efficiency",
          "Inventory tracking systems"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "sustainability",
        name: "Sustainability & ESG Advisory",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help businesses build sustainable operational strategies that align with environmental, social, and governance goals while supporting long-term growth and responsible business practices.",
        detailedDescription: "Our advisory approach focuses on improving sustainability performance, strengthening ESG reporting standards, and creating practical frameworks that enhance business value and corporate responsibility.",
        keyFeatures: [
          "ESG strategy development",
          "Sustainability reporting support",
          "Environmental impact assessment",
          "Energy and resource efficiency",
          "Corporate governance planning",
          "Responsible business practices"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "cost",
        name: "Cost & Profitability Analysis",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help businesses identify cost-saving opportunities, improve financial efficiency, and maximize profitability through data-driven operational and financial analysis.",
        detailedDescription: "Our team evaluates business expenses, revenue performance, and operational workflows to uncover areas for improvement, strengthen margins, and support smarter financial decision-making.",
        keyFeatures: [
          "Cost structure evaluation",
          "Profit margin analysis",
          "Budget planning support",
          "Operational cost optimization",
          "Revenue performance tracking",
          "Financial efficiency strategies"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },

  //  Real Estate 
   {
    id: "real-estate",
    title: " Real Estate ",
    description: "Helping real estate businesses make smarter investment decisions, improve asset performance, and create sustainable long-term growth opportunities.",
    services: [
      {
        id: "market",
        name: "Market Feasibility Studies",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We provide in-depth market analysis and feasibility assessments to help developers, investors, and real estate firms evaluate project potential and minimize investment risks.",
        detailedDescription: "Our experts study market demand, competitor positioning, customer behavior, and location potential to deliver actionable insights that support confident and profitable real estate decisions.",
        keyFeatures: [
          "Market demand analysis",
          "Investment risk assessment",
          "Competitor benchmarking",
          "Site and location evaluation",
          "Revenue potential forecasting",
          "Project viability planning"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "property",
        name: "Property Portfolio Strategy",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help real estate businesses optimize property portfolios by identifying high-performing assets, improving investment allocation, and creating strategies for long-term value growth.",
        detailedDescription: "Our strategic advisory approach focuses on portfolio diversification, asset performance evaluation, and market positioning to maximize returns while reducing operational and investment risks.",
        keyFeatures: [
          "Asset performance analysis",
          "Portfolio diversification planning",
          "Investment allocation strategy",
          "Property value enhancement",
          "Risk and return assessment",
          "Risk and return assessment",
          "Long-term growth planning"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "tenant",
        name: "Tenant Retention & Experience",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help property owners and real estate businesses improve tenant satisfaction, strengthen long-term occupancy, and create better customer experiences across residential and commercial properties.",
        detailedDescription: "Our strategies focus on enhancing tenant engagement, improving property services, and building positive experiences that increase retention rates and strengthen brand reputation.",
        keyFeatures: [
          "Tenant satisfaction strategies",
          "Occupancy retention planning",
          "Customer experience enhancement",
          "Service quality improvement",
          "Community engagement initiatives",
          "Feedback and performance analysis"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "sales-marketing",
        name: "Sales & Marketing Positioning",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help real estate brands strengthen market presence, attract the right audience, and create impactful sales and marketing strategies that drive visibility and conversions.",
        detailedDescription: "Our team develops data-backed positioning strategies, branding initiatives, and customer-focused campaigns that help projects stand out in competitive real estate markets.",
        keyFeatures: [
          "Brand positioning strategy",
          "Real estate marketing campaigns",
          "Lead generation planning",
          "Customer targeting insights",
          "Sales performance optimization",
          "Competitive market analysis"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "property-management",
        name: "Property Management Optimization",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help real estate businesses streamline property operations, improve asset maintenance, and enhance management efficiency to deliver better performance and tenant satisfaction.",
        detailedDescription: "Our solutions focus on operational improvements, resource planning, and technology-driven management practices that reduce inefficiencies and strengthen overall property performance.",
        keyFeatures: [
          "Property operations improvement",
          "Maintenance management planning",
          "Resource allocation strategies",
          "Tenant service enhancement",
          "Performance monitoring systems",
          "Process and workflow optimization"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },

  // Hospitality
   {
    id: "hospitality",
    title: " Hospitality (Hotels, F&B, Tourism) ",
    description: "Helping hospitality brands elevate guest satisfaction, strengthen operations, and create memorable customer experiences that drive long-term growth.",
    services: [
      {
        id: "guest-experience",
        name: "Guest Experience Mapping",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help hotels, restaurants, and tourism businesses understand customer journeys, improve service quality, and create seamless guest experiences across every touchpoint.",
        detailedDescription: "Our strategies focus on enhancing customer engagement, identifying service gaps, and optimizing hospitality operations to improve satisfaction, loyalty, and brand reputation.",
        keyFeatures: [
          "Customer journey analysis",
          "Service experience improvement",
          "Guest satisfaction strategies",
          "Brand experience enhancement",
          "Hospitality process optimization",
          "Customer feedback evaluation"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "revenue-management",
        name: "Revenue Management Strategy",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help hospitality businesses maximize revenue opportunities through smart pricing strategies, demand forecasting, and performance-driven operational planning.",
        detailedDescription: "Our approach focuses on analyzing customer behavior, booking trends, and market demand to improve profitability, occupancy rates, and overall business performance.",
        keyFeatures: [
          "Dynamic pricing strategies",
          "Revenue performance analysis",
          "Occupancy optimization planning",
          "Demand forecasting insights",
          "Market trend evaluation",
          "Profitability improvement strategies"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "franchise-expansion",
        name: "Franchise & Expansion Advisory",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help hospitality brands plan successful expansion strategies, strengthen franchise models, and identify growth opportunities across new markets and locations.",
        detailedDescription: "Our advisory services focus on business scalability, operational consistency, and market expansion planning to support sustainable brand growth and stronger market presence.",
        keyFeatures: [
          "Franchise growth planning",
          "Market expansion strategy",
          "Location feasibility analysis",
          "Brand scalability support",
          "Operational standardization",
          "Expansion risk assessment"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "menu-service",
        name: "Menu & Service Profitability Analysis",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help restaurants, cafés, and hospitality businesses improve profitability by analyzing menu performance, service efficiency, and customer purchasing behavior.",
        detailedDescription: "Our team evaluates pricing structures, high-performing offerings, and operational costs to help businesses increase margins, enhance customer value, and improve overall revenue performance.",
        keyFeatures: [
          "Menu performance analysis",
          "Pricing optimization strategies",
          "Service cost evaluation",
          "Revenue improvement planning",
          "Customer preference insights",
          "Profit margin enhancement"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "staff-retention",
        name: "Staff Retention & Culture Building",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help hospitality businesses create strong workplace cultures, improve employee satisfaction, and develop retention strategies that support long-term team stability and service excellence.",
        detailedDescription: "Our approach focuses on employee engagement, leadership alignment, and positive workplace experiences that strengthen team performance, reduce turnover, and enhance customer service quality.",
        keyFeatures: [
          "Employee engagement strategies",
          "Staff retention planning",
          "Workplace culture development",
          "Team performance improvement",
          "Leadership and communication support",
          "Training and growth initiatives"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },

  // Education
   {
    id: "education",
    title: "  Education (Schools, Universities, EdTech)  ",
    description: "Helping educational institutions strengthen student engagement, improve operational performance, and create future-ready learning environments.",
    services: [
      {
        id: "enrollment",
        name: "Enrollment & Admissions Strategy",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help schools, universities, and EdTech brands improve enrollment performance through strategic admissions planning, student outreach, and data-driven growth initiatives.",
        detailedDescription: "Our team develops customized enrollment strategies focused on increasing student acquisition, improving admission processes, and enhancing institutional visibility in competitive education markets.",
        keyFeatures: [
          "Student enrollment planning",
          "Admissions process optimization",
          "Lead nurturing strategies",
          "Education market analysis",
          "Brand positioning for institutions",
          "Student acquisition campaigns"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "operational-cost",
        name: "Operational Cost Review",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help educational institutions evaluate operational spending, streamline resource allocation, and improve financial efficiency without compromising academic quality or student experience.",
        detailedDescription: "Our experts identify cost-saving opportunities across administration, infrastructure, staffing, and technology to help institutions build sustainable and scalable operational models.",
        keyFeatures: [
          "Budget efficiency analysis",
          "Resource allocation planning",
          "Administrative cost optimization",
          "Infrastructure expense review",
          "Operational performance tracking",
          "Financial sustainability strategies"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "student-experience",
        name: "Student Experience & Retention",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help educational institutions create engaging student journeys that improve satisfaction, strengthen campus experience, and increase long-term student retention.",
        detailedDescription: "Our strategies focus on academic support, student engagement, communication systems, and experience enhancement to build stronger relationships between institutions and learners.",
        keyFeatures: [
          "Student engagement strategies",
          "Retention improvement planning",
          "Campus experience enhancement",
          "Feedback and support systems",
          "Student communication optimization",
          "Academic experience analysis"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "accreditation-regulatory",
        name: "Accreditation & Regulatory Readiness",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help educational institutions strengthen compliance frameworks, improve operational standards, and prepare confidently for accreditation and regulatory evaluations.",
        detailedDescription: "Our team supports institutions with policy alignment, documentation processes, governance practices, and quality benchmarks to ensure smooth regulatory readiness and institutional credibility.",
        keyFeatures: [
          "Accreditation preparation support",
          "Compliance framework assessment",
          "Documentation and policy review",
          "Academic quality standards",
          "Governance and process alignment",
          "Regulatory readiness planning"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "corporate-patnerships",
        name: "Corporate Partnerships",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help educational institutions build strategic industry collaborations that create stronger academic value, improve career opportunities, and enhance institutional growth.",
        detailedDescription: "Our partnership strategies focus on connecting institutions with corporate leaders, training partners, and industry networks to support innovation, internships, placements, and long-term collaboration.",
        keyFeatures: [
          "Industry partnership development",
          "Internship and placement strategies",
          "Corporate collaboration planning",
          "Skill development initiatives",
          "Employer engagement programs",
          "Academic-industry alignment"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },

   // healthcare
   {
    id: "healthcare",
    title: " Healthcare (Clinics, Hospitals, Wellness Centers)",
    description: "Helping healthcare providers improve operational efficiency, patient care experiences, and sustainable organizational growth.",
    services: [
      {
        id: "patient-flow",
        name: "Patient Flow Optimization",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help healthcare organizations streamline patient movement, reduce wait times, and improve service coordination for a smoother and more efficient care experience.",
        detailedDescription: "Our strategies focus on workflow improvement, appointment management, resource utilization, and operational planning to enhance both patient satisfaction and staff productivity.",
        keyFeatures: [
          "Patient journey optimization",
          "Appointment scheduling efficiency",
          "Clinical workflow improvement",
          "Waiting time reduction strategies",
          "Resource utilization planning",
          "Service coordination enhancement"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "revenue-cycle",
        name: "Revenue Cycle Management",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help healthcare organizations strengthen financial operations by improving billing efficiency, reducing revenue leakage, and optimizing reimbursement processes.",
        detailedDescription: "Our approach focuses on streamlining revenue workflows, enhancing financial visibility, and improving operational accuracy to support long-term financial stability.",
        keyFeatures: [
          "Billing process optimization",
          "Revenue leakage reduction",
          "Claims management support",
          "Financial workflow improvement",
          "Payment cycle efficiency",
          "Revenue performance tracking"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "healthcare-marketing",
        name: "Healthcare Marketing & Brand Trust",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help healthcare organizations strengthen brand credibility, improve patient engagement, and build a trusted presence in highly competitive healthcare markets.",
        detailedDescription: "Our strategies combine patient-focused communication, reputation management, and growth-driven marketing initiatives to enhance visibility and long-term trust.",
        keyFeatures: [
          "Healthcare brand positioning",
          "Patient engagement strategies",
          "Reputation management support",
          "Digital marketing optimization",
          "Community trust building",
          "Patient communication enhancement"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "service-expansion",
        name: "Service Expansion Feasibility",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help healthcare providers evaluate growth opportunities, assess operational readiness, and plan successful service expansions aligned with market demand.",
        detailedDescription: "Our feasibility strategies focus on market analysis, operational capacity, financial planning, and patient demand insights to support confident and sustainable expansion decisions.",
        keyFeatures: [
          "Healthcare market assessment",
          "Service expansion planning",
          "Operational readiness evaluation",
          "Demand and location analysis",
          "Financial feasibility review",
          "Growth opportunity identification"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "administrative-compliance",
        name: "Administrative Compliance Readiness",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help healthcare organizations strengthen administrative systems, maintain regulatory compliance, and improve operational accountability across departments.",
        detailedDescription: "Our approach focuses on documentation standards, process alignment, compliance monitoring, and governance support to ensure smooth and efficient healthcare administration.",
        keyFeatures: [
          "Compliance process assessment",
          "Administrative workflow improvement",
          "Documentation standardization",
          "Regulatory readiness planning",
          "Governance and policy support",
          "Operational accountability systems"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },

   // financial services
   {
    id: "financial-services",
    title: "  Financial Services (DNFBPs Only)",
    description: "Helping DNFBPs strengthen compliance frameworks, manage operational risks, and build sustainable financial governance systems.",
    services: [
      {
        id: "aml-cft",
        name: "AML & CFT Policy Development",
        shortDescription: "Optimize supply chain for efficiency and resilience.",
        description: "We help DNFBPs develop strong AML and CFT policies that support regulatory compliance, risk mitigation, and responsible business operations.",
        detailedDescription: "Our approach focuses on building structured compliance frameworks, improving internal controls, and aligning operational practices with evolving regulatory expectations.",
        keyFeatures: [
          "AML policy framework development",
          "CFT compliance planning",
          "Risk assessment strategies",
          "Internal control enhancement",
          "Compliance monitoring systems",
          "Regulatory alignment support"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      },
      {
        id: "kyc",
        name: "KYC (Know Your Customer) Process Design",
        shortDescription: "Improve productivity using lean methodologies.",
        description: "We help DNFBPs build structured KYC processes that improve customer verification, strengthen compliance controls, and reduce operational risks.",
        detailedDescription: "Our strategies focus on customer due diligence, onboarding workflows, identity verification standards, and compliance monitoring for secure and efficient operations.",
        keyFeatures: [
          "Customer due diligence frameworks",
          "KYC workflow optimization",
          "Identity verification processes",
          "Risk-based customer assessment",
          "Compliance documentation support",
          "Client onboarding enhancement"
        ],
        image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d"
      },
      {
        id: "goaml",
        name: "GoAML Registration & Reporting Support",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help organizations streamline GoAML registration, reporting procedures, and compliance reporting processes to meet regulatory obligations efficiently.",
        detailedDescription: "Our support includes reporting structure guidance, documentation alignment, operational readiness, and process management for accurate and timely regulatory submissions.",
        keyFeatures: [
          "GoAML registration assistance",
          "Reporting workflow support",
          "Compliance documentation review",
          "Suspicious activity reporting guidance",
          "Regulatory process alignment",
          "Operational compliance readiness"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
       {
        id: "risk-profiling",
        name: "Risk Profiling",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We help DNFBPs identify, assess, and manage operational and compliance risks through structured risk profiling frameworks and strategic monitoring processes.",
        detailedDescription: "Our approach focuses on evaluating customer, transaction, and business risks to strengthen decision-making, improve compliance readiness, and minimize exposure.",
        keyFeatures: [
          "Customer risk assessment",
          "Transaction risk evaluation",
          "Compliance risk monitoring",
          "Risk categorization frameworks",
          "Operational risk analysis",
          "Ongoing risk review processes"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      },
      {
        id: "training",
        name: "Training",
        shortDescription: "Optimize inventory levels and warehouse efficiency.",
        description: "We provide compliance-focused training programs that help teams understand regulatory responsibilities, strengthen internal practices, and improve operational awareness.",
        detailedDescription: "Our training sessions are designed to build practical knowledge around AML, CFT, KYC, reporting obligations, and compliance best practices for day-to-day operations.",
        keyFeatures: [
          "AML and CFT training",
          "KYC process education",
          "Compliance awareness programs",
          "Regulatory best practice guidance",
          "Internal policy training",
          "Operational compliance workshops"
        ],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c"
      }
    ]
  },
  
];

  const faqs = [
    {
      question: 'What industries do you provide advisory services for?',
      answer: 'We work with businesses across multiple industries including manufacturing, hospitality, healthcare, education, real estate, financial services, and retail. Our solutions are customized according to operational needs, growth goals, and market challenges.'
    },
    {
      question: 'How do your consulting services help businesses grow?',
      answer: 'Our advisory approach focuses on improving operational efficiency, identifying growth opportunities, strengthening business strategy, and optimizing processes to support long-term profitability and sustainable expansion.'
    },
    {
      question: 'Do you offer customized business solutions?',
      answer: 'Yes, every business has different goals and challenges. We provide tailored strategies and practical recommendations designed specifically around your industry, business model, and operational structure.'
    },
    {
      question: 'Can you help businesses improve operational efficiency?',
      answer: 'Absolutely. We help organizations streamline workflows, reduce inefficiencies, improve productivity, optimize costs, and build stronger operational systems that support better performance.'
    },
    {
      question: 'Do you support compliance and regulatory readiness?',
      answer: 'Yes, we assist businesses with process reviews, documentation support, compliance frameworks, and operational assessments to help organizations stay aligned with industry and regulatory standards.'
    },
    {
      question: 'How can we get started with your advisory services?',
      answer: 'You can connect with our team to discuss your business requirements, current challenges, and growth objectives. After understanding your needs, we create a strategic roadmap tailored to your business goals.'
    }
  ];

  const scrollToItem = (itemId) => {
    const element = sectionRefs.current[itemId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveItem(itemId);
      setTimeout(() => setActiveItem(null), 3000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white mt-16">
        
        {/* Hero Section */}
        <section 
          id="hero"
          data-observe="true"
          className="relative py-10 md:py-12 lg:py-16 flex items-center justify-center overflow-hidden bg-[#2c154f]"
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#2c154f] via-[#2c154f]/98 to-[#2c154f]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center z-10">
            <div className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">Advisory Services</span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Industry <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Expertise</span>
              </h1>
              
              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
Empowering businesses with industry-specific strategies, operational excellence, and scalable solutions tailored for sustainable growth in competitive markets.             </p>
              
              {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/15 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                  <div className="w-6 h-10 border border-white/10 rounded-full flex justify-center">
                    <div className="w-0.5 h-2 bg-white/20 rounded-full mt-2 animate-[scroll_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section 
          id="overview"
          data-observe="true"
          className="py-12 md:py-12 bg-gray-200 border-b border-gray-50"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-800 transform ${visibleSections.overview ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                 Industry-focused.  <span className="font-bold">Visionary.</span> Growth-oriented.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                We help businesses across diverse industries overcome challenges, strengthen operations, and unlock new growth opportunities through tailored strategies, market expertise, and practical business solutions designed for long-term success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Items Section */}
        <section 
          id="services"
          data-observe="true"
          className="py-12 md:py-12 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center mb-12 transition-all duration-800 transform`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Comprehensive <span className="font-bold">Industry Expertise</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Strategic guidance to help you navigate complexity and unlock sustainable growth opportunities
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-6"></div>
            </div>

            <div className="space-y-12">
            {industryData.map((industry, index) => (
  <div key={industry.id} id={industry.id} className="mb-20">

    {/* INDUSTRY HEADING */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {industry.title}
      </h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        {industry.description}
      </p>
    </div>

    {/* SERVICES INSIDE INDUSTRY */}
    <div className="space-y-16">
      {industry.services.map((service, i) => (
        <div
          key={service.id}
          id={service.id}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-400">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="w-10 h-px bg-gray-300"></div>
              <span className="text-xs uppercase text-gray-400">
                Service
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {service.name}
            </h3>

            <p className="text-gray-500 mb-4 text-justify">
              {service.description}
            </p>

            <p className="text-sm text-gray-400 border-l-2 pl-4 mb-6 text-justify">
              {service.detailedDescription}
            </p>

            {/* FEATURES */}
            <div className="grid md:grid-cols-2 gap-3">
              {service.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2c154f] rounded-full"></div>
                  <span className="text-sm text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (PER SERVICE ✅) */}
          <div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          id="benefits"
          data-observe="true"
          className="py-12 md:py-12 bg-[#2c154f]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-800 transform ${visibleSections.benefits ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#ffffff]/50"></div>
                  <span className="text-[#ffffff] text-[12px] font-light tracking-[0.2em] uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-6 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    'Tailored strategies aligned with your industry goals',
                    'Practical solutions focused on measurable business impact',
                    'Strong operational and compliance-driven approach',
                    'Scalable frameworks designed for long-term growth',
                    'Market-focused insights backed by strategic analysis',
                    'Efficient process optimization and performance improvement',
                    'Experienced advisory support across diverse industries',
                    'Commitment to sustainable growth and business excellence'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                      <div className="w-px h-8 bg-[#ffffff]/50 group-hover:h-12 transition-all duration-300"></div>
                      <span className="text-[#ffffff] text-base font-light group-hover:text-[#ffffff] transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="faq"
          data-observe="true"
          className="py-10 md:py-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center mb-16 transition-all duration-800 transform ${visibleSections.faq ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#2c154f]/50"></div>
                <span className="text-[#2c154f] text-[11px] font-semibold tracking-[0.2em] uppercase">Knowledge Base</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2c154f]/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-5 tracking-tight">
                Frequently Asked <span className="font-bold bg-gradient-to-r from-[#2c154f] to-[#4a2a7a] bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-gray-400 text-base font-light max-w-2xl mx-auto">
                Everything you need to know about our advisory services
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#2c154f]/20 via-[#2c154f]/60 to-[#2c154f]/20 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-500 ease-out ${
                    openFaq === index ? 'lg:row-span-1' : ''
                  }`}
                >
                  <div 
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl ${
                      openFaq === index 
                        ? 'shadow-2xl ring-2 ring-[#2c154f]/20 ring-offset-0' 
                        : 'hover:shadow-lg hover:border-gray-100'
                    }`}
                  >
                    {/* Premium gradient border accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2c154f] via-[#6b3fa0] to-[#2c154f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-6 lg:p-7 text-left group/btn"
                      aria-expanded={openFaq === index}
                    >
                      <div className="flex-1 pr-6">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[10px] font-mono text-[#2c154f]/40 font-medium tracking-wider">
                            {`0${index + 1}`.slice(-2)}
                          </span>
                          <div className="w-6 h-px bg-[#2c154f]/20"></div>
                        </div>
                        <span className="text-base lg:text-lg font-medium text-gray-800 group-hover/btn:text-[#2c154f] transition-colors duration-300 leading-relaxed">
                          {faq.question}
                        </span>
                      </div>
                      <div className={`relative flex-shrink-0 w-10 h-10 rounded-full border transition-all duration-400 flex items-center justify-center ${
                        openFaq === index 
                          ? 'border-[#2c154f] bg-[#2c154f] text-white shadow-md shadow-[#2c154f]/20' 
                          : 'border-gray-200 bg-gray-50 text-gray-400 group-hover/btn:border-[#2c154f]/30 group-hover/btn:bg-[#2c154f]/5'
                      }`}>
                        <svg 
                          className={`w-4 h-4 transition-all duration-400 ${openFaq === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Answer Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 lg:px-7 lg:pb-7 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#2c154f]/15 to-transparent mb-5"></div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#2c154f]/5 flex items-center justify-center">
                              <svg className="w-3.5 h-3.5 text-[#2c154f]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-light flex-1">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium contact card */}
            {/* <div className="mt-20 text-center">
              <div className="inline-block">
                <div className="relative bg-gradient-to-r from-[#2c154f]/5 via-white to-[#2c154f]/5 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-2xl border border-[#2c154f]/10 pointer-events-none"></div>
                  <p className="text-gray-500 text-sm font-light mb-5">
                    Still have questions? We're here to help you find answers.
                  </p>
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 text-[#2c154f] text-sm font-medium transition-all duration-300"
                  >
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#2c154f] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
                      Contact Our Audit Experts
                    </span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          data-observe="true"
          className="py-12 bg-[#2c154f] relative overflow-hidden"
        >
          {/* <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div> */}

          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">GET IN TOUCH</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready to <span className="font-bold">Take the Next Step Toward Smarter Business Growth</span>
              </h2>
              
              <p className="text-white/50 text-base mb-10 font-light max-w-md mx-auto">
Partner with experienced advisors who help businesses improve performance, strengthen strategy, and unlock new opportunities for long-term success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative px-9 py-3.5 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-gray-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule a Consultation
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                <Link 
                  href="/services" 
                  className="px-9 py-3.5 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Our Expertise
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
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
          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default IndustryExpertisePage;