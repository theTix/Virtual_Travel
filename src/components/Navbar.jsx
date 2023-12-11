import React from 'react';
import { TbBaselineDensityMedium, TbWorldPin } from "react-icons/tb";
import '../styles/navbar.css';

const Navbar = ({ menuContainer, setMenuContainer }) => {
  return (
    <div className='navbar--container' style={{ display: menuContainer }}>
        <div className="navbar--menu-icon-container">
            <TbBaselineDensityMedium className='navbar--menu--icon' onClick={() => setMenuContainer(menuContainer === "flex" ? "none" : "flex")} />
        </div>
        
        <div className="navbar--nav-text">
            <h1>Virtual Travel <span className='navbar--title--icon'>&#128747;</span></h1>
            <nav className="navbar--nav">
                <a href="#">About</a>
                <a href="#">Destination</a>
                <a href="#">Contact</a>
            </nav> 
        </div>
        
    </div>
  )
}

export default Navbar