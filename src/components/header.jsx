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


  import React from "react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import "../css/Header.css";

  export const Header = ({ data ,carousel}) => {
    if (!carousel || !carousel.slides) return <h1>Loading...</h1>;

   
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="">
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
                  renderArrowPrev={(clickHandler, hasPrev) =>
                    hasPrev && (
                      <button className="custom-prev-button" onClick={clickHandler}>
                        ❮
                      </button>
                    )
                  }
                  renderArrowNext={(clickHandler, hasNext) =>
                    hasNext && (
                      <button className="custom-next-button" onClick={clickHandler}>
                        ❯
                      </button>
                    )
                  }
                >
                  {carousel.slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                      <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-image" />
                      <h1>{slide.text}</h1>
                      <p>{slide.description}</p>
                      <a href="#features" className="btn btn-custom btn-lg">
                        Learn More
                      </a>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
  };
