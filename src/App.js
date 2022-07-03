import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import ShoppingBag from "./pages/ShoppingBag";
import CustomerPage from "./pages/CustomerPage";
import Header from "./cmp/header/Header";
import AddProduct from "./pages/AddProduct";
import AdminPage from "./pages/AdminPage";
import {
  ADD_PRODUCT_ROUTE,
  ADMIN_ROUTE,
  BAG_ROUTE,
  LOGIN_ROUTE,
  REG_ROUTE,
  SHOP_ROUTE,
  USER_ROUTE
} from "./cmp/consts/consts";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ADD_PRODUCT_ROUTE} element={<AddProduct />} exact />
        <Route path={LOGIN_ROUTE} element={<Auth />} exact />
        <Route path={REG_ROUTE} element={<Auth />} exact />
        <Route path={SHOP_ROUTE} element={<Main />} exact />
        <Route path={BAG_ROUTE} element={<ShoppingBag />} exact />
        <Route path={USER_ROUTE} element={<CustomerPage />} exact />
        <Route path={ADMIN_ROUTE} element={<AdminPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


