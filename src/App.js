import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from './pages/Auth';
import Main from "./pages/Main";
import ShoppingBag from "./pages/ShoppingBag";
import CustomerPage from "./pages/CustomerPage";
import Header from "./cmp/header/Header";
import AddProduct from "./pages/AddProduct";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path='/add-product' element={<AddProduct />} exact />
=======
      <Route path='/add-product' element={<AddProduct />} exact />
>>>>>>> b6056eed1309d5c8e070f35fede91648f1a94827
        <Route path='/login' element={<Auth />} exact />
        <Route path='/register' element={<Auth />} exact />
        <Route path='/' element={<Main />} exact />
        <Route path='/bag' element={<ShoppingBag />} exact />
        <Route path='/user' element={<CustomerPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
