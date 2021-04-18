import React from "react";
import { useForm } from "react-hook-form";

const Reviews = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://hidden-stream-08803.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Thanks for your feedback");
        }
      });

    console.log(data);
  };

  return (
    <div>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="e-mail"
            {...register("email")}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comment*"
            {...register("comment")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Reviews;
