import React from "react";

export const About = ({ data }) => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* About Section */}
        <div className="row align-items-center bg-white shadow-lg rounded p-4">
          <div className="col-md-6 text-center">
            <img
              src="img/about.jpg"
              alt="About Us"
              className="img-fluid w-100 rounded shadow-sm about-img"
              style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-dark">About Us</h2>
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{
                __html: data ? data.Paragraph : "Loading...",
              }}
              style={{ lineHeight: "3rem" }}
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="row mt-4" style={{ marginTop: "10px" }}>
          <div className="col-md-6">
            <div
              className=" text-white p-4 rounded shadow-sm"
              style={{
                background:
                  "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                padding: "10px",
              }}
            >
              <h2 className="fw-bold" style={{ color: "white" }}>
                Our Mission
              </h2>
              <p className="fst-italic" style={{ color: "white" }}>
                {data ? data.Mission.Text : "Loading..."}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="bg-secondary text-white p-4 rounded shadow-sm"
              style={{ backgroundColor: "#9ACD32", padding: "10px" }}
            >
              <h2 className="fw-bold" style={{ color: "white" }}>
                Our Vision
              </h2>
              <p className="fst-italic" style={{ color: "white" }}>
                {data ? data.Vision.Text : "Loading..."}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className="mt-4 bg-white p-4 rounded shadow-lg"
          style={{ marginTop: "10px" }}
        >
          <h2 className="fw-bold text-dark">Core Values</h2>
          <ul className="list-group list-group-flush">
            {data ? (
              data.CoreValues.map((value, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center"
                >
                  <span className="text-primary me-2">✔</span> {value}
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
