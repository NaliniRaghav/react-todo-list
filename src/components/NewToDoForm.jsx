
import { useState } from "react";

const NewToDoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  
  const handleAddClick = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);  
      setNewTodo(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button type="button" onClick={handleAddClick}>
        Add Todo
      </button>
    </form>
  );
};

export default NewToDoForm;
