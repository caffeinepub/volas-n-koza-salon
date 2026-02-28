import { useGetSalonInfo } from "../hooks/useQueries";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Now", href: "#book" },
];

const serviceLinks = [
  "Bridal Makeup Package",
  "Hair Spa & Treatment",
  "Threading & Eyebrow Design",
  "Luxury Facial",
  "Waxing & Hair Removal",
  "Nail Art & Manicure",
];

const FALLBACK_INFO = {
  address:
    "A5, Sandeep Complex Ground Floor, Shivalik Nagar, Haridwar, Uttarakhand 249403",
  phone: "+91 90681 51060",
  email: "volasandkoza@gmail.com",
  hours: "Mon–Sun: 10 AM – 9 PM",
  socialLinks: [] as string[],
};

export function Footer() {
  const { data: salonInfo } = useGetSalonInfo();
  const info = salonInfo || FALLBACK_INFO;

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 mb-5 bg-transparent border-0 p-0 cursor-pointer"
            >
              <img
                src="/assets/generated/salon-logo-transparent.dim_300x300.png"
                alt="LUXE Salon"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div
                  className="font-playfair text-xl font-700"
                  style={{ color: "#D4AF37", letterSpacing: "0.2em" }}
                >
                  VOLAS N KOZA
                </div>
                <div
                  className="font-poppins text-xs"
                  style={{
                    color: "rgba(245, 240, 232, 0.5)",
                    letterSpacing: "0.25em",
                  }}
                >
                  BEAUTY PARLOUR
                </div>
              </div>
            </button>
            <p
              className="font-poppins text-sm leading-relaxed"
              style={{ color: "rgba(245, 240, 232, 0.5)" }}
            >
              Premium beauty parlour in Haridwar, Uttarakhand — where elegance
              meets expertise.
            </p>

            {/* Gold divider */}
            <div
              className="mt-6"
              style={{
                height: "1px",
                width: "60px",
                background: "linear-gradient(90deg, #D4AF37, transparent)",
              }}
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-playfair text-base font-600 mb-6 tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="font-poppins text-sm transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer text-left"
                    style={{ color: "rgba(245, 240, 232, 0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(245, 240, 232, 0.55)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-playfair text-base font-600 mb-6 tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#services")}
                    className="font-poppins text-sm transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer text-left"
                    style={{ color: "rgba(245, 240, 232, 0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4AF37";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(245, 240, 232, 0.55)";
                    }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-playfair text-base font-600 mb-6 tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <span
                  style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px" }}
                >
                  ✦
                </span>
                <p
                  className="font-poppins text-sm leading-relaxed"
                  style={{ color: "rgba(245, 240, 232, 0.55)" }}
                >
                  {info.address}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span style={{ color: "#D4AF37", flexShrink: 0 }}>✦</span>
                <a
                  href={`tel:${info.phone}`}
                  className="font-poppins text-sm transition-colors duration-300"
                  style={{ color: "rgba(245, 240, 232, 0.55)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(245, 240, 232, 0.55)";
                  }}
                >
                  {info.phone}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span style={{ color: "#D4AF37", flexShrink: 0 }}>✦</span>
                <a
                  href={`mailto:${info.email}`}
                  className="font-poppins text-sm transition-colors duration-300"
                  style={{ color: "rgba(245, 240, 232, 0.55)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(245, 240, 232, 0.55)";
                  }}
                >
                  {info.email}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <span
                  style={{ color: "#D4AF37", flexShrink: 0, marginTop: "2px" }}
                >
                  ✦
                </span>
                <p
                  className="font-poppins text-sm leading-relaxed"
                  style={{ color: "rgba(245, 240, 232, 0.55)" }}
                >
                  {info.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(212, 175, 55, 0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-poppins text-xs"
            style={{ color: "rgba(245, 240, 232, 0.35)" }}
          >
            © {year} Volas N Koza Salon. All rights reserved.
          </p>
          <p
            className="font-poppins text-xs"
            style={{ color: "rgba(245, 240, 232, 0.3)" }}
          >
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: "rgba(212, 175, 55, 0.5)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D4AF37";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(212, 175, 55, 0.5)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
