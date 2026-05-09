// app/components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConsultPopup from "./ConsultPopup";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isConsultPopupOpen, setIsConsultPopupOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize if screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", key: "home" },
    { name: "About us", href: "/about", key: "about" },
    { name: "Services", href: "/services", key: "services", hasDropdown: true },
    {
      name: "Industry Expertise",
      href: "/services/industry-expertise",
      key: "industry-expertise",
      hasDropdown: true,
    },
    { name: "Blogs", href: "/blogs", key: "blogs" },
    { name: "Careers", href: "/careers", key: "careers" },
    { name: "Contact us", href: "/contact", key: "contact" },
  ];

  // Services mega-dropdown categories
  // const serviceCategories = [
  //   {
  //     title: 'Audit and Assurance',
  //     href: '/services/audit-and-assurance',
  //     icon: (
  //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  //       </svg>
  //     ),
  //     items: [
  //       { name: 'Financial Reporting Advisory Services (FRAS)', href: '/services/financial-reporting-advisory' },
  //       { name: 'Business risk services', href: '/services/business-risk-services' },
  //       { name: 'Business Process Solutions', href: '/services/business-process-solutions' },
  //       { name: 'Regulatory Advisory Services', href: '/services/regulatory-advisory' },
  //       { name: 'Financial advisory', href: '/services/financial-advisory' },
  //       { name: 'Technology Advisory & Cybersecurity', href: '/services/technology-advisory' },
  //       { name: 'Forensics', href: '/services/forensics' },
  //       { name: 'ESG Services', href: '/services/esg-services' },
  //     ],
  //   },
  //   {
  //     title: 'Tax',
  //     href: '/services/tax',
  //     icon: (
  //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //       </svg>
  //     ),
  //     items: [
  //       { name: 'Corporate Tax', href: '/services/corporate-tax' },
  //       { name: 'VAT', href: '/services/vat' },
  //       { name: 'Transfer Pricing', href: '/services/transfer-pricing' },
  //       { name: 'International Tax and Tax Due Diligence', href: '/services/international-tax' },
  //       { name: 'Customs and International Trade', href: '/services/customs-trade' },
  //       { name: 'Excise Tax', href: '/services/excise-tax' },
  //       { name: 'Pillar Two Services in the UAE', href: '/services/pillar-two' },
  //       { name: 'FATCA & CRS Compliance Services in the UAE', href: '/services/fatca-crs' },
  //     ],
  //   },
  //   {
  //     title: 'Advisory',
  //     href: '/services/advisory',
  //     icon: (
  //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  //       </svg>
  //     ),
  //     items: [
  //       { name: 'In-Country Value (ICV)', href: '/services/icv' },
  //       { name: 'Strategy & Transformation', href: '/services/strategy-transformation' },
  //       { name: 'Financial Advisory', href: '/services/financial-advisory' },
  //       { name: 'Risk Advisory', href: '/services/risk-advisory' },
  //       { name: 'Deal Advisory', href: '/services/deal-advisory' },
  //       { name: 'Restructuring Services', href: '/services/restructuring' },
  //       { name: 'Forensic Advisory', href: '/services/forensic-advisory' },
  //       { name: 'Valuation Services', href: '/services/valuation' },
  //     ],
  //   },
  //   {
  //     title: 'Media',
  //     href: '/services/media',
  //     icon: (
  //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  //       </svg>
  //     ),
  //     items: [
  //       { name: 'Press Releases', href: '/services/press-releases' },
  //       { name: 'News & Events', href: '/services/news-events' },
  //       { name: 'Media Coverage', href: '/services/media-coverage' },
  //       { name: 'Annual Reports', href: '/services/annual-reports' },
  //       { name: 'Thought Leadership', href: '/services/thought-leadership' },
  //       { name: 'Podcasts', href: '/services/podcasts' },
  //       { name: 'Webinars', href: '/services/webinars' },
  //       { name: 'Case Studies', href: '/services/case-studies' },
  //     ],
  //   },
  // ];

  // In your Navbar.jsx, update the serviceCategories items to include hash links:

  const serviceCategories = [
    
    // audit
    {
      title: "Audit & Assurance",
      href: "/services/audit-and-assurance",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      items: [
        {
          name: "Financial Reporting ",
          href: "/services/audit-and-assurance#financial-reporting-advisory",
          sectionId: "financial-reporting-advisory",
        },
        {
          name: "In-Country Value (ICV)",
          href: "/services/audit-and-assurance#in-country",
          sectionId: "business-risk-services",
        },
        {
          name: "Outsourcing and Business Solutions",
          href: "/services/audit-and-assurance#outsourcing-business",
          sectionId: "business-process-solutions",
          hasSubmenu: true,
          subItems: [
            {
              name: "Accounting and Book-keeping",
              href: "/services/audit-and-assurance#accounting",
            },
            {
              name: "Business Incorporation",
              href: "/services/audit-and-assurance#business-incorporation",
            },
            {
              name: "Liquidation and De-registration",
              href: "/services/audit-and-assurance#liquidation",
            },
            {
              name: "Stock & Asset Audit / Count",
              href: "/services/audit-and-assurance#stock-asset",
            },
            {
              name: "HR and Payroll",
              href: "/services/audit-and-assurance#hr-payroll",
            },
          ],
        }
      ],
    },

    // tax
    {
      title: "Tax",
      href: "/services/tax",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      items: [
        {
          name: "Corporate Tax",
          href: "/services/tax#corporate-tax",
          sectionId: "corporate-tax",
        },
        { name: "VAT", href: "/services/tax#vat", sectionId: "vat" },
        // {
        //   name: "Transfer Pricing",
        //   href: "/services/tax#transfer-pricing",
        //   sectionId: "transfer-pricing",
        // },
        // {
        //   name: "International Tax and Tax Due Diligence",
        //   href: "/services/tax#international-tax",
        //   sectionId: "international-tax",
        // },
        // {
        //   name: "Customs and International Trade",
        //   href: "/services/tax#customs-trade",
        //   sectionId: "customs-trade",
        // },
        // {
        //   name: "Excise Tax",
        //   href: "/services/tax#excise-tax",
        //   sectionId: "excise-tax",
        // },
        // {
        //   name: "Pillar Two Services in the UAE",
        //   href: "/services/tax#pillar-two",
        //   sectionId: "pillar-two",
        // },
        // {
        //   name: "FATCA & CRS Compliance Services in the UAE",
        //   href: "/services/tax#fatca-crs",
        //   sectionId: "fatca-crs",
        // },
      ],
    },

    // advisory
    {
      title: "Advisory",
      href: "/services/advisory",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      items: [
        // {
        //   name: "Strategy & Transformation",
        //   href: "/services/advisory#icv",
        //   sectionId: "icv",
        // },
        {
          name: "Strategy & Transformation",
          href: "/services/advisory#strategy-transformation",
          sectionId: "strategy-transformation",
        },
        {
          name: "Business Risk",
          href: "/services/advisory#business-risk",
          sectionId: "business-risk",
          hasSubmenu: true,
          subItems: [
            {
              name: "Internal Audit",
              href: "/services/advisory#internal-audit",
            },
            {
              name: "Internal Controls over Financial Reporting (ICFR)",
              href: "/services/advisory#internal-controls",
            },
            {
              name: "Enterprise Risk Management (ERM)",
              href: "/services/advisory#enterprise-risk",
            },
            {
              name: "Corporate Governance Assessment",
              href: "/services/advisory#corporate-governance",
            },
          ],
        },
        {
          name: "Regulatory & Compliance",
          href: "/services/advisory#regulatory",
          sectionId: "business-risk",
          hasSubmenu: true,
          subItems: [
            {
              name: "AML & CFT Compliance",
              href: "/services/advisory#aml-cft",
            },
            {
              name: "Regulatory compliance advisory",
              href: "/services/advisory#regulatory-comliance",
            },
            {
              name: "Compliance monitoring & assurance ",
              href: "/services/advisory#compilance-monitorign",
            },
            {
              name: "Training and development",
              href: "/services/advisory#training-development",
            },
            {
              name: "Independent third-party reviews ",
              href: "/services/advisory#independent-third",
            },
            {
              name: "Islamic finance advisory and shari’ah compliance ",
              href: "/services/advisory#islamic-finance",
            },
          ],
        },
        {
          name: "Financial Advisory",
          href: "/services/advisory#financial-advisory",
          sectionId: "financial-advisory",
          hasSubmenu: true,
          subItems: [
            {
              name: "Feasibility Studies ",
              href: "/services/advisory#feasibility-studies",
            },
            { name: "Due Diligence ", href: "/services/advisory#due-diligence" },
            {
              name: "Valuations and Financial Modelling  ",
              href: "/services/advisory#valuations-financial",
            },
          ],
        },

        {
          name: "Technology & Cybersecurity",
          href: "/services/advisory#technology-cybersecurity",
          sectionId: "technology-cybersecurity",
          hasSubmenu: true,
          subItems: [
            {
              name: "Cybersecurity",
              href: "/services/advisory#cybersecurity",
            },
            { name: "Digital strategy ", href: "/services/advisory#digital-strategy" },
            {
              name: "Implementation Support   ",
              href: "/services/advisory#implementation-support",
            },
            {
              name: "Post Implementation Review ",
              href: "/services/advisory#post-implementation",
            },
            { name: "Technology Advisory   ", href: "/services/advisory#technology-advisory" },
            {
              name: "Training and change management   ",
              href: "/services/advisory#training-change",
            },
          ],
        },

        // {
        //   name: "Risk Advisory",
        //   href: "/services/advisory#risk-advisory",
        //   sectionId: "risk-advisory",
        // },
        // {
        //   name: "Deal Advisory",
        //   href: "/services/advisory#deal-advisory",
        //   sectionId: "deal-advisory",
        // },
        // {
        //   name: "Restructuring Services",
        //   href: "/services/advisory#restructuring",
        //   sectionId: "restructuring",
        // },
        {
          name: "Forensic",
          href: "/services/advisory#forensics",
          sectionId: "forensics",
          hasSubmenu: true,
          subItems: [
            {
              name: "Fraud investigations ",
              href: "/services/advisory#fraud-investigations",
            },
            {
              name: "Anti-fraud program and controls  ",
              href: "/services/advisory#anti-fraud",
            },
            { name: "Digital forensics ", href: "/services/advisory#digital-forensics" },
            {
              name: "Dispute advisory services ",
              href: "/services/advisory#dispute-advisory",
            },
          ],
        },

        {
          name: "ESG Services",
          href: "/services/advisory#esg-services",
          sectionId: "esg-services",
          hasSubmenu: true,
          subItems: [
            {
              name: "ESG Reporting & Compliance ",
              href: "/services/advisory#esg-reporting",
            },
            {
              name: "Benchmarking & Gap Analysis  ",
              href: "/services/advisory#benchmarking-gap",
            },
            {
              name: "Materiality Assessment  ",
              href: "/services/advisory#materiality-assessment",
            },
             {
              name: "Post Implementation Review  ",
              href: "/services/advisory#post-implementation",
            }, {
              name: "Technology Advisory  ",
              href: "/services/advisory#technology-advisory",
            },
            {
              name: "Training and change management",
              href: "/services/advisory#training-change",
            },
          ],
        },
        // {
        //   name: "Valuation Services",
        //   href: "/services/advisory#valuation",
        //   sectionId: "valuation",
        // },
      ],
    },

    // media
    {
      title: "Media",
      href: "/services/media",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      items: [
        {
          name: "Graphic Designing",
          href: "/services/media#graphic-designing",
          sectionId: "graphic-designing",
          hasSubmenu: true,
          subItems: [
            {
              name: "Logo Design",
              href: "/services/media#logo-design",
            },
            {
              name: "Packaging Design",
              href: "/services/media#packaging-design",
            },
            {
              name: "Catelogue & Brocheers Design",
              href: "/services/media#catelogue-brocheers",
            },
          ],
        },
         {
          name: "Web Designing",
          href: "/services/media#web-designing",
          sectionId: "web-designing",
          hasSubmenu: true,
          subItems: [
            {
              name: "Ecommerce Development",
              href: "/services/media#ecommerce-development",
            },
            {
              name: "Web Development",
              href: "/services/media#web-development",
            },
             {
              name: "UI/UX Design",
              href: "/services/media#ui-ux",
            },
          ],
        },
        {
          name: "Digital Marketing",
          href: "/services/media#digital-marketing",
          sectionId: "digital-marketing",
        },
        

      ],
    },
   
  ];

  const industryExpertiseCategories = [
    {
      title: "Industry Expertise ",
      href: "/services/industry-expertise",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      items: [
        {
          name: "Manufacturing",
          href: "/services/industry-expertise#manufacturing",
          sectionId: "manufacturing",
          hasSubmenu: true,
          subItems: [
            {
              name: "Supply Chain & Logistics Strategy",
              href: "/services/industry-expertise#supply-chain",
            },
            {
              name: "Operational Efficiency (Lean Management)",
              href: "/services/industry-expertise#operational-efficiency",
            },
            {
              name: "Inventory & Warehouse Management",
              href: "/services/industry-expertise#inventory",
            },
            {
              name: "Sustainability & ESG Advisory",
              href: "/services/industry-expertise#sustainability",
            },
            {
              name: "Cost & Profitability Analysis",
              href: "/services/industry-expertise#cost",
            },
          ],
        },

        {
          name: "Real Estate ",
          href: "/services/industry-expertise#real-estate",
          sectionId: "real-estate",
          hasSubmenu: true,
          subItems: [
            {
              name: "Market Feasibility Studies",
              href: "/services/industry-expertise#market",
            },
            {
              name: "Property Portfolio Strategy",
              href: "/services/industry-expertise#property",
            },
            {
              name: "Tenant Retention & Experience",
              href: "/services/industry-expertise#tenant",
            },
            {
              name: "Sales & Marketing Positioning",
              href: "/services/industry-expertise#sales-marketing",
            },
            {
              name: "Property Management Optimization",
              href: "/services/industry-expertise#property-management",
            },
          ],
        },

        {
          name: " Hospitality (Hotels, F&B, Tourism) ",
          href: "/services/industry-expertise#hospitality",
          sectionId: "hospitality",
          hasSubmenu: true,
          subItems: [
            {
              name: "Guest Experience Mapping",
              href: "/services/industry-expertise#guest-experience",
            },
            {
              name: "Revenue Management Strategy",
              href: "/services/industry-expertise#revenue-management",
            },
            {
              name: "Franchise & Expansion Advisory",
              href: "/services/industry-expertise#franchise-expansion",
            },
            {
              name: "Menu & Service Profitability Analysis",
              href: "/services/industry-expertise#menu-service",
            },
            {
              name: "Staff Retention & Culture Building",
              href: "/services/industry-expertise#staff-retention",
            },
          ],
        },

        {
          name: "Education (Schools, Universities, EdTech) ",
          href: "/services/industry-expertise#education",
          sectionId: "education",
          hasSubmenu: true,
          subItems: [
            {
              name: "Enrollment & Admissions Strategy",
              href: "/services/industry-expertise#enrollment",
            },
            {
              name: "Operational Cost Review",
              href: "/services/industry-expertise#operational-cost",
            },
            {
              name: "Student Experience & Retention",
              href: "/services/industry-expertise#student-experience",
            },
            {
              name: "Accreditation & Regulatory Readiness",
              href: "/services/industry-expertise#accreditation-regulatory",
            },
            { name: "Corporate Partnerships", href: "/services/industry-expertise#corporate-patnerships" },
          ],
        },

        {
          name: " Healthcare (Clinics, Hospitals, Wellness Centers) ",
          href: "/services/industry-expertise#healthcare",
          sectionId: "healthcare",
          hasSubmenu: true,
          subItems: [
            {
              name: "Patient Flow Optimization",
              href: "/services/industry-expertise#patient-flow",
            },
            {
              name: "Revenue Cycle Management",
              href: "/services/industry-expertise#revenue-cycle",
            },
            {
              name: "Healthcare Marketing & Brand Trust",
              href: "/services/industry-expertise#healthcare-marketing",
            },
            {
              name: "Service Expansion Feasibility",
              href: "/services/industry-expertise#service-expansion",
            },
            {
              name: "Administrative Compliance Readiness",
              href: "/services/industry-expertise#administrative-compliance",
            },
          ],
        },

        {
          name: "Financial Services (DNFBPs Only) ",
          href: "/services/industry-expertise#financial-services",
          sectionId: "financial-services",
          hasSubmenu: true,
          subItems: [
            {
              name: "AML & CFT Policy Development",
              href: "/services/industry-expertise#aml-cft",
            },
            {
              name: "KYC (Know Your Customer) Process Design",
              href: "/services/industry-expertise#kyc",
            },
            {
              name: "GoAML Registration & Reporting Support",
              href: "/services/industry-expertise#goaml",
            },
            {
              name: "Risk Profiling",
              href: "/services/industry-expertise#risk-profiling",
            },
            { name: "Training", href: "/services/industry-expertise#training" },
          ],
        },
      ],
    },
  ];

  const getDropdownCategories = (linkName) => {
    if (linkName === "Services") return serviceCategories;
    if (linkName === "Industry Expertise") return industryExpertiseCategories;
    return [];
  };

  const getDropdownContainerProps = (linkName) => {
    if (linkName === "Industry Expertise") {
      return {
        className:
          "absolute top-full left-1/2 w-[400px] max-w-[92vw] h-[360px] max-h-[380vw] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible animate-fadeIn",
        style: {
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
        },
      };
    }

    // Default: Services mega-dropdown
    return {
      className:
        "absolute top-full left-1/2  w-screen max-w-[1400px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible animate-fadeIn",
      style: {
        left: "50%",
        right: "auto",
        transform: "translateX(-40%)",
      },
    };
  };

  // Also update the Link components in the dropdown to handle smooth scrolling
  // Add onClick handler to the links in both desktop and mobile dropdowns:

  // For mobile dropdown, similarly update the Link component

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleConsultClick = () => {
    setIsConsultPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsConsultPopupOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0 group">
              <div className="flex items-center gap-2">
                <img
                  src="/logo/logos.png"
                  alt="Insight Integrators Logo"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div
                    key={link.key}
                    className="relative"
                    onMouseEnter={() =>
                      link.hasDropdown && handleMouseEnter(link.name)
                    }
                    onMouseLeave={
                      link.hasDropdown ? handleMouseLeave : undefined
                    }
                  >
                    <Link
                      href={link.href}
                      className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1 rounded-lg ${
                        isActive
                          ? "text-[#4f2d80] bg-[#4f2d80]/5"
                          : "text-gray-700 hover:text-[#4f2d80] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            activeDropdown === link.name
                              ? "rotate-180 text-[#4f2d80]"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#4f2d80] rounded-full"></span>
                      )}
                    </Link>

                    {/* Services Mega Dropdown */}
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div
                        className={getDropdownContainerProps(link.name).className}
                        style={getDropdownContainerProps(link.name).style}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="h-0.5 bg-gradient-to-r from-[#4f2d80] via-[#6b4ca8] to-[#4f2d80]"></div>

                        <div
                          className={`grid ${
                            getDropdownCategories(link.name).length === 1
                              ? "grid-cols-1"
                              : "grid-cols-4"
                          } gap-6 p-8`}
                        >
                          {getDropdownCategories(link.name).map((category, idx) => (
                            <div key={idx} className="group">
                              <Link href={category.href}>
                                <div className="flex items-center gap-2 mb-4 border-b border-[#4f2d80]/20 pb-2 transition-all duration-300 group-hover:border-[#4f2d80]/40">
                                  <span className="text-[#4f2d80] transition-transform duration-300 group-hover:scale-110">
                                    {category.icon}
                                  </span>
                                  <h3 className="text-[#4f2d80] font-semibold text-base">
                                    {category.title}
                                  </h3>
                                </div>
                              </Link>
                              <ul className="space-y-2">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    {/* Wrapper spans row + submenu so pointer can cross spacing without firing mouseleave */}
                                    <div
                                      className="relative"
                                      onMouseEnter={() =>
                                        item.hasSubmenu &&
                                        setActiveSubmenu(item.name)
                                      }
                                      onMouseLeave={() =>
                                        item.hasSubmenu &&
                                        setActiveSubmenu(null)
                                      }
                                    >
                                      <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-[#4f2d80] text-sm transition-all duration-200 block py-2 px-2 hover:bg-gray-50 rounded-md flex justify-between items-center"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {item.name}

                                        {item.hasSubmenu && (
                                          <svg
                                            className={`w-3 h-3 ml-2 shrink-0 transition-transform duration-300 ${
                                              activeSubmenu === item.name
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M19 9l-7 7-7-7"
                                            />
                                          </svg>
                                        )}
                                      </Link>

                                      {/* pt-2 = hover bridge — margin created a dead zone that cleared the submenu */}
                                      {item.hasSubmenu &&
                                        activeSubmenu === item.name && (
                                          <div className="absolute left-[-10px] top-full z-60 pt-2 w-[260px]">
                                            <div className="bg-white shadow-lg border border-gray-100 rounded-lg p-3">
                                              <ul className="space-y-1">
                                                {item.subItems.map(
                                                  (subItem, subIdx) => (
                                                    <li key={subIdx}>
                                                      <Link
                                                        href={subItem.href}
                                                        className="block text-gray-600 hover:text-[#4f2d80] text-sm py-1.5 px-2 hover:bg-gray-50 rounded-md transition-all"
                                                        onClick={() =>
                                                          setActiveDropdown(
                                                            null,
                                                          )
                                                        }
                                                      >
                                                        {subItem.name}
                                                      </Link>
                                                    </li>
                                                  ),
                                                )}
                                              </ul>
                                            </div>
                                          </div>
                                        )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {link.name === "Services" && (
                          <div className="bg-gradient-to-r from-[#4f2d80] to-[#6b4ca8] px-8 py-4 mt-25">
                            <Link
                              href="/services"
                              className="text-white font-medium text-sm hover:underline flex items-center gap-2 justify-center group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>View all services</span>
                              <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Consult Button - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={handleConsultClick}
                className="relative px-6 py-2 text-sm cursor-pointer bg-[#4f2d80] text-white font-semibold text-[#4f2d80] border-2 border-[#4f2d80] rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#4f2d80] hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10">Consult</span>
                <span className="absolute inset-0 bg-[#4f2d80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>

            {/* <div className="hidden lg:block">
              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
                className="relative px-6 py-2 text-sm cursor-pointer font-semibold text-[#4f2d80] border-2 border-[#4f2d80] rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#4f2d80] hover:text-white hover:shadow-lg flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.552 4.172 1.514 5.95L.26 22.002c-.069.203.116.392.318.326l4.007-1.185C6.185 22.253 9.046 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.83-.53-5.459-1.525l-.334-.195-3.572 1.058 1.065-3.484-.207-.357A9.955 9.955 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  Consult on WhatsApp
                </span>
                <span className="absolute inset-0 bg-[#4f2d80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#4f2d80] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#4f2d80] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#4f2d80] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4f2d80] via-[#6b4ca8] to-[#4f2d80]"></div>

        <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
          <div className="flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.key}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name,
                          )
                        }
                        className="w-full flex items-center justify-between py-4 text-base font-medium border-b border-gray-100 transition-all duration-200 hover:bg-gray-50 px-2 rounded-lg"
                      >
                        <span
                          className={
                            isActive ? "text-[#4f2d80]" : "text-gray-700"
                          }
                        >
                          {link.name}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-400 ${
                          activeDropdown === link.name
                            ? "max-h-[2000px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="pt-4 pb-2 space-y-6 px-2">
                          {getDropdownCategories(link.name).map((category, idx) => (
                            <div key={idx}>
                              <Link
                                href={category.href}
                                onClick={closeMobileMenu}
                              >
                                <div className="flex items-center gap-2 mb-3 border-l-2 border-[#4f2d80] pl-3">
                                  <span className="text-[#4f2d80]">
                                    {category.icon}
                                  </span>
                                  <h3 className="text-[#4f2d80] font-semibold text-sm">
                                    {category.title}
                                  </h3>
                                </div>
                              </Link>
                              <ul className="space-y-2 pl-8">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="w-full">
                                    {item.hasSubmenu ? (
                                      <div>
                                        {/* Parent Item */}
                                        <button
                                          onClick={() =>
                                            setActiveMobileSubmenu(
                                              activeMobileSubmenu === item.name
                                                ? null
                                                : item.name,
                                            )
                                          }
                                          className="w-full flex justify-between items-center text-gray-700 py-2 text-sm font-medium"
                                        >
                                          <span>{item.name}</span>

                                          <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                              activeMobileSubmenu === item.name
                                                ? "rotate-90"
                                                : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9 5l7 7-7 7"
                                            />
                                          </svg>
                                        </button>

                                        {/* Submenu */}
                                        <div
                                          className={`overflow-hidden transition-all duration-300 ${
                                            activeMobileSubmenu === item.name
                                              ? "max-h-96 mt-2"
                                              : "max-h-0"
                                          }`}
                                        >
                                          <ul className="pl-4 space-y-2 border-l border-gray-200">
                                            {item.subItems.map(
                                              (subItem, subIdx) => (
                                                <li key={subIdx}>
                                                  <Link
                                                    href={subItem.href}
                                                    onClick={closeMobileMenu}
                                                    className="block text-gray-600 text-sm py-1.5 hover:text-[#4f2d80]"
                                                  >
                                                    {subItem.name}
                                                  </Link>
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    ) : (
                                      <Link
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block text-gray-600 text-sm py-2 hover:text-[#4f2d80]"
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {link.name === "Services" && (
                            <Link
                              href="/services"
                              className="text-[#4f2d80] font-medium text-sm hover:underline flex items-center gap-1 pt-2 group"
                              onClick={closeMobileMenu}
                            >
                              <span>View all services</span>
                              <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-4 text-base font-medium transition-all duration-200 border-b border-gray-100 px-2 rounded-lg ${
                        isActive
                          ? "text-[#4f2d80] bg-[#4f2d80]/5"
                          : "text-gray-700 hover:text-[#4f2d80] hover:bg-gray-50"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Consult Button */}
          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                handleConsultClick();
                closeMobileMenu();
              }}
              className="relative w-full py-3 bg-[#4f2d80] text-white cursor-pointer text-center font-semibold text-[#4f2d80] border-2 border-[#4f2d80] rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#4f2d80] hover:text-white"
            >
              <span className="relative z-10">Consult</span>
              <span className="absolute inset-0 bg-[#4f2d80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
{/* 
          <div className="mt-4">
            <button
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              className="relative px-6 w-full py-2 text-sm cursor-pointer font-semibold text-[#4f2d80] border-2 border-[#4f2d80] rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#4f2d80] hover:text-white hover:shadow-lg flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.552 4.172 1.514 5.95L.26 22.002c-.069.203.116.392.318.326l4.007-1.185C6.185 22.253 9.046 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.83-.53-5.459-1.525l-.334-.195-3.572 1.058 1.065-3.484-.207-.357A9.955 9.955 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Consult on WhatsApp
              </span>
              <span className="absolute inset-0 bg-[#4f2d80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Consult Popup */}
      <ConsultPopup isOpen={isConsultPopupOpen} onClose={handleClosePopup} />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
