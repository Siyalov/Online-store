import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from './pages/Auth';
import Main from "./pages/Main";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth />} exact />
        <Route path='/register' element={<Auth />} exact />
        <Route path='/' element={<Main />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
