import React, {useContext, useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    const {user} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    
    const showDropdown = (e)=>{
        setShow(!show);
    }
    
    const hideDropdown = e => {
        setShow(false);
    }
    
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <div className="container" id="myNav">
                <div>
                    <Navbar.Brand href="#" className="">Website Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto custom-nav">
                            <Link className="nav-item" to="/">Home</Link>
                            <Link className="nav-item" to="/blog">Blog</Link>
                            {
                                !user && <Link className="nav-item" to="/register">Register</Link>
                            }
                            {
                                user ? (<NavDropdown
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
                                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                    </NavDropdown>)
                                    : (<Nav.Link href="/login">Login</Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;