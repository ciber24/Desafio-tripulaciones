import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  /**
   * Componente Nav
   * 
   * @component
   * @returns {JSX.Element} El Nav renderizado
   */

  return <nav className="nav">
    {/* <Link to="/">Home </Link> */}
    <Link to="/employee">Employee </Link>
    <Link to="/admin">Admin </Link>
    
    <ul>
      <li>Username</li>
    </ul>
  </nav>;
};

export default Nav;