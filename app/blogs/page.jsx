import BlogsPage from "./blogsClient";





export const metadata = {
  title:
    'Insights and Articles | Compliance, Audit & Tax in UAE',

  description:
    ' Read Insight Integrators latest insights on internal audit, VAT, ICFR, tax, compliance, risk management, and business advisory in the UAE.',

  alternates: {
    canonical: 'https://insightintegrators.ae/blogs',
  },
};

export default function Blog() {
  return <BlogsPage/>;
}