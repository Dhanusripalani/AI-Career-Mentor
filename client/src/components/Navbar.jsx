import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (

    <nav className="navbar">

      <h2>
        AI Career Mentor 🚀
      </h2>


      <div className="nav-links">

        <Link to="/">
          Home
        </Link>


        <Link to="/dashboard">
          Dashboard
        </Link>


        <Link to="/login">
          Logout
        </Link>

      </div>


    </nav>

  );

}


export default Navbar;