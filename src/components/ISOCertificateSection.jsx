import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ISOCertificateSection = () => {
  useEffect(() => {
    // Initializing AOS with a slightly smoother easing
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const theme = {
    primaryBlue: "#0e3c7e",
    accentCyan: "#5bc0de",
    accentGreen: "#8dc63f",
    lightBg: "#f4f7fa", // Slightly deeper background for contrast
    white: "#ffffff",
    textGray: "#444444"
  };

  const benefits = [
    "Comprehensive protection of sensitive data and IP.",
    "Full compliance with international regulatory standards.",
    "Proactive threat management to minimize data breaches.",
    "Enhanced client trust and global credibility.",
    "Guaranteed operational resilience and continuity."
  ];

  return (
    <section style={{ backgroundColor: theme.lightBg, padding: "100px 0" }}>
      <div className="container">
        <div className="row align-items-stretch gy-5">

          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-right">
            <div className="mb-4">
              <span
                className="badge mb-3 px-3 py-2 text-uppercase fw-bold"
                style={{ backgroundColor: theme.accentCyan, color: "#fff", letterSpacing: "1px" }}
              >
                Global Security Standard
              </span>
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: theme.primaryBlue, lineHeight: "1.2" }}
              >
                ISO/IEC 27001:2022 <br />
                <span style={{ color: theme.accentGreen }}>Certified</span>
              </h2>
              <p
                className="fs-4 fw-light mb-4"
                style={{ color: theme.textGray, maxWidth: "90%" }}
              >
                Ensuring excellence in our Information Security Management System (ISMS).
              </p>
            </div>

            {/* Scope Card */}
            <div
              className="p-4 rounded-4 shadow-sm border-0"
              style={{
                backgroundColor: theme.white,
                borderLeft: `6px solid ${theme.primaryBlue}`,
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h5 className="fw-bold text-uppercase mb-2" style={{ color: theme.primaryBlue, fontSize: "1.1rem", padding: "8px" }}>
                Scope of Certification
              </h5>
              <p className="fs-6 m-0 text-muted italic " style={{ lineHeight: "1.8", padding: "8px" }}>
                "Provision of end-to-end IT services, staffing augmentation, professional training,
                and strategic global partnerships. Integration of technology, engineering,
                and skill development."
              </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CERTIFICATE CARD --- */}
          <div className="col-lg-6" data-aos="fade-left">
            <div
              className="h-100 bg-white rounded-4 overflow-hidden shadow-lg border-0"
              style={{ transition: "transform 0.3s ease" }}
            >
              {/* Header Block */}
              <div
                className="p-5 text-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryBlue} 0%, #062147 100%)`,
                  color: theme.white,
                }}
              >
                <div className="mb-3">
                  <svg width="60" height="60" fill={theme.accentCyan} viewBox="0 0 16 16" className="mb-3">
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2z" />
                  </svg>
                </div>
                <span className="d-block text-uppercase fw-light mb-1" style={{ fontSize: "0.9rem", letterSpacing: "2px", opacity: 0.9 }}>
                  Registration Number
                </span>
                <h2
                  className="fw-bold m-0 display-6"
                  style={{ letterSpacing: "2px", color: "#fff" }}
                >
                  IN97624C-22
                </h2>


              </div>

              {/* Benefits List */}
              <div className="p-5">
                <h4 className="fw-bold mb-4" style={{ color: theme.primaryBlue, letterSpacing: "0.5px" }}>
                  Key Advantages
                </h4>
                <ul className="list-unstyled m-0">
                  {benefits.map((point, index) => (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 100}
                      style={{
                        display: "flex",
                        margin:"8px",
                        alignItems: "center", // 👈 icon & text vertically centered
                        gap: "12px",          // 👈 space between icon and text
                        listStyle: "none"
                      }}
                    >
                      {/* Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ flexShrink: 0 }}
                      >
                        <circle cx="12" cy="12" r="12" fill={theme.accentGreen} />
                        <path
                          d="M17.3334 8L10 15.3333L6.66669 12"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Text */}
                      <span
                        className="fs-7 fw-medium"
                        style={{
                          color: "#333",
                          lineHeight: "1.4"
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}

                </ul>
              </div>

              {/* Footer Stamp */}
              <div className="px-5 pb-5 pt-0 text-end">
                <small className="text-uppercase fw-bold text-muted">Official Verification Required</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ISOCertificateSection;
