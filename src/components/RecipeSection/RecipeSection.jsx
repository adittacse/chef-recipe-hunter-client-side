import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RecipeSection = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center mt-5 mb-5">Featured Recipes</h2>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://source.unsplash.com/random/800x600/?food" />
                            <Card.Body>
                                <Card.Title>Delicious Pasta</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis bibendum arcu. Aliquam sed nulla
                                    in lacus blandit venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                    fames ac turpis egestas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://source.unsplash.com/random/800x600/?dish" />
                            <Card.Body>
                                <Card.Title>Yummy Tacos</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis bibendum arcu. Aliquam sed nulla
                                    in lacus blandit venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                    fames ac turpis egestas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://source.unsplash.com/random/800x600/?meal" />
                            <Card.Body>
                                <Card.Title>Hearty Breakfast</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis bibendum arcu. Aliquam sed nulla
                                    in lacus blandit venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada
                                    fames ac turpis egestas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipeSection;