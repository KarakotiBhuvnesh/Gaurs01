import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Standout from "./components/Standout";
import Studios from "./components/Studios";
import Amenities from "./components/Amenities";
import Buyers from "./components/Buyers";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import ProjectGlance from "./components/ProjectGlance";
import GrowthTimeline from "./components/GrowthTimeline";
import TrustSection from "./components/TrustSection";
import ROISection from "./components/ROISection";
import Infrastructure from "./components/Infrastructure";
import LimitedOffer from "./components/LimitedOffer";
import LeadForm from "./components/LeadForm";
import ParallaxSection from "./components/ParallaxSection"; // Add this import

export default function App() {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Standout />
      <Amenities />
      <ProjectGlance />
      <LimitedOffer onCTAClick={scrollToForm} />
      <Studios />
      
      {/* Add Parallax Section Here */}
      <ParallaxSection />
      
      <GrowthTimeline />
      <ROISection />
      <Infrastructure />
      
      {/* You can add another Parallax Section */}
      <ParallaxSection />
      
      <TrustSection />
      <Buyers />
      <LeadForm />
      <Footer />
      <MobileCTA />
    </>
  );
}
