
import AdvisoryPage from "./advisoryClient";

export const metadata = {
  title:
    'Advisory Services in UAE | Risk, Governance, ICFR & Compliance',

  description:
    'Insight Integrators offers advisory services in the UAE including internal audit, ICFR, riskmanagement, governance, AML, compliance, and business transformation support.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/services/advisory',
  },
};

export default function Advisory() {
  return <AdvisoryPage />;
}