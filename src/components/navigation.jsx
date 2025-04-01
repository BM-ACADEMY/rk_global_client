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


import React from "react";

export const Navigation = (props) => {
  const {logo}= props.data;
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Navbar Header - Logo & Mobile Toggle */}
        <div className="navbar-header">
          {/* Mobile Menu Button */}
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

          {/* Logo with Home Link */}
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center" }}>
            <img 
              src={logo} 
              alt="Company Logo" 
              style={{ maxHeight: "150px", width: "200px", marginRight: "10px" }} 
            />
          </a>
        </div>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#header" className="page-scroll">HOME</a></li>
            <li><a href="#about" className="page-scroll">ABOUT US</a></li>
            
            {/* IT Service with Dropdown */}
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">IT SERVICE <b className="caret"></b></a>
              <ul className="dropdown-menu d-flex flex-column gap-4">
                <li><a href="#services">Industrial & Commercial Division</a></li>
                <li><a href="#services">Safety Equipment</a></li>
                <li><a href="#services">Material Import & Export</a></li>
                <li><a href="#services">Metal Fabrication & Engineering</a></li>
              </ul>
            </li>
            
            <li><a href="#fabrication" className="page-scroll">METAL FABRICATION & ENGINEERING</a></li>
            <li><a href="#career" className="page-scroll">CAREER</a></li>
            <li><a href="#contact" className="page-scroll">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

