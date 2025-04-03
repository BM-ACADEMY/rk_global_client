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
  // Provide an empty object as default
  const {
    logo,
    address,
    phone,
    email,
    mobile,
    facebook,
    twitter,
    youtube,
    instagram,
    linkedin,
    description,
    usefulLinks,
    ourWorks,
  } = data; // Now it won't throw an error
  const [isVisible, setIsVisible] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("+91 1234567890");
  // Function to handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="contact" style={{ display: "flex",  }}>
        <div className="" style={{ width: "100%" }}>
          <div className="container py-md-4 py-lg-4">
            <div className="row justify-content-center align-items-center g-5">
              {/* First Column: Logo and Description */}
              <div className="col-8 col-md-3 col-lg-3  text-md-start">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="img-fluid mb-2"
                  style={{ width: "250px", height: "200px" }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || "loading...",
                  }}
                />
              </div>

              {/* Second Column: Useful Links */}
              <div className="col-12 col-md-6 col-lg-3 ">
                <h3>Useful Links</h3>
                <ul className="list-unstyled">
                  {usefulLinks?.map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.url.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-decoration-none "
                        style={{ color: "white" }}
                      >
                        {link.name}
                      </a>
                    </li>
                  )) || "Loading links..."}
                </ul>
              </div>

              {/* Third Column: Our Works */}
              <div className="col-12 col-md-6 col-lg-3 ">
                <h3>Our Works</h3>
                <ul className="list-unstyled">
                  {ourWorks?.map((work, index) => (
                    <li key={index}>
                      <a
                        href={`#${work.url.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-decoration-none "
                        style={{ color: "white" }}
                      >
                        {work.name}
                      </a>
                    </li>
                  )) || "Loading works..."}
                </ul>
              </div>

              {/* Fourth Column: Address */}
              <div className="col-12 col-md-6 col-lg-3 ">
                <h3>Contact Info</h3>
                <p style={{display:"flex",gap:"3px",alignItems:"center"}}>
                  <i className="fa fa-map-marker me-2"></i>
                  <span>Address:</span> {address || "Loading address..."}
                </p>
                <p style={{display:"flex",gap:"3px",alignItems:"center"}}>
                  <i className="fa fa-phone me-2"></i>
                  <span>Phone:</span> {phone || "Loading phone..."}
                </p>
                <p style={{display:"flex",gap:"3px",alignItems:"center"}}>
                  <i className="fa fa-envelope-o me-2"></i>
                  <span>Email:</span> {email || "Loading email..."}
                </p>
                <div className="row">
                  <div className="social">
                    <ul style={{ listStyle: "none", padding: "0" }}>
                      <li style={{ display: "inline", margin: "0 10px" }}>
                        <a href={instagram || "https://instagram.com"}>
                          <i
                            className="fa fa-instagram"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </a>
                      </li>
                      <li style={{ display: "inline", margin: "0 10px" }}>
                        <a href={linkedin || "https://linkedin.com"}>
                          <i
                            className="fa fa-linkedin"
                            style={{ fontSize: "24px" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

     
          {/* <div className="col-md-12"></div> */}

          {/* Floating WhatsApp & Arrow Up Buttons */}
          <div className="floating-icons">
            {/* WhatsApp Floating Button */}
            <a
              href={`https://wa.me/+91${mobile}`}
              className="floating-btn whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp"></i>
            </a>

            {/* Arrow Up Floating Button */}
            {isVisible && (
              <button className="floating-btn arrow-up" onClick={scrollToTop}>
                <i className="fa fa-arrow-up"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        id="footer"
        style={{
          backgroundColor: "#f1f1f1",
          padding: "5px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://bmtechx.in/">BMTECHx.in</a> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
