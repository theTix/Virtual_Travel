//react
import React from 'react';

//components
//components/destinations
import AllCountries from './AllCountries';

//assets
//assets/asia
import gazibo from "./../../assets/asia/gazibo.jpg";
import japan from "./../../assets/asia/tokyo_japan.jpg";
import sKorea from "./../../assets/asia/incheon_south_korea.jpg";
import thailand from "./../../assets/asia/thailand.jpg";
import vietnam from "./../../assets/asia/dong_da_ha_noi_vietnam.jpg";

//styles
//styles/destinations
import "./../../styles/destinations/asia.css";

const AsiaPage: React.FC = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='asia--first-section'>
        <img src={gazibo} alt="Asian Style Gazebo Near Plants" />
        <h2>Asia</h2>
      </div>

      <div className="destination-mark--second-section" id='asia--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={thailand} alt="Woman Wearing Blue Dress With Umbrella during Sunset in Thailand" />
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
            <img src={vietnam} alt="People Sitting on Sidewalk in Vietnam" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={japan} alt="Beige and Brown Temple in Tokyo" />
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
            <img src={sKorea} alt="Brown and Red Wooden House in Incheon, South Korea" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"Asia"} />
      </div>
    </div>
  )
}

export default AsiaPage