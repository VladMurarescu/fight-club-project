import React from "react";
import "./Footer.css";
import Wrapper from "../Wrapper/Wrapper";
const Footer = () => {
  return (
    <footer>
      <div className="nav-col">
        <h4>Contact</h4>
        <ul>
          <li>Telefon 1: 0722222222</li>
          <li>Telefon 2: 0733333333</li>
          <li>Email: murifightacademy@gmail.com</li>
        </ul>
      </div>
      <div className="nav-col">
        <h4>Locatie</h4>
        <ul>
          <li>Adresă: Lorem ipsum dolor sit amet consectetur.</li>
          <li>
            Indicații: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nemo nostrum!
          </li>
        </ul>
      </div>
      <div className="nav-social-icons">
        <h4>Social media</h4>
        <div className="icons">
          <a className="icon">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a className="icon">
            <i class="fab fa-instagram-square"></i>
          </a>
          <a className="icon">
            <i class="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
