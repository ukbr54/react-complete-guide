import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm from React App</h1>
        <p>This is really working!</p>
        <Person name="Rahul" age="31"/>
        <Person name="Rohit" age="23">My hobbies: Racing</Person>
        <Person name="Sita" age="22"/>
      </div>
    );
  }
}

export default App;
