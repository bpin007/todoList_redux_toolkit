import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, content: "Hit Gym" },
      { id: 2, content: "Meet Ashik this weekend" },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      const newTodoItem = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoItem);
    },
    deleteToDo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.newContent }
          : item
      );
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
