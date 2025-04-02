
import React from "react";

export const About = (props) => {
  return (
    <div id="about" >
      <div className="container">
        {/* Row 1: Image and About Paragraph */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Us" />
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.Paragraph.join(" ") : "loading..."}</p>
            </div>
          </div>
        </div>

        {/* Row 2: Our Mission and Our Vision */}
        <div
          className="row text-white py-5 mb-4"
          style={{ background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)" ,marginTop:"5px"}}
        >
          <div className="col-md-6 p-4" style={{padding:"8px"}}>
            <h3 style={{color:"white",textAlign:"center"}}> Our Mission</h3>
            <blockquote className="p-3" style={{color:"white"}}> {props.data ? props.data.Mission : "loading..."}</blockquote>
          </div>
          <div className="col-md-6 px-4" style={{padding:"8px"}}>
            <h3 style={{color:"white",textAlign:"center"}}>Our Vision</h3>
            <blockquote className="p-3 " style={{color:"white"}}> {props.data ? props.data.Vision : "loading..."}</blockquote>
          </div>
        </div>

        {/* Row 3: Core Values */}
        <div className="row py-5" style={{ backgroundColor: "#9ACD32", marginBottom: "1rem", marginTop: "5px" }}>
          <div className="col-md-12  text-white">
            <h3 className="text-center" style={{color:"white"}}>Core Values</h3>
            <ul className="list-unstyled" style={{color:"white",padding:"5px"}}>
              {props.data
                ? props.data.CoreValues.map((value, index) => (
                    <li key={index} className="py-1">✔ {value}</li>
                  ))
                : "loading..."}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

