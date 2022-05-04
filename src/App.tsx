import React from "react";
import "./App.css";
import "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./routes/routes";
import Footer from "./app/core/components/Footer/footer";
import Header from "./app/core/components/Header/header";
import Login from "./app/LoginModule/login.module";
import useIsLoggedIn from "./app/shared/hooks/useIsLoggedIn";

function App() {

  const {itemState:isLoggedIn} = useIsLoggedIn()
 
  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Header />
          <RoutePage />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
