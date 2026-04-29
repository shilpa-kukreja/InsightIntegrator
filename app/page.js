import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection'
import CommitmentSection from './components/CommitmentSection'
import LatestNewsSection from './components/LatestNewsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import HomeAboutUs from './components/HomeAboutUs'

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

