export default function reducer(state={
    todos: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TODOS": {
        return {...state, fetching: true}
      }
      case "FETCH_TODOS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TODOS_FULFILLED": {
        console.log(state.todos);
        console.log(action.payload);
        return {
          ...state,
          fetching: false,
          fetched: true,
          todos: action.payload,
        }
      }
      case "ADD_TODO": {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        }
      }
      case "UPDATE_TODO": {
        const { id, text } = action.payload
        const newTodos = [...state.todos]
        const todoToUpdate = newTodos.findIndex(todo => todo.id === id)
        newTodos[todoToUpdate] = action.payload;

        return {
          ...state,
          todos: newTodos,
        }
      }
      case "DELETE_TODO": {
         const newTodos = state.todos.filter(todo => todo.id !== action.payload);
        console.log(newTodos)
        return {
          ...state,
          todos: newTodos,
        }
      }
    }

    return state
}