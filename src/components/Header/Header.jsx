import React, {useContext, useState} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import "./Header.css";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import ActiveLink from "../ActiveLink/ActiveLink.jsx";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    
    const hideDropdown = (e) => {
        setShow(false);
    }
    
    const handleLogOut = () => {
        logOut()
            .then( () => {})
            .catch(error => console.log(error));
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">BISTRO VOLTAIRE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center align-content-md-start">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        {
                            !user && <ActiveLink to="/register">Register</ActiveLink>
                        }
                        { user ?
                            <NavDropdown
                                title={
                                    <img src={user?.photoURL} alt="User Profile" className="profile-picture"/>
                                }
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                                id="collasible-nav-dropdown">
                                <NavDropdown.Item disabled>{user?.displayName}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            : <ActiveLink to="/login">Login</ActiveLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;