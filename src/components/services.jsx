import React from "react";
import { motion } from "framer-motion";
import "../css/Service.css";

export const Services = ({ data }) => {
  return (
    <div id="services" className="services-container" data-aos="fade-up">
    <div className="services-wrapper">
      <div className="section-title" data-aos="zoom-in">
        <h2>IT Services</h2>
        <p>
        Enterprise IT Services That Empower Innovation and Operational Excellence.Your Strategic IT Partner for Transformation and Growth.
        </p>
      </div>

      <div className="services-grid">
        {data
          ? data.map((d, i) => (
              <motion.div
                key={`${d.name}-${i}`}
                className="service-card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                data-aos={
                  i % 3 === 0
                    ? "fade-right"
                    : i % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-delay={100 * i}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="service-image"
                  data-aos="flip-up"
                  data-aos-delay={200 * i}
                />
                <div className="service-content">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </motion.div>
            ))
          : "Loading..."}
      </div>
    </div>
  </div>
  );
};



// import React from "react";

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Our Services</h2>
//           <p>
//             At RK Global Associates, we offer tailored solutions to improve operational efficiency across a range of industries.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <i className={d.icon}></i>
//                   <div className="service-desc">
//                     <h3>{d.name}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };





// import { useState } from "react";
// import "../css/Navigation.css";
// import { AppBar, Toolbar, Button, Menu, MenuItem, Dialog } from "@mui/material";
// import JobApplicationForm from "../components/Career"; // Import modal

// export const Navigation = (props) => {
//   const { logo } = props.data;
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false); 
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const toggleDropdown = (menu, event) => {
//     event.preventDefault(); // Prevent page reload on href="#"
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (
//     <>
//       <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//         <div className="container">
//           <div className="navbar-header">
//             <button
//               type="button"
//               className="navbar-toggle collapsed"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbar-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//             </button>

//             <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center" }}>
//               <img 
//                 src={logo} 
//                 alt="Company Logo" 
//                 style={{ maxHeight: "150px", width: "200px", marginRight: "10px" }} 
//               />
//             </a>
//           </div>

//           <div className="collapse navbar-collapse" id="navbar-menu">
//             <ul className="nav navbar-nav navbar-right">
//               <li><a href="#header" className="page-scroll">HOME</a></li>
//               <li><a href="#about" className="page-scroll">ABOUT US</a></li>

//               {/* Dropdown with working toggle */}
//               <li className={`dropdown ${openDropdown === "it-service" ? "show" : ""}`}>
//                 <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown("it-service", e)}>
//                   IT SERVICE <b className="caret"></b>
//                 </a>
//                 <ul className={`dropdown-menu ${openDropdown === "it-service" ? "show" : ""}`}>
//                   <li><a href="#service1">Service 1</a></li>
//                   <li><a href="#service2">Service 2</a></li>
//                 </ul>
//               </li>

//               {/* Career link triggers modal */}
//               <li>
//                 <a href="#"  onClick={handleOpenModal}>
//                   CAREER
//                 </a>
//               </li>

//               <li><a href="#contact" className="page-scroll">CONTACT</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
//         <JobApplicationForm handleClose={handleCloseModal} />
//       </Dialog>
//     </>
//   );
// };