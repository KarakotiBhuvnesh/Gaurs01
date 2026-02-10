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

      {/* 1. Above-the-fold hook */}
      <Hero />

      {/* 2. Immediate value & differentiation */}
      <Standout />

      {/* 3. Urgency – catch ad traffic early */}
      <LimitedOffer onCTAClick={scrollToForm} />

      {/* 4. Quick project clarity */}
      <ProjectGlance />

      {/* 5. Product details */}
      <Studios />

      {/* 6. Why this location will grow */}
      <Growth />
      <GrowthTimeline />

      {/* 7. Infrastructure & surroundings */}
      <Location />
      <Infrastructure />

      {/* 8. Lifestyle & liveability */}
      <Amenities />

      {/* 9. Investor mindset – money talk */}
      <ROISection />
      <Returns />

      {/* 10. Trust & social proof */}
      <TrustSection />
      <Buyers />

      {/* 11. Primary lead capture */}
      <LeadForm />

      {/* 12. Final push CTA */}
      <FinalCTA />

      {/* 13. Footer & persistent mobile CTA */}
      <Footer />
      <MobileCTA />
    </>
  );
}
