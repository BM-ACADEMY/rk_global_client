import React, { useState ,useEffect} from "react";
import "../css/MetalFabric.css";

export const MetalFabric = ({ data }) => {
    const [selectedService, setSelectedService] = useState(null);
  
    useEffect(() => {
      if (data?.length) {
        setSelectedService(data[0]); // Set default selection when data arrives
      }
    }, [data]);
  
    if (!data?.length) {
      return <p className="text-center">Loading services...</p>;
    }
  
    return (
      <div className="container my-5 " id="metal" >
        <div className="row justify-content-center align-item-center">
          <div className="col-lg-10">
            <div className="metalfabric-container shadow">
              {/* Left Sidebar */}
              <div className="sidebar">
                {data?.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`service-item ${
                      selectedService?.id === service?.id ? "active" : ""
                    }`}
                  >
                    <i className={`${service?.icon} fa-lg me-3`}></i>
                    <span className="text-white">{service?.title}</span>
                  </div>
                ))}
              </div>
  
              {/* Right Content Section */}
              <div className="content">
                <h2 className="title">{selectedService?.title}</h2>
                <p className="description">{selectedService?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
