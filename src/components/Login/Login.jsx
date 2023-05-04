import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true});
            })
            .catch(error => {
                setError("Wrong Credentials!");
            })
    }
    
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        setError("");
        
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    const handleGithubSignIn = (event) => {
        event.preventDefault();
        setError("");
        
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    return (
        <div>
            <h2 className="text-center mt-4 mb-4">Login Here</h2>
            <Form onSubmit={handleLogin} className="w-25 d-block mx-auto">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit">Login</Button>
                <br/>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
            <p className="text-center mt-4">New to website? Please <Link to="/register">Register here</Link></p>
            <p className="text-center">Or</p>
            <div className="d-flex mx-auto justify-content-center">
                <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-secondary me-3"><FaGoogle /> Sign In With Google</button>
                <button onClick={handleGithubSignIn} type="button" className="btn btn-outline-secondary"><FaGithub /> Sign In With Github</button>
            </div>
        </div>
    );
};

export default Login;