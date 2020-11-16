import React from "react";
import "./SubscriptionCard.css";
import { Link } from "react-router-dom";
import Img from "./detailsImg.jpg";
const SubscriptionCard = (props) => {
  return (
    <div className="subscription-card">
      <div className="subscription-photo">
        <img src={props.img} alt="img" />
      </div>
      <div className="subscription-info">
        <h4>{props.name}</h4>

        <h5>Categorie: {props.category}</h5>
        <h5>Perioadă: {props.period} luni</h5>
        <h5>Preț: {props.price} lei / lună</h5>

        <Link to={`/subscriptions/${props.id}`} className="subscription-link">
          Detalii
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
