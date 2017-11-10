
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Todolist from './Todolist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<Button text="Blah Blah"/>
        </p>
        <Todolist/>
      </div>
    );
  }
}

export default App;
