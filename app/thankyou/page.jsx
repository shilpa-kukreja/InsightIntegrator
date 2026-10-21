'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '971526806400';
const REDIRECT_DELAY_MS = 2000;

export default function ThankYouPage() {
  const [whatsappUrl, setWhatsappUrl] = useState(`https://wa.me/${WHATSAPP_NUMBER}`);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const hasRunRef = useRef(false); // ✅ guard against Strict Mode double-invoke

useEffect(() => {
  if (hasRunRef.current) return;
  hasRunRef.current = true;

  try {
    const stored = localStorage.getItem('consultFormData');
    if (!stored) {
      console.warn('[thankyou] No form data found in localStorage');
      return;
    }

    const data = JSON.parse(stored);
    console.log('[thankyou] Form data:', data);

    // ✅ Build WhatsApp message with bullet points
    const lines = ['*New Consultation Request*', ''];

    if (data.fullName) lines.push(`• Name: ${data.fullName}`);
    if (data.companyName || data.company)
      lines.push(`• Company: ${data.companyName || data.company}`);
    if (data.companyNetworth)
      lines.push(`• Annual Turnover: ${data.companyNetworth}`);
    if (data.employeeCount)
      lines.push(`• Employees: ${data.employeeCount}`);
    if (data.email) lines.push(`• Email: ${data.email}`);
    if (data.phone) lines.push(`• Phone: ${data.phone}`);
    if (data.designation) lines.push(`• Designation: ${data.designation}`);
    if (data.industry) lines.push(`• Industry: ${data.industry}`);
    if (data.serviceType) lines.push(`• Service: ${data.serviceType}`);
    if (data.message) {
      lines.push('');
      lines.push('*Message:*');
      lines.push(data.message);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    setWhatsappUrl(url);
    setIsRedirecting(true);

    setTimeout(() => {
      if (window.location.pathname === '/thankyou') {
        try {
          localStorage.removeItem('consultFormData');
        } catch (e) {}
        console.log('[thankyou] Redirecting to WhatsApp:', url);
        window.location.replace(url);
      }
    }, REDIRECT_DELAY_MS);
  } catch (err) {
    console.error('[thankyou] WhatsApp redirect error:', err);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const steps = [
    {
      number: '01',
      title: 'We review your request',
      description: 'Our team carefully reviews the details you shared.',
    },
    {
      number: '02',
      title: 'An expert reaches out',
      description: 'You will be contacted within 24 hours.',
    },
    {
      number: '03',
      title: 'We schedule your consultation',
      description: 'A time that works best for you.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex items-center justify-center mt-10 px-4 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-2xl overflow-hidden animate-fadeUp">
            <div className="relative bg-[#2c154f] px-8 pt-9 pb-7 text-center">
              <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div className="inline-flex items-center gap-2.5 mb-3">
                <div className="h-px w-6 bg-white/15"></div>
                <span className="text-white/40 text-[9px] font-light tracking-[0.3em] uppercase">
                  Request Received
                </span>
                <div className="h-px w-6 bg-white/15"></div>
              </div>

              <h1 className="text-xl md:text-2xl font-light text-white mb-2">
                Thank <span className="font-bold">You</span>
              </h1>
              <p className="text-white/40 text-xs leading-relaxed font-light max-w-xs mx-auto">
                Your consultation request has been submitted successfully.
              </p>
            </div>

            <div className="px-7 md:px-8 py-6 text-center">
              <p className="text-gray-600 text-xs font-light leading-relaxed">
                One of our experts will contact you within{' '}
                <span className="text-[#0a0a0a] font-normal">24 hours</span>.
              </p>

              <div className="my-5 h-px w-12 mx-auto bg-gray-200" />

              <p className="text-[9px] text-gray-400 font-light uppercase tracking-[0.2em] mb-4">
                What Happens Next
              </p>

              <div className="space-y-3.5 text-left mb-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center mt-0.5">
                      <span className="text-[9px] font-light tracking-wide text-[#2c154f]">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-normal text-[#0a0a0a] mb-0.5">
                        {step.title}
                      </p>
                      <p className="text-[11px] font-light text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {isRedirecting && (
                <div className="mb-4 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-light">
                  <svg
                    className="w-3.5 h-3.5 animate-spin text-[#25D366]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Redirecting you to WhatsApp...
                </div>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-3 bg-[#25D366] text-white text-xs font-normal tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#1fb355] inline-flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Continue on WhatsApp</span>
              </a>

              <Link
                href="/"
                className="group relative w-full py-3 bg-[#2c154f] text-white text-xs font-light tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#441d7f] inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Back to Home
                  <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>

              <p className="text-center text-[9px] text-gray-400 font-light tracking-wide pt-4">
                Have an urgent request? Contact us directly by phone.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeUp {
            animation: fadeUp 0.5s ease-out;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}