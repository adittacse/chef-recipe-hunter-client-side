import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const {createUser} = useContext(AuthContext);
    
    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        //validate password
        if(!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase");
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Please add at least two numbers");
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Please add a special character in your password");
            return;
        } else if (password.length < 6) {
            setError("Please add at least 6 characters in your password!");
            return;
        }
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess("User Has Been Created! Please Login.");
                console.log(createdUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    return (
        <Form onSubmit={handleRegister} className="w-25 d-block mx-auto mt-5">
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Enter photo url" />
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