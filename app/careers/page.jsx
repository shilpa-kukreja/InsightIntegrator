import CareersPage from "./careerClient";





export const metadata = {
  title:
    'Careers at Insight Integrators | Join Our Consulting Team in UAE',

  description:
    'Explore career opportunities at Insight Integrators in audit, advisory, compliance, tax, and risk consulting in the UAE.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/careers',
  },
};

export default function Careers() {
  return <CareersPage />;
}