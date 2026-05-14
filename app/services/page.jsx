import ServicesPage from "./serviceClient";


export const metadata = {
  title:
    'Consulting Services | Internal Audit, ICFR, Tax & Risk Advisory in UAE',

  description:
    'Explore Insight Integrators consulting services in the UAE, including internal audit, ICFR, riskmanagement, AML, VAT, corporate tax, and regulatory compliance support.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}