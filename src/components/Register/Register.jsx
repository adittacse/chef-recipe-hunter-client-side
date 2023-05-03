import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import { updateProfile } from "firebase/auth";
import {Link} from "react-router-dom";

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
        
        // creating account to firebase
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess("Account has been created! Please Login.");
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then( () => {})
                    .catch( error => {
                        setError(error.message);
                    });
            })
            .catch(error => {
                setError(error.message);
            });
    }
    
    return (
        <div>
            <h2 className="text-center mt-4 mb-4">Register Here!</h2>
            <Form onSubmit={handleRegister} className="w-25 d-block mx-auto">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo url" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit">Register</Button>
                <br/>
                <Form.Text className="text-success">{success}</Form.Text>
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
            <p className="text-center mt-4">Already have an account? Please <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default Register;