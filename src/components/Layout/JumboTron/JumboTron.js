import React from 'react';
import './JumboTron.scss';
import jumbotronImage from "../../../assets/img/site/2000px-React-icon.svg.png";

const jumboTron = () => {
    return (
        <section className="jumbotron">
            <div className="jumbotron__image-wrapper">
                <img className="jumbotron__image-wrapper__image" src={ jumbotronImage } alt="React logo"/>
            </div>
        </section>
    )
};
export default jumboTron;
