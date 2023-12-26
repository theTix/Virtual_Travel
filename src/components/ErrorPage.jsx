//react-router-dom
import { NavLink } from "react-router-dom";

//styles
//styles(others)
import "./../styles/error.css";

const ErrorPage = () => {
  return (
    <div className="error--page">
      <div className="error--container">
        <h2>Not Found</h2>
        <p>Go back to <NavLink to="/">Home</NavLink></p>
      </div>
    </div>
  )
}

export default ErrorPage
