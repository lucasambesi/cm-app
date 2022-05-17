import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Portfolio Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#markets">Markets cryptos</Nav.Link>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#portfolio/3.1">
                                Binance
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#portfolio/3.2">
                                OKEx
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#portfolio/3.3">
                                Metamask
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#portfolio/3.4">
                                Defi
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">User</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
