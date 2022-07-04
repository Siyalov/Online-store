import React from 'react';
import { Navigate } from "react-router-dom";

const AdminRoute = ({ Page }) => {
    return (
        localStorage.getItem("is_admin") === "true" ? <Page /> : <Navigate to={'/login'} />
    );
};

export default AdminRoute;