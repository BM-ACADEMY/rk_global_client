import React from "react";
import { motion } from "framer-motion";
import "../css/Service.css";

export const Services = ({ data }) => {
  return (
    <div id="services" className="services-container">
      <div className="services-wrapper">
        <div className="section-title">
          <h2>IT Services</h2>
          <p>IT services provide technology solutions like cybersecurity, cloud computing, and software development to enhance business efficiency and security.</p>
        </div>
        <div className="services-grid">
          {data
            ? data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="service-card"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={d.image} alt={d.name} className="service-image" />
                  <div className="service-content">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {/* <a href="#" className="read-more">Read more →</a> */}
                  </div>
                </motion.div>
              ))
            : "Loading..."}
        </div>
      </div>
      
      <style>{`
        .services-container {
          // padding: 50px 0;
          text-align: center;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .service-card {
          background: #111827;
          color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
          text-align: left;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .service-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .service-content {
          padding: 20px;
        }

        .service-content h3 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .service-content p {
          font-size: 16px;
          color: #e5e7eb;
          margin-bottom: 10px;
        }

        .read-more {
          display: inline-block;
          padding: 8px 16px;
          background-color: #2563eb;
          color: white;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
        }

        .read-more:hover {
          background-color: #1e40af;
        }
      `}</style>
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