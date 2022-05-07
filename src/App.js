import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
