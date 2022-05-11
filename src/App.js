import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import './App.css';
import Perfil from "./components/perfil";
import UltrasonidoHIFU from "./pages/ultrasonidoHIFU";
import AcidoHialuronico from "./pages/acidoHialuronico";
import Acne from "./pages/acne";
import Antienvejecimiento from "./pages/antienvejecimiento";
import Celulitis from "./pages/celulitis";
import CorreccionCicatrices from "./pages/correccionCicatrices";
import EnzimasBiologicas from "./pages/enizmasBiologicas";
import Estrias from "./pages/estrias";
import Hidrolipoclasia from "./pages/hidrolipoclasia";
import HilosTensores from "./pages/hilosTensores";
import Laser from "./pages/laser";
import LaserC02 from "./pages/laserQuirurgicoC02";
import Lunares from "./pages/lunares";
import ManchasPiel from "./pages/manchasPiel";
import MedicinaBiológica from "./pages/medicinaBiologica";
import Ojeras from "./pages/ojeras";
import PerfiladoLabios from "./pages/perfiladoLabios";
import PlasmaPlaquetas from "./pages/plasmaPlaquetas";
import RejuvenecimientoFacialLaser from "./pages/rejuevenecimientoFacialLaser";
import RejuvencecimientoFacial from "./pages/rejuvenecimientoFacial";
import RejuvenecimientoFacialSinCirugía from "./pages/rejuvenecimientoFacialSinCirugia";
import RellenoDermico from "./pages/rellenoDermico";
import RellenosFaciales from "./pages/rellenosFaciales";
import Rinomodelacion from "./pages/rinomodelacion";
import Toxinabotulinica from "./pages/toxinaBotulinica";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path='/acidohialuronico' element={<AcidoHialuronico/>}></Route>
        <Route path='/acne' element={<Acne/>}></Route>
        <Route path='/tratamientosantienvejecimiento' element={<Antienvejecimiento/>}></Route>
        <Route path='/tratamientodelacelulitis' element={<Celulitis/>}></Route>
        <Route path='/correciondecicatrices' element={<CorreccionCicatrices/>}></Route>
        <Route path='/enzimasbiologicas' element={<EnzimasBiologicas/>}></Route>
        <Route path='/estrias' element={<Estrias/>}></Route>
        <Route path='/hidrolipoclasia' element={<Hidrolipoclasia/>}></Route>
        <Route path='/hilostensores' element={<HilosTensores/>}></Route>
        <Route path='/laser' element={<Laser/>}></Route>
        <Route path='/laserquirurgicodec02' element={<LaserC02/>}></Route>
        <Route path='/nevusolunares' element={<Lunares/>}></Route>
        <Route path='/manchasdelapiel' element={<ManchasPiel/>}></Route>
        <Route path='/medicinabiologica' element={<MedicinaBiológica/>}></Route>
        <Route path='/tratamientodelasojeras' element={<Ojeras/>}></Route>
        <Route path='/perfiladodelabios' element={<PerfiladoLabios/>}></Route>
        <Route path='/plasmaricoenplaquetas' element={<PlasmaPlaquetas/>}></Route>
        <Route path='/rejuvenecimientofacialconlaser' element={<RejuvenecimientoFacialLaser/>}></Route>
        <Route path='/rejuvencimientofacial' element={<RejuvencecimientoFacial/>}></Route>
        <Route path='/rejuvenecimientofacialintegralsincirugia' element={<RejuvenecimientoFacialSinCirugía/>}></Route>
        <Route path='/rellenodermico' element={<RellenoDermico/>}></Route>
        <Route path='/rellenosfaciales' element={<RellenosFaciales/>}></Route>
        <Route path='/rinomodelacion' element={<Rinomodelacion/>}></Route>
        <Route path='/toxinabotulinica' element={<Toxinabotulinica/>}></Route>
        <Route path='/ultrasonidoHIFU' element={<UltrasonidoHIFU/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
