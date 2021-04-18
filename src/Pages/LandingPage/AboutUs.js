import React from "react";
import Service from "../../images/Service truck.jpg";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      style={{ height: "100vh" }}
      className="mt-3 d-md-flex align-items-center justify-content-center mx-auto row  "
    >
      <div className="col-md-5 col-sm-12">
        <img src={Service} className="img-fluid" />
      </div>
      <div className=" mt-4 pt-5 text-md-start col-md-4">
        <h5 style={{ color: "red" }}>About us</h5>
        <h1>
          Global Turnkey <br /> Logistics
        </h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi
          deleniti vero dolor incidunt? In corporis inventore fuga voluptatibus
          eveniet.
        </p>

        <h4 className="text-center">We Make Guarantee</h4>

        <div className="d-md-flex ">
          <div>
            <p>
              <b>Quality Control</b>
            </p>
            <p className="text-wrap" style={{ width: "15rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              est.
            </p>
          </div>
          <div>
            <p>
              <b>Professional Management</b>
            </p>
            <p className="text-wrap" style={{ width: "15rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              est.
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-danger ">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
