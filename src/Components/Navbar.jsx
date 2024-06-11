import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    setClicked(!clicked);
  }
  return (
    <>
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Travel Tresures</h1>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/topplaces'>Top Places</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul> 
            <div className="menu-icon" onClick={handleClick}>
              <FontAwesomeIcon icon={clicked ? faTimes : faBars}/>
            </div>
        </nav>
    </>
  )
}

export default Navbar