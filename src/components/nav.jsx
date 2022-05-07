import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () =>{

    const [navbarOpen, setNavbarOpen] = useState(false)

    const toggleClass = () => {
      setNavbarOpen(!navbarOpen);
    };
  
    const closeMenu = () => {
      setNavbarOpen(false)
    }


    return(
    <div>
        <div className={`navbar ${navbarOpen ? 'nav-open': ""}`}>
            <button className='nav-toggle' aria-label='toggle-navigation' onClick={toggleClass}>
                <span className='hamburger'></span>
            </button>
            <nav className="nav">
                <ul className="nav__list" onClick={closeMenu}>
                    <li className="nav__item">
                        <a href="#home" className="nav__link">Inicio</a>
                    </li>
                    <li className="nav_item">
                        <Link className="nav__link" to="/">Perfil</Link>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#especialista">Especilista en</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#imagenes">Imagenes</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#videos">videos</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className='navlist'>
            <nav className="nav2">
                <ul className="nav__list2">
                    <li className="nav__item2">
                        <a href="#home" className="nav__link2">Inicio</a>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Perfil</Link>
                    </li>
                    <li className="nav__item2">
                        <a className="nav__link2" href="#especialista">Especilista en</a>
                    </li>
                    <li className="nav__item2">
                        <a className="nav__link2" href="#imagenes">Imagenes</a>
                    </li>
                    <li className="nav__item2">
                        <a className="nav__link2" href="#videos">videos</a>
                    </li>
                    <li className="nav__item2">
                        <a className="nav__link2" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>


    </div>
    )
}

export default Navbar;