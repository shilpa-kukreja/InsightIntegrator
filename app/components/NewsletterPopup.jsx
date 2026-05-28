"use client";

import { useEffect, useState } from "react";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const subscribed = localStorage.getItem("newsletter_subscribed");

    if (!subscribed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!consent) {
      setMessage(
        "Please authorize us to send marketing and newsletter emails."
      );
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "newsletter_popup",
          consent: true,
          subscribedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("newsletter_subscribed", "true");

        setMessage("Successfully subscribed!");

        setTimeout(() => {
          setShowPopup(false);
        }, 2000);

        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="relative bg-white max-w-md w-full rounded-[28px] shadow-2xl overflow-hidden animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
        >
          ✕
        </button>

        {/* Top */}
        <div className="bg-gradient-to-br from-[#2c154f] to-[#4a2477] text-white px-8 pt-10 pb-8">

          {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-medium mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            UAE Business Insights
          </div> */}

          <h2 className="text-3xl font-bold leading-tight mb-4">
            Join Our Newsletter
          </h2>

          <p className="text-sm leading-7 text-gray-200">
            Get tax updates, UAE compliance insights, accounting tips,
            business strategies, and exclusive resources directly in your inbox.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">

          <form onSubmit={handleSubscribe} className="space-y-5">

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-sm outline-none focus:border-[#2c154f] focus:ring-4 focus:ring-[#2c154f]/10 transition-all"
              />
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 text-sm text-gray-600 leading-6 cursor-pointer">

              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mt-1 accent-[#2c154f] w-4 h-4"
              />

              <span>
                I authorize Insight Integrators to send me newsletters,
                marketing emails, updates, promotions, and business insights.
                I understand that I can unsubscribe at any time.
              </span>

            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2c154f] hover:bg-[#43236f] text-white py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </button>

            {/* Message */}
            {message && (
              <div className="text-sm text-center text-gray-700">
                {message}
              </div>
            )}

            {/* Footer */}
            <div className="border-t pt-4 text-center">
              <p className="text-xs text-gray-500 leading-6">
                By subscribing, you agree to receive email communications from
                Insight Integrators according to our Privacy Policy and Terms.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;