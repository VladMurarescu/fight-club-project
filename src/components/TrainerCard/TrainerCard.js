import React from "react";
import "./TrainerCard.css";
const TrainerCard = (props) => {
  return (
    <div className="trainer-card">
      <div className="trainer-photo">
        <img src={props.img} alt="img" />
      </div>
      <div className="trainer-details">
        <h3>{props.name}</h3>
        <h4>{props.category}</h4>
      </div>
    </div>
  );
};

export default TrainerCard;
