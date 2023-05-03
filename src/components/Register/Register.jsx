import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
    }
    
    return (
        <Form onSubmit={handleRegister} className="w-25 d-block mx-auto mt-5">
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="email" placeholder="Enter photo url" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
            <br/>
            
            <Form.Text className="text-success">{success}</Form.Text>
            <br/>
            <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
    );
};

export default Register;