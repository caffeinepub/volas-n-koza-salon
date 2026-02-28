import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useQueries";

const SERVICE_OPTIONS = [
  "Bridal Makeup Package",
  "Hair Spa & Treatment",
  "Threading & Eyebrow Design",
  "Luxury Facial",
  "Waxing & Hair Removal",
  "Nail Art & Manicure",
  "Consultation",
  "Other",
];

export function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service || !form.preferredDate) {
      toast.error("Please fill in all required fields.");
      return;
    }

    submitInquiry(form, {
      onSuccess: () => {
        toast.success(
          "Your appointment request has been received! We'll be in touch shortly.",
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          message: "",
        });
      },
      onError: () => {
        toast.error(
          "Something went wrong. Please try again or call us directly.",
        );
      },
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(26, 26, 26, 0.8)",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    color: "#F5F0E8",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
    borderRadius: "2px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  } as const;

  return (
    <section
      id="book"
      ref={sectionRef}
      className="relative py-28 px-6"
      style={{ background: "#0D0D0D" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14 section-fade-in">
          <p
            className="font-poppins text-xs tracking-widest uppercase mb-4"
            style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
          >
            ✦ Reserve Your Visit ✦
          </p>
          <h2
            className="font-playfair text-4xl md:text-5xl font-700 mb-6"
            style={{ color: "#D4AF37" }}
          >
            Book Your Experience
          </h2>
          <div
            className="gold-divider mx-auto mb-6"
            style={{ maxWidth: "120px" }}
          />
          <p
            className="font-poppins text-sm"
            style={{ color: "rgba(245, 240, 232, 0.55)" }}
          >
            Complete the form below and our team will confirm your appointment
            within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 section-fade-in"
          style={{ transitionDelay: "0.2s", borderRadius: "2px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-name"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Full Name *
              </label>
              <input
                id="booking-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-email"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Email Address *
              </label>
              <input
                id="booking-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-phone"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Phone Number
              </label>
              <input
                id="booking-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="booking-service"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Service *
              </label>
              <select
                id="booking-service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  appearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF37' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  paddingRight: "40px",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <option value="" style={{ background: "#1A1A1A" }}>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                    style={{ background: "#1A1A1A" }}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="booking-date"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Preferred Date *
              </label>
              <input
                id="booking-date"
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                style={{
                  ...inputStyle,
                  colorScheme: "dark",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="booking-message"
                className="font-poppins text-xs tracking-widest uppercase"
                style={{
                  color: "rgba(212, 175, 55, 0.8)",
                  letterSpacing: "0.2em",
                }}
              >
                Additional Notes
              </label>
              <textarea
                id="booking-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your hair goals, any allergies, or special requests..."
                rows={4}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "110px",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(212, 175, 55, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isPending}
              className="btn-gold font-poppins text-sm tracking-widest uppercase px-12 py-4 rounded-sm"
              style={{
                minWidth: "220px",
                opacity: isPending ? 0.7 : 1,
                cursor: isPending ? "not-allowed" : "pointer",
              }}
            >
              {isPending ? "Sending..." : "Request Appointment"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
