import React from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login"
import singup from "./pages/Signup"
import './App.css'
import Signup from './pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
var hist = createBrowserHistory();

root.render(
  <HashRouter history = {hist}>
    <Routes>
      <Route path = "/" element={<Login/>}/>
      <Route path='/singup' element={<Signup/>}/>
    </Routes>
  </HashRouter>
);

reportWebVitals()
