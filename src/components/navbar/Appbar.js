import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Appbar() {
    return (<Navbar bg="primary" expand="lg">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand href="#home">App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">


                    <LinkContainer to="/login">
                        <Nav.Link href="#login">Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

