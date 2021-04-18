import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Admin from "../Admin/Admin";

import OrderStatus from "./OrderStatus";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(
      "https://hidden-stream-08803.herokuapp.com/getAdmin?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return <div>{isAdmin ? <Admin /> : <OrderStatus />}</div>;
};

export default Dashboard;
