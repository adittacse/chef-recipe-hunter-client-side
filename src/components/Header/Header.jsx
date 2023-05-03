import React, {useContext} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="#">Website Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    {user ? (
                        <NavDropdown
                            title={
                                <img
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    className="profile-picture"
                                />
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item disabled>{user?.displayName}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Nav.Link href="/login">Login</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;