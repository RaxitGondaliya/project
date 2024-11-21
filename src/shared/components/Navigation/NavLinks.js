import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from React Icons
import './NavLinks.css';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Update the class on the body to reflect the current theme
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Quiz
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/quiz">My Quiz</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup">Sign Up</NavLink> {/* Link to the Signup page */}
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">Login</NavLink> {/* Link to the Login page */}
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
      <li>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? <FaSun /> : <FaMoon />} {/* Toggle between sun and moon icons */}
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;
