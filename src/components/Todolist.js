import React, { Component } from 'react';
import { connect } from "react-redux"

import List from './List';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../actions/todoActions"

const mapStateToProps = (store) => ({
  todos: store.todos.todos
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  //startup: () => dispatch(StartupActions.startup())
})



class Todolist extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  constructor(){
    super();
 }

 fetchTodos(){
   this.props.dispatch(fetchTodos());
 }


  
  componentWillMount() {
    console.log("Component will mount");
    fetchTodos();
}

  render() {
     let input;
     const { todos } = this.props;
     console.log(todos);
     const mappedTodos = todos.map(todo => <li key={todo.id}>{todo.text}</li>)

    return (
        <div>
          <div>
            <input type="button" onClick={this.fetchTodos.bind(this)} value="Reload"/>
            <br/> <br/>
          </div>
          <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        this.props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
          <div>
            <ul>{mappedTodos}</ul>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist) ; // Don’t forget to use export default!