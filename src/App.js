import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 22}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm from React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maxi !!')}>Switch name</button>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].name}
            click={this.switchNameHandler.bind(this, 'Maximilian !!')}>My hobbies: Racing</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App; 

/** import './App.css';
import Person from './Person/Person';
import React, { useState }  from 'react';


const app = props => {
   const [personState, setPersonState] = useState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ]
   });

   const [otherState, setOtherState] = useState('Some other value');

   const switchNameHandler = () => {
    setPersonState( {
      persons: [
        {name: 'Maximillian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 22}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm from React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );

};

export default app; **/
