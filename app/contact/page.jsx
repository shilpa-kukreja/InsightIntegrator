import ContactPage from "./contactClient";




export const metadata = {
  title:
    'Contact Insight Integrators | Audit, Tax & Compliance Consulting UAE',

  description:
    'Contact Insight Integrators for internal audit, ICFR, compliance, VAT, AML, risk, and corporate tax consulting services in Dubai and across the UAE.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}