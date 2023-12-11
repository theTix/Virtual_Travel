//react
import React from 'react';
import { useState, useEffect } from 'react';

//react-router-dom
import { NavLink } from 'react-router-dom';

//icons
import { FcBinoculars } from "react-icons/fc";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//luxon
import { DateTime } from 'luxon';

//data
import { timeData } from '../data/time.js';

//css
import '../styles/first-section.css';


const FirstSection = () => {
  const [ currentTime, setCurrentTime ] = useState(DateTime.local());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentTime(DateTime.local());
    }, 1000);

    return() => clearInterval(IntervalId);
  }, []);

  return (
    <div className='first-section'>
        <div className="first-section--text">
            <h2>Virtual Travel</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nam voluptates dignissimos culpa ut officiis hic vel natus sint magni nihil labore est distinctio iure fuga, eum perferendis debitis ex, officia nulla nesciunt earum! Animi quam aperiam repellendus consequuntur aspernatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur est similique doloribus minima maiores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo maiores nihil at sint sapiente quas autem magni architecto omnis. Dolore fuga velit illo porro magnam non tenetur laborum. Id minima tenetur aliquam placeat quo ad culpa libero corporis at labore eaque fugiat iure harum, eligendi vitae excepturi sit accusamus nobis mollitia earum officiis blanditiis. Mollitia eligendi amet hic aut.</p>
        </div>

        <div className="first-section--nav-containers">
          <NavLink className="first-section--box" to="about">
            <p>&#128204; Find out more about us</p>
            <div className="first-section--hover"></div>
            <TbArrowBadgeRightFilled className='first-section--box-icon-more' />
          </NavLink>
          <div className="first-section--box">
            <Swiper
              modules={[Navigation, A11y]}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {
                timeData.map(location => (
                  <SwiperSlide className='first-section--swiper-slide' key={location.id}>
                    <h1>{location.city}</h1>
                    <p>{currentTime.setZone(location.place).toFormat("HH:mm:ss")}</p>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className="first-section--box">
            <p><FcBinoculars /> Check out different cultures</p>
            <TbArrowBadgeRightFilled className='first-section--box-icon-more' />
          </div>
        </div>
    </div>
  )
}

export default FirstSection