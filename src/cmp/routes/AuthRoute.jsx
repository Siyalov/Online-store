import React from 'react';
import { Navigate } from "react-router-dom";

const AuthRoute = ({ Page }) => {
    return (
        localStorage.getItem("is_admin") === "false" ? <Page /> : <Navigate to={'/login'} />
    );
};

export default AuthRoute;