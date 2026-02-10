export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden">
      <div className="flex">
        <a
          href="#enquire"
          className="flex-1 bg-yellow-500 text-center py-4 font-semibold"
        >
          Enquire Now
        </a>
        <a
          href="tel:+919999999999"
          className="flex-1 bg-slate-900 text-white text-center py-4 font-semibold"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
