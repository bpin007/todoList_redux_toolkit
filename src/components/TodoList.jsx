import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../reducer/todoSlice";
// import { deleteToDo, editToDo } from "../reducer/todoSlice";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [editContent, setEditContent] = useState(""); // State to manage edited content
  const [editId, setEditId] = useState(null); // State to manage the id of the item being edited

  const removeHandler = (id) => {
    dispatch(deleteToDo(id));
  };

  const editHandler = (id) => {
    // Set initial content to edit
    const todo = todoList.find((item) => item.id === id);
    setEditContent(todo.content);
    setEditId(id);
  };

  const saveEditHandler = () => {
    // Dispatch action to edit todo item
    if (editId !== null && editContent.trim() !== "") {
      dispatch(editTodo({ id: editId, newContent: editContent }));
      setEditId(null); // Reset editId after editing
      setEditContent(""); // Reset editContent after editing
    }
  };

  return (
    <div>
      {todoList &&
        todoList.map((item) => (
          <div key={item.id}>
            {editId === item.id ? (
              // Render input field for editing
              <>
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button onClick={saveEditHandler}>Save</button>
              </>
            ) : (
              // Render todo item content
              <>
                <span>{item.content}</span>
                <button onClick={() => removeHandler(item)}>Delete</button>
                <button onClick={() => editHandler(item.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
