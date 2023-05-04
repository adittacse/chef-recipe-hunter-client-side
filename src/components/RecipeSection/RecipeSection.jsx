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
                            <Card.Img height={250} variant="top" src="https://media.istockphoto.com/id/845169430/photo/mixed-chefs-salad-mixed-chefs-salad.jpg?s=170667a&w=0&k=20&c=3kE6NwN-JCZBbHI1J-AQKG1u9EpN22NYxA15J9IeFZI=" />
                            <Card.Body>
                                <Card.Title>Delicious Pasta</Card.Title>
                                <Card.Text>
                                    This Baked Salmon with Lemon and Herbs is a simple and elegant dish that is perfect for any occasion. The salmon is marinated in a blend of lemon, garlic, and herbs, then baked in the oven until tender and flaky. The result is a flavorful and healthy meal that can be served with a side of roasted vegetables or a fresh green salad.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img height={250} variant="top" src="https://media.istockphoto.com/id/1089055456/photo/ingredients-for-vegetarian-salad-flat-lay.jpg?s=170667a&w=0&k=20&c=zc0ySdLpb36eSGcUgQXY9ooQM8PXJeCiZIc2aQ_LBLU=" />
                            <Card.Body>
                                <Card.Title>Yummy Tacos</Card.Title>
                                <Card.Text>
                                    Looking for a healthy and delicious salad recipe? Try our Chicken Fajita Salad! Packed with protein from the grilled chicken and fiber from the mixed greens, this salad is perfect for lunch or dinner. The fajita seasoning adds a spicy kick, while the bell peppers and onions add a nice crunch. Serve with a dollop of sour cream and some avocado slices for an extra creamy and satisfying meal.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img height={250} variant="top" src="https://media.istockphoto.com/id/1125573170/photo/avocado-salad-with-shrimps.jpg?s=170667a&w=0&k=20&c=bMZW0fEMkZY-OPSbRCdKazvilebK4tZDIJaJoMTZxow=" />
                            <Card.Body>
                                <Card.Title>Hearty Breakfast</Card.Title>
                                <Card.Text>
                                    Looking for a sweet treat to satisfy your cravings? Try our Chocolate Chip Banana Bread! This recipe combines the classic flavors of banana bread with the rich and decadent taste of chocolate chips. The bread is moist, flavorful, and perfect for breakfast or dessert. Serve with a cup of coffee or a glass of milk for a comforting and delicious snack.
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