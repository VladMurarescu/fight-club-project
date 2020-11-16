import React from "react";
import "./SubscriptionImageCard.css";
const SubscriptionImageCard = (props) => {
  return (
    <div className="image-card">
      <img src={props.img} alt="img" />
    </div>
  );
};

export default SubscriptionImageCard;
