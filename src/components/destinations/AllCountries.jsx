//react
import React, { useState, useEffect } from 'react';

//api
import { getAllCountriesByContinent } from '../../data/countries';

//style
import "./../../styles/all-countries.css";

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Country = ({ country }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const handleFlagClick = () => {
    window.location.href = country.maps.googleMaps;
  }

  return (
    <div className='country-box'>
      <span className='country-box-flag' onClick={handleFlagClick}>{country.flag}</span>
      <h4>{country.name.common}</h4>
      <div className={`country-box-languages ${isOpen ? "open" : "close"}`}>
        {
          Object.values(country.languages).map((lang, index) => (
            <span className='country-box-languages-all' key={index}>{lang}</span>
          ))
        }
      </div>
      {
        Object.values(country.languages).length > 3 && (
          <button className="country-box-button" onClick={handleButtonClick}>
            <RiArrowRightDoubleLine className={`country-box-button-icon ${isOpen ? "btn-open" : "btn-close"}`} />
          </button>
        )
      }
      
    </div>
  )
}

const AllCountries = ({ continentCode }) => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    getAllCountriesByContinent(continentCode)
      .then(countries => setCountries(countries))
      .catch(error => console.log("Error: ", error));
  }, [continentCode]);
  return (
    <div className='all-countries'>
      <h2>Countries in {continentCode}</h2>
      <div className="all-countries--container">
        {
          countries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))
        }
      </div>
    </div>
  )
}

export default AllCountries;