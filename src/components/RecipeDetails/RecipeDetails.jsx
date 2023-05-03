import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaThumbsUp} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

const RecipeDetails = ({ recipe }) => {
    const [favorite, setFavorite] = useState();
    const {id, recipeId, name, ingredients, cookingMethod, rating, image} = recipe;
    
    const showToastMessage = () => {
        toast.success('Recipe Added In Favorite List!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    
    return (
        <div>
            <Container className="mt-5 mb-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6} className="text-center">
                        <img src={image} alt="404 Error" />
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h3 className="text-center">{name}</h3>
                            <h5>Ingredients:</h5>
                            <div>
                                {
                                    ingredients.map(ingredient => <p>{ingredient}</p>)
                                }
                            </div>
                            <h5>Ingredients:</h5>
                            <p>{cookingMethod}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Text className="d-flex align-items-center border border-warning border-2 rounded p-2">
                                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> {rating}
                                </Card.Text>
                                <div>
                                    <Button onClick={showToastMessage} className="btn btn-dark">Favorite</Button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipeDetails;