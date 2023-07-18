import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Table = () => {
  const warehouseData = useSelector((store) => store.app.data);
  console.log(warehouseData);
  return (
    <table className="list-container">
      <thead>
        <tr>
          <th>NAME</th>
          <th>CITY</th>
          <th>CLUSTER</th>
          <th>SPACE AVAILABLE</th>
        </tr>
      </thead>
      <tbody>
        {warehouseData.map((data) => {
          return (
            <tr className="data-row" key={data.id}>
              <Link to="warehouse">
                <td>{data?.name}</td>
              </Link>
              <td>{data?.city}</td>
              <td>{data?.cluster}</td>
              <td>{data?.space_available}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
