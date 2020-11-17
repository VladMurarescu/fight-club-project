import React from "react";
import "./HomeTopContainer.css";
import { Link } from "react-router-dom";
const HomeTopContainer = () => {
  return (
    <div className="home-top-container">
      <div className="content-container">
        <h1>Sportul înseamnă sănătate</h1>
        <h3>
          Fie că vrei să faci performanță sau doar să practici un sport, te
          așteptăm la academia noastra pentru a lucra împreună.
        </h3>
        <Link to="/subscriptions" className="home-button">
          Vezi oferta
        </Link>
      </div>
    </div>
  );
};

export default HomeTopContainer;
