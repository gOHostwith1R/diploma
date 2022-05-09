import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  errors: null,
  tasks: [],
};

const taskSLice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSLice.reducer;
