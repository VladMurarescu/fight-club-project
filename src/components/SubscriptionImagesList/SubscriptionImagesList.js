import React from "react";
import "./SubscriptionImagesList.css";
import SubscriptionImageCard from "../SubscriptionImageCard/SubscriptionImageCard";

const SubscriptionImagesList = (props) => {
  return (
    <div className="img-list-container">
      {props.images.map((image, index) => (
        <SubscriptionImageCard key={index} img={image} />
      ))}
    </div>
  );
};

export default SubscriptionImagesList;
