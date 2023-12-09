import React from 'react';
import { TbWorldPin } from "react-icons/tb";
import { TbUserFilled } from "react-icons/tb";
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header--bar'>
        <div className="header--title">
            <h1>Virtual <TbWorldPin className='header--title--icon' /></h1>
        </div>
        <div className="header--nav-and-login">
            <nav className="header--nav">
                <a href="#">About</a>
                <a href="#">Destination</a>
                <a href="#">Contact</a>
            </nav>
            <div className="header--login">
                <TbUserFilled />
                <a>Log In</a>
            </div>
        </div>
    </div>
  )
}

export default Header