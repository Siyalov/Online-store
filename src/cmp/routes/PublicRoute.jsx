import React from 'react';
import {Route, Navigate} from "react-router-dom";
import {LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE} from "../consts/consts";

const PublicRoute = ({path, Page, isAuth}) => {
    const isAuthPage = path === LOGIN_ROUTE || path === REG_ROUTE;
    return (
        !isAuth && !isAuthPage ? <Page/> : <Navigate to={SHOP_ROUTE}/>
    );
};

export default PublicRoute;