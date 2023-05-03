import React, {useContext} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";
import {Spinner} from "react-bootstrap";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>;
    }
    
    if (user) {
        return children;
    }
    
    return <Navigate state={{from: location}} to="/login"></Navigate>;
};

export default PrivateRoute;