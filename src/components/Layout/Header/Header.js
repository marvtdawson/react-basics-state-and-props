import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import './Header.scss';

// import About from '../../../containers/CorePages/About/About';
// import marvinPortrait from '../../../assets/img/selfPortrait/marvin_2019_140_x_140.png';

class Header extends Component {
    render() {
        return (

            <Container fluid className="header">
                <Row>
                    <Col xs={6}>
                        <div className="header__logo-wrapper">
                            Marvin T. Dawson
                            {/*<img className="header__logo-wrapper__img"
                         src={ marvinPortrait } alt="Marvin's Portrait"/>*/}
                        </div>
                    </Col>
                    <Col xs={6}>
                        <Row>
                            <Col><Link to={{pathname: '/'}}>HOME</Link></Col>
                            <Col><Link to={{pathname: '/about'}}>ABOUT</Link></Col>
                            <Col><Link to={{pathname: '/person'}}>PERSON</Link></Col>
                            <Col><Link to={{pathname: '/blog'}}>BLOG</Link></Col>
                            <Col><Link to={{pathname: '/contact'}}>CONTACT</Link></Col>
                        </Row>
                        {/*<nav>
                            <ul>
                                <li></li>
                                |
                                <li></li>
                                |
                                <li></li>
                                |
                                <li></li>
                                |
                                <li></li>
                            </ul>
                        </nav> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;
