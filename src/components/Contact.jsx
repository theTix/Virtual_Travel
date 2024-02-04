//react
import { useEffect, useReducer, useRef } from "react"

//react-router-dom
import { NavLink } from "react-router-dom";

//styles
//styles(others)
import "./../styles/contact.css";

const INITIAL_STATE = {
    email: "",
    fullName: "",
    message: "",
    success: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case "TAKE_INFO":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "SUBMIT_INFO":
            return {
                [action.payload.name]: "",
                success: true
            }
        default:
            return state;
    }
}

const Contact = () => {
    const nameRef = useRef();

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleChange = e => {
        dispatch({type: "TAKE_INFO", payload: {name: e.target.name, value: e.target.value}});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type: "SUBMIT_INFO", payload: {name: e.target.name}});
    }
    
  return (
    <div className="contact--page">
        {state.success ? (
                <div className="contact--container">
                    <h2>Message Sent!</h2>
                    <p>Return to <NavLink to="/">Home</NavLink>.</p>
                </div>
            ) : (
                <div className="contact--container">
                    <h2>Message Us: </h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="full-name">Full Name: </label>
                        <input 
                            type="text"
                            id="full-name"
                            ref={nameRef}
                            autoComplete="off"
                            onChange={handleChange}
                            name="fullName"
                            
                            required
                        />
                        <label htmlFor="email">E-mail Address: </label>
                        <input 
                            type="email"
                            id="email"
                            onChange={handleChange}
                            name="email"
                            
                            required
                        />
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="message" onChange={handleChange} cols="30" rows="2"></textarea>
                        <button className="btn-contact">Send</button>
                    </form>
                </div>
            )
        } 
    </div>
  )
}

export default Contact