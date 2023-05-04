import React from 'react';
import ChefCard from "../ChefCard/ChefCard.jsx";
import {useLoaderData} from "react-router-dom";
import Slider from "../Slider/Slider.jsx";
import FeaturedRecipe from "../FeauredRecipe/FeaturedRecipe.jsx";

const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div className="">
            <Slider></Slider>
            <h2 className="text-center mt-5 mb-5">Introducing Our Chefs</h2>
            <div className="row container mx-auto g-5">
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
            <FeaturedRecipe></FeaturedRecipe>
            
        </div>
    );
};

export default Home;