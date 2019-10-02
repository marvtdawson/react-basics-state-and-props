import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Marvin', years: 14},
            {name: 'Tosha', years: 10},
            {name: 'Javea', years: 4}
        ],
        otherState: 'Some other Value'
    };

    switchNameHandler = () => {
        //console.log('Button Was Clicked!');
        // DON'T DO THIS: this.state.persons[0].name = "Marvin Dawson";
        this.setState({  // this set state over rides the original state
            persons: [
                {name: 'Marvin Dawson', years: 15},
                {name: 'LaTosha McMichaels', years: 10},
                {name: 'Javea Linton', years: 6}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState ({
            persons: [
                {name: 'Milky D', years: 20},
                {name: event.target.value, years: 14},
                {name: 'Obi Wan', years: 1000},
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
        <h1>Hi I'm Marvin Dawson!<br />
        Welcome to another ReactJS application on my journey to become a ReactJS Master.</h1>
          <div>
              Let me tell you a little bit about this application.
              This application focuses on the core fundamentals of ReactJS 16.8.
                <ul>
                    <li>Function Components</li>
                    <li>Props</li>
                    <li>State</li>
                </ul>
          </div>
          <div>
              <button
                style={style}
                  onClick={this.switchNameHandler}>
                  Get Developers Full Name
              </button>
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
      </div>
    );
  }
}

export default App;
