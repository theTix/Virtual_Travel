//react
import React, { useState } from 'react';

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//styles
import '../styles/second-section.css';

const SecondSection = () => {
  const [ viewText, setViewText ] = useState(false);
  const [ animationName, setAnimationName ] = useState("rotateBackwards");

  const handleClick = () => {
    setViewText((prevViewText) => !prevViewText);
    setAnimationName((prevAnimationName) => prevAnimationName === "rotateForwards" ? "rotateBackwards" : "rotateForwards");
  }

  return (
    <div className='second-section--container'>
        <h2>About Us</h2>
        <div className="second-section--p-and-btn-container">
            <div className={`second-section--p-container ${viewText ? "show" : ""}`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas atque consequuntur voluptate error id voluptates unde excepturi sequi tempora quasi labore illum libero quis incidunt repudiandae accusamus, architecto eaque, similique aliquid suscipit reprehenderit corrupti molestias. Vitae consequatur odio quia iure!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id labore repellat deserunt distinctio temporibus, quasi voluptate esse saepe eaque voluptas totam molestiae architecto, iure deleniti earum amet a error incidunt voluptatibus optio aperiam nobis enim suscipit! Unde cupiditate, error obcaecati illo consequuntur corporis suscipit quam ea omnis, debitis provident.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam saepe laboriosam perspiciatis quibusdam, assumenda neque excepturi sunt labore eveniet consequatur distinctio rem ducimus quisquam eius hic esse doloribus animi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum exercitationem ad quam, cupiditate ducimus quisquam maiores minus vel? Illo harum, perspiciatis sapiente repudiandae voluptates earum? Dolorem dicta quisquam deleniti a optio beatae! Nesciunt fugit nihil laudantium dignissimos quae necessitatibus, omnis obcaecati quos modi in quisquam dicta voluptas possimus ut.</p>
          </div>
  
          <div className="second-section--p-container-btn">
            <button onClick={handleClick}>
              <RiArrowRightDoubleLine className={`second-section--p-container-btn-icon ${animationName}`} />
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default SecondSection