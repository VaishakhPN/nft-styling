import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="menu">
        <div className="market">
          <div>Marketplace</div>
        </div>
        <div className="div">Artists</div>
        <div className="div">Community</div>
        <div className="div">Collections</div>
      </div>
      <button className="CTA">
        <div className="contact">Contact</div>
      </button>
    </div>
  );
};

export default NavBar;