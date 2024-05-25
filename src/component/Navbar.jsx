import React from "react";
import logo from "/src/assets/logo.avif"

const Navbar = () => {

    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" width="200" />
          </div>
          <h1>Welcome To Barbacua Restaurant</h1>
        </nav>
      );
    };
    
    export default Navbar;