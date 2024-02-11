//react
import React, { useState, useEffect } from 'react';

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//data
import { getAllCountriesByContinent } from '../../data/countries';

//types
import { CountryData } from '../../../types/countries';

//styles
//styles/destinations
import "./../../styles/destinations/all-countries.css";

interface CountryProps {
  country: CountryData
}

const Country: React.FC<CountryProps> = ({ country }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const handleFlagClick = () => {
    window.location.href = country.maps.googleMaps;
  }

  return (
    <div className='country-box'>
      <img className='country-box-flag' src={country.flag} onClick={handleFlagClick} alt='Flag' />
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

interface CountriesProps {
  continentCode: string
}

const AllCountries: React.FC<CountriesProps> = ({ continentCode }) => {
  const [ countries, setCountries ] = useState<CountryData[]>([]);

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