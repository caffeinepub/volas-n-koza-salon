import { useEffect, useRef } from "react";
import type { Testimonial } from "../backend.d";
import { useGetTestimonials } from "../hooks/useQueries";

const FALLBACK_TESTIMONIALS: Omit<Testimonial, "date">[] = [
  {
    name: "Google Reviewer",
    reviewText: "Nice and clean place, welcoming staff, service is best.",
    rating: BigInt(5),
  },
  {
    name: "Google Reviewer",
    reviewText:
      "Good for the area and location. Offers a decent quality service at a reasonable price. Would recommend to anyone nearby.",
    rating: BigInt(4),
  },
  {
    name: "Google Reviewer",
    reviewText:
      "Super professional staff... super relaxing facial and awesome nail art. Loved the experience from start to finish!",
    rating: BigInt(5),
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1 mb-4"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {(["1", "2", "3", "4", "5"] as const).map((pos, i) => (
        <svg
          key={`star-${pos}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#D4AF37" : "rgba(212, 175, 55, 0.25)"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: backendTestimonials } = useGetTestimonials();

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

  const displayTestimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : FALLBACK_TESTIMONIALS.map((t) => ({ ...t, date: BigInt(0) }));

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#1A1A1A" }}
    >
      {/* Background shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 70%, rgba(212, 175, 55, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <p
            className="font-poppins text-xs tracking-widest uppercase mb-4"
            style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
          >
            ✦ Client Reviews ✦
          </p>
          <h2
            className="font-playfair text-4xl md:text-5xl font-700 mb-6"
            style={{ color: "#D4AF37" }}
          >
            What Our Clients Say
          </h2>
          <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
          <div
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 font-poppins text-xs tracking-wide"
            style={{
              border: "1px solid rgba(212, 175, 55, 0.35)",
              borderRadius: "2px",
              color: "#D4AF37",
              background: "rgba(212, 175, 55, 0.05)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#D4AF37"
              aria-hidden="true"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            4.1 Google Rating · 379+ Reviews
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.slice(0, 3).map((testimonial, i) => (
            <article
              key={`${testimonial.name}-testimonial`}
              className="glass-card hover-card-lift p-8 section-fade-in flex flex-col"
              style={{
                transitionDelay: `${i * 0.15}s`,
                borderRadius: "2px",
              }}
            >
              {/* Quotation mark */}
              <div
                className="font-playfair mb-4"
                style={{
                  color: "rgba(212, 175, 55, 0.25)",
                  fontSize: "4rem",
                  lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                "
              </div>

              <StarRating rating={Number(testimonial.rating)} />

              <p
                className="font-poppins text-sm leading-relaxed flex-1 italic"
                style={{ color: "rgba(245, 240, 232, 0.75)" }}
              >
                {testimonial.reviewText}
              </p>

              {/* Client */}
              <div
                className="mt-6 pt-6 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-playfair font-700 text-sm shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #9A7D1B)",
                    color: "#0D0D0D",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="font-playfair text-sm font-600"
                    style={{ color: "#D4AF37" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="font-poppins text-xs"
                    style={{ color: "rgba(245, 240, 232, 0.4)" }}
                  >
                    Verified Client
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
