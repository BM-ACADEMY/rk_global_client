// import { useState } from "react";
// import emailjs from "emailjs-com";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);

//     {
//       /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
//     }

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         e.target,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           clearState();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us an email and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" validate onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         onChange={handleChange}
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     onChange={handleChange}
//                   ></textarea>
//                   <p className="help-block text-danger"></p>
//                 </div>
//                 <div id="success"></div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-3 col-md-offset-1 contact-info">
//             <div className="contact-item">
//               <h3>Contact Info</h3>
//               <p>
//                 <span>
//                   <i className="fa fa-map-marker"></i> Address
//                 </span>
//                 {props.data ? props.data.address : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-phone"></i> Phone
//                 </span>{" "}
//                 {props.data ? props.data.phone : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span>
//                   <i className="fa fa-envelope-o"></i> Email
//                 </span>{" "}
//                 {props.data ? props.data.email : "loading"}
//               </p>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li>
//                     <a href={props.data ? props.data.facebook : "/"}>
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.twitter : "/"}>
//                       <i className="fa fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={props.data ? props.data.youtube : "/"}>
//                       <i className="fa fa-youtube"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="footer">
//         <div className="container text-center">
//           <p>
//             &copy; {new Date().getFullYear()} BMTECHx.in All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import "../css/Contact.css";

export const Contact = ({ data = {} }) => {
  const {
    logo,
    address,
    phone,
    email,
    mobile,
    instagram,
    linkedin,
    description,
    usefulLinks = [],
    ourWorks = [],
  } = data;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="contact" className="contact-container">
        <div className="container">
          <div className="py-md-4 py-lg-4">
            <div className="contact-content">
              {/* First Column: Logo and Description */}
              <div
                className="contact-column"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  style={{
                    padding: "2px",
                    marginBottom: "5px",
                    borderRadius: "4px",
                    marginRight: "15px",
                  }}
                >
                  <img src={logo} alt="Company Logo" className="logo-img" />
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || "Loading...",
                  }}
                />
              </div>

              {/* Second Column: Useful Links */}
              <div
                className="contact-column"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Useful Links</h3>
                <ul style={{display:"flex",flexDirection:"column",gap:"8px",fontWeight:"bold"}}>
                  {usefulLinks.length > 0 ? (
                    usefulLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} className="contact-link">
                          {link.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>Loading links...</li>
                  )}
                </ul>
              </div>

              {/* Third Column: Our Works */}
              <div
                className="contact-column"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Our Works</h3>
                <ul style={{display:"flex",flexDirection:"column",gap:"8px",fontWeight:"bold"}}>
                  {ourWorks.length > 0 ? (
                    ourWorks.map((work, index) => (
                      <li key={index}>
                        <a href={`#${work.url}`} className="contact-link">
                          {work.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>Loading works...</li>
                  )}
                </ul>
              </div>

              {/* Fourth Column: Contact Info */}
              <div
                className="contact-column"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Contact Info</h3>
                <div className="mb-3">
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{ width: "100%" }}
                  >
                    <i className="fa fa-map-marker"></i>
                    <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
                      Address
                    </span>
                  </div>
                  <p className="mb-0" style={{ marginTop: "8px" }}>
                    {address || "4321 California St, San Francisco, CA 12345"}
                  </p>
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-phone"></i>
                    <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
                      Phone
                    </span>
                  </div>
                  <p className="mb-0" style={{ marginTop: "8px" }}>
                    {phone || "+1 123 456 1234"}
                  </p>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-envelope"></i>
                    <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
                      Email
                    </span>
                  </div>
                  <p className="mb-0" style={{ marginTop: "8px" }}>
                    {email || "info@company.com"}
                  </p>
                </div>

                <div
                  className="social"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <a href={instagram || "#"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href={linkedin || "#"}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-icons">
        <a
          href={`https://wa.me/${mobile}`}
          className="floating-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
        {isVisible && (
          <button className="floating-btn arrow-up" onClick={scrollToTop}>
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </div>

      {/* Footer */}
      <footer id="footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://bmtechx.in/">BMTECHx.in</a> All Rights Reserved
        </p>
      </footer>
    </div>
  );
};
