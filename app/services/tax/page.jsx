
import TaxPage from './taxClient';

export const metadata = {
  title:
    ' Tax Services in UAE | VAT and Corporate Tax Advisory',

  description:
    'Insight Integrators provides VAT and corporate tax advisory services in Dubai and across the UAE to help businesses strengthen compliance and tax governance.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/services/tax',
  },
};

export default function Tax() {
  return <TaxPage />;
}