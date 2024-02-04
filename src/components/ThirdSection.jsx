//react
import { useReducer } from 'react';

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//data
import { people } from "../data/people.js";

//styles
//styles(others)
import '../styles/third-section.css';

const INITIAL_STATE = {
  clickedIndex: Array(people.length).fill("closed"),
  animationNames: Array(people.length).fill("btn-close")
}

const reducer = (state, action) => {
  switch(action.type) {
    case "OPEN_TEXT":
      return {
        ...state,
        clickedIndex: [
          ...state.clickedIndex.slice(0, action.payload.index),
          "opened",
          ...state.clickedIndex.slice(action.payload.index + 1)
        ]
      }
    case "CLOSE_TEXT":
      return {
        ...state,
        clickedIndex: [
          ...state.clickedIndex.slice(0, action.payload.index),
          "closed",
          ...state.clickedIndex.slice(action.payload.index + 1)
        ]
      }
    case "OPEN_ANIMATION":
      return {
        ...state,
        animationNames: [
          ...state.animationNames.slice(0, action.payload.index),
          "btn-open",
          ...state.animationNames.slice(action.payload.index + 1)
        ]
      }
    case "CLOSE_ANIMATION":
      return {
        ...state,
        animationNames: [
          ...state.animationNames.slice(0, action.payload.index),
          "btn-close",
          ...state.animationNames.slice(action.payload.index + 1)
        ]
      }
    default:
      return state;
  }
}

const ThirdSection = () => {
const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

  const handleBtn = (index) => {
    dispatch(state.clickedIndex[index] === "closed" ? {type:"OPEN_TEXT", payload: {index}} : {type: "CLOSE_TEXT", payload: {index}});
    dispatch(state.animationNames[index] === "btn-close" ? {type: "OPEN_ANIMATION", payload: {index}} : {type: "CLOSE_ANIMATION", payload: {index}});
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
                  <p className={`${state.clickedIndex[index]}`}>{person.about}</p>
                </div>
                <button className='third-section--people-container-box-btn' onClick={() => handleBtn(index)}>
                  <RiArrowRightDoubleLine className={`third-section--people-container-box-btn-icon ${state.animationNames[index]}`} />
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