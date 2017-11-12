import React, { Component } from 'react';
import { connect } from "react-redux"

import AddTodo from './AddTodo';
import { fetchTodos, updateTodo, deleteTodo } from "../actions/todoActions"

const mapStateToProps = (store) => ({
  todos: store.todos.todos
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
})

class Todolist extends Component {
 constructor(){
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
 }

 fetchTodos(){
   this.props.dispatch(fetchTodos());
 }

 deleteTodo(e) {
   var todoId = Number(e.target.value);
   this.props.dispatch(deleteTodo(todoId));
 }
  
 componentWillMount() {
    console.log("Component will mount");
    fetchTodos();
}

  render() {
     let input;
     const { todos } = this.props;
     console.log(todos);
     const mappedTodos = todos.map(todo => 
        <li key={todo.id}>
          {todo.text}
          <span>
              <button value={todo.id} onClick={this.deleteTodo}> delete </button>
          </span>
        </li>
        )

    return (
        <div>                   
          <AddTodo/>
        
          <div>
            <ul>{mappedTodos}</ul>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist) ; // Don’t forget to use export default!