// app/blogs/[slug]/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Complete blogs database
const allBlogsData = {
  'mastering-vat-audits-uae': {
    id: 1,
    title: 'Mastering VAT Audits in UAE: What Triggers FTA Scrutiny and How to Prepare',
    date: 'November 3, 2025',
    readTime: '8 min read',
    content: `
      <p>The Federal Tax Authority (FTA) conducts periodic VAT audits to ensure accurate tax reporting and compliance. These reviews assess whether businesses are adhering to UAE tax laws and maintaining proper records.</p>
      
      <h2>Understanding VAT Audit Triggers</h2>
      <p>The FTA uses sophisticated data analytics and risk assessment tools to identify businesses that may require audit. Common triggers include:</p>
      <ul>
        <li>Inconsistent VAT return filings compared to industry benchmarks</li>
        <li>Significant or unusual VAT refund claims</li>
        <li>Late or missed VAT return submissions</li>
        <li>Discrepancies between VAT returns and financial statements</li>
        <li>Related party transactions that appear non-arm's length</li>
      </ul>
      
      <h2>Preparing for a VAT Audit</h2>
      <p>Proper preparation is key to a smooth audit experience. Here's what you need to have in order:</p>
      <ul>
        <li>Complete VAT return records for the audit period</li>
        <li>Tax invoices and credit notes for all transactions</li>
        <li>Import and export documentation</li>
        <li>Records of adjustments and corrections</li>
        <li>Documentation of exempt and zero-rated supplies</li>
      </ul>
      
      <h2>The Audit Process</h2>
      <p>When the FTA selects your business for audit, the process typically follows these stages:</p>
      <ul>
        <li><strong>Notification:</strong> The FTA will notify you in writing about the audit</li>
        <li><strong>Planning:</strong> Initial meeting to discuss scope and timeline</li>
        <li><strong>Fieldwork:</strong> Review of records and documentation</li>
        <li><strong>Findings:</strong> Discussion of any identified issues</li>
        <li><strong>Assessment:</strong> Final determination and any applicable penalties</li>
      </ul>
      
      <h2>Common VAT Mistakes to Avoid</h2>
      <p>Through our experience, we've identified several common VAT errors that frequently trigger audit scrutiny:</p>
      <ul>
        <li>Incorrect treatment of mixed-use supplies</li>
        <li>Improper VAT recovery on entertainment expenses</li>
        <li>Missing or invalid tax invoices</li>
        <li>Errors in VAT calculation on imports</li>
        <li>Failure to adjust for bad debts</li>
      </ul>
      
      <h2>How We Can Help</h2>
      <p>Our VAT specialists can assist your business with comprehensive audit preparation, including:</p>
      <ul>
        <li>Pre-audit health checks and gap assessments</li>
        <li>Documentation review and organization</li>
        <li>Representation during FTA audits</li>
        <li>Voluntary disclosure preparation for past errors</li>
        <li>Dispute resolution and penalty mitigation</li>
      </ul>
      
      <p>Contact our VAT experts today to ensure your business is fully prepared for any FTA audit.</p>
    `,
    image: '/blog/blog-image1.png',
    category: 'Tax & Compliance',
    author: {
      name: 'Sarah Johnson',
      role: 'Tax Partner',
      bio: 'Sarah is a Tax Partner at Insight Integrators with over 15 years of experience in VAT and corporate tax. She has led numerous successful audit defenses and helped hundreds of businesses achieve tax compliance.',
      avatar: '/avatars/sarah.jpg',
      email: 'sarah.johnson@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['VAT', 'Tax Compliance', 'FTA Audit', 'UAE Tax']
  },
  'supply-chain-risk-management': {
    id: 2,
    title: 'Supply Chain Risk Management & Optimization: Building Resilient Global Supply Networks',
    date: 'November 3, 2025',
    readTime: '12 min read',
    content: `
      <p>Global supply chains are under unprecedented pressure. From geopolitical tensions and inflationary shocks to cyber threats and sustainability concerns, modern supply networks face complex challenges that require strategic risk management.</p>
      
      <h2>Key Supply Chain Risks</h2>
      <p>Modern supply chains face multiple risk categories that need careful assessment:</p>
      <ul>
        <li>Geopolitical tensions and trade restrictions</li>
        <li>Supplier financial instability and concentration risks</li>
        <li>Transportation and logistics disruptions</li>
        <li>Cyber threats and data security breaches</li>
        <li>Natural disasters and climate-related events</li>
      </ul>
      
      <h2>Risk Assessment Framework</h2>
      <p>Implementing a robust risk assessment framework helps identify vulnerabilities:</p>
      <ul>
        <li>Map your entire supply chain network</li>
        <li>Identify critical dependencies and single points of failure</li>
        <li>Evaluate supplier risk profiles regularly</li>
        <li>Assess geopolitical risks in operating regions</li>
        <li>Monitor early warning indicators</li>
      </ul>
      
      <h2>Optimization Strategies</h2>
      <p>Building resilience requires strategic optimization across your supply chain:</p>
      <ul>
        <li>Diversify supplier base across multiple regions</li>
        <li>Implement inventory buffer strategies for critical components</li>
        <li>Leverage technology for real-time visibility</li>
        <li>Develop alternative logistics routes and modes</li>
        <li>Build strategic partnerships with key suppliers</li>
      </ul>
      
      <h2>Technology Solutions</h2>
      <p>Digital transformation enables better risk management:</p>
      <ul>
        <li>Supply chain control towers for real-time monitoring</li>
        <li>AI-powered demand forecasting</li>
        <li>Blockchain for enhanced traceability</li>
        <li>IoT sensors for asset tracking</li>
        <li>Predictive analytics for risk anticipation</li>
      </ul>
      
      <h2>How We Can Help</h2>
      <p>Our supply chain experts provide comprehensive risk management solutions including risk assessments, optimization strategies, and digital transformation roadmaps.</p>
    `,
    image: '/blog/blog-image2.png',
    category: 'Advisory',
    author: {
      name: 'Michael Chen',
      role: 'Supply Chain Director',
      bio: 'Michael leads our supply chain practice with extensive experience in global logistics and risk management, helping businesses build resilient operations.',
      avatar: '/avatars/michael.jpg',
      email: 'michael.chen@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['Supply Chain', 'Risk Management', 'Optimization', 'Logistics']
  },
  'uae-e-invoicing-2026': {
    id: 3,
    title: 'UAE E-Invoicing 2026: Is Your Business Ready for the Mandatory Transition?',
    date: 'November 3, 2025',
    readTime: '6 min read',
    content: `
      <p>The UAE is preparing to transform how businesses issue and process invoices. Under the Federal Tax Authority's (FTA) mandate, all businesses will need to adopt e-invoicing standards by 2026.</p>
      
      <h2>What is E-Invoicing?</h2>
      <p>E-invoicing is a digital system that enables structured electronic exchange of invoice data between suppliers and buyers, ensuring real-time tax reporting to authorities.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Reduced administrative burden and processing costs</li>
        <li>Enhanced accuracy and reduced errors</li>
        <li>Faster payment cycles and improved cash flow</li>
        <li>Better compliance with tax regulations</li>
        <li>Reduced risk of invoice fraud</li>
      </ul>
      
      <h2>Implementation Timeline</h2>
      <p>The FTA has outlined a phased approach to e-invoicing adoption:</p>
      <ul>
        <li><strong>Phase 1 (2024):</strong> Pilot program with large businesses</li>
        <li><strong>Phase 2 (2025):</strong> Mandatory for medium to large enterprises</li>
        <li><strong>Phase 3 (2026):</strong> Full implementation for all businesses</li>
      </ul>
      
      <h2>Technical Requirements</h2>
      <p>Businesses need to ensure their systems meet specific requirements:</p>
      <ul>
        <li>Compatible ERP or accounting software</li>
        <li>API integration with FTA systems</li>
        <li>Digital signature capabilities</li>
        <li>Secure data storage and archiving</li>
        <li>Real-time validation and verification</li>
      </ul>
      
      <h2>How We Can Help</h2>
      <p>Our digital transformation team can guide your business through e-invoicing implementation, from system assessment to full deployment and training.</p>
    `,
    image: '/blog/blog-image3.png',
    category: 'Digital Transformation',
    author: {
      name: 'David Williams',
      role: 'Digital Solutions Lead',
      bio: 'David specializes in digital transformation and has helped numerous businesses successfully transition to e-invoicing systems across the Middle East.',
      avatar: '/avatars/david.jpg',
      email: 'david.williams@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['E-Invoicing', 'Digital Transformation', 'FTA', 'Compliance']
  },
  'corporate-tax-uae-2026': {
    id: 4,
    title: 'Corporate Tax in UAE: Strategic Planning for 2026 and Beyond',
    date: 'October 28, 2025',
    readTime: '10 min read',
    content: `
      <p>With the introduction of corporate tax in the UAE, businesses need to reassess their tax strategies. This comprehensive guide covers compliance requirements, exemptions, and strategic planning opportunities.</p>
      
      <h2>Corporate Tax Framework</h2>
      <p>The UAE corporate tax regime applies to all business activities, with key features including:</p>
      <ul>
        <li>9% tax rate on taxable income exceeding AED 375,000</li>
        <li>0% tax rate on taxable income up to AED 375,000</li>
        <li>Different rates for qualifying free zone persons</li>
        <li>Extensive compliance and reporting requirements</li>
      </ul>
      
      <h2>Strategic Planning Opportunities</h2>
      <p>Businesses can optimize their tax position through careful planning:</p>
      <ul>
        <li>Transfer pricing documentation and compliance</li>
        <li>Group restructuring and consolidation strategies</li>
        <li>R&D and innovation incentives</li>
        <li>Loss utilization and carry forward provisions</li>
        <li>International tax treaty benefits</li>
      </ul>
      
      <h2>Compliance Requirements</h2>
      <p>Meeting corporate tax obligations requires robust systems and processes for tax return filing, record keeping, and disclosure requirements.</p>
      
      <h2>How We Can Help</h2>
      <p>Our tax specialists provide comprehensive corporate tax services including compliance, advisory, and strategic planning to optimize your tax position.</p>
    `,
    image: '/blog/blog-image1.png',
    category: 'Tax & Compliance',
    author: {
      name: 'Emily Rodriguez',
      role: 'Corporate Tax Expert',
      bio: 'Emily brings extensive international tax experience to help UAE businesses navigate corporate tax requirements and optimize their tax strategies.',
      avatar: '/avatars/emily.jpg',
      email: 'emily.rodriguez@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['Corporate Tax', 'Tax Planning', 'UAE Tax', 'Compliance']
  },
  'esg-reporting-uae': {
    id: 5,
    title: 'ESG Reporting: A New Era for UAE Businesses',
    date: 'October 25, 2025',
    readTime: '9 min read',
    content: `
      <p>Environmental, Social, and Governance (ESG) criteria are becoming increasingly important for investors and stakeholders. Learn how UAE businesses can implement effective ESG reporting frameworks.</p>
      
      <h2>Understanding ESG</h2>
      <p>ESG encompasses three key pillars that measure sustainability and ethical impact of business operations.</p>
      
      <h2>Implementation Strategy</h2>
      <p>Developing a robust ESG framework requires strategic planning and commitment at all organizational levels.</p>
      
      <h2>How We Can Help</h2>
      <p>Our ESG advisory team helps businesses develop and implement comprehensive ESG strategies aligned with global standards.</p>
    `,
    image: '/blog/blog-image2.png',
    category: 'Business Strategy',
    author: {
      name: 'Lisa Thompson',
      role: 'ESG Advisory Lead',
      bio: 'Lisa leads our ESG practice with extensive experience in sustainability reporting and corporate responsibility initiatives.',
      avatar: '/avatars/lisa.jpg',
      email: 'lisa.thompson@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['ESG', 'Sustainability', 'Reporting', 'Governance']
  },
  'future-remote-work-legal-tax': {
    id: 6,
    title: 'The Future of Remote Work: Legal and Tax Implications',
    date: 'October 20, 2025',
    readTime: '7 min read',
    content: `
      <p>As remote work becomes permanent for many organizations, understanding the legal and tax implications across jurisdictions is crucial for compliance and risk management.</p>
      
      <h2>Legal Considerations</h2>
      <p>Remote work arrangements raise important legal questions around employment contracts, data protection, and workplace safety across multiple jurisdictions.</p>
      
      <h2>Tax Implications</h2>
      <p>Cross-border remote work creates complex tax considerations for both employers and employees, including permanent establishment risks and individual tax obligations.</p>
      
      <h2>How We Can Help</h2>
      <p>Our employment law and tax specialists provide comprehensive guidance on managing remote work arrangements while ensuring compliance across jurisdictions.</p>
    `,
    image: '/blog/blog-image3.png',
    category: 'Market Insights',
    author: {
      name: 'James Wilson',
      role: 'Employment Law Specialist',
      bio: 'James specializes in cross-border employment law and helps businesses navigate complex legal and tax issues related to remote work arrangements.',
      avatar: '/avatars/james.jpg',
      email: 'james.wilson@insightintegrators.ae',
      linkedin: '#',
      twitter: '#'
    },
    tags: ['Remote Work', 'Employment Law', 'Tax', 'Compliance']
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Get blog data based on slug
    if (slug && allBlogsData[slug]) {
      setBlog(allBlogsData[slug]);
    }
    setLoading(false);
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(blog?.title || '');

    const shareLinks = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };

    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  // Get related posts based on same category
  const getRelatedPosts = () => {
    if (!blog) return [];
    return Object.entries(allBlogsData)
      .filter(([key, value]) => key !== slug && value.category === blog.category)
      .slice(0, 3)
      .map(([key, value]) => ({
        id: value.id,
        title: value.title,
        excerpt: value.content.substring(0, 120).replace(/<[^>]*>/g, '') + '...',
        image: value.image,
        date: value.date,
        readTime: value.readTime,
        slug: key
      }));
  };

  // Table of contents - extract from content
  const getTableOfContents = () => {
    if (!blog) return [];
    const headings = [];
    const headingMatches = blog.content.matchAll(/<h2>(.*?)<\/h2>/g);
    for (const match of headingMatches) {
      headings.push({
        id: match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: match[1]
      });
    }
    return headings;
  };



  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setSubscribeStatus('loading');

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscribeEmail,
          source: 'blog-detail-page'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        setSubscribeEmail('');
        setTimeout(() => setSubscribeStatus(null), 5000);
      } else {
        setSubscribeStatus('error');
        setTimeout(() => setSubscribeStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(null), 5000);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#2c154f] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-light text-gray-900 mb-2">Blog Post Not Found</h2>
            <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/blogs" className="inline-block px-6 py-3 bg-[#2c154f] text-white hover:bg-[#2c154f]/90 transition-colors">
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts();
  const tableOfContents = getTableOfContents();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-16">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#2c154f] py-10 md:py-12">
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 mb-6">
                <Link href="/blogs" className="text-white/40 hover:text-white/60 transition-colors text-sm font-light">Blog</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60 text-sm font-light">{blog.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-4xl font-light text-white mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-white/40 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </span>
                <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Table of Contents - Desktop */}
            {tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className={`sticky top-24 transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="border border-gray-100 p-6 bg-white shadow-sm">
                    <div className="mb-5">
                      <div className="w-8 h-px bg-[#0a0a0a]/40 mb-3"></div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Table of Contents</h3>
                    </div>
                    <ul className="space-y-3">
                      {tableOfContents.map((item, index) => (
                        <li key={index}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors font-light block py-1 border-l-2 border-transparent hover:border-[#0a0a0a] pl-3"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 border border-gray-100 p-6 bg-white shadow-sm">
                    <div className="mb-5">
                      <div className="w-8 h-px bg-[#0a0a0a]/40 mb-3"></div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Share This Article</h3>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => handleShare('linkedin')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </button>
                      <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.802c0-.273-.005-.545-.015-.817a9.94 9.94 0 002.446-2.542z" />
                        </svg>
                      </button>
                      <button onClick={() => handleShare('facebook')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button onClick={handleCopyLink} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 group relative">
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {copied && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Link copied!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content Area */}
            <article className={`lg:col-span-6 transition-all duration-800 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {/* Featured Image */}
              <div className="mb-10 overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div
                className="prose prose-gray max-w-none prose-headings:text-gray-900 text-justify prose-headings:font-light prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-500 prose-p:leading-relaxed prose-ul:text-gray-500 prose-li:text-gray-500 prose-ul:space-y-2 prose-li:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Author Sidebar - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className={`sticky top-24 transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {/* Author Card */}
                <div className="border border-gray-100 p-6 bg-white shadow-sm text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2c154f] to-gray-700 flex items-center justify-center text-white text-2xl font-light">
                    {blog.author.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{blog.author.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{blog.author.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {blog.author.bio}
                  </p>
                  <div className="flex justify-center gap-3 pt-3 border-t border-gray-100">
                    <a href={blog.author.linkedin} className="text-gray-400 hover:text-[#0a0a0a] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href={blog.author.twitter} className="text-gray-400 hover:text-[#0a0a0a] transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.802c0-.273-.005-.545-.015-.817a9.94 9.94 0 002.446-2.542z" />
                      </svg>
                    </a>
                    <a href={`mailto:${blog.author.email}`} className="text-gray-400 hover:text-[#0a0a0a] transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Newsletter Signup */}
                {/* Newsletter Signup */}
                <div className="mt-8 bg-[#2c154f] p-6 text-center">
                  <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Newsletter</h3>
                  <p className="text-white/40 text-xs mb-4">Get the latest insights delivered to your inbox</p>

                  <form onSubmit={handleNewsletterSubscribe}>
                    <input
                      type="email"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 mb-3"
                      required
                      disabled={subscribeStatus === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={subscribeStatus === 'loading'}
                      className="w-full py-2 bg-white text-[#0a0a0a] text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>

                  {subscribeStatus === 'success' && (
                    <div className="mt-3 p-2 bg-emerald-500/20 border border-emerald-500/30 rounded animate-fadeIn">
                      <p className="text-emerald-300 text-xs">✓ Subscribed! Check your email.</p>
                    </div>
                  )}

                  {subscribeStatus === 'error' && (
                    <div className="mt-3 p-2 bg-red-500/20 border border-red-500/30 rounded animate-fadeIn">
                      <p className="text-red-300 text-xs">✗ Failed. Please try again.</p>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#0a0a0a]/40"></div>
                  <span className="text-[#0a0a0a] text-[12px] font-light tracking-[0.2em] uppercase">You May Also Like</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900">Related <span className="font-bold">Articles</span></h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.slug}`}
                    className={`group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="bg-white overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0a0a0a] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-10 bg-[#2c154f] relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">Need Expert Advice?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Have Questions About <span className="font-bold">{blog.category}?</span>
              </h2>
              <p className="text-white/50 text-sm mb-6 font-light max-w-md mx-auto">
                Our experts are here to help you navigate complex regulations and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group px-8 py-3 bg-white text-[#0a0a0a] text-sm font-light tracking-wide hover:bg-gray-100 transition-all duration-300">
                  Contact Our Team
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/services/tax" className="px-8 py-3 border border-white/15 text-white text-sm font-light tracking-wide hover:bg-white/5 transition-all duration-300">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
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
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;