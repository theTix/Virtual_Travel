//react
import React, { useEffect, useRef, useState } from "react";

//react-router-dom
import { NavLink } from "react-router-dom";


const LogIn: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);

  const [ user, setUser ] = useState("");
  const [ pwd, setPwd] = useState("");
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    if(userRef.current)
      userRef.current.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  }

  return (
    <div className="sign-up-and-log-in--background">
      {success ? (
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
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">
              <span>Password:</span>
            </label>
            <input 
              type="password" 
              id="password" 
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
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