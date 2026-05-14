import AboutClient from './AboutClient';

export const metadata = {
  title:
    'About Insight Integrators | Compliance, Audit & Advisory Experts in UAE',

  description:
    'Learn about Insight Integrators, a UAE-based consulting firm supporting businesses with internal audit, ICFR, risk, compliance, AML, VAT, and corporate tax advisory.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}