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
import AppRoutes from "./cmp/routes/AppRoutes";
//import { check } from "prettier";
import checkAdmin from "./chekers/checkAdmin";



//   ADD_PRODUCT_ROUTE,
//   ADMIN_ROUTE,
//   BAG_ROUTE,
//   LOGIN_ROUTE,
//   REG_ROUTE,
//   SHOP_ROUTE,
//   USER_ROUTE,
//   NOT_FOUND_PAGE
// } from "./cmp/consts/consts";


const isAuth = false 
const isAdmin = false  

console.log(checkAdmin())


function App() {

  // ВРЕМЕННЫЕ ПЕРЕМЕННЫЕ !!! 
  // ЧТОБЫ РАБОТАЛ КОД !!!



  return (
    <BrowserRouter>
      <Header />

      <AppRoutes isAuth={isAuth} isAdmin={isAdmin}/>
  

    </BrowserRouter>
  );
}

export default App;


