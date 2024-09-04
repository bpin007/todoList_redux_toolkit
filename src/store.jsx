import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todoSlice";

const store = configureStore({
  reducer: {
    toDo: todoReducer,
  },
});

export default store;
