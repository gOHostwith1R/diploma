import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import TaskReducer from "./reducers/taskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: TaskReducer,
  },
});
