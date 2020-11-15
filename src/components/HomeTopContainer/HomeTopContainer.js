import React from "react";
import "./HomeTopContainer.css";
import { Link } from "react-router-dom";
const HomeTopContainer = () => {
  return (
    <div className="home-top-container">
      <div className="content-container">
        <h1>Lorem, ipsum dolor.</h1>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          optio aspernatur ullam dolore beatae quis!
        </h3>
        <Link to="/subscriptions" className="home-button">
          Vezi oferta
        </Link>
      </div>
    </div>
  );
};

export default HomeTopContainer;
