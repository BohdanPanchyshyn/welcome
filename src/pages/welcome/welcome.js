import { Link } from "react-router-dom";
import "./welcome.css";


const Welcome = () => {
   return (
      <div className="containerWelcomePage">
         <div className="welcomeStylePage">
            <p><Link to="/login">Sign In</Link></p>
            <p><Link to="/register">Sign Up</Link></p>
         </div>
      </div>
   )
}

export default Welcome;