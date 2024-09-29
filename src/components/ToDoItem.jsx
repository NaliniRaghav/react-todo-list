

import   { useState } from "react";

const ToDoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(todo.title);

  // Handle save action
  const handleSave = () => {
    if (taskTitle.trim()) {
      dispatch({ type: "EDIT_TODO", payload: { id: todo.id, title: taskTitle } });
      setIsEditing(false);
    }
  };

  // Handle delete action
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: todo.id } });
  };

  return (
    <li className="todo-item">
      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({
          type: "TOGGLE_TODO",
          payload: { id: todo.id, completed: !todo.completed }
        })}
      />

      
      {isEditing ? (
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
      )}

      
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

       
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ToDoItem;
