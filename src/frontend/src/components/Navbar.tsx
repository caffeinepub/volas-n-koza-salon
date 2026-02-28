import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "services",
        "gallery",
        "about",
        "testimonials",
        "book",
      ];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? "rgba(13, 13, 13, 0.92)"
          : "rgba(13, 13, 13, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isScrolled
          ? "1px solid rgba(212, 175, 55, 0.2)"
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 group bg-transparent border-0 p-0 cursor-pointer"
        >
          <img
            src="/assets/generated/salon-logo-transparent.dim_300x300.png"
            alt="LUXE Salon"
            className="h-12 w-12 object-contain"
          />
          <div>
            <div
              className="font-playfair text-xl font-700 tracking-widest"
              style={{ color: "#D4AF37", letterSpacing: "0.2em" }}
            >
              VOLAS N KOZA
            </div>
            <div
              className="font-poppins text-xs tracking-widest uppercase"
              style={{
                color: "rgba(245, 240, 232, 0.6)",
                letterSpacing: "0.3em",
              }}
            >
              Beauty Parlour
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`nav-link-underline font-poppins text-sm font-500 tracking-wider uppercase transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold active"
                  : "text-cream hover:text-gold"
              }`}
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#D4AF37"
                    : "rgba(245, 240, 232, 0.85)",
                letterSpacing: "0.1em",
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => handleNavClick("#book")}
            className="btn-gold font-poppins text-sm px-6 py-2.5 rounded-sm tracking-wider uppercase"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: isMobileMenuOpen
                ? "rotate(45deg) translateY(8px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: isMobileMenuOpen
                ? "rotate(-45deg) translateY(-8px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isMobileMenuOpen ? "400px" : "0",
          background: "rgba(13, 13, 13, 0.98)",
          borderTop: isMobileMenuOpen
            ? "1px solid rgba(212, 175, 55, 0.2)"
            : "none",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-poppins text-sm tracking-wider uppercase transition-colors duration-300"
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#D4AF37"
                    : "rgba(245, 240, 232, 0.85)",
                letterSpacing: "0.1em",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#book")}
            className="btn-gold font-poppins text-sm px-6 py-3 rounded-sm tracking-wider uppercase text-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
