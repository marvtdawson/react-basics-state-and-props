import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo-wrapper">
                    <img className="header__logo-wrapper__img"
                         src="../../../assets/img/selfPortrait/marvin_2019_140_x_140.png" alt="Marvin's Portrait"/>
                </div>
                <nav className="header__nav-wrapper">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        |
                        <li>
                            <Link to={{
                                pathname: '/person'
                            }}>PERSON
                            </Link>
                        </li> |
                        <li><Link to={{
                            pathname: '/blog'
                        }}>BLOG</Link></li> |
                        <li><Link to={{
                            pathname: './contact'
                        }}>CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;
