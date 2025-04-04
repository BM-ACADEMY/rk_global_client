import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../css/Testimonial.css";
import { FaStar } from "react-icons/fa";

export const Testimonials = ({ data }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setTestimonials([...data]);
    }
  }, [data]);

  return (
    <div id="testimonials" className="testimonials-container" data-aos="fade-up">
    <div className="section-title text-center" data-aos="zoom-in">
      <h2>What Our Clients Say</h2>
    </div>
    
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={false}
      autoHeight={true}
    >
      {testimonials.length > 0 ? (
        testimonials.map((d, i) => (
          <SwiperSlide
            key={`${d.name}-${i}`}
            className="testimonial-card"
            data-aos={
              i % 3 === 0
                ? "fade-right"
                : i % 3 === 1
                ? "flip-left"
                : "zoom-in"
            }
            data-aos-delay={200 * i}
            style={{
              background: "#f8f9fa",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div className="testimonial-header" data-aos="fade-down">
              <img
                src={d.img}
                alt={d.name}
                className="testimonial-img"
                data-aos="flip-up"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #007bff",
                }}
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{d.name}</h4>
              </div>
            </div>

            <div className="quote-icon" data-aos="zoom-out">
              ❝
            </div>

            <p
              className="testimonial-text"
              data-aos="fade-up"
              style={{
                fontStyle: "italic",
                fontSize: "1.4rem",
                lineHeight: "1.6rem",
                color: "#555",
              }}
            >
              {d.text}
            </p>

            <div className="testimonial-stars" data-aos="pulse">
              {[...Array(d.rating)].map((_, index) => (
                <FaStar key={index} color="#007bff" size={20} />
              ))}
            </div>
          </SwiperSlide>
        ))
      ) : (
        <p>Loading testimonials...</p>
      )}
    </Swiper>
  </div>
  );
};
