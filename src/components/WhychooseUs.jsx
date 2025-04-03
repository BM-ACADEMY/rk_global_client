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
    <div ref={sectionRef} className="features-section text-center" id="whychoose">
      {/* Heading with animation */}
      <motion.h1
        className="main-about-title text-center pb-5 pt-5"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
       Why Choose Us? 
      </motion.h1>

      <Container>
        <Row className="justify-content-center pb-5">
          {data?.map((feature, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <motion.div
                className={`feature-card ${index % 2 === 0 ? "even" : "odd"} ${
                  index === activeIndex || index === hoveredIndex ? "hovered" : ""
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card.Body>
                  {/* Fix: Using FontAwesome Icons */}
                  <div className="icon-container">
                    <i className={`fa ${feature.icon} icon`}></i>
                  </div>
                  <Card.Title className="mt-2 feature-title">{feature.text}</Card.Title>
                  <p className="feature-text">{feature.description}</p>
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
