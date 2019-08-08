import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import whiteLogo from '../../assets/images/logo/logo-white.svg';

export default class NavBar extends Component {
    render() {
        const { logo, textColor, headerColor, navSize } = this.props;

        return (
            <Fragment>
                <Navbar className={`container-fluid navBarContainer ${navSize}`} sticky="top" collapseOnSelect expand="md" bg={headerColor} variant="dark">
                    <Navbar.Brand href="#home">
                        <div className="logoContainer">
                            <img src={whiteLogo} className="logoImg" alt="Rooster Grin Media Logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className={textColor} href="navFontStyle #servicesx">OUR SERVICES</Nav.Link>
                            <Nav.Link className={textColor} href="#work">OUR WORK</Nav.Link>
                            <Nav.Link className={textColor} href="#contact">CONTACT</Nav.Link>
                            <Nav.Link className={textColor} href="#login">CLIENT LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment >
        )
    }

}