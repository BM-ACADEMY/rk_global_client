import React from "react";
import "../css/About.css";
const values = [
  {
    id: 1,
    text: "Innovation & Excellence – Continuously pushing the boundaries to deliver high-performance solutions.",
    color: "#f4b400",
  },
  {
    id: 2,
    text: "Client-Centric Approach – Customizing services to align with unique business needs and goals.",
    color: "#ff6d00",
  },
  {
    id: 3,
    text: "Integrity & Accountability – Conducting business with transparency, professionalism, and responsibility.",
    color: "#ab47bc",
  },
  {
    id: 4,
    text: "Global Perspective with Local Expertise – Bridging markets with deep industry insights and global best practices.",
    color: "#5c6bc0",
  },
  {
    id: 5,
    text: "Sustainability & Ethical Growth – Driving business success while ensuring environmental and social responsibility.",
    color: "#26a69a",
  },
];

export const About = ({ data }) => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* About Section */}
        <div
          className="row align-items-center bg-white shadow-lg rounded p-4"
          data-aos="fade-up"
        >
          <div className="col-md-6 text-center" data-aos="fade-right">
            <img
              src="img/about.jpg"
              alt="About Us"
              className="img-fluid w-100 rounded shadow-sm about-img"
              style={{ maxWidth: "100%", height: "35%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold text-dark">About Us</h2>
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{
                __html: data ? data.Paragraph : "Loading...",
              }}
              style={{ lineHeight: "3.4rem" }}
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-container" data-aos="fade-down">
          {/* Mission Card */}
          <div
            className="mission-card"
            data-aos="zoom-in-right"
            data-aos-delay="200"
          >
            <div className="card-content-mission">
              <div className="icon">
                <i className="fa fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>{data ? data.Mission.Text : "Loading..."}</p>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="connector" data-aos="zoom-in" data-aos-delay="400">
            <div className="circle"></div>
          </div>

          {/* Vision Card */}
          <div
            className="vision-card"
            data-aos="zoom-in-left"
            data-aos-delay="600"
          >
            <div className="card-content-vision">
              <div className="icon">
              <i className="fa fa-lightbulb-o"></i> 
              </div>
              <h2>Our Vision</h2>
              <p>{data ? data.Vision.Text : "Loading..."}</p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-container" data-aos="fade-zoom-in">
          {/* Left Side - Image */}
          <div
            className="core-values-image"
            data-aos="flip-up"
            data-aos-delay="300"
            style={{display: "flex" ,justifyContent:"center",alignItems:"center"}}
          >
            <div className="image-wrapper">
              <img src="img/core-values.jpg" alt="Core Values" />
            </div>
          </div>

          {/* Right Side - Core Values List */}
          <div className="core-values-list">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="core-value-item"
                data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
                data-aos-delay={200 * value.id}
              >
                {/* Bullet Circle */}
                <div
                  className="bullet-circle"
                  style={{ background: value.color }}
                  data-aos="pulse"
                  data-aos-delay="500"
                >
                  {value.id}
                </div>
                {/* Value Text */}
                <span className="core-value-text">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
