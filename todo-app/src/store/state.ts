import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const State = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof State.getState>;
export type AppDispatch = typeof State.dispatch;
