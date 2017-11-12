let nextTodoId = 0

export function fetchTodos() {
  console.log("in fetchTodos");
  var todos = [{
        id: 100,
        text: "first thing",
      },
      {
        id:101,
        text: "second thing",
      },
      {
        id: 102,
        text: "third thing",
      }
      ];

  return {
    type: "FETCH_TODOS_FULFILLED",
    payload: todos
  }
}

export function addTodo(text) {
  nextTodoId++;
  console.log("in todoaction");
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId,
      text: text,
    },
  }
}

export function updateTodo(id, text) {
  return {
    type: 'UPDATE_TODO',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id}
}