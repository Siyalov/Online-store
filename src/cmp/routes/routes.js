import AddProduct from "../../pages/AddProduct";
import {
    ADD_PRODUCT_ROUTE, ADMIN_ROUTE,
    BAG_ROUTE,
    LOGIN_ROUTE,
    NOT_FOUND_PAGE,
    REG_ROUTE,
    SHOP_ROUTE,
    USER_ROUTE
} from "../consts/consts";
import ShoppingBag from "../../pages/ShoppingBag";
import CustomerPage from "../../pages/CustomerPage";
import Auth from "../../pages/Auth";
import NotFound from "../../pages/NotFound";
import AdminPage from "../../pages/AdminPage";
import Main from "../../pages/Main";

export const routes = {
    public_routes: [
        {
            exact: true,
            Element: Auth,
            path: LOGIN_ROUTE
        },
        {
            exact: true,
            Element: Auth,
            path: REG_ROUTE
        },
        {
            exact: true,
            Element: Main,
            path: SHOP_ROUTE
        },
        {
            exact: true,
            Element: NotFound,
            path: NOT_FOUND_PAGE
        },
    ],
    auth_routes: [
        {
            exact: true,
            Element: AddProduct,
            path: ADD_PRODUCT_ROUTE
        },
        {
            exact: true,
            Element: ShoppingBag,
            path: BAG_ROUTE
        },
        {
            exact: true,
            Element: CustomerPage,
            path: USER_ROUTE
        },
    ],
    admin_routes: [
        {
            exact: true,
            Element: AdminPage,
            path: ADMIN_ROUTE
        },
    ]
}