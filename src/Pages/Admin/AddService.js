import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

const AddService = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
      description: data.description,
    };
    console.log(serviceData);

    fetch("https://hidden-stream-08803.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      if (res) {
        alert("Service Added");
      }
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "69ee8e3dd464f45460eada435d7d8652");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="was-validated card " onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body ">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Service Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Service Name"
            {...register("name")}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Service pricing
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="price"
            {...register("price")}
            required
          />
        </div>
        <div className="mb-3">
          <label for="validationTextarea" className="form-label">
            Description
          </label>
          <textarea
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Description"
            required
            {...register("description")}
          ></textarea>
        </div>

        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            aria-label="file example"
            required
            onChange={handleImageUpload}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-outline-success " type="submit">
            <span className="m-2">Upload </span> <FaUpload />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddService;
