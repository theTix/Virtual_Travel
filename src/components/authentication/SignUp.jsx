import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "./../../styles/authentication/signup.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();
    const errMsgRef = useRef();

    const [ user, setUser ] = useState("");
    const [ validName, setValidName ] = useState(false);
    const [ userFocus, setUserFocus ] = useState(false);

    const [ pwd, setPwd ] = useState("");
    const [ validPwd, setValidPwd ] = useState(false);
    const [ pwdFocus, setPwdFocus ] = useState(false);

    const [ matchPwd, setMatchPwd ] = useState("");
    const [ validMatch, setValidMatch ] = useState(false);
    const [ matchFocus, setMatchFocus ] = useState(false);

    const [ errMsg, setErrMsg ] = useState("");
    const [ success, setSuccess ] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(user);
        console.log(result);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(pwd);
        console.log(result);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [ user, pwd, matchPwd ]);

    function handleDisabledClick(event) {
        event.preventDefault();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //check again in case someone hacks the button to enabled
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, pwd);
        setSuccess(true);
    }

  return (
    <div className="sign-up--background">
        {success ? (
            <div className="sign-up--success">
                <h1>Success!</h1>
                <p className="signup--line">
                    <NavLink className="sign-up--login" to="/login">Log In</NavLink>
                </p>
            </div>
        ) : (
        <div className="sign-up--form">
            <p ref={errMsgRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <span>Username: </span>
                    <span className={validName ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <section id="uidnote" className={`instruction-note ${userFocus && user && !validName ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> 4 to 24 characters.<br /></p>
                    <p>Must begin with a letter.<br /></p>
                    <p>Letters, numbers, underscores, hyphens allowed.</p>
                </section>

                <label htmlFor="password">
                    <span>Password: </span>
                    <span className={validPwd ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <section id="pwdnote" className={`instruction-note ${pwdFocus && !validPwd ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> 8 to 24 characters.<br /></p>
                    <p>Must include uppercase and lowercase letters, a number and a special character.<br /></p>
                    <p>Allowed special characters: <span aria-label="exclamation-mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></p>
                </section>

                <label htmlFor="confirm_pwd">
                    <span>Confirm Password: </span>
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                        <FaCheck />
                    </span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                </label>
                <input 
                    type="password" 
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <section id="confirmnote" className={`instruction-note ${matchFocus && !validMatch ? "instructions" : "offscreen"}`}>
                    <p><FaInfoCircle className="instructions-icon" /> <span>Must match the first password input field.</span></p>
                </section>

                <button 
                    disabled={!validName || !validPwd || !validMatch ? true : false} 
                    aria-disabled={!validName || !validPwd || !validMatch ? true : false}
                    onClick={!validName || !validPwd || !validMatch ? handleDisabledClick : ""}
                    onKeyPress={!validName || !validPwd || !validMatch ? handleDisabledClick : ""}
                    className={!validName || !validPwd || !validMatch ? "btn-disabled" : "btn-enabled"}
                >Sign Up</button>
            </form>
            <section>
                Already registered?<br />
                <span>
                    <NavLink className="sign-up--login" to="/login">Log In</NavLink>
                </span>
            </section>
        </div>
        )}
    </div>
  )
}

export default SignUp