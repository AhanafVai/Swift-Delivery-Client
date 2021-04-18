import React, { useEffect, useState } from "react";
import RemoveService from "./RemoveService";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-stream-08803.herokuapp.com/viewService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <RemoveService services={services} />
    </div>
  );
};

export default ManageService;
