import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataByCity,
  getDataByCluster,
  getDataByName,
} from "../utils/slice/appSlice";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("");
  const [cluster, setCluster] = useState("");
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
      } else {
        dispatch(getDataByName(warehouseList));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const cities = warehouseList.map((warehouse) => warehouse.city);
  const clusters = warehouseList.map((warehouse) => warehouse.cluster);
  const uniqueCluster = [...new Set(clusters)];
  const uniqueCities = [...new Set(cities)];


  useEffect(() => {
    handleInputChange();
  }, [inputValue]);

  const handleCityChange = () => {
    const result = warehouseList.filter((list) => list.city.includes(city));
    dispatch(getDataByCity(result));
   
  };

  const handleClusterChange = () => {
    const result = warehouseList.filter((list) =>
      list.cluster.includes(cluster)
    );
    dispatch(getDataByCluster(result));
  };
  useEffect(() => {
    handleCityChange();
  }, [city]);

  useEffect(() => {
    handleClusterChange();
  }, [cluster]);

  return (
    <div className="container-header">
      <h3>WAREHOUSE LIST</h3>

      <select onChange={(e) => setCity(e.target.value)} className="select-tag">
        {uniqueCities.map((city, i) => {
          return (
            <option value={city} key={i}>
              {city.toUpperCase()}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => setCluster(e.target.value)}>
        {uniqueCluster.map((c, i) => {
          return (
            <option value={c} key={i}>
              {c}
            </option>
          );
        })}
      </select>

      <form>
        <input
          type="text"
          placeholder="enter name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search-btn">🔍</button>
      </form>
    </div>
  );
};

export default Header;
