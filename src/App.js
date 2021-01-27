import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    //username: 'SuperMax',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 22 }
      ]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 22 }
      ]
    })
  }


  /**usernameChangedHandler = (event) => {
    console.log("Calling")
    this.setState({ username: event.target.value })
  } **/

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Maximilian !!')}
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm from React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}

        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username} />
        <UserOutput username="react" />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />  */}

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
