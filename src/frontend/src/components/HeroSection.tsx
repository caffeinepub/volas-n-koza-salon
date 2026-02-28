import { useEffect, useRef } from "react";

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 hero-parallax"
        style={{ top: "-20%", height: "140%" }}
      >
        <img
          src="/assets/uploads/Screenshot_2026-02-27-20-19-19-856_com.google.android.googlequicksearchbox-edit-2.jpg"
          alt="Volas N Koza Salon"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Multi-layer overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.45) 50%, rgba(13,13,13,0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(13,13,13,0.6) 100%)",
          }}
        />
      </div>

      {/* Google Rating Badge */}
      <div
        className="absolute top-28 right-6 md:right-10 z-20"
        style={{
          background: "rgba(13, 13, 13, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          borderRadius: "100px",
          padding: "8px 16px",
        }}
      >
        <div
          className="font-poppins text-xs font-500 tracking-wider"
          style={{ color: "#D4AF37", whiteSpace: "nowrap" }}
        >
          ⭐ 4.1 Google Rating · 379+ Reviews
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Pre-title */}
        <div
          className="hero-subtitle font-poppins text-xs tracking-widest uppercase mb-6"
          style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
        >
          ✦ Premier Beauty Parlour ✦
        </div>

        {/* Main Headline */}
        <h1
          className="hero-title font-playfair font-700 leading-tight mb-6"
          style={{
            color: "#D4AF37",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            textShadow: "0 0 60px rgba(212, 175, 55, 0.3)",
            maxWidth: "900px",
            lineHeight: 1.1,
          }}
        >
          Where Beauty
          <br />
          <em style={{ fontStyle: "italic", color: "#FFD700" }}>
            Meets Luxury
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle font-poppins font-300 mb-10"
          style={{
            color: "rgba(245, 240, 232, 0.8)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "560px",
            lineHeight: 1.7,
          }}
        >
          Experience the art of transformation at Haridwar's most trusted beauty
          parlour — where every detail is crafted to perfection.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={() => handleScroll("#book")}
            className="btn-gold font-poppins text-sm px-8 py-4 rounded-sm tracking-widest uppercase"
            style={{ minWidth: "200px" }}
          >
            Book Appointment
          </button>
          <button
            type="button"
            onClick={() => handleScroll("#services")}
            className="btn-gold-outline font-poppins text-sm px-8 py-4 rounded-sm tracking-widest uppercase"
            style={{ minWidth: "200px" }}
          >
            Explore Services
          </button>
        </div>

        {/* Animated Gold Divider */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div
            className="animate-divider"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              display: "block",
            }}
          />
          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-2 opacity-60"
            style={{ animation: "fadeInUp 1s ease 1.5s forwards", opacity: 0 }}
          >
            <span
              className="font-poppins text-xs tracking-widest uppercase"
              style={{
                color: "rgba(212, 175, 55, 0.7)",
                letterSpacing: "0.3em",
              }}
            >
              Scroll
            </span>
            <div
              className="w-px h-12"
              style={{
                background: "linear-gradient(to bottom, #D4AF37, transparent)",
                animation: "pulse-gold 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
