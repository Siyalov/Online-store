import React from 'react';
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from "../consts/consts";

const PublicRoute = ({ path, Page }) => {
    const isAuthPage = path === LOGIN_ROUTE || path === REG_ROUTE;
    return (
        (localStorage.getItem("is_admin") !== "false" || localStorage.getItem("is_admin") !== "true") && !isAuthPage ? <Page /> : <Navigate to={SHOP_ROUTE} />
    );
};

export default PublicRoute;