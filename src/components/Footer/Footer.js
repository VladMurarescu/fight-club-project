import React from "react";
import "./Footer.css";

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
          <li>Adresă: Strada Gării nr4 Suceava</li>
          <li>Indicații: In spatele complexului Test S.R.L de lângă gară.</li>
        </ul>
      </div>
      <div className="nav-social-icons">
        <h4>Social media</h4>
        <div className="icons">
          <a href="https://www.facebook.com/" className="icon">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/" className="icon">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com/" className="icon">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
