export function DataFromApi(state, action) {
    switch (action.type) {
      case "SET_TODOS":
        return action.payload;
  
      case "ADD_TODO":
        return [
          { id: state.length + 1, title: action.payload, completed: false, isEditing: false },
          ...state,
        ];
  
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        );
  
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);
  
      case "EDIT_TODO":
        return state.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        );
  
      default:
        return state;
    }
  }
  