import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import colorLogo from '../../assets/svg/logo-color.svg';


export default class NavBar extends Component {
    render() {
        const { textColor, headerColor, navSize } = this.props;

        return (
            <Fragment>
                <Navbar className={`container-fluid navBarContainer ${navSize}`} sticky="top" collapseOnSelect expand="lg" bg={headerColor} variant="dark">
                    <Navbar.Brand href="#home">
                        {/* <img
                            // src= {whiteLogo}
                            className=" logoImg d-inline-block align-top"
                            alt="Rooster Grin Media Logo"
                            text-align= 'center'
                        /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className={textColor} href="navFontStyle #about">OUR SERVICES</Nav.Link>
                            <Nav.Link className={textColor} href="#services">OUR WORK</Nav.Link>
                            <Nav.Link className={textColor} href="#work">CONTACT</Nav.Link>
                            <Nav.Link className={textColor} href="#about">CLIENT LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment >
        )
    }

}