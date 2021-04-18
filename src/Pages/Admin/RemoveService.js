import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const RemoveService = ({ services }) => {
  const deleteService = (id) => {
    fetch(`https://hidden-stream-08803.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Deleted item");
        }
      });
  };

  return (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Price
          </th>
          <th className="text-secondary" scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{service.name}</td>
            <td>$ {service.price}</td>
            <td>
              <button
                onClick={() => deleteService(service._id)}
                type="button"
                className="btn  btn-outline-danger"
              >
                <FaTrashAlt />
              </button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RemoveService;
