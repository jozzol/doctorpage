import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';


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
                        <HashLink className="nav__link2" to='/#home'>Inicio</HashLink>
                    </li>
                    <li className="nav_item">
                        <Link className="nav__link" to="/Perfil">Perfil</Link>
                    </li>
                    <li className="nav__item">
                        <HashLink className="nav__link" to="/#especialista">Especilista en</HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink className="nav__link" to="/#imagenes">Imagenes</HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink className="nav__link" to="/#videos">videos</HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink className="nav__link" to="/#contacto">Contacto</HashLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div className='navlist'>
            <nav className="nav2">
                <ul className="nav__list2">
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to='/#home'>Inicio</HashLink>
                    </li>
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to="/Perfil">Perfil</HashLink>
                    </li>
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to="/#especialista">Especilista en</HashLink>
                    </li>
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to="/#imagenes">Imagenes</HashLink>
                    </li>
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to="/#videos">videos</HashLink>
                    </li>
                    <li className="nav__item2">
                        <HashLink className="nav__link2" to="#contacto">Contacto</HashLink>
                    </li>
                </ul>
            </nav>
        </div>


    </div>
    )
}

export default Navbar;