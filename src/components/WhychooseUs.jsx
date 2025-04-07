import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/WhyChooseUs.css";

export const WhyChooseUs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Custom Intersection Observer for `isInView`
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div
      className="section-title text-center"
      id="whychoose"
      data-aos="fade-up"
    >
      <h2 data-aos="zoom-in">Why Choose Us?</h2>

      <Container>
        <Row className="features-grid">
          {data?.map((feature, index) => (
            <Col key={index} className="feature-col">
              <motion.div
                className={`feature-card ${index % 2 === 0 ? "even" : "odd"} ${
                  index === hoveredIndex ? "hovered" : ""
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <Card.Body>
                  <div
                    className="icon-container social"
                    data-aos="flip-up"
                    data-aos-delay="200"
                  >
                    <i
                      className={`fa ${feature.icon} icon`}
                      style={{
                        fontSize: "40px",
                        color: "#00378a",
                        transition: "color 0.3s ease-in-out",
                      }}
                    ></i>
                  </div>
                  <Card.Title
                    className="mt-2 feature-title"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {feature.text}
                  </Card.Title>
                  <p
                    className="feature-text"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    {feature.description}
                  </p>
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
