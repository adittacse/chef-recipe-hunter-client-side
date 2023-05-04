import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

const FeaturedRecipe = () => {
    return (
        <Container className="container d-flex justify-content-center align-items-center pt-4 mt-5">
            <Row>
                <Col md={6} className="mb-4">
                    <h2 className="mb-4 text-center">About Bistro Voltaire</h2>
                    <p>
                        Our featured recipe this month is a delicious chicken and mushroom risotto. This creamy and flavorful dish is perfect for any occasion and is sure to impress your guests.
                        <br/> <br/>
                        Our expert chefs have carefully crafted this recipe to ensure that it is both delicious and easy to make. With step-by-step instructions and a list of ingredients, you'll be able to create this amazing dish in no time.
                        <br/> <br/>
                        So why not give it a try? Your taste buds will thank you!
                    </p>
                </Col>
                <Col md={6} className="mb-4 text-center">
                    <Image className="img-fluid rounded" src="https://plus.unsplash.com/premium_photo-1664299504975-b9b61cd30ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjByZWNpcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Chicken and Mushroom Risotto" />
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedRecipe;