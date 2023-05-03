import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Login = () => {
    const [error, setError] = useState("");
    
    const {signIn, loading} = useContext(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                setError("Wrong Credentials!");
            })
    }
    
    return (
        <div>
            <h2 className="text-center mt-4 mb-4">Login Here</h2>
            <Form onSubmit={handleLogin} className="w-25 d-block mx-auto">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">Login</Button>
                <br/>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </div>
    );
};

export default Login;