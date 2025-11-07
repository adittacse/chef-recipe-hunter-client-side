import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ChefDetails from "./components/ChefDetails/ChefDetails.jsx";
import '@smastrom/react-rating/style.css'
import Blog from "./components/Blog/Blog.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://chef-recipe-hunter-server-side.onrender.com//chef/")
            },
            {
                path: "/chefdetails/:id",
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side.onrender.com//chef/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
