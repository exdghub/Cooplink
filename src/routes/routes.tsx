import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../app/layouts/AboutModule/about.module";
import Contact from "../app/layouts/ContactModule/contact.module";
import Home from "../app/layouts/HomeModule/home.module";
import MainLayout from "../app/layouts/MainModule/main.module";
import Login from "../app/LoginModule/login.module";

export default function RoutePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
