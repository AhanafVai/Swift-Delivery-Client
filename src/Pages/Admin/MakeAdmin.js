import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminInfo = {
      email: data.email,
    };

    fetch("https://hidden-stream-08803.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(adminInfo),
    }).then((res) => {
      if (res) {
        alert("New admin set");
      }
    });
  };

  return (
    <form className="card " onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body row">
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register("email")}
          />
        </div>
        <button className="btn btn-outline-success" type="submit">
          Add Admin
        </button>
      </div>
    </form>
  );
};

export default MakeAdmin;
