import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import CommitmentSection from './components/CommitmentSection'
import LatestNewsSection from './components/LatestNewsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import HomeAboutUs from './components/HomeAboutUs'



export const metadata = {
  title:
    'Insight Integrators | Internal Audit, ICFR, Risk & Compliance Consulting in UAE',

  description:
    'Insight Integrators provides internal audit, ICFR, risk advisory, AML, VAT, and corporate tax consulting services for businesses in Dubai and across the UAE.',

  alternates: {
    canonical: 'https://insight-integrator.vercel.app/',
  },
}

const page = () => {

  
  return (
    <>
    <Navbar />
    <HeroSection />
    <HomeAboutUs />
    <CommitmentSection />
    <LatestNewsSection />
    <TestimonialsSection />
    <Footer />
    </>
  )
}

export default page

