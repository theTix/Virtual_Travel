//react
import React from 'react';

//style
import "./../../styles/n-america.css";

//images
import newYork from "./../../assets/n-america/bow_bridge_new_york.jpg";
import duluth from "./../../assets/n-america/duluth_mn_united_states.jpg";
import sanFrancisco from "./../../assets/n-america/san_francisco.jpg";
import ottawa from "./../../assets/n-america/ottawa_on_canada.jpg";
import glendo from "./../../assets/n-america/glendo_wy_united_states.jpg";

//components
import AllCountries from './AllCountries';

const NorthAmericaPage = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='n-america--first-section'>
        <img src={newYork} alt="Bow Bridge in New York" />
        <h2>North America</h2>
      </div>

      <div className="destination-mark--second-section" id='n-america--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={duluth} alt="The Streets of Duluth" />
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
            <img src={sanFrancisco} alt="The Streets of San Francisco" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={glendo} alt="Sunset in Glendo" />
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
            <img src={ottawa} alt="Parliament Hill in Ottawa" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"North America"} />
      </div>
    </div>
  )
}

export default NorthAmericaPage