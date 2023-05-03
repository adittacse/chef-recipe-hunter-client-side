import React from 'react';
import Navigation from "../Navigation/Navigation.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;