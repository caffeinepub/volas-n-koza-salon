import { useEffect, useRef } from "react";

const stats = [
  { number: "4.1★", label: "Google Rating" },
  { number: "379+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction" },
  { number: "10+", label: "Years Experience" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".section-fade-in");
    if (elements) {
      for (const el of elements) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#1A1A1A" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="section-fade-in relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              <img
                src="/assets/generated/hero-salon.dim_1600x900.jpg"
                alt="About LUXE Salon"
                className="w-full object-cover"
                style={{
                  aspectRatio: "4/5",
                  filter: "contrast(1.1) saturate(0.9)",
                }}
                loading="lazy"
              />
              {/* Gold overlay effect */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                }}
              />
              {/* Gold frame accent */}
              <div
                className="absolute"
                style={{
                  top: "20px",
                  left: "20px",
                  right: "-20px",
                  bottom: "-20px",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  zIndex: -1,
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 right-8 glass-dark px-6 py-4 text-center"
              style={{ borderRadius: "2px" }}
            >
              <div className="stat-number" style={{ fontSize: "2rem" }}>
                4.1 ★
              </div>
              <div
                className="font-poppins text-xs tracking-widest uppercase mt-1"
                style={{
                  color: "rgba(245, 240, 232, 0.6)",
                  letterSpacing: "0.2em",
                }}
              >
                Rating
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="section-fade-in" style={{ transitionDelay: "0.2s" }}>
            {/* Gold vertical bar */}
            <div className="flex gap-6 items-start mb-8">
              <div
                className="shrink-0 mt-1"
                style={{
                  width: "3px",
                  height: "100px",
                  background:
                    "linear-gradient(to bottom, #D4AF37, transparent)",
                }}
              />
              <div>
                <p
                  className="font-poppins text-xs tracking-widest uppercase mb-3"
                  style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
                >
                  ✦ Our Story ✦
                </p>
                <h2
                  className="font-playfair text-4xl md:text-5xl font-700 leading-tight"
                  style={{ color: "#D4AF37" }}
                >
                  About Our
                  <br />
                  <em style={{ fontStyle: "italic" }}>Salon</em>
                </h2>
              </div>
            </div>

            <p
              className="font-poppins text-base leading-relaxed mb-5"
              style={{ color: "rgba(245, 240, 232, 0.75)" }}
            >
              Nestled in the holy city of Haridwar, Volas N Koza Salon has
              become Uttarakhand's most trusted beauty destination. With over
              379 happy clients and a 4.1★ Google rating, we are committed to
              bringing out every woman's natural beauty.
            </p>
            <p
              className="font-poppins text-base leading-relaxed mb-8"
              style={{ color: "rgba(245, 240, 232, 0.65)" }}
            >
              Our expert beauticians specialize in bridal makeup, hair
              treatments, skin care, threading, waxing, and premium nail art. We
              use top quality products and the latest techniques to ensure you
              leave feeling confident, beautiful, and pampered.
            </p>

            {/* Book Appointment Button */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("book");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold font-poppins text-sm px-8 py-4 rounded-sm tracking-widest uppercase mb-10"
              style={{ display: "inline-block" }}
            >
              Book Appointment
            </button>

            {/* Stats Row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(212, 175, 55, 0.2)" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{
                    transitionDelay: `${0.3 + i * 0.1}s`,
                  }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div
                    className="font-poppins text-xs mt-2 leading-tight"
                    style={{
                      color: "rgba(245, 240, 232, 0.55)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
