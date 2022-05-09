import React from "react";
import "./App.css";
// import "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./routes/routes";
import Footer from "./app/core/components/Footer/footer";
import Header from "./app/core/components/Header/header";
import Login from "./app/loginModule/login.module";
import useIsLoggedIn from "./app/shared/hooks/useIsLoggedIn";
import LandingPageLayout from "./app/landingPage/landingPage.module";

function App() {

  const { itemState: isLoggedIn } = useIsLoggedIn()

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Header />
          <RoutePage />
          <Footer />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <LandingPageLayout />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
