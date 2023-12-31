//react
import { useEffect } from 'react';

//react-router-dom
import { NavLink } from 'react-router-dom';

//react icons
import { TbBaselineDensityMedium } from "react-icons/tb";

//styles
//styles(others)
import '../styles/navbar.css';

const Navbar = ({ menuContainer, handleClick }) => {
  useEffect(() => {
    if(menuContainer === "flex") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return() => {
      document.body.style.overflow = "auto";
    };
  }, [menuContainer]);

  return (
    <div className='navbar--container' style={{ display: menuContainer }}>
        <div className="navbar--menu-icon-container">
            <TbBaselineDensityMedium className='navbar--menu--icon' onClick={handleClick} />
        </div>
        
        <div className="navbar--nav-text">
            <NavLink className="navbar--nav-title" to="/" onClick={handleClick}>Virtual Travel <span className='navbar--title--icon'>&#128747;</span></NavLink>
            <nav className="navbar--nav">
              <NavLink className="navbar--nav-a" to="about" onClick={handleClick}>About</NavLink>
              <NavLink className="navbar--nav-a" to="destination" onClick={handleClick}>Destination</NavLink>
              <NavLink className="navbar--nav-a" to="contact" onClick={handleClick}>Contact</NavLink>
            </nav> 
        </div>
        
    </div>
  )
}

export default Navbar