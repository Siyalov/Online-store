import React from 'react';
import { Routes } from "react-router";
import PublicRoute from "./PublicRoute";
import { routes } from "./routes";
import AuthRoute from "./AuthRoute";
import AdminRoute from "./AdminRoute";
import { Route } from "react-router-dom";

const AppRoutes = ({ isAuth, isAdmin }) => {
    return (
        <Routes>
            {
                routes.public_routes.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<PublicRoute Page={item.Element} />}
                        exact={item.exact}
                    />
                ))
            }
            {
                routes.auth_routes.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<AuthRoute Page={item.Element} />}
                        exact={item.exact}
                    />
                ))
            }
            {
                routes.admin_routes.map((item, index) => (
                    <Route
                        key={index}
                        path={item.path}
                        element={<AdminRoute isAuth={isAuth} Page={item.Element} />}
                        exact={item.exact}
                    />
                ))
            }

        </Routes>
    );
};

export default AppRoutes;