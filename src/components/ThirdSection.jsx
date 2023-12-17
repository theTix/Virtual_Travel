//react
import React, { useState } from 'react';

//data
import { people } from "../data/people.js";

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//styles
import '../styles/third-section.css';

const ThirdSection = () => {
  const [ clickedIndex, setClickedIndex ] = useState(Array(people.length).fill("closed"));
  const [ animationNames, setAnimationNames ] = useState(Array(people.length).fill("btn-close"));

  const handleBtn = (index) => {
    setClickedIndex((prevClickedIndex) => {
      const newClickedIndex = [...prevClickedIndex];
      newClickedIndex[index] = prevClickedIndex[index] === "opened" ? "closed" : "opened";
      return newClickedIndex;
    });

    setAnimationNames((prevAnimationNames) => {
      const newAnimationNames = [...prevAnimationNames];
      newAnimationNames[index] = prevAnimationNames[index] === "btn-close" ? "btn-open" : "btn-close";
      return newAnimationNames;
    });
  };

  return (
    <div className='third-section--container'>
      <div className="third-section--text-container">
        <h2>People behind Virtual Travel</h2>
        <div className="third-section--people-container">
          {
            people.map((person, index) => (
              <div className="third-section--people-container-box" key={person.id}>
                <img src={person.image} alt={person.name} />
                <div className="third-section--people-container-box-text">
                  <h3>{person.name}</h3>
                  <p className={`${clickedIndex[index]}`}>{person.about}</p>
                </div>
                <button className='third-section--people-container-box-btn' onClick={() => handleBtn(index)}>
                  <RiArrowRightDoubleLine className={`third-section--people-container-box-btn-icon ${animationNames[index]}`} />
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