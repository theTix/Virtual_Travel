//react
import { useReducer } from 'react';

//react icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

//styles
//styles(others)
import '../styles/second-section.css';

const INITIAL_STATE = {
  viewText: false,
  animationName: "rotateBackwards"
}

const reducer = (state, action) => {
  switch(action.type) {
    case "OPEN|CLOSE_TEXT":
      return {
        ...state,
        viewText: !state.viewText
      }
    case "CHANGE_ANIMATION_FORWARDS":
      return {
        ...state,
        animationName: "rotateForwards"
      }
    case "CHANGE_ANIMATION_BACKWARDS":
      return {
        ...state,
        animationName: "rotateBackwards"
      }
    default:
      return state;
  }
}

const SecondSection = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch({type: "OPEN|CLOSE_TEXT"});
    dispatch(state.animationName === "rotateForwards" ? {type: "CHANGE_ANIMATION_BACKWARDS"} : {type: "CHANGE_ANIMATION_FORWARDS"});
  }

  console.log(state);

  return (
    <div className='second-section--container'>
        <h2>About Us</h2>
        <div className="second-section--p-and-btn-container">
            <div className={`second-section--p-container ${state.viewText ? "show" : ""}`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas atque consequuntur voluptate error id voluptates unde excepturi sequi tempora quasi labore illum libero quis incidunt repudiandae accusamus, architecto eaque, similique aliquid suscipit reprehenderit corrupti molestias. Vitae consequatur odio quia iure!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id labore repellat deserunt distinctio temporibus, quasi voluptate esse saepe eaque voluptas totam molestiae architecto, iure deleniti earum amet a error incidunt voluptatibus optio aperiam nobis enim suscipit! Unde cupiditate, error obcaecati illo consequuntur corporis suscipit quam ea omnis, debitis provident.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam saepe laboriosam perspiciatis quibusdam, assumenda neque excepturi sunt labore eveniet consequatur distinctio rem ducimus quisquam eius hic esse doloribus animi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum exercitationem ad quam, cupiditate ducimus quisquam maiores minus vel? Illo harum, perspiciatis sapiente repudiandae voluptates earum? Dolorem dicta quisquam deleniti a optio beatae! Nesciunt fugit nihil laudantium dignissimos quae necessitatibus, omnis obcaecati quos modi in quisquam dicta voluptas possimus ut.</p>
          </div>
  
          <div className="second-section--p-container-btn">
            <button onClick={handleClick}>
              <RiArrowRightDoubleLine className={`second-section--p-container-btn-icon ${state.animationName}`} />
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default SecondSection