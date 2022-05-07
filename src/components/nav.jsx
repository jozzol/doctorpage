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
                        <Link className="nav__link" to="/">Inicio</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="nav__link" to="/">Perfil</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/">Especilista en</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/">Imagenes</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/">videos</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className='navlist'>
            <nav className="nav2">
                <ul className="nav__list2">
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Inicio</Link>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Perfil</Link>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Especilista en</Link>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Imagenes</Link>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">videos</Link>
                    </li>
                    <li className="nav__item2">
                        <Link className="nav__link2" to="/">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>


    </div>
    )
}

export default Navbar;