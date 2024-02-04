//react
import { useEffect, useReducer, useRef} from "react";

//react-router-dom
import { NavLink } from "react-router-dom";

const INITIAL_STATE = {
  user: "",
  pwd: "",
  success: false
};

const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case "SUBMIT_INFO": 
      return {
        [action.payload.name]: action.payload.value,
        success: true
    }
    default:
      return state;
  }
}

const LogIn = () => {
  const userRef = useRef();

  const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleChange = e => {
    dispatch({type: "CHANGE_INPUT", payload: {name: e.target.name, value: e.target.value}})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "SUBMIT_INFO", payload: {name: e.target.name, value: ""}});
  }

  return (
    <div className="sign-up-and-log-in--background">
      {state.success ? (
        <div className="sign-up-and-log-in--success">
          <h1>You are logged in!</h1>
          <br />
          <p className="sign-up-and-log-in--line">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
      ) : (
        <div className="sign-up-and-log-in--form">
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <span>Username:</span>
            </label>
            <input 
              type="text" 
              id="username" 
              ref={userRef}
              autoComplete="off"
              onChange={handleChange}
              name="user"
              required
            />
            <label htmlFor="password">
              <span>Password:</span>
            </label>
            <input 
              type="password" 
              id="password" 
              onChange={handleChange}
              name="pwd"
              required
            />

            <button className="btn-enabled">Log In</button>
          </form>
          <section>
            Need An Account?<br />
            <span>
              <NavLink to="/signup" className="sign-up-or-log-in">Sign Up</NavLink>
            </span>
          </section>
        </div>
      )}
    </div>
  )
}

export default LogIn