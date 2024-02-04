//react
import React, { useEffect, useReducer } from 'react';

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//data
import { getAllCountriesByContinent } from '../../data/countries';

//styles
//styles/destinations
import "./../../styles/destinations/all-countries.css";

const INITIAL_STATE = {
  isOpen: false,
  countries: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case "handleBtn":
      return {
        ...state,
        isOpen: !state.isOpen
      }
    case "GET_COUNTRIES": 
      return {
        ...state,
        countries: action.payload.countries
      }
    default:
      return state;
  }
}

const Country = ({ country }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleButtonClick = () => {
    dispatch({type: "handleBtn"})
  }

  const handleFlagClick = () => {
    window.location.href = country.maps.googleMaps;
  }

  return (
    <div className='country-box'>
      <span className='country-box-flag' onClick={handleFlagClick}>{country.flag}</span>
      <h4>{country.name.common}</h4>
      <div className={`country-box-languages ${state.isOpen ? "open" : "close"}`}>
        {
          Object.values(country.languages).map((lang, index) => (
            <span className='country-box-languages-all' key={index}>{lang}</span>
          ))
        }
      </div>
      {
        Object.values(country.languages).length > 3 && (
          <button className="country-box-button" onClick={handleButtonClick}>
            <RiArrowRightDoubleLine className={`country-box-button-icon ${state.isOpen ? "btn-open" : "btn-close"}`} />
          </button>
        )
      }
      
    </div>
  )
}

const AllCountries = ({ continentCode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    getAllCountriesByContinent(continentCode)
      .then(countries => dispatch({type: "GET_COUNTRIES", payload: {countries}}))
      .catch(error => console.log("Error: ", error));
  }, [continentCode]);
  return (
    <div className='all-countries'>
      <h2>Countries in {continentCode}</h2>
      <div className="all-countries--container">
        {
          state.countries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))
        }
      </div>
    </div>
  )
}

export default AllCountries;