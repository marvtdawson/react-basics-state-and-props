import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Marvin', years: 14},
            {name: 'Terrell', years: 10},
            {name: 'Javea', years: 4}
        ],
        otherState: 'Some other Value'
    };

    switchNameHandler = () => {
        //console.log('Button Was Clicked!');
        // DON'T DO THIS: this.state.persons[0].name = "Marvin Dawson";
        this.setState({
            persons: [
                {name: 'Marvin Dawson', years: 15},
                {name: 'Terrell Dawson', years: 12},
                {name: 'Javea Dawson', years: 6}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState ({
            persons: [
                {name: 'Milky D', years: 20},
                {name: event.target.value, years: 100},
                {name: 'Obi Wan', years: 60},
            ]
        })
    };

  render() {
      const style = {
          backgroundColor: 'grey',
          font: 'inherit',
          border: '1px solid green',
          padding: '8px',
          color: 'white',
          borderRadius: '7px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>Hi I am Marvin Dawson training to be a  React Developer creating my first React Websote.</h1>
          <button
            style={style}
              onClick={this.switchNameHandler}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              years={this.state.persons[0].years}
              click={this.switchNameHandler.bind(this, 'Marvo')}>My Hobby is: Coding!</Person>
          <Person
              name={this.state.persons[1].name}
              years={this.state.persons[1].years} changed={this.nameChangedHandler}/>
          <Person
              name={this.state.persons[2].name}
              years={this.state.persons[2].years}/>
      </div>
    );
  }
}

export default App;
