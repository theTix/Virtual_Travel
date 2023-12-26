//components
//components/destinations
import AllCountries from './AllCountries';

//assets
//assets/oceania
import australia from "./../../assets/oceania/north_bondi_nsw_australia.jpg";
import australia2 from "./../../assets/oceania/bondi_beach_nsw_australia.jpg";
import australia3 from "./../../assets/oceania/sydney_australia.jpg";
import frenchPolynesia from "./../../assets/oceania/moorea_maiao_windward_islands,_french_polynesia.jpg";
import samoa from "./../../assets/oceania/apia_upolu_samoa.jpg";

//styles
//styles/destinations
import "./../../styles/destinations/oceania.css";

const OceaniaPage = () => {
  return (
    <div className='destination-mark--container'>
      <div className="destination-mark--first-section" id='oceania--first-section'>
        <img src={frenchPolynesia} alt="White Clouds above Mount Rotui in French Polynesia" />
        <h2>Oceania</h2>
      </div>

      <div className="destination-mark--second-section" id='oceania--second-section'>
        <div className="destination-mark--second-section-row">
          <div className="destination-mark--second-section-image">
            <img src={australia} alt="Aerial Photo of Bondi Beach in Australia" />
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
            <img src={australia2} alt="Bird's Eye View Of Cropland During Daytime in Australia" />
          </div>
          <div className="destination-mark--second-section-image">
            <img src={australia3} alt="View of Harbour Bridge In Sydney, Australia" />
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
            <img src={samoa} alt="View of the Beach in Samoa" />
          </div>
        </div>

        
        <div className="destination-mark--second-section-row-divider"></div>

        <AllCountries continentCode={"Oceania"} />
      </div>
    </div>
  )
}

export default OceaniaPage