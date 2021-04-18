import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <table className="table  table-striped ">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email ID
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Payment
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{order.customer.name}</td>
            <td>{order.email}</td>
            <td>{order.customer.service}</td>
            <td>{order.customer.Payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
