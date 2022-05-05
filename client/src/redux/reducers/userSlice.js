import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "pending",
  error: null,
  role: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
