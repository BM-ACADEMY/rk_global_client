import React from "react";
import { motion } from "framer-motion";
import "../css/MetalFabric.css";

export const MetalFabric = ({ data }) => {
  return (
<div id="metal" className="metal-container container" data-aos="fade-up">
  <div className="metal-wrapper container">
    <div className="section-title" data-aos="zoom-in">
      <h2>Metal Fabrication & Engineering</h2>
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
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay={index * 150}
            >
              <img
                src={service.image}
                alt={service.title}
                className="metal-image"
                data-aos="fade-in"
                data-aos-delay="200"
              />
              <div className="metal-content" data-aos="fade-up" data-aos-delay="300">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))
        : "Loading services..."}
    </div>
  </div>
</div>

  );
};
