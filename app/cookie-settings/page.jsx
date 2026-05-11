"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookieSettingsPage() {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    essential: false,
    analytics: false,
    functional: false,
    marketing: false,
    managing: false,
    thirdparty: false,
    updates: false,
    contact: false,
  });

  useEffect(() => {
    const observers = document.querySelectorAll("[data-observe]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observers.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cookieSections = [
    {
      id: "essential",
      title: "Essential Cookies",
      content:
        "These cookies are necessary for the website to function properly. They support core features such as security, page navigation, and accessibility.",
    },
    {
      id: "analytics",
      title: "Performance & Analytics Cookies",
      content:
        "These cookies help us understand how visitors interact with the website by collecting anonymous usage information. This helps improve website performance and user experience.",
    },
    {
      id: "functional",
      title: "Functional Cookies",
      content:
        "Functional cookies allow the website to remember user preferences such as language, region, or saved settings for a more personalized experience.",
    },
    {
      id: "marketing",
      title: "Marketing & Advertising Cookies",
      content:
        "These cookies may be used to deliver relevant advertisements, measure campaign performance, and improve marketing effectiveness across digital platforms.",
    },
    {
      id: "managing",
      title: "Managing Your Preferences",
      content:
        "You can choose to enable or disable certain cookie categories through your browser settings or website cookie preferences panel. Please note that disabling some cookies may affect website functionality and user experience.",
    },
    {
      id: "thirdparty",
      title: "Third-Party Cookies",
      content:
        "Some cookies may be provided by trusted third-party services used for analytics, communication tools, or embedded content. These providers may collect information according to their own privacy policies.",
    },
    {
      id: "updates",
      title: "Updates to Cookie Settings",
      content:
        "We may update our cookie practices from time to time to reflect operational, legal, or technical changes. Updated information will be published on this page.",
    },
    {
      id: "contact",
      title: "Contact Us",
      content:
        "If you have questions regarding our cookie usage or privacy practices, please contact us through our official communication channels.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white mt-16">
        {/* Hero Section */}
        <section
          id="hero"
          data-observe="true"
          className="relative overflow-hidden bg-[#2c154f] py-8 md:py-10 lg:py-12"
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <div
              className={`transition-all duration-1000 delay-200 transform ${
                visibleSections.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/50"></div>

                <span className="text-white/40 text-[12px] font-light tracking-[0.3em] uppercase">
                  Legal Information
                </span>

                <div className="h-px w-12 bg-white/50"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-5 tracking-tight">
                Cookie{" "}
                <span className="font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Settings
                </span>
              </h1>

              <p className="text-white/30 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Manage your cookie preferences to control how we collect and
                process your data.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-5 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <p className="text-gray-500 text-sm font-light text-center">
              Last Updated:{" "}
              <span className="font-medium text-gray-700">
                April 30, 2025
              </span>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            {/* Introduction */}
            <div
              id="intro"
              data-observe="true"
              className={`mb-10 transition-all duration-700 transform ${
                visibleSections.intro
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-base leading-relaxed font-light">
                Our website uses cookies and similar technologies to improve
                user experience, analyze website performance, and provide
                relevant content. You can manage or update your cookie
                preferences at any time.
              </p>
            </div>

            {/* Cookie Sections */}
            <div className="space-y-8">
              {cookieSections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-observe="true"
                  className={`transition-all duration-700 transform ${
                    visibleSections[section.id]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${Math.min(index * 50, 500)}ms`,
                  }}
                >
                  <div className="border-b border-gray-300 pb-3 mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                      {section.title}
                    </h2>

                    <div className="w-12 h-px bg-[#0a0a0a]/50 mt-2"></div>
                  </div>

                  <p className="text-gray-500 text-base leading-relaxed font-light">
                    {section.content}
                  </p>

                  {section.id === "contact" && (
                    <div className="mt-4 space-y-1">
                      <p className="text-gray-500 text-base font-light">
                        📧 info@insightintegrators.ae
                      </p>

                      <p className="text-gray-500 text-base font-light">
                        📍 Meydan Grandstand, Nad Al Sheba Dubai, United Arab Emirates


                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx global>{`
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

          .animate-pulse {
            animation: pulse 4s ease-in-out infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}