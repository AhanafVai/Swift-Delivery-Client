import React from "react";

const TestimonialInfo = ({ review }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <h4 className="card-title mt-5">Customer: {review.name}</h4>
        <h5 className="card-title mt-5">Email: {review.email}</h5>
        <div className="card-body">
          <p className="card-text text-md-start">Comment: {review.comment}</p>
          <p className="card-text"> Read more > </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialInfo;
