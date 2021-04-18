import React, { useEffect, useState } from "react";

import TestimonialInfo from "./TestimonialInfo";
import "./Testimonial.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hidden-stream-08803.herokuapp.com/getReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="testimony ">
      <h1>Customers Feedback</h1>
      <div className="mt-5 d-md-flex justify-content-center mx-auto row">
        {reviews.map((review) => (
          <TestimonialInfo review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
