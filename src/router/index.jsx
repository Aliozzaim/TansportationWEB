import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Massages from "../pages/Massages";
import Home from "../pages/Home";
import Offer from "../pages/Offer";
import Profile from "../pages/Profile";
import "../index.css";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/massages" element={<Massages />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
