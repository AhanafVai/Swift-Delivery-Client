import React from "react";

const TrackingContainer = ({ order }) => {
  return (
    <div className="card col-md-4 m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{order.customer.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {order.customer.service}
        </h6>
        <p className="card-text">{order.customer.payment}</p>
        <p>{order.email}</p>
        <p> {order.description}</p>
      </div>
    </div>
  );
};

export default TrackingContainer;
