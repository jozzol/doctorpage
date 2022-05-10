import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import './App.css';
import Perfil from "./components/perfil";
import UltrasonidoHIFU from "./pages/ultrasonidoHIFU";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path='/ultrasonidoHIFU' element={<UltrasonidoHIFU/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
