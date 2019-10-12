import React from  'react';
import './Footer.scss';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container-wrapper">
                <div className="footer__container-wrapper__container">
                    <h4>My Works!</h4>
                </div>
                <div className="footer__container-wrapper__container">
                    <h4>My Skills</h4>
                </div>
                <div className="footer__container-wrapper__container">
                    <h3>Contact Me</h3>
                </div>
            </div>
        </footer>
    )
};
export default footer;
