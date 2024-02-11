//react
import React from 'react';

//components
//components/destinations
import AllCountries from './AllCountries';

//assets
//assets/africa
import egypt from "./../../assets/africa/al_wahat_al_dakhla_desert_new_valley_governorate_egypt.jpg";
import morocco from "./../../assets/africa/chefchaouen_tangier-tétouan-al_hoceima_morocco.jpg";
import southAfrica from "./../../assets/africa/cape_town_wc_south_africa.jpg";
import southAfrica2 from "./../../assets/africa/mpumalanga_kzn_south_africa.jpg";
import tanzania from "./../../assets/africa/tanzania.jpg";

//styles
//styles/destinations
import "./../../styles/destinations/africa.css";

const AfricaPage: React.FC = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='africa--first-section'>
        <img src={southAfrica} alt="" />
        <h2>Africa</h2>
      </div>

      <div className="destination-mark--second-section" id='africa--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={southAfrica2} alt="Photo Of Waterfalls During Daytime in Mpumalanga, KwaZulu-Natal" />
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
            <img src={morocco} alt="Narrow Alley in Morocco" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={egypt} alt="Photo Of Camels in Desert in Egypt" />
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
            <img src={tanzania} alt="Road in Tanzania" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"Africa"} />
      </div>
    </div>
  )
}

export default AfricaPage