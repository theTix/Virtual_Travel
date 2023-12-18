//react
import React, { useState, useEffect } from 'react';

//api
import { getAllCountriesByContinent } from '../../data/countries';

//style
import "./../../styles/all-countries.css";

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

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
            <a className='country-box' key={country.cca3} href={country.maps.googleMaps}>
              <span className='country-box-flag'>{country.flag}</span>
              <h4>{country.name.common}</h4>
              <div className="country-box-languages">
                {
                  Object.values(country.languages).map((lang, index) => (
                    <span className='country-box-languages-all' key={index}>{lang}</span>
                  ))
                }
              </div>
              {
                Object.values(country.languages).length > 3 && (
                  <button className='country-box-button'>
                    <RiArrowRightDoubleLine className='country-box-button-icon' />
                  </button>
                )
              }
              
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default AllCountries;