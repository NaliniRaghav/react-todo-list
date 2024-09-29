 

Todo List React Application

This is a simple Todo List application built with React. It allows users to manage tasks by adding new todos, marking them as complete, editing existing todos, and deleting completed ones. The app uses useReducer for state management and integrates with the JSONPlaceholder API to fetch initial todos.
Features
* Add new todo items.
* Mark todo items as complete or incomplete with a checkbox.
* Edit todo items inline.
* Delete completed todo items.
* New todos are added to the top of the list.
* Initial todo data is fetched from the JSONPlaceholder API.
* The "Delete" button is only enabled for completed todos.
Technologies Used
* React: UI library for building the user interface.
* JavaScript (ES6+): Programming language for logic.
* CSS: Styling for the application.
* JSONPlaceholder API: External API used to fetch initial todo items.
   Open your browser and navigate to http://localhost:5173 to view the application.
Components:
1. NewToDoForm: Handles the addition of new todo items via a controlled form input and passes the new todo to the parent component.
2. ToDoItem: Displays individual todo items with checkboxes, edit functionality, and conditional rendering for buttons.
3. ToDoList: Manages the list of todos and handles the interaction between todos and the reducer using useReducer.
4. DataFromApi:  Fetches data from the url.
      GET https://jsonplaceholder.typicode.com/todos?_limit=10

GITHUB:

      https://github.com/NaliniRaghav/react-todo-list

 
