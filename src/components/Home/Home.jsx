import React from 'react';
import ChefCard from "../ChefCard/ChefCard.jsx";
import {useLoaderData} from "react-router-dom";

const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-5">Introducing Our Chefs</h2>
            <div className="row g-5">
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Home;