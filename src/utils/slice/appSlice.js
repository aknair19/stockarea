import { createSlice } from "@reduxjs/toolkit";
import WarehouseData from "../../constants/warehouse.json";
const appSlice = createSlice({
  name: "app",
  initialState: {
    data: WarehouseData,
    filteredData: [],
  },
  reducers: {
    setName: (state, action) => (action.payload = state.name),
    getDataByName: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setName } = appSlice.actions;
export default appSlice.reducer;
