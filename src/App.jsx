// import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <div>
//       <Navigation data={landingPageData.Header || {}} />
//       <Header data={landingPageData.Header || {}} />
//       {/* <Features data={landingPageData.Features} /> */}
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       {/* <Gallery data={landingPageData.Gallery} /> */}
//       <Testimonials data={landingPageData.Testimonials || []} />
//       {/* <Team data={landingPageData.Team} /> */}
//       <Contact data={landingPageData.Contact} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {MetalFabric} from "./components/MetalFabric";
import { WhyChooseUs } from "./components/WhychooseUs";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation data={landingPageData.Header || {}} />
      <Header data={landingPageData.Header || {}}  carousel={landingPageData.HeaderData || {}}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <MetalFabric data={landingPageData.MetalFabric || []} />
      <Testimonials data={landingPageData.Testimonials || []} />
      <WhyChooseUs data={landingPageData.WhyChooseUs} />
      <Contact data={landingPageData.Contact} />
   
      
    </div>
  );
};

export default App;
