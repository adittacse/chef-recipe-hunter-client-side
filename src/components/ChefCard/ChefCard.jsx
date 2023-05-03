import React from 'react';
import {Button, Card} from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import "./ChefCard.css";
import {Link} from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const {id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes} = chef;
    
    return (
        <div className="col-12 col-sm-12 col-md-4">
            <Card>
                <LazyLoad height={286} offset={300} threshold={0.95}>
                    <Card.Img className="chefPicture" variant="top" src={chefPicture} />
                </LazyLoad>
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