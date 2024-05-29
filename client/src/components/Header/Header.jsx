import React from "react";
import Nav from "./Nav";
import Logo from "../../assets/BE_logo.png";

const Header = () => {
  return <header className="header">
    <div>
    <img src={Logo} alt="Logo beyond" />
    <h2>MANAGER</h2>
    </div>
  
    <Nav />
  </header>;
};

export default Header;
