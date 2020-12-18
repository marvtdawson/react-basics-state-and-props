import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Home.scss';
import JumboTron from "../../../components/Layout/JumboTron/JumboTron";
import Person from '../Person/Person';
import yodaImage from '../../../assets/img/site/yoda1.png';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <JumboTron />
                <div>
                    <h3>
                        Hi my name is Marvin Dawson join me on my journey to becoming a ReactJs Jedi Master
                        <img className="yodaWrapper" src={yodaImage} alt="Star Wars Jedi Master Yoda"/>
                    </h3>
                    <p>This is my Blog application!</p>
                        <ul>
                            <li>Search Topics</li>
                            <li>Share Articles</li>
                            <li>Recommend A Topic</li>
                            <li>Join the Discussion</li>
                            <li>Follow Me On Social Media</li>
                            <li>Contact Me With Questions & Comments</li>
                        </ul>
                    </div>
                <Person />
            </BrowserRouter>
        );
    }
}
export default Home;
