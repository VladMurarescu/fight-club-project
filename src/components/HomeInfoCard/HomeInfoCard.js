import React from "react";
import "./HomeInfoCard.css";
import Img from "./infoImg.jpg";
const HomeInfoCard = (props) => {
  return (
    <div className="info-card-container">
      <div className="info-card-img">
        <img src={props.img} alt="info" />
      </div>
      <div className="info-card-desc">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default HomeInfoCard;
