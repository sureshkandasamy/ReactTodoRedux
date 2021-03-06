
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Todolist from './components/Todolist'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <p className="App-intro">
         Add your todo tasks and track them
        </p>
        <Todolist/>
      </div>
    );
  }
}

//store.subscribe(render)

export default App;
