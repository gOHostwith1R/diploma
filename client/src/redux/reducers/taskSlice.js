import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { apiTask } from "../../api/apiTask";

export const createTask = createAsyncThunk(
  "task/create-task",
  async (data, { rejectWithValue }) => {
    const { title, description, type, userName } = data;
    try {
      const response = await apiTask.apiTaskCreate(
        title,
        description,
        type,
        userName
      );
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
    const { answer, id, userName } = data;
    try {
      const response = await apiTask.apiAddAnswer(answer, id, userName);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchAnswers = createAsyncThunk(
  "task/fetch-answers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiTask.apiFetchAnswers(data);
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
  answers: [],
  search: "",
  currentTasks: [],
};

const taskSLice = createSlice({
  name: "task",
  initialState,
  reducers: {
    searchTasks(state, { payload }) {
      state.search = payload;
      state.currentTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchAnswers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(addAnswer.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(createTask.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      state.tasks = payload;
    });
    builder.addCase(addAnswer.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(fetchAnswers.fulfilled, (state, { payload }) => {
      state.status = "fulfilled";
      state.answers = payload;
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
    builder.addCase(fetchAnswers.rejected, (state, { payload }) => {
      state.status = "rejected";
      state.errors = payload.message;
    });
  },
});
export const { searchTasks } = taskSLice.actions;
export default taskSLice.reducer;
