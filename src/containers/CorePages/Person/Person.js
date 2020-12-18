import React, {Component} from 'react';
import './Person.scss';

class Person extends Component {
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
            <div className="Person">
                {/*<p onClick={props.click}>
                    Did I mention to you that my name is {props.name},
                    I'm a awesome Software Engineer who has been developing for {props.years} years!
                </p>
                <p>
                    {props.children}
                </p>
                <input type="text" onChange={props.changed} value={props.name}/>*/}
            </div>
        )
    };
}

export default Person;
