import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateData } from "../utils/slice/appSlice";

const Warehouse = () => {
  const warehouseCollection = useSelector((store) => store.app.data);
  const params = useParams();
  const warehouseData = warehouseCollection.find(
    (warehouse) => warehouse.code === params.warehousename
  );
  // const initialState = {
  //   name: "Warehouse-5454",
  //   code: "W-00005",
  //   id: 5,
  //   city: "Chennai",
  //   space_available: 1243434,
  //   type: "Warehouse Service",
  //   cluster: "cluster-a-21",
  //   is_registered: true,
  //   is_live: false,
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const [fields, setFields] = useState(warehouseData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    setIsEditable(false);
    console.log(fields);
    const result = warehouseCollection.map((warehouse) =>
      warehouse.code === warehouseData.code ? fields : warehouse
    );
    dispatch(updateData(result));
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <ContainerWrapper>
      <form className="warehouse-container" onSubmit={handleFormSubmit}>
        <div className="warehouse-header-wrapper">
          {" "}
          <h2>{warehouseData.name}</h2>
          <div className="warehouse-header-wrapper-container">
            {!isEditable && <button onClick={handleEdit}>Edit</button>}
            {isEditable && <button onClick={handleSave}>Save</button>}
          </div>
        </div>
        <div className=":">
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={fields.name}
              name="name"
              readOnly={!isEditable}
              onChange={handleInputChange}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
          <div>
            <label>Code:</label>
            <input
              type="text"
              value={fields.code}
              name="code"
              onChange={handleInputChange}
              readOnly
              style={{ backgroundColor: "grey" }}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              value={fields.city}
              name="city"
              onChange={handleInputChange}
              readOnly={!isEditable}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
          <div>
            <label>Space Available:</label>
            <input
              type="text"
              name="space_available"
              value={fields.space_available}
              onChange={handleInputChange}
              readOnly={!isEditable}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
          <div>
            <label>Type:</label>
            <input
              type="text"
              value={fields.type}
              name="type"
              onChange={handleInputChange}
              readOnly={!isEditable}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
          <div>
            <label>Is Registered:</label>
            <input
              type="text"
              name="is_registered"
              value={fields.is_registered}
              onChange={handleInputChange}
              readOnly={!isEditable}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
          <div>
            <label>Is Live:</label>
            <input
              type="text"
              name="is_live"
              value={fields.is_live}
              onChange={handleInputChange}
              readOnly={!isEditable}
              style={{ backgroundColor: !isEditable ? "grey" : "white" }}
            />
          </div>
        </div>
      </form>
    </ContainerWrapper>
  );
};

export default Warehouse;
