'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const Footer = () => {
  const [year, setYear] = useState(2026);
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // const handleSubscribe = useCallback((e) => {
  //   e.preventDefault();
  //   if (email && email.includes('@')) {
  //     setIsSubscribed(true);
  //     setEmail('');
  //     setTimeout(() => setIsSubscribed(false), 3000);
  //   }
  // }, [email]);

  const handleSubscribe = useCallback(async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubscribed(false); // Reset status
    setSubscribeStatus('loading');

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'footer'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => {
          setIsSubscribed(false);
          setSubscribeStatus(null);
        }, 5000);
      } else {
        setSubscribeStatus('error');
        setTimeout(() => setSubscribeStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(null), 5000);
    }
  }, [email]);

  const footerColumns = [
    {
      title: 'ABOUT',
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Meet our people', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Events', href: '/events' },
        { label: 'Media', href: '/media' },
        { label: 'Our offices', href: '/offices' }
      ]
    },
    {
      title: 'CONNECT',
      links: [
        { label: 'Insights', href: '/insights' },
        { label: 'Contact us', href: '/contact' },
        { label: 'China Desk', href: '/china-desk' },
        { label: 'Global India Growth Hub', href: '/global-india' }
      ]
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy policy', href: '/privacy-policy' },
        { label: 'Cookie settings', href: '/cookie-settings' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Whistleblowing service', href: '/whistleblowing' }
      ]
    },
    {
      title: 'SERVICES',
      links: [
        { label: 'Audit & Assurance', href: '/services/audit' },
        { label: 'Advisory', href: '/services/advisory' },
        { label: 'Tax', href: '/services/tax' },
        { label: 'Media', href: '/services/media' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.527-11.733c0-.214-.005-.428-.015-.642.999-.72 1.862-1.618 2.544-2.64z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: '#'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#4f2d80] via-[#3b1e66] to-[#2a1452] overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Diagonal lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-12 pb-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-14 mb-8">
            {footerColumns.map((column, idx) => (
              <div key={idx} className="space-y-5">
                <div className="relative inline-block">
                  <h3 className="text-white text-[20px] font-bold tracking-[0.25em] uppercase">
                    {column.title}
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-6 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                <ul className="space-y-3.5">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:pl-1.5 inline-block font-light tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Follow Us Section - Premium */}
          <div className="border-t border-white/10 pt-5 mb-5">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Left side - Social and Trust */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-5">
                  <span className="text-white/60 text-[11px] font-bold tracking-[0.25em] uppercase">Follow Us</span>
                  <div className="flex gap-2.5">
                    {socialLinks.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.href}
                        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 group backdrop-blur-sm"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10"></div>

                {/* <div className="flex items-center gap-2.5 group cursor-default">
                <svg className="w-5 h-5 text-emerald-400/50 group-hover:text-emerald-400/70 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white/35 text-[11px] tracking-wide">Member of Insight Integrators Global Network</span>
              </div> */}
              </div>

              {/* Right side - Newsletter and Back to Top */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                {/* Newsletter Signup - Enhanced */}
                {/* Newsletter Signup - Enhanced */}
                <form onSubmit={handleSubscribe} className="relative">
                  <div className={`flex items-center gap-2 bg-white/5 rounded-full pl-4 pr-1.5 py-1 border backdrop-blur-sm transition-all duration-300 ${subscribeStatus === 'success' ? 'border-emerald-400/50 bg-emerald-400/10' :
                      subscribeStatus === 'error' ? 'border-red-400/50 bg-red-400/10' :
                        'border-white/10 hover:border-white/20'
                    }`}>
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Subscribe to insights"
                      className="bg-transparent text-white/70 text-sm placeholder-white/60 focus:outline-none min-w-[170px] py-1.5"
                      required
                      disabled={subscribeStatus === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={subscribeStatus === 'loading'}
                      className="text-white/50 hover:text-white text-xs font-medium transition-colors px-2 py-1 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {subscribeStatus === 'loading' ? 'Sending...' : 'Subscribe'}
                    </button>
                  </div>

                  {/* Success Message */}
                  {subscribeStatus === 'success' && (
                    <div className="absolute -top-8 left-0 text-emerald-400/80 text-xs whitespace-nowrap animate-fadeIn">
                      ✓ Subscribed successfully! Check your email.
                    </div>
                  )}

                  {/* Error Message */}
                  {subscribeStatus === 'error' && (
                    <div className="absolute -top-8 left-0 text-red-400/80 text-xs whitespace-nowrap animate-fadeIn">
                      ✗ Subscription failed. Please try again.
                    </div>
                  )}
                </form>

                <button
                  onClick={handleBackToTop}
                  className="group flex items-center gap-2 text-white/55 border border-white/10 hover:text-white text-sm transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-white/5 backdrop-blur-sm"
                >
                  <span className="text-[15px] tracking-wide">Back to top</span>
                  <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright and Legal Information */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/25 text-[11px] tracking-wide">
                © {year} Insight Integrators UAE. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/legal/terms" className="text-white/25 hover:text-white/40 text-[11px] tracking-wide transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/legal/cookies" className="text-white/25 hover:text-white/40 text-[11px] tracking-wide transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-white/25 hover:text-white/40 text-[11px] tracking-wide transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      </footer>
      {/* WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">

        {/* CALL BUTTON */}
        <a
          href="tel:+971526806400"
          aria-label="Call Us"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#1b3163] shadow-[0_12px_30px_rgba(27,49,99,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#1b3163]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
            alt="call"
            className="relative w-5 h-5"
          />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/971526806400?text=Hello%20Insight%20Integrators,%20I%20would%20like%20to%20discuss%20compliance%20advisory."
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full 
    bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.35)]
    transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366]/30"></span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
            alt="whatsapp"
            className="relative w-5 h-5"
          />
        </a>

      </div>
    </>
  );
};

export default Footer;