import { BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./cmp/header/Header";
import AppRoutes from "./cmp/routes/AppRoutes"

const isAuth = false
const isAdmin = false
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes isAuth={isAuth} isAdmin={isAdmin} />
    </BrowserRouter>
  );
}

export default App;