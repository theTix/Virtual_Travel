//react
import React from 'react';
import { useState } from 'react';

//react-router-dom
import { NavLink, Outlet } from 'react-router-dom';

//react icons
import { TbBaselineDensityMedium, TbWorldPin, TbUserFilled, TbDoorEnter } from "react-icons/tb";

//styles
import '../styles/header.css';

//components
import Navbar from './Navbar';

const Header = () => {
    const [ menuContainer, setMenuContainer ] = useState("none");
    
    function handleClick() {
        setMenuContainer(menuContainer === "flex" ? "none" : "flex")
      }
  return (
    <>
        <div className='header--bar'>
            <div className="header--title">
                <NavLink className="header--title-h1" to="/" >Virtual <span className='header--title--icon'>&#128747;</span></NavLink>
            </div>
            <div className="header--nav-and-login">
                <nav className="header--nav">
                    <NavLink className="header--nav-a" to="about">About</NavLink>
                    <NavLink className="header--nav-a" to="destination">Destination</NavLink>
                    <NavLink className="header--nav-a" to="contact">Contact</NavLink>
                </nav>
                <div className="header--menu-and-login">
                    <TbBaselineDensityMedium className='header--menu-icon' onClick={handleClick} />
                    <div className="header--login">
                        <TbUserFilled />
                        <NavLink className="header--login-and-signup" to="login">Log In</NavLink>
                    </div>
                    <div className="header--signup">
                        <TbDoorEnter />
                        <NavLink className="header--login-and-signup" to="signup">Sign Up</NavLink>
                    </div>
                </div>
                <Navbar menuContainer={menuContainer} setMenuContainer={setMenuContainer} handleClick={handleClick} />
            </div>
        </div>

        <main>
            <Outlet />
        </main>
    </>
    
  )
}

export default Header