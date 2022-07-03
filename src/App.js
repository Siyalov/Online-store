import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import ShoppingBag from "./pages/ShoppingBag";
import CustomerPage from "./pages/CustomerPage";
import Header from "./cmp/header/Header";
import AddProduct from "./pages/AddProduct";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import AppRoutes from "./cmp/routes/AppRoutes"

//   ADD_PRODUCT_ROUTE,
//   ADMIN_ROUTE,
//   BAG_ROUTE,
//   LOGIN_ROUTE,
//   REG_ROUTE,
//   SHOP_ROUTE,
//   USER_ROUTE,
//   NOT_FOUND_PAGE
// } from "./cmp/consts/consts";


function App() {

  // ВРЕМЕННЫЕ ПЕРЕМЕННЫЕ !!! 
  // ЧТОБЫ РАБОТАЛ КОД !!!

const isAuth = false
const isAdmin = false

  return (
    <BrowserRouter>
      <Header />
      
      <AppRoutes isAuth={isAuth} isAdmin={isAdmin}/>
  

    </BrowserRouter>
  );
}

export default App;


