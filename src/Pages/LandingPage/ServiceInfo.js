import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { FaLock } from "react-icons/fa";
import "./ServiceInfo.css";

const ServiceInfo = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderInfo, setOrderInfo] = useContext(UserContext);
  console.log(orderInfo);

  return (
    <div className="col-md-3 jump">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img
          src={service.imageURL}
          style={{ width: "286px", height: "286px" }}
          className="card-img-top "
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>Price:</h4>
            <h4> ${service.price}</h4>
          </div>

          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
          {loggedInUser ? (
            <Link
              onClick={() =>
                setOrderInfo({
                  price: service.price,
                  service: service.name,
                  email: loggedInUser.email,
                  description: service.description,
                })
              }
              to="/service"
              type="button"
              className="btn btn-success"
            >
              Order Now
            </Link>
          ) : (
            <Link to="/login" type="button" className="btn btn-dark">
              <FaLock /> Login to Order
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
