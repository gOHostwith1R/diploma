import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAuth } from "../../api/apiAuth";

export const fetchLoginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const { userName, password } = data;
    try {
      const response = await apiAuth.apiAuthLogin(userName, password);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchSignUpUser = createAsyncThunk(
  "user/signUp",
  async (data, { rejectWithValue }) => {
    const { userName, password, firstName, lastName, age } = data;
    try {
      const response = await apiAuth.apiAuthSignUp(
        userName,
        password,
        firstName,
        lastName,
        age
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  userName: "",
  status: "",
  errors: null,
  role: "",
  isAuth: !!localStorage.getItem("access"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchLoginUser.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      const { userName, accessToken } = payload;
      state.isAuth = true;
      state.userName = userName;
      localStorage.setItem("access", accessToken);
    });
    builder.addCase(fetchLoginUser.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      const { userName, accessToken } = payload;
      state.isAuth = true;
      state.userName = userName;
      localStorage.setItem("access", accessToken);
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
  },
});

export default userSlice.reducer;
