import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

    state = {
        persons: [
            {name: 'Marvin', years: 14},
            {name: 'Tosha', years: 10},
            {name: 'Javea', years: 4}
        ],
        otherState: 'Some other Value',
        showPersons: false
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
        this.setState({
            persons: [
                {name: 'Milky D', years: 20},
                {name: event.target.value, years: 14},
                {name: event.target.value, years: 1000},
            ]
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPerson: !doesShow});
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
            <BrowserRouter>
            <div className="App">
                <header className="header">
                    <div className="header__logo-wrapper">
                        <div className="header__logo-wrapper__img">
                            <img src="./assets/img/site/" alt=""/>
                        </div>
                    </div>
                    <nav className="header__nav-wrapper">
                        <ul>
                            <li>HOME</li> |
                            <li>BLOG</li> |
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                </header>
                <section>
                    Jumbotron Image goes here!!
                </section>
                <section>
                    <h1>Hi I'm Marvin Dawson!<br/>
                        Welcome to my first ReactJS application on my journey to become a ReactJS Jedi Master.
                    </h1>
                </section>
                <section>
                    <div>
                        Let me tell you a little bit about this application.
                        This application focuses on the core fundamentals of ReactJS 16.8.
                        <ul>
                            <li>Class Components - ReactJs 16</li>
                            <li>Function Components - ReactJs 16.8</li>
                            <li>Props</li>
                            <li>State</li>
                            <li>React Hooks</li>
                            <li>Routing</li>
                            <li>Navigation and Linking</li>
                            <li>CSS Styling</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>
                        Get Developers Full Name
                    </button>
                    {
                        this.state.showPersons ?
                            <div>
                                <Person
                                    name={this.state.persons[0].name}
                                    years={this.state.persons[0].years}
                                    click={this.switchNameHandler.bind(this, 'Marvo')}>My Hobby is: Coding!</Person>
                                <Person
                                    name={this.state.persons[1].name}
                                    years={this.state.persons[1].years} changed={this.nameChangedHandler}/>
                                <Person
                                    name={this.state.persons[2].name}
                                    years={this.state.persons[2].years} changed={this.nameChangedHandler}/>
                            </div>
                            : null
                    }
                </div>
                </section>
                <footer className="footer">

                </footer>
            </div>
            </BrowserRouter>
        );
    }

}
export default App;
