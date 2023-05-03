import React, {useContext, useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import ActiveLink from "../ActiveLink/ActiveLink.jsx";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    
    const hideDropdown = e => {
        setShow(false);
    }
    
    const handleLogOut = () => {
        logOut()
            .then( () => {})
            .catch(error => console.log(error));
    }
    
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <div className="container" id="myNav">
                <div>
                    <Navbar.Brand href="/" className="">Deshi Chef</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto custom-nav">
                            <ActiveLink className="nav-item" to="/">Home</ActiveLink>
                            <ActiveLink className="nav-item" to="/blog">Blog</ActiveLink>
                            {
                                !user && <ActiveLink className="nav-item" to="/register">Register</ActiveLink>
                            }
                            {
                                user ? <NavDropdown
                                        title={
                                            <img src={user?.photoURL} alt="User Profile" className="profile-picture"/>
                                        }
                                        id="basic-nav-dropdown"
                                        show={show}
                                        onMouseEnter={showDropdown}
                                        onMouseLeave={hideDropdown}
                                    >
                                        <NavDropdown.Item disabled>{user?.displayName}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    : <ActiveLink className="nav-item" to="/login">Login</ActiveLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;