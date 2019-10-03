import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Person from './components/Person/Person';
import JumboTron from './components/Layout/JumboTron/JumboTron';
import CoreElements from "./components/CoreElements/CoreElements";

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
                <Header />
                <JumboTron />
                <section>
                    <h1>Hi I'm Marvin Dawson!<br/>
                        Welcome to my first ReactJS application on my journey to become a ReactJS Jedi Master.
                    </h1>
                </section>
                <CoreElements />
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
                <Footer />
            </div>
            </BrowserRouter>
        );
    }

}
export default App;
