import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    const errorImage = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    return (
        <Container className="my-5">
            <Row>
                <Col md={6} className="text-center">
                    <img style={{borderRadius: "10px"}} src={errorImage} alt="404 Error" className="img-fluid" />
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h1 className="display-4">Oops!</h1>
                        <h2 className="display-5 mb-4">404 Page Not Found</h2>
                        <p className="lead">
                            We're sorry, the page you requested could not be found. Please go
                            back to the homepage.
                        </p>
                        <Link to="/" className="btn btn-dark">Go to Homepage</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;