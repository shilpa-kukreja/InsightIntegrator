// app/services/advisory/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AdvisoryPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  const observerRef = useRef(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections((prev) => ({ ...prev, hero: true }));

    // Create observer that keeps watching
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all sections with data-observe attribute
    const observeElements = () => {
      const sections = document.querySelectorAll('[data-observe="true"]');
      sections.forEach((section) => {
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

  const serviceItems = [
    {
      id: "strategy-transformation",
      name: "Strategy & Transformation",
      shortDescription:
        "Strategic planning and business transformation services.",
      description:
        "We help businesses build stronger strategies, improve operational direction, and adapt to changing market conditions with structured transformation initiatives focused on long-term business growth.",
      detailedDescription:
        "Organizations today require agile planning, smarter execution, and clear operational alignment to remain competitive. Our advisory approach focuses on identifying improvement areas, enhancing business efficiency, and supporting transformation initiatives that create measurable business value.",
      keyFeatures: [
        "Business strategy development",
        "Organizational restructuring support",
        "Process improvement planning",
        "Business performance evaluation",
        "Operational efficiency enhancement",
        "Change implementation support",
      ],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const industryData = [
    //  Business Risk
    {
      id: "business-risk",
      title: "Business Risk  ",
      description:
        "Strengthening business resilience through structured risk assessment, internal controls, and operational governance support.",
      services: [
        {
          id: "internal-audit",
          name: "Internal Audit ",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Our internal audit services help businesses evaluate operational processes, strengthen internal controls, and improve compliance visibility across key business functions.",
          detailedDescription:
            "We work with organizations to identify process gaps, assess control effectiveness, and support better decision-making through practical risk-focused evaluations. Our approach is designed to improve accountability, operational transparency, and long-term business stability.",
          keyFeatures: [
            "Internal control assessment",
            "Operational risk evaluation",
            "Process and compliance reviews",
            "Governance support services",
            "Risk monitoring and reporting",
            "Business control improvement recommendations",
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "internal-controls",
          name: "Internal Controls over Financial Reporting (ICFR) ",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Our ICFR services help organizations strengthen financial reporting processes, improve control environments, and support accurate and reliable financial information management.",
          detailedDescription:
            "We assist businesses in evaluating financial controls, identifying reporting gaps, and enhancing process efficiency through structured control assessments and compliance-focused methodologies.",
          keyFeatures: [
            "Financial control framework assessment",
            "Reporting process evaluation",
            "Control gap identification",
            "Financial compliance support",
            "Process documentation review",
            "Control monitoring and improvement recommendations",
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "enterprise-risk",
          name: "Enterprise Risk Management (ERM) ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our ERM services help businesses identify, assess, and manage enterprise-level risks through structured frameworks that support operational resilience and informed decision-making.",
          detailedDescription:
            "We work with organizations to build risk-aware processes, strengthen governance structures, and improve visibility across operational, financial, and compliance-related risk areas.",
          keyFeatures: [
            "Enterprise risk assessment",
            "Risk governance framework support",
            "Risk monitoring and reporting",
            "Operational risk evaluation",
            "Compliance and control reviews",
            "Business continuity risk planning",
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "corporate-governance",
          name: "Corporate Governance Assessment",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our corporate governance assessment services help organizations evaluate governance structures, strengthen accountability, and improve oversight across key business functions.",
          detailedDescription:
            "We assist businesses in reviewing governance practices, identifying structural gaps, and enhancing decision-making frameworks to support transparency, compliance, and operational effectiveness. ",
          keyFeatures: [
            "Governance framework evaluation",
            "Board and management process review",
            "Policy and control assessment",
            "Compliance structure analysis",
            "Accountability and reporting review",
            "Governance improvement recommendations",
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },

    //  Regulatory & Compliance
    {
      id: "regulatory",
      title: "Regulatory & Compliance ",
      description:
        "Helping businesses strengthen compliance frameworks, manage regulatory obligations, and maintain operational transparency across evolving business environments.",
      services: [
        {
          id: "aml-cft",
          name: "AML & CFT Compliance  ",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Our AML & CFT compliance services help organizations establish structured compliance practices to identify, monitor, and manage financial crime and regulatory risks effectively.",
          detailedDescription:
            "We support businesses in strengthening internal compliance processes, improving monitoring mechanisms, and aligning operational practices with applicable anti-money laundering and counter-terrorism financing requirements.",
          keyFeatures: [
            "AML & CFT compliance assessment",
            "Risk-based compliance reviews",
            "Customer due diligence support",
            "Compliance policy evaluation",
            "Transaction monitoring guidance",
            "Regulatory reporting assistance",
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "regulatory-comliance",
          name: "Regulatory compliance advisory ",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Our regulatory compliance advisory services help businesses understand regulatory expectations, strengthen internal compliance practices, and improve operational readiness across evolving compliance environments.",
          detailedDescription:
            "We assist organizations in reviewing compliance structures, identifying process gaps, and implementing practical measures that support regulatory alignment and long-term operational stability.",
          keyFeatures: [
            "Regulatory compliance assessments",
            "Compliance framework review",
            "Policy and procedure evaluation",
            "Operational compliance support",
            "Regulatory gap analysis",
            "Compliance process improvement guidance",
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "compilance-monitorign",
          name: "Compliance monitoring & assurance ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our compliance monitoring and assurance services help organizations maintain ongoing regulatory alignment, strengthen oversight mechanisms, and improve confidence in internal compliance practices.",
          detailedDescription:
            "We support businesses with structured monitoring processes, periodic compliance evaluations, and assurance reviews that help identify gaps early and maintain consistent regulatory readiness.",
          keyFeatures: [
            "Compliance monitoring programs",
            "Regulatory assurance reviews",
            "Internal compliance reporting",
            "Risk-based compliance evaluations",
            "Ongoing compliance tracking",
            "Control testing and validation"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "training-development",
          name: "Training and development ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our training and development solutions empower teams with the practical knowledge, regulatory awareness, and operational skills needed to improve performance and strengthen organizational capabilities.",
          detailedDescription:
            "We design customized learning programs, workshops, and professional development initiatives that help employees stay updated with industry standards, compliance expectations, and evolving business requirements.",
          keyFeatures: [
            "Corporate compliance training",
            "Leadership development programs",
            "Regulatory awareness workshops",
            "Technical skill enhancement sessions",
            "Employee capability assessments",
            "Customized learning frameworks"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "independent-third",
          name: "Independent third-party reviews ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our independent third-party review services provide objective evaluations that help organizations strengthen transparency, validate controls, and build stakeholder confidence across critical business functions.",
          detailedDescription:
            "We conduct structured independent assessments to identify operational gaps, evaluate compliance readiness, and provide unbiased recommendations that support informed decision-making and continuous improvement.",
          keyFeatures: [
            "Independent compliance assessments",
            "Process review and evaluation",
            "Operational control validation",
            "Governance effectiveness reviews",
            "Risk and gap analysis",
            "Third-party assurance reporting"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "islamic-finance",
          name: "Islamic finance advisory and shari’ah compliance ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our Islamic finance advisory and Shari’ah compliance services help organizations align financial practices with ethical principles, regulatory expectations, and Shari’ah governance requirements.",
          detailedDescription:
            "We support businesses and financial institutions with structured advisory, compliance assessments, and governance frameworks that ensure transparency, operational integrity, and adherence to Islamic finance standards.",
          keyFeatures: [
            "Shari’ah compliance reviews",
            "Islamic finance structuring support",
            "Shari’ah governance advisory",
            "Product and transaction assessments",
            "Compliance monitoring frameworks",
            "Regulatory and ethical guidance"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },

    //   Financial Advisory
    {
      id: "financial-advisory",
      title: " Financial Advisory ",
      description:
        "Driving operational excellence and efficiency across manufacturing value chains.",
      services: [
        {
          id: "feasibility-studies",
          name: "Feasibility Studies ",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Our feasibility study services help businesses evaluate opportunities, assess financial viability, and make informed strategic decisions before launching new projects or investments.",
          detailedDescription:
            "We conduct detailed operational, financial, and market assessments to identify potential risks, estimate resource requirements, and determine the practicality and long-term sustainability of proposed initiatives.",
          keyFeatures: [
            "Financial viability assessment",
            "Market demand evaluation",
            "Investment and cost analysis",
            "Operational feasibility review",
            "Risk and opportunity analysis",
            "Business model evaluation"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "due-diligence",
          name: "Due Diligence",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Our due diligence services provide detailed financial, operational, and compliance assessments that help businesses make confident investment, acquisition, and partnership decisions.",
          detailedDescription:
            "We evaluate critical business areas to identify potential risks, uncover hidden liabilities, and provide clear insights that support strategic transactions and informed decision-making.",
          keyFeatures: [
            "Financial due diligence reviews",
            "Operational risk assessments",
            "Compliance and legal evaluations",
            "Transaction support services",
            "Business performance analysis",
            "Risk identification and reporting"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "valuations-financial",
          name: "Valuations and Financial Modelling  ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our valuation and financial modelling services help organizations assess business worth, evaluate investment opportunities, and support strategic financial planning with data-driven insights.",
          detailedDescription:
            "We develop reliable financial models and valuation frameworks that support mergers, acquisitions, fundraising, restructuring, and long-term business decision-making.",
          keyFeatures: [
            "Business valuation services",
            "Financial forecasting models",
            "Investment and transaction analysis",
            "Cash flow and scenario modelling",
            "M&A valuation support",
            "Strategic financial planning"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },

    //   Technology & Cybersecurity
    {
      id: "technology-cybersecurity",
      title: " Technology & Cybersecurity ",
      description:
        "Empowering organizations with secure digital ecosystems, resilient infrastructure, and technology-driven operational excellence.",
      services: [
        {
          id: "cybersecurity",
          name: "Cybersecurity  ",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Our cybersecurity services help organizations protect critical systems, secure sensitive data, and reduce exposure to evolving digital threats across their business environment.",
          detailedDescription:
            "We assist businesses in strengthening their security posture through proactive risk assessments, security monitoring, and governance frameworks designed to improve resilience and ensure operational continuity.",
          keyFeatures: [
            "Cyber risk assessments",
            "Security governance frameworks",
            "Network and infrastructure security",
            "Threat monitoring and response",
            "Vulnerability and penetration testing",
            "Data protection and access control"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "digital-strategy",
          name: "Digital strategy ",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "Our digital strategy services help organizations align technology initiatives with business objectives to improve efficiency, customer engagement, and long-term digital growth.",
          detailedDescription:
            "We work with businesses to design scalable digital roadmaps, modernize operations, and implement technology-driven strategies that enhance agility, innovation, and competitive advantage.",
          keyFeatures: [
            "Digital transformation planning",
            "Technology roadmap development",
            "Business process digitization",
            "Customer experience optimization",
            "Digital innovation strategy",
            "Data-driven decision frameworks"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "implementation-support",
          name: "Implementation Support ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our implementation support services help organizations execute strategic initiatives smoothly, ensuring operational alignment, efficient deployment, and measurable business outcomes.",
          detailedDescription:
            "We assist businesses throughout the implementation lifecycle by coordinating processes, managing execution challenges, and supporting teams to achieve successful and sustainable project delivery.",
          keyFeatures: [
            "Project implementation planning",
            "Process execution support",
            "Operational transition management",
            "Technology deployment coordination",
            "Performance monitoring assistance",
            "Change management support"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "post-implementation",
          name: "Post Implementation Review ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our post implementation review services help organizations evaluate project outcomes, measure operational effectiveness, and identify opportunities for continuous improvement after execution.",
          detailedDescription:
            "We assess implemented systems, processes, and strategic initiatives to ensure objectives are achieved, risks are minimized, and long-term performance improvements are sustained.",
          keyFeatures: [
            "Performance and outcome evaluation",
            "Process effectiveness reviews",
            "Operational improvement analysis",
            "Risk and issue identification",
            "Compliance and control assessment",
            "Recommendations for optimization"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "technology-advisory",
          name: "Technology Advisory  ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our technology advisory services help organizations make informed technology decisions, optimize digital investments, and align IT strategies with long-term business objectives.",
          detailedDescription:
            "We guide businesses in evaluating technology environments, improving operational efficiency, and implementing scalable solutions that support innovation, security, and sustainable growth.",
          keyFeatures: [
            "IT strategy and roadmap advisory",
            "Technology infrastructure assessment",
            "Digital transformation consulting",
            "System selection and optimization",
            "IT governance and risk advisory",
            "Technology performance evaluation"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "training-change",
          name: "Training and change management ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our training and change management services help organizations successfully adapt to transformation initiatives by strengthening employee readiness, engagement, and operational alignment.",
          detailedDescription:
            "We support businesses in managing organizational change through structured communication, workforce training, and strategic transition planning that encourages long-term adoption and performance improvement.",
          keyFeatures: [
            "Employee training and development programs",
            "Organizational change planning",
            "Leadership alignment and communication support",
            "Process adoption and implementation guidance",
            "Workforce readiness assessments",
            "Performance and transition management"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },

    //   Forensics
    {
      id: "forensics",
      title: "Forensics ",
      description:
        "Driving operational excellence and efficiency across manufacturing value chains.",
      services: [
        {
          id: "fraud-investigations",
          name: "Fraud investigations",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "Our forensic specialists help businesses identify, investigate, and respond to financial misconduct, fraud risks, and regulatory violations with complete confidentiality and professional integrity.",
          detailedDescription:
            "In today’s complex regulatory environment, organizations require proactive forensic support to protect financial assets, maintain stakeholder trust, and ensure compliance with UAE laws and corporate governance standards. We conduct detailed investigations, analyze financial irregularities, and provide clear reporting to support informed decision-making and legal proceedings when required.",
          keyFeatures: [
            "Financial fraud investigations",
            "Employee misconduct reviews",
            "Asset tracing and recovery support",
            "Anti-bribery and corruption assessments",
            "Evidence collection and forensic analysis",
            "Litigation and dispute support services"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "anti-fraud",
          name: "Anti-fraud program and controls ",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "We help organizations design and strengthen anti-fraud frameworks that reduce financial risk, improve governance, and protect business operations from internal and external threats.",
          detailedDescription:
            "Our experts assess existing control environments, identify vulnerabilities, and implement preventive measures aligned with UAE regulatory expectations and international best practices. We support businesses in building robust fraud risk management systems that enhance transparency, accountability, and operational resilience.",
          keyFeatures: [
            "Fraud risk assessment and gap analysis",
            "Internal control framework development",
            "Anti-fraud policy and procedure design",
            "Whistleblower mechanism advisory",
            "Fraud detection and monitoring systems",
            "Employee awareness and ethics training"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "digital-forensics",
          name: "Digital forensics ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our digital forensic services help organizations investigate cyber incidents, recover critical evidence, and strengthen digital security against evolving threats.",
          detailedDescription:
            "We assist businesses in identifying unauthorized activities, analyzing digital evidence, and responding to cybersecurity breaches with accuracy and confidentiality. Our specialists use advanced forensic techniques to support legal proceedings, internal investigations, and regulatory compliance requirements within the UAE business environment.",
          keyFeatures: [
            "Cyber incident investigation and response",
            "Digital evidence collection and preservation",
            "Email and device forensic analysis",
            "Data breach and unauthorized access reviews",
            "Network activity and log analysis",
            "Litigation support and forensic reporting"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "dispute-advisory",
          name: "Dispute advisory services ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "Our digital forensic services help organizations investigate cyber incidents, recover critical evidence, and strengthen digital security against evolving threats.",
          detailedDescription:
            "We work closely with legal teams, stakeholders, and management to evaluate financial impacts, review supporting evidence, and prepare clear expert reports. Our services are designed to support arbitration, litigation, settlement negotiations, and regulatory matters while protecting business interests and maintaining compliance with UAE legal frameworks.",
          keyFeatures: [
            "Commercial dispute assessment and analysis",
            "Arbitration and litigation support",
            "Financial loss quantification",
            "Expert witness and reporting support",
            "Contractual claim evaluation",
            "Settlement negotiation assistance"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },

    // ESG Services
    {
      id: "esg-services",
      title: " ESG Services",
      description:
        "Empowering sustainable growth through responsible business practices and transparent reporting.",
      services: [
        {
          id: "esg-reporting",
          name: "ESG Reporting & Compliance ",
          shortDescription:
            "Optimize supply chain for efficiency and resilience.",
          description:
            "We help organizations develop effective ESG frameworks, strengthen sustainability reporting, and align business operations with evolving environmental, social, and governance expectations.",
          detailedDescription:
            "Our ESG specialists support businesses in meeting regulatory requirements, improving stakeholder transparency, and building long-term sustainable value. We assist with ESG strategy development, reporting standards, governance assessments, and sustainability initiatives aligned with UAE regulations and international best practices.",
          keyFeatures: [
            "ESG reporting and disclosure support",
            "Sustainability strategy development",
            "ESG compliance and governance assessments",
            "Carbon footprint and environmental reporting",
            "Materiality assessment and stakeholder engagement",
            "ESG policy and framework implementation"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
        },
        {
          id: "benchmarking-gap",
          name: "Benchmarking & Gap Analysis ",
          shortDescription: "Improve productivity using lean methodologies.",
          description:
            "We help organizations evaluate current ESG performance, identify operational gaps, and align sustainability practices with industry standards and regulatory expectations.",
          detailedDescription:
            "Our specialists conduct detailed assessments to compare your existing ESG framework against regional requirements, global benchmarks, and leading market practices. We provide actionable insights that help strengthen governance, improve sustainability performance, and support long-term business resilience.",
          keyFeatures: [
            "ESG maturity and performance assessment",
            "Industry benchmarking and comparative analysis",
            "Regulatory and compliance gap reviews",
            "Sustainability risk identification",
            "Governance and policy evaluation",
            "Strategic improvement recommendations"
          ],
          image: "https://images.unsplash.com/photo-1581091012184-5c7f1b9d5b6d",
        },
        {
          id: "materiality-assessment",
          name: "Materiality Assessment ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "We help organizations identify and prioritize the ESG topics that matter most to stakeholders, business performance, and long-term sustainability objectives.",
          detailedDescription:
            "Our team conducts structured materiality assessments to evaluate environmental, social, and governance factors impacting your organization. By engaging stakeholders and analyzing industry trends, we help businesses build focused ESG strategies, improve reporting transparency, and align with evolving regulatory and investor expectations.",
          keyFeatures: [
            "Stakeholder engagement and surveys",
            "ESG priority identification and mapping",
            "Double materiality assessment support",
            "Industry and peer analysis",
            "Sustainability risk and opportunity evaluation",
            "ESG strategy alignment and reporting insights"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "post-implementation",
          name: "Post Implementation Review ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "We help organizations evaluate the effectiveness of implemented ESG initiatives, governance frameworks, and sustainability strategies to ensure measurable impact and continuous improvement.",
          detailedDescription:
            "Our specialists conduct independent post implementation reviews to assess whether ESG objectives, compliance requirements, and operational targets have been successfully achieved. We identify improvement opportunities, strengthen accountability, and provide actionable recommendations that support long-term sustainability performance.",
          keyFeatures: [
            "ESG program performance evaluation",
            "Compliance and governance effectiveness review",
            "Sustainability KPI assessment",
            "Operational improvement recommendations",
            "Risk and control effectiveness analysis",
            "Continuous monitoring and reporting support"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "technology-advisory",
          name: "Technology Advisory  ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "We help organizations leverage technology to improve operational efficiency, strengthen governance, and accelerate sustainable business transformation.",
          detailedDescription:
            "Our technology advisory specialists support businesses in evaluating digital capabilities, modernizing systems, and implementing scalable technology solutions aligned with strategic objectives and regulatory expectations. We assist organizations in navigating digital transformation while managing operational, cybersecurity, and compliance risks effectively.",
          keyFeatures: [
            "Digital transformation strategy and planning",
            "IT governance and risk advisory",
            "Business process automation support",
            "Technology infrastructure assessment",
            "ERP and system implementation advisory",
            "Cybersecurity and data protection guidance"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
        {
          id: "training-change",
          name: "Training and change management ",
          shortDescription:
            "Optimize inventory levels and warehouse efficiency.",
          description: "We help organizations build ESG awareness, strengthen workforce engagement, and successfully manage organizational change during sustainability and transformation initiatives.",
          detailedDescription:
            "Our specialists design tailored training and change management programs that support the adoption of ESG frameworks, governance practices, and sustainability objectives across all levels of the organization. We help businesses create a culture of accountability, adaptability, and long-term sustainable growth.",
          keyFeatures: [
            "ESG awareness and employee training programs",
            "Change management strategy development",
            "Leadership and stakeholder engagement",
            "Sustainability culture transformation support",
            "Communication and adoption planning",
            "Workforce readiness and capability building"
          ],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "What advisory services do you provide for businesses in the UAE?",
      answer:
        "We provide a wide range of advisory solutions including strategy consulting, regulatory compliance, risk management, financial advisory, ESG consulting, cybersecurity, forensic investigations, and business transformation services tailored to UAE market requirements.",
    },
    {
      question: "How can strategic advisory improve business performance and growth?",
      answer:
        "Strategic advisory helps organizations identify growth opportunities, improve operational efficiency, strengthen decision-making, and align business objectives with long-term market goals for sustainable success.",
    },
    {
      question:
        "Why is regulatory compliance important for companies operating in Dubai and the UAE?",
      answer:
        "Regulatory compliance helps businesses operate with confidence while reducing legal, financial, and reputational risks. It also strengthens corporate governance and supports alignment with evolving UAE laws and industry standards.",
    },
    {
      question: "How do risk management services help organizations reduce operational exposure?",
      answer:
        "Risk management services help businesses identify vulnerabilities, assess potential threats, and implement effective control measures to improve resilience, business continuity, and overall operational stability.",
    },
    {
      question:
        "What are the benefits of technology and cybersecurity advisory for modern businesses?",
      answer:
        "Technology and cybersecurity advisory helps organizations strengthen digital security, improve IT governance, protect sensitive information, and reduce the risk of cyber threats and operational disruptions.",
    },
    {
      question: "How can ESG advisory support long-term sustainability and corporate reputation?",
      answer:
        "ESG advisory helps businesses develop responsible environmental, social, and governance practices that improve stakeholder trust, support sustainable growth, and align with global and regional sustainability expectations.",
    },
  ];

  const scrollToItem = (itemId) => {
    const element = sectionRefs.current[itemId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <div
              className={`transition-all duration-1000 delay-200 transform ${visibleSections.hero ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">
                  Advisory Services
                </span>
                <div className="h-px w-12 bg-white/40"></div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Strategic{" "}
                <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Advisory
                </span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
               Practical advisory solutions designed to help businesses improve decision-making, strengthen operations, manage risk, and adapt confidently to evolving market demands.

              </p>

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
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <div
              className={`text-center transition-all duration-800 transform ${visibleSections.overview ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Overview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
                Clarity.   <span className="font-bold">Sustainable Growth.</span>{" "}
                Strategy.
              </h2>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto my-4"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
               Our advisory services focus on helping organizations address operational challenges, improve business performance, and build stronger foundations for long-term success. From business transformation and financial advisory to risk management, compliance, cybersecurity, and ESG support, we provide structured guidance tailored to evolving business needs.
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
            {/* <div
              className={`text-center mb-12 transition-all duration-800 transform ${visibleSections.services ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/50"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="font-bold">Advisory Services</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
                Strategic guidance to help you navigate complexity and unlock
                sustainable growth opportunities
              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/50 mx-auto mt-6"></div>
            </div> */}
             <div
              className={`text-center mb-20 transition-all duration-800 transform `}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0a0a0a]/40"></div>
                <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5">
                Comprehensive <span className="font-bold">Advisory</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
               Structured advisory solutions designed to support compliance, reporting accuracy, and effective  management.

              </p>
              <div className="w-16 h-px bg-[#0a0a0a]/40 mx-auto mt-6"></div>
            </div>

            <div className="space-y-12">
              {serviceItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (sectionRefs.current[item.id] = el)}
                  id={item.id}
                  data-observe="true"
                  className={`scroll-mt-24 transition-all duration-700 transform ${visibleSections[item.id] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-500 ${activeItem === item.id ? "bg-gray-50 p-10 rounded-2xl -m-6" : ""}`}
                  >
                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-light text-gray-500 tracking-wider">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div className="w-12 h-px bg-gray-500"></div>
                        <span className="text-[12px] text-gray-500 font-light uppercase tracking-wider">
                          Advisory Service
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-5 leading-tight">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-base leading-relaxed mb-6 text-justify">
                        {item.description}
                      </p>

                      <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light border-l-2 border-gray-400 pl-4 text-justify">
                        {item.detailedDescription}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-600 mb-4 tracking-wide uppercase">
                          Key Capabilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.keyFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a] transition-all"></div>
                              <span className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <button
                        onClick={() => scrollToItem(item.id)}
                        className="group inline-flex items-center gap-3 text-[#0a0a0a] text-sm font-medium tracking-wide transition-all"
                      >
                        <span className="border-b border-[#0a0a0a]/50 group-hover:border-[#0a0a0a] pb-0.5 transition-all">
                          Learn More
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button> */}
                    </div>

                    {/* Right Side - Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group/image">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#0a0a0a]/5 to-transparent rounded-md opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/50 via-transparent to-transparent z-10"></div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[430px] object-cover transition-transform duration-700 group-hover/image:scale-105"
                          />
                          {/* <div className="absolute bottom-0 left-0 w-24 h-px bg-white/20"></div>
                          <div className="absolute bottom-0 right-0 w-24 h-px bg-white/10"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < serviceItems.length - 1 && (
                    <div className="relative mt-12">
                      <div className="absolute left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gray-500 to-gray-300"></div>
                      <div className="flex justify-center">
                        <div className="w-2 h-1 rounded-full bg-gray-500"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* this is servies with sub-servies */}
            
            <div className="space-y-12 mt-10">
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
                        id={service.id}
                        key={service.id}
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
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#2c154f] rounded-full"></div>
                                <span className="text-sm text-gray-500">
                                  {feature}
                                </span>
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
              <div
                className={`transition-all duration-800 transform ${visibleSections.benefits ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#ffffff]/50"></div>
                  <span className="text-[#ffffff] text-[12px] font-light tracking-[0.2em] uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-6 leading-tight">
                  Key <span className="font-bold">Benefits</span>
                </h2>
                <div className="w-16 h-px bg-[#ffffff]/50 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    "Strategic business insights and measurable outcomes",
                    "Data-driven decision making and performance visibility",
                    "Stronger governance, risk, and compliance management",
                    "Tailored solutions aligned with business objectives ",
                    "Sustainable growth and long-term value creation",
                    "Expert support across complex business challenges",
                    "Enhanced operational efficiency and transformation readiness",
                    "Industry-focused expertise with practical implementation guidance",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                      <div className="w-px h-8 bg-[#ffffff]/50 group-hover:h-12 transition-all duration-300"></div>
                      <span className="text-[#ffffff] text-base font-light group-hover:text-[#ffffff] transition-colors">
                        {benefit}
                      </span>
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
            <div
              className={`text-center mb-16 transition-all duration-800 transform ${visibleSections.faq ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#2c154f]/50"></div>
                <span className="text-[#2c154f] text-[11px] font-semibold tracking-[0.2em] uppercase">
                  Knowledge Base
                </span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#2c154f]/30"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-5 tracking-tight">
                Frequently Asked{" "}
                <span className="font-bold bg-gradient-to-r from-[#2c154f] to-[#4a2a7a] bg-clip-text text-transparent">
                  Questions
                </span>
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
                    openFaq === index ? "lg:row-span-1" : ""
                  }`}
                >
                  <div
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl ${
                      openFaq === index
                        ? "shadow-2xl ring-2 ring-[#2c154f]/20 ring-offset-0"
                        : "hover:shadow-lg hover:border-gray-100"
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
                      <div
                        className={`relative flex-shrink-0 w-10 h-10 rounded-full border transition-all duration-400 flex items-center justify-center ${
                          openFaq === index
                            ? "border-[#2c154f] bg-[#2c154f] text-white shadow-md shadow-[#2c154f]/20"
                            : "border-gray-200 bg-gray-50 text-gray-400 group-hover/btn:border-[#2c154f]/30 group-hover/btn:bg-[#2c154f]/5"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-all duration-400 ${openFaq === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 lg:px-7 lg:pb-7 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#2c154f]/15 to-transparent mb-5"></div>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#2c154f]/5 flex items-center justify-center">
                              <svg
                                className="w-3.5 h-3.5 text-[#2c154f]/40"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
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

          <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div
              className={`transition-all duration-800 transform ${visibleSections.cta ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">
                  Get Started
                </span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-white mb-5 tracking-tight">
                Ready to {" "}
                <span className="font-bold">Strengthen Your Business for the Future?</span>
              </h2>

              <p className="text-white/50 text-base mb-10 font-light max-w-2xl mx-auto">
                Connect with our advisory specialists to explore strategic solutions that drive growth, strengthen compliance, and create long-term business value across the UAE.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="/contact"
                  className="group relative px-9 py-3.5 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-gray-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Speak With Our Experts
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-9 py-3.5 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Advisory Services
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes scroll {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(8px);
              opacity: 1;
            }
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
            }
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

export default AdvisoryPage;
