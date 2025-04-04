// import React from "react";

// export const Header = (props) => {
  
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 col-md-offset-2 intro-text">
//                 <h1>
//                   {props.data ? props.data.title : "Loading"}
//                   <span></span>
//                 </h1>
//                 <p>{props.data ? props.data.paragraph : "Loading"}</p>
//                 <a
//                   href="#features"
//                   className="btn btn-custom btn-lg page-scroll"
//                 >
//                   Learn More
//                 </a>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Header.css";
import { Dialog } from "@mui/material";
import JobApplicationForm from "../components/Career";

export const Header = ({ data, carousel }) => {
  // Hooks must be at the top level
  const [openModal, setOpenModal] = useState(false);

  // Check if carousel data exists
  if (!carousel?.slides?.length) return <h1>Loading...</h1>;

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="row">
            <div className="col-md-8 col-lg-12">
              {/* Carousel */}
              <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                showIndicators={true}
                // renderArrowPrev={(clickHandler, hasPrev) =>
                //   hasPrev && (
                //     <button
                //       className="custom-prev-button"
                //       onClick={clickHandler}
                //       aria-label="Previous Slide"
                //     >
                //       ❮
                //     </button>
                //   )
                // }
                // renderArrowNext={(clickHandler, hasNext) =>
                //   hasNext && (
                //     <button
                //       className="custom-next-button"
                //       onClick={clickHandler}
                //       aria-label="Next Slide"
                //     >
                //       ❯
                //     </button>
                //   )
                // }
              >
                {carousel.slides.map((slide, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image"
                    />
                    <h1>{slide.text}</h1>
                    <p>{slide.description}</p>
                    <a
                      href="#"
                      className="btn btn-custom btn-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(true);
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="md" fullWidth>
        <JobApplicationForm handleClose={() => setOpenModal(false)} />
      </Dialog>
    </header>
  );
};

