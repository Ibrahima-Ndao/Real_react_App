import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
