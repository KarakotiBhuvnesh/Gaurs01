export default function MobileCTA() {
  const handleScrollToLeadForm = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">
      <div className="flex">
        <button
          onClick={handleScrollToLeadForm}
          className="flex-1 bg-yellow-500 text-center py-4 font-semibold"
        >
          Enquire Now
        </button>
        <button
          onClick={handleScrollToLeadForm}
          className="flex-1 bg-slate-900 text-white text-center py-4 font-semibold"
        >
          Call Now
        </button>
      </div>
    </div>
  );
}
