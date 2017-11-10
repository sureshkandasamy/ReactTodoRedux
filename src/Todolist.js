import React, { Component } from 'react';
import List from './List';


class Todolist extends Component {
// This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  constructor(){
    super();
    this.state= {tasklist:["task1", "task2"]};

    this.addClick = this.addClick.bind(this);
    this.taskNameChanged = this.taskNameChanged.bind(this);
    this.hanldeDelete = this.hanldeDelete.bind(this);
  }

  addClick() {
    //console.log('this is:', this);
    this.setState((prevState) => ({
        tasklist: prevState.tasklist.concat(prevState.newtask)
      }));
  }

  taskNameChanged(e) {
    //console.log(this.state);
    this.setState({newtask : e.target.value});
  } 


  hanldeDelete(val) {
      console.log("index to be deleted "+ val);
      this.setState((prevState) => ({
        tasklist: prevState.tasklist.splice(val, 1)
        }));
      
  }

  render() {
    
    return (
        <div>
           <input id="txtTodo" onChange={this.taskNameChanged}></input>
        
            <button onClick={this.addClick}>
                Add
            </button>

           <List tasklist={ this.state.tasklist } onTaskDelete = {this.hanldeDelete} />
        </div>
    );
  }
}

export default Todolist; // Don’t forget to use export default!