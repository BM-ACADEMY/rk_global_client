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
    <div id="testimonials">
      <div className="section-title text-center">
        <h2>What our clients say</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={false}  // ✅ Removed indicators
        autoHeight={true}  // ✅ Auto height based on content
      >
        {testimonials.length > 0 ? (
          testimonials.map((d, i) => (
            <SwiperSlide key={`${d.name}-${i}`} className="testimonial-card">
              <div className="testimonial-header">
                <img src={d.img} alt={d.name} className="testimonial-img" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{d.name}</h4>
                </div>
              </div>
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">{d.text}</p>
              <div className="testimonial-stars">
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
