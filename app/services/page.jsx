import ServicesPage from "./serviceClient";


export const metadata = {
  title:
    'Consulting Services | Internal Audit, ICFR, Tax & Risk Advisory in UAE',

  description:
    'Explore Insight Integrators consulting services in the UAE, including internal audit, ICFR, risk management, AML, VAT, corporate tax, and regulatory compliance support.',

  alternates: {
    canonical: 'https://insightintegrators.ae/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}