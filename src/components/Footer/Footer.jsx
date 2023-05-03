import React from 'react';
import "./Footer.css";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="bg-dark pt-5 pb-2 text-white">
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <h5 className="mb-4">About Us</h5>
                            <p>We are a team of passionate chefs who love to share our knowledge and recipes with the world.</p>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5 className="mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5 className="mb-4">Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#"><i className="fab fa-facebook fa-lg"></i> Facebook</a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i> Twitter</a></li>
                                <li><a href="#"><i className="fab fa-instagram fa-lg"></i> Instagram</a></li>
                                <li><a href="#"><i className="fab fa-youtube fa-lg"></i> YouTube</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5 className="mb-4">Contact Us</h5>
                            <p>
                                123 Main St, Suite 456<br />
                                Anytown, USA<br />
                                info@company.com<br />
                                (123) 456-7890
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="text-center">
                            <p>&copy; 2023 ChefSite. All rights reserved.</p>
                            <p>Developed using react js</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;