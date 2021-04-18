import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import TrackingContainer from "./TrackingContainer";

const Tracking = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    fetch(
      "https://hidden-stream-08803.herokuapp.com/getPersonalOrder?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row d-flex justify-content-center">
      {orders.map((order) => (
        <TrackingContainer key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Tracking;
