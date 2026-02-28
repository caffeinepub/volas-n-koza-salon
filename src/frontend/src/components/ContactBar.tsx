export function ContactBar() {
  return (
    <section
      style={{
        background: "#161616",
        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p
            className="font-poppins text-xs tracking-widest uppercase mb-3"
            style={{ color: "#D4AF37", letterSpacing: "0.4em" }}
          >
            ✦ Visit Us ✦
          </p>
          <h2
            className="font-playfair text-3xl md:text-4xl font-700"
            style={{ color: "#D4AF37" }}
          >
            Find Us in Haridwar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <a
            href="https://maps.google.com/?q=Volas+N+Koza+Salon+Haridwar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(212, 175, 55, 0.15)",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
              e.currentTarget.style.background = "rgba(212, 175, 55, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.15)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="#D4AF37"
                />
              </svg>
            </div>
            <div>
              <div
                className="font-playfair text-sm font-600 mb-1"
                style={{ color: "#D4AF37" }}
              >
                Our Address
              </div>
              <p
                className="font-poppins text-xs leading-relaxed"
                style={{ color: "rgba(245, 240, 232, 0.65)" }}
              >
                A5, Sandeep Complex, Shivalik Nagar
                <br />
                Haridwar, Uttarakhand 249403
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919068151060"
            className="group flex flex-col items-center text-center gap-3 p-6 transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(212, 175, 55, 0.15)",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
              e.currentTarget.style.background = "rgba(212, 175, 55, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.15)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  fill="#D4AF37"
                />
              </svg>
            </div>
            <div>
              <div
                className="font-playfair text-sm font-600 mb-1"
                style={{ color: "#D4AF37" }}
              >
                Call Us
              </div>
              <p
                className="font-poppins text-xs leading-relaxed"
                style={{ color: "rgba(245, 240, 232, 0.65)" }}
              >
                +91 90681 51060
              </p>
            </div>
          </a>

          {/* Hours */}
          <div
            className="flex flex-col items-center text-center gap-3 p-6"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(212, 175, 55, 0.15)",
              borderRadius: "2px",
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div
                className="font-playfair text-sm font-600 mb-1"
                style={{ color: "#D4AF37" }}
              >
                Business Hours
              </div>
              <p
                className="font-poppins text-xs leading-relaxed"
                style={{ color: "rgba(245, 240, 232, 0.65)" }}
              >
                Mon – Sun
                <br />
                10:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919068151060"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 transition-all duration-300"
            style={{
              background: "rgba(37, 211, 102, 0.06)",
              border: "1px solid rgba(37, 211, 102, 0.2)",
              borderRadius: "2px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.5)";
              e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.2)";
              e.currentTarget.style.background = "rgba(37, 211, 102, 0.06)";
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "rgba(37, 211, 102, 0.12)",
                border: "1px solid rgba(37, 211, 102, 0.3)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#25D366"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <div
                className="font-playfair text-sm font-600 mb-1"
                style={{ color: "#25D366" }}
              >
                WhatsApp Us
              </div>
              <p
                className="font-poppins text-xs leading-relaxed"
                style={{ color: "rgba(245, 240, 232, 0.65)" }}
              >
                Chat with us instantly
                <br />
                for quick bookings
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
