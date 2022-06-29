import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from './pages/Auth';
import Main from "./pages/Main";
import ShoppingBag from "./pages/ShoppingBag";
import CustomerPage from "./pages/CustomerPage";
import Header from "./cmp/header/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
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
