import React, { Component } from 'react';
import { connect } from "react-redux"

import { addTodo } from "../actions/todoActions"

const mapStateToProps = (store) => ({
  todos: store.todos.todos
})

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
})

class AddTodo extends Component {
 constructor(){
    super();
 }

 render() {
     let input;
 
     return (
        <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        this.props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo) ; // Don’t forget to use export default!