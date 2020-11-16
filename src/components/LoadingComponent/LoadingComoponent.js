import React from "react";
import "./LoadingComponent.css";
import loadingGif from "./loadingGif.gif";
import Title from "../Title/Title";
const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <Title title="Se încarcă..." />
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default LoadingComponent;
