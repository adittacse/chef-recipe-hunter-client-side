import React from 'react';
import {useLoaderData} from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails.jsx";
import "./ChefDetails.css";

const ChefDetails = () => {
    const chef = useLoaderData();
    const {id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, recipes, description} = chef;
    // console.log(recipes.id);
    
    return (
        <div className="container">
            <div className="chef-details pt-5 pb-5">
                <div className="d-flex w-75 mx-auto justify-content-between">
                    <img src={chefPicture} alt="chef image"
                         className="img-fluid me-5" />
                    <div>
                        <h2>Hi, I'm {chefName}</h2>
                        <p>I'm <strong>{yearsOfExperience} years</strong> of experienced. I've <strong>{numberOfRecipes} recipes</strong> and I got <strong>{likes} likes!</strong></p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <h2 className="text-center mt-5">My Recipes</h2>
            <div>
                {
                    recipes.map(recipe => <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;