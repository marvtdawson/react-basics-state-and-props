import React from 'react';
import './Person.css';

const person = (props) => {
  return (
      <div className="Person">
        <p onClick={props.click}>
            Did I mention to you that my name is {props.name},
            I'm a awesome Software Engineer who has been developing for {props.years} years!
        </p>
          <p>
              {props.children}
          </p>
          <input type="text" onChange={props.changed}/>
      </div>
  )
};

export default person;

