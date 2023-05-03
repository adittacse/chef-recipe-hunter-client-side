import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="bg-light py-3">
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <h5>About Us</h5>
                            <p>We are a team of passionate chefs who love to share our knowledge and recipes with the world.</p>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#"><i className="fab fa-facebook fa-lg"></i> Facebook</a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i> Twitter</a></li>
                                <li><a href="#"><i className="fab fa-instagram fa-lg"></i> Instagram</a></li>
                                <li><a href="#"><i className="fab fa-youtube fa-lg"></i> YouTube</a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={3}>
                            <h5>Contact Us</h5>
                            <p>
                                123 Main St, Suite 456<br />
                                Anytown, USA<br />
                                info@company.com<br />
                                (123) 456-7890
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <p>&copy; 2023 ChefSite. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;