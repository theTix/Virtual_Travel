import React from 'react';
import "../styles/fourth-section.css";
import worldMap from "../assets/world-map2.png";
import { RiFlagFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const FourthSection = () => {
  return (
    <div className='fourth-section--container'>
        <h3>Select Your Travel Destination</h3>
        <div className="fourth-section--map-container">
            <img src={worldMap} alt="World map" className='fourth-section--map' />  
            <NavLink className="fourth-section-map-dot n-america" to="n-america">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>
            <NavLink className="fourth-section-map-dot s-america" to="s-america">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>
            <NavLink className="fourth-section-map-dot europe" to="europe">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>
            <NavLink className="fourth-section-map-dot africa" to="africa">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>
            <NavLink className="fourth-section-map-dot asia" to="asia">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>
            <NavLink className="fourth-section-map-dot australia" to="australia">
                <RiFlagFill className='fourth-section-map-dot-flag' />
            </NavLink>

            <div className="fourth-section--map-selection">
                <NavLink className="fourth-section--map-selection-box" to="n-america">
                    <h4>North America</h4>
                </NavLink>
                <NavLink className="fourth-section--map-selection-box" to="s-america">
                    <h4>South America</h4>
                </NavLink>
                <NavLink className="fourth-section--map-selection-box" to="europe">
                    <h4>Europe</h4>
                </NavLink>
                <NavLink className="fourth-section--map-selection-box" to="africa">
                    <h4>Africa</h4>
                </NavLink>
                <NavLink className="fourth-section--map-selection-box" to="asia">
                    <h4>Asia</h4>
                </NavLink>
                <NavLink className="fourth-section--map-selection-box" to="australia">
                    <h4>Australia</h4>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default FourthSection