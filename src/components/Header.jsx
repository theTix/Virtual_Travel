import React from 'react';
import { useState } from 'react';
import { TbBaselineDensityMedium, TbWorldPin, TbUserFilled } from "react-icons/tb";
import '../styles/header.css';
import Navbar from './Navbar';

const Header = () => {
    const [ menuContainer, setMenuContainer ] = useState("none");

  return (
    <div className='header--bar'>
        <div className="header--title">
            <h1>Virtual <span className='header--title--icon'>&#128747;</span></h1>
        </div>
        <div className="header--nav-and-login">
            <nav className="header--nav">
                <a href="#">About</a>
                <a href="#">Destination</a>
                <a href="#">Contact</a>
            </nav>
            <div className="header--menu-and-login">
                <TbBaselineDensityMedium className='header--menu-icon' onClick={() => setMenuContainer(menuContainer === "flex" ? "none" : "flex")} />
                <div className="header--login">
                    <TbUserFilled />
                    <a>Log In</a>
                </div>
            </div>
            <Navbar menuContainer={menuContainer} setMenuContainer={setMenuContainer} />
        </div>
    </div>
  )
}

export default Header