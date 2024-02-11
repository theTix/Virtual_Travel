//react
import React, { useEffect, useRef, useState } from "react"

//react-router-dom
import { NavLink } from "react-router-dom";

//styles
//styles(others)
import "./../styles/contact.css";


const Contact: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);

    const [ fullName, setFullName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        if(nameRef.current)
            nameRef.current.focus();
    }, []);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(fullName, email, message);
        setFullName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
    }

  return (
    <div className="contact--page">
        {success ? (
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
                            onChange={(e)=> setFullName(e.target.value)}
                            value={fullName}
                            required
                        />
                        <label htmlFor="email">E-mail Address: </label>
                        <input 
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="contact-message">Message: </label>
                        <textarea name="contact-message" id="contact-message" cols={30} rows={2}></textarea>
                        <button className="btn-contact">Send</button>
                    </form>
                </div>
            )
        } 
    </div>
  )
}

export default Contact