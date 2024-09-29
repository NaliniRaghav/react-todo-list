import  { useReducer, useEffect } from "react";
import ToDoItem from "./ToDoItem.jsx";
import NewToDoForm from "./NewToDoForm.jsx";
import { DataFromApi } from "./DataFromApi.js";

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
    dispatch({ type: "ADD_TODO", payload: title });
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





 
 
