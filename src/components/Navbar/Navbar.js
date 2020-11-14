import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Muri Fight Academy</h1>
        </Link>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <Link to="/" className="a">
            Acasă
          </Link>
        </li>
        <li>
          <Link to="/trainers" className="a">
            Antrenori
          </Link>
        </li>
        <li>
          <Link to="/subscriptions" className="a">
            Abonamente
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="a">
            Despre noi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
