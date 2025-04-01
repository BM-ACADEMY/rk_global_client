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
import React from "react";

export const Contact = ({ data = {} }) => {
  // Provide an empty object as default
  const {
    logo,
    address,
    phone,
    email,
    facebook,
    twitter,
    youtube,
    instagram,
    linkedin,
    description,
    usefulLinks,
    ourWorks,
  } = data; // Now it won't throw an error

  return (
    <div>
      <div id="contact" style={{ display: "flex", justifyContent: "center" }}>
        <div className="container" style={{ width: "100%" }}>
          <div
            className="row"
            style={{
              display: "flex",
              gap: "100px",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {/* First Column: Logo and Description */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="Company Logo"
                style={{
                  width: "250px",
                  marginBottom: "10px",
                  height: "200px",
                }}
              />
              <p>{description || "Loading description..."}</p>
            </div>

            {/* Second Column: Useful Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3>Useful Links</h3>
              <ul>
                {usefulLinks?.map((link, index) => (
                  <li key={index} style={{ cursor: "pointer" }}>
                    <a
                   href={`#${link.url.replace(/\s+/g, '-').toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {link.name}
                    </a>
                  </li>
                )) || "Loading links..."}
              </ul>
            </div>

            {/* Third Column: Our Works */}
            <div
  style={{
    display: "flex",
    flexDirection: "column",
  }}
>
  <h3>Our Works</h3>
  <ul>
    {ourWorks?.map((work, index) => (
      <li key={index} style={{ cursor: "pointer" }}>
        <a
          href={`#${work.url.replace(/\s+/g, '-').toLowerCase()}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {work.name}
        </a>
      </li>
    )) || "Loading works..."}
  </ul>
</div>


            {/* Fourth Column: Address */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address:
                </span>{" "}
                {address || "Loading address..."}
              </p>
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone:
                </span>{" "}
                {phone || "Loading phone..."}
              </p>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email:
                </span>{" "}
                {email || "Loading email..."}
              </p>
            </div>
          </div>

          {/* Bottom Social Icons */}
          <div className="col-md-12">
            <div className="row">
              <div className="social" style={{ textAlign: "center" }}>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ display: "inline", margin: "0 10px" }}>
                    <a href={facebook || "#"}>
                      <i
                        className="fa fa-facebook"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </a>
                  </li>
                  <li style={{ display: "inline", margin: "0 10px" }}>
                    <a href={youtube || "#"}>
                      <i
                        className="fa fa-youtube"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </a>
                  </li>
                  <li style={{ display: "inline", margin: "0 10px" }}>
                    <a href={instagram || "#"}>
                      <i
                        className="fa fa-instagram"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </a>
                  </li>
                  <li style={{ display: "inline", margin: "0 10px" }}>
                    <a href={linkedin || "#"}>
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

      {/* Footer */}
      <div
        id="footer"
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px 0",
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
