import React from 'react';
import './Header.scss';

const header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <div className="header__logo-wrapper__img">
                    <img src="../../../assets/selfPortrait/marvin_2019_140_x_140.png" alt=""/>
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
    )
};
export default header;
