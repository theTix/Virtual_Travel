//react
import React from 'react';

//components
//components/destinations
import AllCountries from './AllCountries';

//assets
//assets/europe
import czechia from "./../../assets/europe/prague_czechia.jpg";
import france from "./../../assets/europe/paris_france.jpg";
import germany from "./../../assets/europe/gablenz_germany.jpg";
import greece from "./../../assets/europe/greece.jpg";
import italy from "./../../assets/europe/roma_lazio_italy.jpg";

//styles
//styles/destinations
import "./../../styles/destinations/europe.css";

const EuropePage: React.FC = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='europe--first-section'>
        <img src={germany} alt="Devil's Bridge in Kromlau, Germany" />
        <h2>Europe</h2>
      </div>

      <div className="destination-mark--second-section" id='europe--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={greece} alt="Landscape View of Greece during Day Time" />
          </div>
          <div className="destination-mark--second-section-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tempora enim eligendi nostrum perspiciatis voluptatem perferendis cupiditate optio, quo, minus odio? Sunt quasi doloremque est quas rem dignissimos reiciendis eum nobis alias quod, earum esse iure neque aliquam repudiandae quos?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus officia animi iusto ut harum earum, debitis dolores modi nam quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ad ex a dolore sit odit, culpa quod delectus maxime minima! Quia sint doloribus sit eligendi eum aut ad, quidem a dolorem blanditiis ab, praesentium natus fugiat quos qui quasi! Distinctio.</p>
          </div>
        </div>

        <div className="destination-mark--second-section-row-divider"></div>

        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={italy} alt="Photography Of Lighted Bridge in Rome, Italy" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={czechia} alt="Red Tram Passing Between Concrete Buildings in Prague, Czechia" />
          </div>
        </div>

        <div className="destination-mark--second-section-row-divider"></div>

        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tempora enim eligendi nostrum perspiciatis voluptatem perferendis cupiditate optio, quo, minus odio? Sunt quasi doloremque est quas rem dignissimos reiciendis eum nobis alias quod, earum esse iure neque aliquam repudiandae quos?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus officia animi iusto ut harum earum, debitis dolores modi nam quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ad ex a dolore sit odit, culpa quod delectus maxime minima! Quia sint doloribus sit eligendi eum aut ad, quidem a dolorem blanditiis ab, praesentium natus fugiat quos qui quasi! Distinctio.</p>
          </div>
          <div className="destination-mark--second-section-image">
            <img src={france} alt="Low-angle Photography of Eiffel Tower in Paris, France" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"Europe"} />
      </div>
    </div>
  )
}

export default EuropePage