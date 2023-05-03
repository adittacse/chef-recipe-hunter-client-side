import React from 'react';
import {Button, Card} from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import "./ChefCard.css";
import {Link} from "react-router-dom";

const ChefCard = ({ chef }) => {
    const {id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <Card >
                <Card.Img className="chefPicture" variant="top" src={chefPicture} />
                <Card.Body>
                    <Card.Title className="text-center">{chefName}</Card.Title>
                    <Card.Text>Experience: {yearsOfExperience}</Card.Text>
                    <Card.Text>Recipes: {numberOfRecipes}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/chefdetails/${id}`}>
                            <Button className="btn btn-dark">View Recipes</Button>
                        </Link>
                        <Card.Text className="d-flex align-items-center border border-warning border-2 rounded p-2">
                            <FaThumbsUp className="me-2"></FaThumbsUp> {likes}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;