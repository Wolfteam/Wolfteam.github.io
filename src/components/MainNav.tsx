import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'

function MainNav() {
    return <Navbar id="mainNav" expand="lg" variant="light" fixed="top" className="justify-content-end" >
        <Container>
            <Navbar.Toggle aria-controls="navbarResponsive" >
                <FontAwesomeIcon icon={faBars} fixedWidth />Menu
                </Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive">
                <Scrollspy
                    className="ml-auto navbar-nav"
                    currentClassName="active"
                    offset={40}
                    items={['about', 'apps', 'privacy_policy', 'contact']}
                    componentTag="div">
                    <Nav.Link eventKey="about-link" href="#about">About</Nav.Link>
                    <Nav.Link eventKey="apps-link" href="#apps">Applications</Nav.Link>
                    <Nav.Link eventKey="privacy-link" href="#privacy_policy">Policies</Nav.Link>
                    <Nav.Link eventKey="contact-link" href="#contact">Contact</Nav.Link>
                </Scrollspy>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}

export default MainNav;