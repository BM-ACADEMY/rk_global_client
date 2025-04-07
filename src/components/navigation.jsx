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
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // for sub-menu
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
        <div className="" style={{ marginLeft: "20px", marginRight: "20px" }}>
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

            <a
              className="navbar-brand page-scroll"
              href="#page-top"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={logo}
                alt="Company Logo"
                className="logo"
                style={{
                  maxHeight: "60px", // Reduced height
                  width: "120px", // Reduced width
                  marginRight: "10px",
                }}
              />
              <div
              className="tagline"
                style={{
                  fontSize: "10px",
                  color: "#00378a",
                  // marginTop: "5px",
                  marginLeft: "8rem", // Applied only to the text
                  textAlign: "start",
                }}
              >
                Ultimate Of All Time
              </div>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className={activeSection === "header" ? "active" : ""}>
                <a href="#header" className="page-scroll">
                  HOME
                </a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a href="#about" className="page-scroll">
                  ABOUT US
                </a>
              </li>

              {/* IT Service Dropdown */}
              <li
                className={`dropdown ${
                  openDropdown === "it-service" ? "open" : ""
                }`}
                onMouseEnter={() => !isMobile && setOpenDropdown("it-service")}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              >
                <a
                  href="#"
                  className="dropdown-toggle"
                  onClick={() => handleDropdown("it-service")}
                >
                  IT SERVICE <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#services">Digital Transformation</a>
                  </li>
                  <li>
                    <a href="#services">Digital Engineering</a>
                  </li>
                  <li>
                    <a href="#services">Managed IT</a>
                  </li>
                  <li>
                    <a href="#services">Staff Augmentation</a>
                  </li>
                </ul>
              </li>

              {/* Metal Fabrication Dropdown */}
              <li
                className={`dropdown ${
                  openDropdown === "metal-fabrication" ? "open" : ""
                }`}
                onMouseEnter={() =>
                  !isMobile && setOpenDropdown("metal-fabrication")
                }
                onMouseLeave={() => {
                  if (!isMobile) {
                    setOpenDropdown(null);
                    setOpenSubDropdown(null); // close sub when parent closes
                  }
                }}
              >
                <a
                  href="#"
                  className="dropdown-toggle"
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      const isOpen = openDropdown === "metal-fabrication";
                      setOpenDropdown(isOpen ? null : "metal-fabrication");
                      if (isOpen) setOpenSubDropdown(null); // close sub if parent closes
                    }
                  }}
                >
                  Main Industrial and Commercial Divisions{" "}
                  <b className="caret"></b>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a href="#metal">Import and Export of Machinery & Spares</a>
                  </li>
                  <li>
                    <a href="#metal">Fire and Safety Products</a>
                  </li>
                  <li>
                    <a href="#metal">Material Fabrications</a>
                  </li>
                  <li>
                    <a href="#metal">
                      Industrial Lab Equipment (Quality Control)
                    </a>
                  </li>

                  <li
                    className={`dropdown-submenu ${
                      openSubDropdown === "sub-metal" ? "open" : ""
                    }`}
                    onMouseEnter={() => {
                      if (!isMobile) setOpenSubDropdown("sub-metal");
                    }}
                    onMouseLeave={() => {
                      if (!isMobile) setOpenSubDropdown(null);
                    }}
                  >
                    <a
                      href="#metal-fabrication"
                      onClick={(e) => {
                        if (isMobile) {
                          e.preventDefault();
                          setOpenSubDropdown(
                            openSubDropdown === "sub-metal" ? null : "sub-metal"
                          );
                        }
                      }}
                    >
                      Metal Fabrication
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#metal">CNC Cutting Products</a>
                      </li>
                      <li>
                        <a href="#metal">VNC Cutting Products</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Career link triggers modal */}
              <li>
                <a href="#" onClick={() => setOpenModal(true)}>
                  ENQUIRY
                </a>
              </li>

              <li className={activeSection === "contact" ? "active" : ""}>
                <a href="#contact" className="page-scroll">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="md"
        fullWidth
      >
        <JobApplicationForm handleClose={() => setOpenModal(false)} />
      </Dialog>
    </>
  );
};
