import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable";

const Orderlist = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://hidden-stream-08803.herokuapp.com/getOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="col-md-10 p-md-5">
      <OrderTable orders={orders} />
    </div>
  );
};

export default Orderlist;
