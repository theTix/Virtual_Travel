//react
import React from 'react';
import { useState } from 'react';

//react-router-dom
import { NavLink, Outlet } from 'react-router-dom';

//react icons
import { TbBaselineDensityMedium, TbWorldPin, TbUserFilled, TbDoorEnter } from "react-icons/tb";
import { RiFacebookCircleFill, RiYoutubeFill, RiPinterestFill, RiTwitterXFill, RiInstagramFill } from "react-icons/ri";

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
                    <NavLink className="header--login" to="login">
                        <TbUserFilled />
                        <a className="header--login-and-signup">Log In</a>
                    </NavLink>
                    <NavLink className="header--signup" to="signup">
                        <TbDoorEnter />
                        <a className="header--login-and-signup">Sign Up</a>
                    </NavLink>
                </div>
                <Navbar menuContainer={menuContainer} setMenuContainer={setMenuContainer} handleClick={handleClick} />
            </div>
        </div>

        <main>
            <Outlet />
        </main>

        <div className="footer">
            <div className='footer-row'>
                <h2>Virtual Travel</h2>
                <div className="links-to-websites">
                    <a href="https://www.facebook.com"><RiFacebookCircleFill className='footer-icons' /></a>
                    <a href="https://www.youtube.com"><RiYoutubeFill className='footer-icons' /></a>
                    <a href="https://www.instagram.com"><RiInstagramFill className='footer-icons' /></a>
                    <a href="https://www.pinterest.com"><RiPinterestFill className='footer-icons' /></a>
                    <a href="https://www.twitter.com"><RiTwitterXFill className='footer-icons' /></a>
                </div>
            </div>
            <div className='footer-row'>
                <p>@2023 Virtual Travel | All Rights Reserved</p>
            </div>
        </div>
    </>
    
  )
}

export default Header