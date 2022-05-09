import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiTask } from "../../api/apiTask";

export const createTask = createAsyncThunk(
  "task/create-task",
  async (data, { rejectWithValue }) => {
    const { title, description, type } = data;
    try {
      const response = await apiTask.apiTaskCreate(title, description, type);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  "task/fetch-tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiTask.apiFetchTasks();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  status: "",
  errors: null,
  tasks: [],
};

const taskSLice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(createTask.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(createTask.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      console.log(payload);
      state.tasks = payload;
    });
    builder.addCase(fetchTasks.rejected, (state, { payload }) => {
      state.status = "rejected";
      //state.errors = payload.message;
    });
  },
});

export default taskSLice.reducer;
