import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import ProcessPayment from "./ProcessPayment";

const Ship = () => {
  const [orderInfo, setOrderInfo] = useContext(UserContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [customerInfo, setCustomerInfo] = useState(null);

  const onSubmit = (data) => {
    setCustomerInfo(data);
    console.log(data);
  };

  const handleShipment = (paymentId) => {
    const orderDetail = {
      description: orderInfo.description,
      email: orderInfo.email,
      paymentId,
      customer: customerInfo,
    };

    fetch("https://hidden-stream-08803.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order in process");
        }
      });
  };

  return (
    <div className="row ">
      <div
        style={{ display: customerInfo ? "none" : "block" }}
        className="col-md-6"
      >
        <form className="row " onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
              {...register("name")}
            />
          </div>
          <div className="mb-3 ">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="email"
              value={orderInfo.email}
            />
          </div>
          <div className="mb-3 ">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="service name"
              value={orderInfo.service}
              {...register("service")}
            />
          </div>

          <div className="mb-3">
            <h4>Your cost: ${orderInfo.price}</h4>
          </div>
          <div className="mb-3">
            <h3>Payment method</h3>
            <select {...register("Payment")}>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input type="submit" />
        </form>
      </div>
      <div
        className="col-md-6"
        style={{ display: customerInfo ? "block" : "none", width: "30rem" }}
      >
        <ProcessPayment handleShipment={handleShipment} />
      </div>
    </div>
  );
};

export default Ship;
