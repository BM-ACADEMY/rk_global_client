// import React from "react";

// export const Navigation = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//       <div className="navbar-header">
//   {/* <button
//     type="button"
//     className="navbar-toggle collapsed"
//     data-toggle="collapse"
//     data-target="#bs-example-navbar-collapse-1"
//   >
//     <span className="sr-only">Toggle navigation</span>
//     <span className="icon-bar"></span>
//     <span className="icon-bar"></span>
//     <span className="icon-bar"></span>
//   </button> */}

//   {/* Logo with link to Home */}
//   <a className="navbar-brand page-scroll" href="#page-top">
//     <img 
//       src={`${process.env.PUBLIC_URL}/img/logo.png`} 
//       alt="Company Logo" 
//       style={{ height: "150px" ,width:"200px" }} 
//     />
//   </a>
// </div>


//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#features" className="page-scroll">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="page-scroll">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#portfolio" className="page-scroll">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="#team" className="page-scroll">
//                 Team
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="page-scroll">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useState, useEffect } from "react";
import "../css/Navigation.css";
import JobApplicationForm from "../components/Career"; 
import { Dialog } from "@mui/material";

export const Navigation = (props) => {
  const { logo } = props.data;
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust midpoint for better detection
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.getAttribute("id");
        }
      });
  
      setActiveSection(currentSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set the initial active section
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // Handle dropdown toggle based on device type
  const handleDropdown = (menu) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center" }}>
              <img 
                src={logo} 
                alt="Company Logo" 
                style={{ maxHeight: "150px", width: "200px", marginRight: "10px" }} 
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className={activeSection === "header" ? "active" : ""}>
                <a href="#header" className="page-scroll">HOME</a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href="#about" className="page-scroll">ABOUT US</a>
              </li>

              {/* IT Service Dropdown */}
              <li 
                className={`dropdown ${openDropdown === "it-service" ? "open" : ""}`}
                onMouseEnter={() => !isMobile && setOpenDropdown("it-service")}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              >
                <a href="#" className="dropdown-toggle" onClick={() => handleDropdown("it-service")}>
                  IT SERVICE <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#services">Digital Transformation</a></li>
                  <li><a href="#services">Digital Engineering</a></li>
                  <li><a href="#services">Managed IT</a></li>
                  <li><a href="#services">Staff Augmentation</a></li>
                </ul>
              </li>

              {/* Metal Fabrication Dropdown */}
              <li 
                className={`dropdown ${openDropdown === "metal-fabrication" ? "open" : ""}`}
                onMouseEnter={() => !isMobile && setOpenDropdown("metal-fabrication")}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              >
                <a href="#" className="dropdown-toggle" onClick={() => handleDropdown("metal-fabrication")}>
                  METAL FABRICATION & ENGINEERING <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#metal">Industrial & Commercial Division</a></li>
                  <li><a href="#metal">Safety Equipment</a></li>
                  <li><a href="#metal">Material Import & Export</a></li>
                  <li><a href="#metal">Metal Fabrication & Engineering</a></li>
                </ul>
              </li>

              {/* Career link triggers modal */}
              <li>
                <a href="#" onClick={() => setOpenModal(true)}>
                  APPLY 
                </a>
              </li>
              
              <li className={activeSection === "contact" ? "active" : ""}>
                <a href="#contact" className="page-scroll">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="md" fullWidth>
        <JobApplicationForm handleClose={() => setOpenModal(false)} />
      </Dialog>
    </>
  );
};




