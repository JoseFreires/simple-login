import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from '../pages/login/login';
import Register from "../pages/register/register";
import Home from "../pages/home/home";

import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />
}


const RoutesPage = () => {
    return(    
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route exact path="/" element = { <Login /> }  />
                    <Route exact path="/register" element = {<Register />} />
                    <Route path="*" element = { <Login /> }  />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesPage;