import React from "react";
import CountUp from "react-countup";
import "./Counter.css";

const Counter = () => {
  return (
    <div style={{ width: "100%" }} className="bg-counter">
      <div
        className=" row pod mx-auto layer-counter"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{ fontSize: "6rem", color: "goldenrod" }}
          className="col-md-3  mx-auto mb-2 "
        >
          <CountUp end={2159} suffix={`+`} duration={10} />
          <h3>Satisfied Customers</h3>
        </div>
        <div
          style={{ fontSize: "8rem", color: "goldenrod" }}
          className="col-md-3  mx-auto mb-2 "
        >
          <CountUp end={21} duration={10} />
          <h3>Offices</h3>
        </div>
        <div
          style={{ fontSize: "8rem", color: "goldenrod" }}
          className="col-md-3  mx-auto mb-2 "
        >
          <CountUp end={4} suffix={".9"} duration={10} />
          <h3>Review</h3>
        </div>
      </div>
    </div>
  );
};

export default Counter;
