//react
import { useEffect, useReducer, useRef} from "react";

//react-router-dom
import { NavLink } from "react-router-dom";

//react icons
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";

//styles
//styles/authentication
import "./../../styles/authentication/signup.css";

const INITIAL_STATE = {
    user: "",
    validName: false,
    userFocus: false,
    pwd: "",
    validPwd: false,
    pwdFocus: false,
    matchPwd: "",
    validMatch: false,
    matchPwdFocus: false,
    errMsg: "",
    success: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case "TAKE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "CHECK_VALIDITY":
            return {
                ...state,
                [`valid${action.payload.name}`]: action.payload.name === "Name" ? USER_REGEX.test(state.user) : PWD_REGEX.test(state.pwd)
            }
        case "CHECK_MATCH_PWD":
            return {
                ...state,
                validMatch: state.pwd === state.matchPwd
            }
        case "SEND_ERR":
            return {
                ...state,
                errMsg: action.payload.value
            }
        case "ALLOW_ENTRY":
            return {
                ...state,
                success: true
            }
        case "SET_FOCUS_BLUR":
            return {
                ...state,
                [`${action.payload.name}Focus`]: action.payload.value
            }
        
    }
}

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errMsgRef = useRef();
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        dispatch({type: "CHECK_VALIDITY", payload: {name: "Name"}});
    }, [state.user]);

    useEffect(() => {
        dispatch({type: "CHECK_VALIDITY", payload: {name: "Pwd"}});
        dispatch({type: "CHECK_MATCH_PWD"});
    }, [state.pwd, state.matchPwd]);

    useEffect(() => {
        dispatch({type: "SEND_ERR", payload: {value: ""}})
    }, [ state.user, state.pwd, state.matchPwd ]);

    const handleChange = e => {
        dispatch({type: "TAKE_INPUT", payload: {name: e.target.name, value: e.target.value}});
    }

    const handleFocus = (e) => {
        dispatch({type: "SET_FOCUS_BLUR", payload: {name: e.target.name, value: true}})
    }

    const handleBlur = (e) => {
        dispatch({type: "SET_FOCUS_BLUR", payload: {name: e.target.name, value: false}})
    }

    function handleDisabledClick(event) {
        event.preventDefault();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //check again in case someone hacks the button to enabled
        const v1 = USER_REGEX.test(state.user);
        const v2 = PWD_REGEX.test(state.pwd);
        if(!v1 || !v2) {
            dispatch({type: "SEND_ERR", payload: {value: "Invalid Entry!"}});
            return;
        }
        console.log(state.user, state.pwd);
        dispatch({type: "ALLOW_ENTRY"});
    }

  return (
    <div className="sign-up-and-log-in--background">
        {state.success ? (
            <div className="sign-up-and-log-in--success">
                <h1>Success!</h1>
                <p className="sign-up-and-log-in--line">
                    <NavLink className="sign-up-or-log-in" to="/login">Log In</NavLink>
                </p>
            </div>
        ) : (
        <div className="sign-up-and-log-in--form">
            <p ref={errMsgRef} className={state.errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{state.errMsg}</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <span>Username: </span>
                    <span className={state.validName ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={state.validName || !state.user ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={handleChange}
                    name="user"
                    required
                    aria-invalid={state.validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <section id="uidnote" className={`instruction-note ${state.userFocus && state.user && !state.validName ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> 4 to 24 characters.<br /></p>
                    <p>Must begin with a letter.<br /></p>
                    <p>Letters, numbers, underscores, hyphens allowed.</p>
                </section>

                <label htmlFor="password">
                    <span>Password: </span>
                    <span className={state.validPwd ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={state.validPwd || !state.pwd ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="password" 
                    id="password"
                    onChange={handleChange}
                    name="pwd"
                    required
                    aria-invalid={state.validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <section id="pwdnote" className={`instruction-note ${state.pwdFocus && !state.validPwd ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> 8 to 24 characters.<br /></p>
                    <p>Must include uppercase and lowercase letters, a number and a special character.<br /></p>
                    <p>Allowed special characters: <span aria-label="exclamation-mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></p>
                </section>

                <label htmlFor="confirm_pwd">
                    <span>Confirm Password: </span>
                    <span className={state.validMatch && state.matchPwd ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={state.validMatch || !state.matchPwd ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="password" 
                    id="confirm_pwd"
                    onChange={handleChange}
                    name="matchPwd"
                    required
                    aria-invalid={state.validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <section id="confirmnote" className={`instruction-note ${state.matchPwdFocus && !state.validMatch ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> <span>Must match the first password input field.</span></p>
                </section>

                <button 
                    disabled={!state.validName || !state.validPwd || !state.validMatch ? true : false} 
                    aria-disabled={!state.validName || !state.validPwd || !state.validMatch ? true : false}
                    onClick={!state.validName || !state.validPwd || !state.validMatch ? handleDisabledClick : ""}
                    onKeyPress={!state.validName || !state.validPwd || !state.validMatch ? handleDisabledClick : ""}
                    className={!state.validName || !state.validPwd || !state.validMatch ? "btn-disabled" : "btn-enabled"}
                >Sign Up</button>
            </form>
            <section>
                Already registered?<br />
                <span>
                    <NavLink className="sign-up-or-log-in" to="/login">Log In</NavLink>
                </span>
            </section>
        </div>
        )}
    </div>
  )
}

export default SignUp