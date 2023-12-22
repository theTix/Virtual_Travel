//react
import React from 'react';

//style
import "./../../styles/s-america.css";

//images
import uruguay from "./../../assets/s-america/punta_del_este_maldonado_department_uruguay.jpg";
import colombia from "./../../assets/s-america/guatapé_antioquia_colombia.jpg";
import colombia2 from "./../../assets/s-america/medellín_antioquia_colombia.jpg";
import peru from "./../../assets/s-america/puno_peru.jpg";
import chile from "./../../assets/s-america/magallanes_and_chilean_antarctica_chile.jpg";

//components
import AllCountries from './AllCountries';

const SouthAmericaPage = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='s-america--first-section'>
        <img src={chile} alt="Gray Rocky Mountain Under the Blue Sky in Chile" />
        <h2>South America</h2>
      </div>

      <div className="destination-mark--second-section" id='s-america--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={uruguay} alt="Bird's-eye View of the City of Punta del Este in Uruguay" />
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
            <img src={colombia} alt="White Clouds above the Town of Guatapé in Colombia" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={colombia2} alt="Aerial View of Medellín city during Night Time in Colombia" />
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
            <img src={peru} alt="Brown Wooden Boat on Water in Peru" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"South America"} />
      </div>
    </div>
  )
}

export default SouthAmericaPage