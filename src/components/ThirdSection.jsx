//react
import React, { useState } from 'react';

//data
import { people } from "../data/people.js";

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//styles
import '../styles/third-section.css';

const ThirdSection = () => {
  const [ viewText, setViewText ] = useState(false);
  const [ animationName, setAnimationName ] = useState("rotateBackwards");

  const handleClick = () => {
    setViewText((prevViewText) => !prevViewText);
    setAnimationName((prevAnimationName) => prevAnimationName === "rotateForwards" ? "rotateBackwards" : "rotateForwards");
  }

  return (
    <div className='third-section--container'>
      <div className="third-section--text-container">
        <h2>People behind Virtual Travel</h2>
        <div className="third-section--people-container">
          {
            people.map((person) => (
              <div className="third-section--people-container-box" key={person.id}>
                <img src={person.image} alt={person.name} />
                <div className="third-section--people-container-box-text">
                  <h3>{person.name}</h3>
                  <p>{person.about}</p>
                </div>
                <button className='third-section--people-container-box-btn' onClick={handleClick}>
                  <RiArrowRightDoubleLine className={`third-section--people-container-box-btn-icon ${animationName}`} />
                </button>
              </div>
            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default ThirdSection