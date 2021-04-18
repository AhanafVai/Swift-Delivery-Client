import React from "react";

const StatusTable = ({ orderState }) => {
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
        {orderState.map((state, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{state.customer.name}</td>
            <td>{state.email}</td>
            <td>{state.customer.service}</td>
            <td>{state.customer.Payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatusTable;
