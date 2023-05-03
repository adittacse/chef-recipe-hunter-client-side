import React from 'react';
import {Button, Card} from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";

const ChefCard = ({ chef }) => {
    const {chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    
    return (
        <div className="col-6 col-md-4">
            <Card >
                <Card.Img className="chefPicture img-fluid" style={{height: "286px"}}
                          variant="top"
                          src={chefPicture} />
                <Card.Body>
                    <Card.Title className="text-center">{chefName}</Card.Title>
                    <Card.Text>Experience: {yearsOfExperience}</Card.Text>
                    <Card.Text>Recipes: {numberOfRecipes}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button className="btn btn-dark">View Recipes</Button>
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