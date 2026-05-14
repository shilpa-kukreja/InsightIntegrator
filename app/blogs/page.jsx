import BlogsPage from "./blogsClient";





export const metadata = {
  title:
    'Insights and Articles | Compliance, Audit & Tax in UAE',

  description:
    ' Read Insight Integrators latest insights on internal audit, VAT, ICFR, tax, compliance, riskmanagement, and business advisory in the UAE.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/blogs',
  },
};

export default function Blog() {
  return <BlogsPage/>;
}