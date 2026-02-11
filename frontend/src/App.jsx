import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Standout from "./components/Standout";
import Studios from "./components/Studios";
import Location from "./components/Location";
import Growth from "./components/Growth";
import Returns from "./components/Returns";
import Amenities from "./components/Amenities";
import Buyers from "./components/Buyers";
import FinalCTA from "./components/FinalCTA";
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
      <LimitedOffer onCTAClick={scrollToForm} />
      <ProjectGlance />
      <Studios />
      
      {/* Add Parallax Section Here */}
      <ParallaxSection />
      
      <Growth />
      <GrowthTimeline />
      <Location />
      <Infrastructure />
      
      {/* You can add another Parallax Section */}
      <ParallaxSection />
      
      <Amenities />
      <ROISection />
      <Returns />
      <TrustSection />
      <Buyers />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </>
  );
}
