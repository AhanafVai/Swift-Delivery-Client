import React, { useEffect, useState } from "react";

import ServiceInfo from "./ServiceInfo";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-stream-08803.herokuapp.com/getService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#ededed" }} className="   pt-5 ">
      <h4 className="mt-3  text-danger">Our Services</h4>
      <h1>What We Do</h1>
      <div className="mt-5  d-md-flex justify-content-center mx-auto row">
        {services.map((service) => (
          <ServiceInfo key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
