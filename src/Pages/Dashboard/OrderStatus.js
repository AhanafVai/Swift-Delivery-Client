import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import StatusTable from "./StatusTable";

const OrderStatus = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderState, setOrderState] = useState([]);
  useEffect(() => {
    fetch(
      "https://hidden-stream-08803.herokuapp.com/getOrderStatus?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderState(data));
  }, []);
  return (
    <div>
      <h1>DashBoard</h1>
      <StatusTable orderState={orderState} />
    </div>
  );
};

export default OrderStatus;
