import React from "react";
import ReactDOM from "react-dom"; // Corrected import
import { createBrowserHistory } from "history";
import { Route, Routes, HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import './App.css'
import Singup from "./pages/Signup";
import Nic from "./pages/Nic";
import Signin from "./pages/Signin";


const root = ReactDOM.createRoot(document.getElementById("root"));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/nic" element={<Nic />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();
