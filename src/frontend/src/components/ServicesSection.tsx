import { useEffect, useRef } from "react";
import type { Service } from "../backend.d";
import { useGetServices } from "../hooks/useQueries";

const FALLBACK_SERVICES = [
  {
    name: "Bridal Makeup Package",
    description:
      "Complete bridal transformation with HD makeup, draping, hair styling and accessories for your most special day.",
    price: BigInt(5000),
    duration: BigInt(240),
    category: "Bridal",
    image: "/assets/generated/service-bridal.dim_600x400.jpg",
  },
  {
    name: "Hair Spa & Treatment",
    description:
      "Deep nourishing hair spa with Olaplex or Keratin treatment to restore shine, reduce frizz and revitalize damaged hair.",
    price: BigInt(800),
    duration: BigInt(90),
    category: "Hair",
    image: "/assets/generated/service-treatment.dim_600x400.jpg",
  },
  {
    name: "Threading & Eyebrow Design",
    description:
      "Precision eyebrow threading and shaping to perfectly frame your face, with upper lip and full face threading available.",
    price: BigInt(50),
    duration: BigInt(20),
    category: "Threading",
    image: "/assets/generated/service-styling.dim_600x400.jpg",
  },
  {
    name: "Luxury Facial",
    description:
      "Rejuvenating skin facial with deep cleansing, exfoliation, massage and nourishing mask for glowing radiant skin.",
    price: BigInt(600),
    duration: BigInt(60),
    category: "Facial",
    image: "/assets/generated/service-coloring.dim_600x400.jpg",
  },
  {
    name: "Waxing & Hair Removal",
    description:
      "Full body or targeted waxing services using premium cold and warm wax for smooth long-lasting results.",
    price: BigInt(300),
    duration: BigInt(45),
    category: "Waxing",
    image: "/assets/generated/service-treatment.dim_600x400.jpg",
  },
  {
    name: "Nail Art & Manicure",
    description:
      "Creative nail art designs, gel nails, French manicure and luxury hand/foot care treatments.",
    price: BigInt(350),
    duration: BigInt(60),
    category: "Nails",
    image: "/assets/generated/service-styling.dim_600x400.jpg",
  },
];

const serviceImages: Record<string, string> = {
  Bridal: "/assets/generated/service-bridal.dim_600x400.jpg",
  Hair: "/assets/generated/service-treatment.dim_600x400.jpg",
  Threading: "/assets/generated/service-styling.dim_600x400.jpg",
  Facial: "/assets/generated/service-coloring.dim_600x400.jpg",
  Waxing: "/assets/generated/service-treatment.dim_600x400.jpg",
  Nails: "/assets/generated/service-styling.dim_600x400.jpg",
};

function getServiceImage(service: Service): string {
  return (
    serviceImages[service.category] ||
    "/assets/generated/service-styling.dim_600x400.jpg"
  );
}

type DisplayService = {
  name: string;
  description: string;
  price: bigint;
  duration: bigint;
  category: string;
  image: string;
};

function ServiceCard({ service }: { service: DisplayService }) {
  return (
    <article
      className="glass-card hover-card-lift overflow-hidden rounded-sm flex flex-col"
      style={{ background: "rgba(255, 255, 255, 0.03)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: "scale(1.02)" }}
          loading="lazy"
        />
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 font-poppins text-xs tracking-widest uppercase px-3 py-1"
          style={{
            background: "rgba(13, 13, 13, 0.8)",
            border: "1px solid rgba(212, 175, 55, 0.5)",
            color: "#D4AF37",
            letterSpacing: "0.2em",
            backdropFilter: "blur(8px)",
          }}
        >
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-playfair text-xl font-600 mb-3"
          style={{ color: "#D4AF37" }}
        >
          {service.name}
        </h3>
        <p
          className="font-poppins text-sm leading-relaxed mb-5 flex-1"
          style={{ color: "rgba(245, 240, 232, 0.7)" }}
        >
          {service.description}
        </p>

        {/* Price & Duration */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}
        >
          <div
            className="font-playfair text-2xl font-700"
            style={{ color: "#FFD700" }}
          >
            ₹{Number(service.price)}
          </div>
          <div
            className="font-poppins text-xs tracking-wider"
            style={{ color: "rgba(212, 175, 55, 0.7)" }}
          >
            {Number(service.duration)} min
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: backendServices } = useGetServices();

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

  const displayServices: DisplayService[] =
    backendServices && backendServices.length > 0
      ? backendServices.map((s) => ({ ...s, image: getServiceImage(s) }))
      : FALLBACK_SERVICES;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#0D0D0D" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade-in">
          <p
            className="font-poppins text-xs tracking-widest uppercase mb-4"
            style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
          >
            ✦ What We Offer ✦
          </p>
          <h2
            className="font-playfair text-4xl md:text-5xl font-700 mb-6"
            style={{ color: "#D4AF37" }}
          >
            Our Premium Services
          </h2>
          <div className="gold-divider mx-auto" style={{ maxWidth: "120px" }} />
          <p
            className="font-poppins text-base mt-6 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(245, 240, 232, 0.65)" }}
          >
            From bridal makeup to hair spa, threading, facials and nail art —
            every service is crafted with care for the modern Indian woman.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service, i) => (
            <div
              key={service.name}
              className="section-fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
