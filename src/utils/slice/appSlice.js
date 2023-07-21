import { createSlice } from "@reduxjs/toolkit";
import WarehouseData from "../../constants/warehouse.json";
const appSlice = createSlice({
  name: "app",
  initialState: {
    data: [...WarehouseData],
    filteredData: [...WarehouseData],
  },
  reducers: {
    setName: (state, action) => (action.payload = state.name),
    getDataByName: (state, action) => {
      state.filteredData = action.payload;
    },
    getDataByCity: (state, action) => {
      state.filteredData = action.payload;
    },
    getDataByCluster: (state, action) => {
      state.filteredData = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setName,
  getDataByName,
  getDataByCity,
  getDataByCluster,
  updateData,
} = appSlice.actions;
export default appSlice.reducer;
