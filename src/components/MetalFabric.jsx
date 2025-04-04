import React from "react";
import { motion } from "framer-motion";
import "../css/MetalFabric.css";

export const MetalFabric = ({ data }) => {
  return (
    <div id="metal" className="metal-container container" data-aos="fade-up">
    <div className="metal-wrapper container">
      <div className="section-title" data-aos="flip-down">
        <h2 className="text-gradient">Metal Fabrication & Engineering</h2>
        <p>
          We provide high-quality metal fabrication and engineering solutions to meet industry standards.
        </p>
      </div>

      <div className="metal-grid">
        {data
          ? data.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                className="metal-card"
                whileHover={{
                  scale: 1.08,
                  rotate: 1.5,
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                data-aos={
                  index % 5 === 0
                    ? "flip-left"
                    : index % 5 === 1
                    ? "slide-up"
                    : index % 5 === 2
                    ? "fade-right"
                    : index % 5 === 3
                    ? "zoom-in"
                    : "fade-left"
                }
                data-aos-delay={150 * index}
                style={{
                  background: "linear-gradient(135deg, #343a40, #1c1f23)",
                  color: "#fff",
                  borderRadius: "15px",
                  overflow: "hidden",
                  transformOrigin: "center",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="metal-image"
                  data-aos="zoom-out"
                  data-aos-delay={200 * index}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "15px 15px 0 0",
                  }}
                />
                <div className="metal-content">
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", textAlign: "center" }}>
                    {service.title}
                  </h3>
                  <p style={{ padding: "10px", lineHeight: "1.6rem" }}>{service.description}</p>
                </div>
              </motion.div>
            ))
          : "Loading services..."}
      </div>
    </div>
  </div>
  );
};
