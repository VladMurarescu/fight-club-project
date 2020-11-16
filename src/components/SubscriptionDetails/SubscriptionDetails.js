import React from "react";
import "./SubscriptionDetails.css";
import Img from "./detailsImg.jpg";
import Title from "../../components/Title/Title";
const SubscriptionDetails = (props) => {
  return (
    <div className="subscription-details-container">
      <div className="subscription-img-container">
        <img src={props.img} alt="img" />
      </div>
      <Title title={props.name} />
      <div className="subscription-info-container">
        <div className="left-info">
          <h3>Detalii</h3>
          <ul>
            <li>
              <p>Periada: {props.period}</p>
            </li>
            <li>
              <p>Prețul: {props.price} / lună</p>
            </li>
            <li>
              <p>Categoria: {props.category}</p>
            </li>
          </ul>
        </div>
        <div className="right-info">
          <h3>Informații suplimentare</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
