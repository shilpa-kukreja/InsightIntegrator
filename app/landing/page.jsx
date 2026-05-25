"use client";

// import Header from "./components/Header";
// import HeroBanner from "./components/HeroBanner";
// import Footer from "./components/Footer";
// import AboutUs from "./components/About-us";
// import ReviewsSection from "./components/ReviewsSection";
// import FAQSection from "./components/FAQSection";
// import ProblemAwarenessSection from "./components/Problemawarenesssection";
// import CoreServicesSection from "./components/CoreServices";
// import TrustSection from "./components/Insight";
// import EngagementProcessSection from "./components/EngagementProcess";
// import LeadMagnetSection from "./components/LeadMagnet";
// import ContactPopup from "./components/ContactPopup";
// import HeroSection from "./components/HeroSection";
import { useState } from "react";
import Header from "../components/landingcomponents/Header";
import HeroSection from "../components/landingcomponents/HeroSection";
import AboutUs from "../components/landingcomponents/About-us";
import ProblemAwarenessSection from "../components/landingcomponents/Problemawarenesssection";
import CoreServicesSection from "../components/landingcomponents/CoreServices";
import TrustSection from "../components/landingcomponents/Insight";
import EngagementProcessSection from "../components/landingcomponents/EngagementProcess";
import LeadMagnetSection from "../components/landingcomponents/LeadMagnet";
import ContactPopup from "../components/landingcomponents/ContactPopup";
import ReviewsSection from "../components/landingcomponents/ReviewsSection";
import Footer from "../components/landingcomponents/Footer";



export default function HomePage() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <Header />
      {/* <HeroBanner /> */}
      <HeroSection/>
      <AboutUs />
      <ProblemAwarenessSection/>
      <CoreServicesSection/>
      <TrustSection/>
      <EngagementProcessSection/>
     <LeadMagnetSection onOpenPopup={() => setIsPopupOpen(true)} />

       {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
      {/* <WhyChooseUs />
      <Services />
      <Stats /> */}
      <ReviewsSection />
      {/* <FAQSection /> */}
      <Footer onOpenPopup={() => setIsPopupOpen(true)}/>
    </>
  );
}