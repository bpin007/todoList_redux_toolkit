import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../reducer/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo({ newContent: todo }));
    setTodo("");
  };
  return (
    <div>
      <p>Todo list using redux_toolkit</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
