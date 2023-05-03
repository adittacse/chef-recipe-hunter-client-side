import React from 'react';
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;