

import  { useReducer, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import NewToDoForm from "./NewToDoForm";
import { DataFromApi } from "./DataFromApi";

const ToDoList = () => {
  const [todos, dispatch] = useReducer(DataFromApi, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TODOS", payload: data });
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (title) => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), title, completed: false, isEditing: false }, // Ensure unique ID
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <NewToDoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;






 
 
