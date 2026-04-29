// app/blogs/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogsPage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const observerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  // Setup Intersection Observer for multiple sections
  useEffect(() => {
    // Set initial visible for hero
    setVisibleSections(prev => ({ ...prev, hero: true, search: true, categories: true }));

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

  const categories = ['All', 'Tax & Compliance', 'Advisory', 'Digital Transformation', 'Business Strategy', 'Market Insights'];

  const allBlogs = [
    {
      id: 1,
      title: 'Mastering VAT Audits in UAE: What Triggers FTA Scrutiny and How to Prepare',
      slug: 'mastering-vat-audits-uae', // This should match the slug param
      date: 'November 3, 2025',
      readTime: '8 min read',
      excerpt: 'The Federal Tax Authority (FTA) conducts periodic VAT audits to ensure accurate tax reporting and compliance. These reviews assess whether businesses are adhering to UAE tax laws and maintaining proper records.',
      image: '/blog/blog-image1.png',
      category: 'Tax & Compliance',
      author: {
        name: 'Sarah Johnson',
        role: 'Tax Partner',
        avatar: '/avatars/sarah.jpg'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Supply Chain Risk Management & Optimization: Building Resilient Global Supply Networks',
      slug: 'supply-chain-risk-management',
      date: 'November 3, 2025',
      readTime: '12 min read',
      excerpt: 'Global supply chains are under unprecedented pressure. From geopolitical tensions and inflationary shocks to cyber threats and sustainability concerns, modern supply networks face complex challenges.',
      image: '/blog/blog-image2.png',
      category: 'Advisory',
      author: {
        name: 'Michael Chen',
        role: 'Supply Chain Director',
        avatar: '/avatars/michael.jpg'
      },
      featured: false
    },
    {
      id: 3,
      title: 'UAE E-Invoicing 2026: Is Your Business Ready for the Mandatory Transition?',
      slug: 'uae-e-invoicing-2026',
      date: 'November 3, 2025',
      readTime: '6 min read',
      excerpt: 'The UAE is preparing to transform how businesses issue and process invoices. Under the Federal Tax Authority\'s (FTA) mandate, all businesses will need to adopt e-invoicing standards.',
      image: '/blog/blog-image3.png',
      category: 'Digital Transformation',
      author: {
        name: 'David Williams',
        role: 'Digital Solutions Lead',
        avatar: '/avatars/david.jpg'
      },
      featured: true
    },
    {
      id: 4,
      title: 'Corporate Tax in UAE: Strategic Planning for 2026 and Beyond',
      slug: 'corporate-tax-uae-2026',
      date: 'October 28, 2025',
      readTime: '10 min read',
      excerpt: 'With the introduction of corporate tax in the UAE, businesses need to reassess their tax strategies. This comprehensive guide covers compliance requirements, exemptions, and strategic planning opportunities.',
      image: '/blog/blog-image1.png',
      category: 'Tax & Compliance',
      author: {
        name: 'Emily Rodriguez',
        role: 'Corporate Tax Expert',
        avatar: '/avatars/emily.jpg'
      },
      featured: false
    },
    {
      id: 5,
      title: 'ESG Reporting: A New Era for UAE Businesses',
      slug: 'esg-reporting-uae',
      date: 'October 25, 2025',
      readTime: '9 min read',
      excerpt: 'Environmental, Social, and Governance (ESG) criteria are becoming increasingly important for investors and stakeholders. Learn how UAE businesses can implement effective ESG reporting frameworks.',
      image: '/blog/blog-image2.png',
      category: 'Business Strategy',
      author: {
        name: 'Lisa Thompson',
        role: 'ESG Advisory Lead',
        avatar: '/avatars/lisa.jpg'
      },
      featured: false
    },
    {
      id: 6,
      title: 'The Future of Remote Work: Legal and Tax Implications',
      slug: 'future-remote-work-legal-tax',
      date: 'October 20, 2025',
      readTime: '7 min read',
      excerpt: 'As remote work becomes permanent for many organizations, understanding the legal and tax implications across jurisdictions is crucial for compliance and risk management.',
      image: '/blog/blog-image3.png',
      category: 'Market Insights',
      author: {
        name: 'James Wilson',
        role: 'Employment Law Specialist',
        avatar: '/avatars/james.jpg'
      },
      featured: false
    }
  ];

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = allBlogs.filter(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
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
          email: email,
          source: 'blogs-page'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white mt-16">

        {/* Hero Section */}
        <section
          id="hero"
          data-observe="true"
          className="relative overflow-hidden pt-10 pb-10 md:pt-12 md:pb-12 bg-[#2c154f]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`text-center transition-all duration-1000 transform ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] font-light tracking-[0.3em] uppercase">Our Blog</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                Insights & <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Perspectives</span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                Expert analysis, industry trends, and strategic insights to help you navigate the evolving business landscape
              </p>

              <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-white/40 to-white/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section
          id="search"
          data-observe="true"
          className="relative py-8 border-b border-gray-100 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto">
              <div className={`relative transition-all duration-800 transform ${visibleSections.search ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0a0a0a] focus:ring-1 focus:ring-[#0a0a0a]/20 transition-all duration-300"
                />
                <svg
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="categories"
          data-observe="true"
          className="relative py-8 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className={`flex flex-wrap justify-center gap-3 transition-all duration-800 transform ${visibleSections.categories ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${selectedCategory === category
                      ? 'bg-[#2c154f] text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        {selectedCategory === 'All' && searchQuery === '' && (
          <section
            id="featured"
            data-observe="true"
            className="relative py-8 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <div className={`mb-12 transition-all duration-800 transform ${visibleSections.featured ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">Featured <span className="font-bold">Articles</span></h2>
                <div className="w-16 h-px bg-[#2c154f]/40"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog, index) => (
                  <div
                    key={blog.id}
                    className={`group transition-all duration-700 transform ${visibleSections.featured ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                    onMouseEnter={() => setHoveredCard(blog.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Link href={`/blogs/${blog.slug}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100">
                        <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded text-xs font-medium text-[#0a0a0a] shadow-sm">
                              {blog.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {blog.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {blog.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#0a0a0a] transition-colors line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-gray-500 mb-6 line-clamp-3 font-light">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white font-medium text-sm shadow-sm">
                                {blog.author.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                                <p className="text-xs text-gray-400">{blog.author.role}</p>
                              </div>
                            </div>
                            <span className="text-[#0a0a0a] font-medium text-sm group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                              Read More
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section
          id="articles"
          data-observe="true"
          className="relative py-12 pb-12 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            {regularBlogs.length > 0 ? (
              <>
                <div className={`mb-12 transition-all duration-800 transform ${visibleSections.articles ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                    {selectedCategory !== 'All' ? `${selectedCategory} Articles` : 'Latest Articles'}
                  </h2>
                  <div className="w-16 h-px bg-[#0a0a0a]/10"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularBlogs.map((blog, index) => (
                    <div
                      key={blog.id}
                      className={`group transition-all duration-700 transform ${visibleSections.articles ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                      style={{ transitionDelay: `${Math.min(index * 100, 500)}ms` }}
                      onMouseEnter={() => setHoveredCard(blog.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Link href={`/blogs/${blog.slug}`}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer border border-gray-100 h-full flex flex-col">
                          <div className="relative h-56 overflow-hidden bg-gray-100">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-3 left-3">
                              <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded text-xs font-medium text-[#0a0a0a] shadow-sm">
                                {blog.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-grow">
                            <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {blog.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {blog.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0a0a0a] transition-colors">
                              {blog.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 font-light">
                              {blog.excerpt}
                            </p>
                          </div>
                          <div className="px-6 pb-6 pt-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white text-xs font-medium shadow-sm">
                                  {blog.author.name.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-gray-900">{blog.author.name}</p>
                                  <p className="text-xs text-gray-400">{blog.author.role}</p>
                                </div>
                              </div>
                              <span className="text-[#0a0a0a] font-medium text-xs group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                                Read
                                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className={`text-center py-20 transition-all duration-800 transform ${visibleSections.articles ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-sm">
                  <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-400 font-light">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {/* CTA Section */}
        <section
          id="cta"
          data-observe="true"
          className="py-10 bg-[#2c154f] relative overflow-hidden"
        >
          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div className={`transition-all duration-800 transform ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-white/50"></div>
                <span className="text-white/50 text-[12px] tracking-[0.3em] uppercase">Stay Updated</span>
                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-white mb-5 tracking-tight">
                Never Miss an <span className="font-bold">Insight</span>
              </h2>

              <p className="text-white/40 text-sm mb-8 font-light max-w-md mx-auto">
                Subscribe to our newsletter and receive the latest articles directly in your inbox.
              </p>

              <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    required
                    disabled={subscribeStatus === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="px-6 py-3 bg-white text-[#0a0a0a] text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {/* Success Message */}
              {subscribeStatus === 'success' && (
                <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-lg animate-fadeIn">
                  <p className="text-emerald-300 text-sm">
                    ✓ Subscribed successfully! Check your email for confirmation.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {subscribeStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg animate-fadeIn">
                  <p className="text-red-300 text-sm">
                    ✗ Subscription failed. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;