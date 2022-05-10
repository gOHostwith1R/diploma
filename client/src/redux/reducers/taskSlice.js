import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
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

export const addAnswer = createAsyncThunk(
  "task/add-answer",
  async (data, { rejectWithValue }) => {
    const { answer, id } = data;
    try {
      const response = await apiTask.apiAddAnswer(answer, id);
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
    builder.addCase(
      isAnyOf(createTask.pending, fetchTasks.pending, addAnswer.pending),
      (state) => {
        state.status = "pending";
      }
    );
    builder.addCase(createTask.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      state.tasks = payload;
    });
    builder.addCase(fetchTasks.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
    builder.addCase(createTask.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
    builder.addCase(addAnswer.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
  },
});

export default taskSLice.reducer;
