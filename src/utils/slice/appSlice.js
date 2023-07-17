import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    name: "abhishek nair, redux setup is done",
  },
  reducers: {
    setName: (state, action) => (action.payload = state.name),
  },
});

export const { setName } = appSlice.actions;
export default appSlice.reducer;
