import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataByName } from "../utils/slice/appSlice";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const warehouseList = useSelector((store) => store.app.data);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    // e.preventDefault();
    try {
      if (inputValue.length > 0) {
        const filteredData = warehouseList.filter((warehouse) =>
          warehouse.name.includes(inputValue)
        );
        if (filteredData) {
          dispatch(getDataByName(filteredData));
        } else {
          console.log("not found");
        }
      }else{
        dispatch(getDataByName(warehouseList));
      }
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=>{
handleInputChange()
},[inputValue])


  return (
    <div className="container-header">
      <h3>WAREHOUSE LIST</h3>

      <form >
        <input
          type="text"
          placeholder="enter name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>🔍</button>
      </form>
    </div>
  );
};

export default Header;
