import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Overview", href: "#overview" },
    { name: "Studios", href: "#studios" },
    { name: "Location", href: "#location" },
    { name: "Growth", href: "#growth" },
    { name: "Returns", href: "#returns" },
    { name: "Amenities", href: "#amenities" },
  ];

  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setShow(true);
      } 
      // Hide navbar when scrolling down (after some offset)
      else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-md bg-slate-900/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">

          {/* Logo */}
<a href="#overview" className="flex items-center gap-2">
  <img
    src="/img/loggo.jpg"
    alt="Gaur Yamuna City"
    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
  />
</a>


          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/90">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - Changed to button with onClick */}
          <div className="hidden md:block">
            <button
              onClick={handleScrollToForm}
              className="bg-yellow-500 text-black px-5 py-2.5 rounded-md font-semibold hover:bg-yellow-400 transition shadow-lg"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-slate-900/90 backdrop-blur border-t border-white/10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-5 text-lg text-white/90 border-b border-white/10 hover:bg-white/5 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 py-4">
              <button
                onClick={handleScrollToForm}
                className="block w-full text-center bg-yellow-500 py-3 rounded-md font-semibold text-black hover:bg-yellow-400 transition"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
