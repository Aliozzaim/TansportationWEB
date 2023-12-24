// @ts-nocheck
// @jsxImportSource @react-ssr/server

import React from "react";
import {
  BrowserRouter as ReactRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Massages from "../massages/Massages";
// import Home from "../../home/Home";
// import Offer from "../offer/Offer";
// import Profile from "../profile/Profile";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = true; // authentication logic
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const MyRouter = () => <div>router</div>;

export default MyRouter;
