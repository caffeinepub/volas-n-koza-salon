import { useEffect, useRef } from "react";

const galleryItems = [
  {
    id: "g1",
    image:
      "/assets/uploads/Screenshot_2026-02-27-20-19-19-856_com.google.android.googlequicksearchbox-edit-2.jpg",
    title: "Volas N Koza Salon",
    category: "Our Salon",
    wide: true,
  },
  {
    id: "g2",
    image:
      "/assets/uploads/Screenshot_2026-02-27-20-19-59-825_com.google.android.googlequicksearchbox-edit-1.jpg",
    title: "Salon Interior",
    category: "Interior",
    wide: false,
  },
  {
    id: "g3",
    image: "/assets/generated/service-bridal.dim_600x400.jpg",
    title: "Bridal Transformation",
    category: "Bridal",
    wide: false,
  },
  {
    id: "g4",
    image: "/assets/generated/service-treatment.dim_600x400.jpg",
    title: "Hair Spa & Glow",
    category: "Hair",
    wide: false,
  },
  {
    id: "g5",
    image: "/assets/generated/service-coloring.dim_600x400.jpg",
    title: "Facial Glow Treatment",
    category: "Facial",
    wide: false,
  },
  {
    id: "g6",
    image: "/assets/generated/service-styling.dim_600x400.jpg",
    title: "Nail Art Design",
    category: "Nails",
    wide: false,
  },
];

export function GallerySection() {
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
      id="gallery"
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#0D0D0D" }}
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <p
            className="font-poppins text-xs tracking-widest uppercase mb-4"
            style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
          >
            ✦ Portfolio ✦
          </p>
          <h2
            className="font-playfair text-4xl md:text-5xl font-700 mb-6"
            style={{ color: "#D4AF37" }}
          >
            Our Work
          </h2>
          <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
        </div>

        {/* Masonry-style Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 section-fade-in"
          style={{ transitionDelay: "0.1s" }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item relative overflow-hidden"
              style={{
                borderRadius: "2px",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                aspectRatio: item.wide ? "16/9" : "1",
                gridColumn: item.wide ? "1 / -1" : "span 1",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div>
                  <div
                    className="font-poppins text-xs tracking-widest uppercase mb-1"
                    style={{
                      color: "rgba(13, 13, 13, 0.85)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    className="font-playfair text-lg font-600"
                    style={{ color: "#0D0D0D" }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
