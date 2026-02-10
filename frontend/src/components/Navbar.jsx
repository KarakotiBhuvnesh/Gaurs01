import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Overview", href: "#overview" },
    { name: "Destination", href: "#destination" },
    { name: "Studios", href: "#studios" },
    { name: "Location", href: "#location" },
    { name: "Growth", href: "#growth" },
    { name: "Returns", href: "#returns" },
    { name: "Amenities", href: "#amenities" },
  ];

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
      <div className="backdrop-blur-md bg-white/55 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">

          
          {/* Logo */}
          <div className="text-xl font-semibold tracking-tight">
            Gaur Yamuna City
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-800">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-yellow-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#enquire"
              className="bg-yellow-500 text-black px-5 py-2.5 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-5 text-lg text-slate-800 border-b"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 py-4">
              <a
                href="#enquire"
                className="block text-center bg-yellow-500 py-3 rounded-md font-semibold"
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
