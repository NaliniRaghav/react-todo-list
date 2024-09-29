export function DataFromApi(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;

    case "ADD_TODO":
      return [action.payload, ...state];  
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, isEditing: false }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}
