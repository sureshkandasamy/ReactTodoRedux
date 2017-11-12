import React, { Component } from 'react';

class List extends Component {
    // This syntax ensures `this` is bound within handleClick.
      // Warning: this is *experimental* syntax.
    
      constructor(props) {
        super(props);
        console.log(props.tasklist);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(e) {
        console.log("deleting task");

        this.props.onTaskDelete(e.target.value);
    }
  
    render() {
        const listItems = this.props.tasklist.map((task, index) => 
            <li key={index}>
                {task}
                <span>
                    <button value={index} onClick={this.deleteTask}> delete </button>
                </span>
            </li>);
    
        return (
           <div>
                <ul>                    
                    {listItems}
                </ul>
            </div>           
        );
      }
    }

    export default List;