import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../app/landingPage/aboutComponent/about.component";
import Home from "../app/landingPage/homeComponent/home.component";
import LandingPageLayout from "../app/landingPage/landingPage.module";
import Login from "../app/loginModule/login.module";

export default function RoutePage() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPageLayout />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}
