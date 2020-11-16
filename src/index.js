import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import InfoProvider from "./contexts/infoContext";
import TrainerProvider from "./contexts/trainerContext";
import SubscriptionProvider from "./contexts/subscriptionContext";
ReactDOM.render(
  <SubscriptionProvider>
    <TrainerProvider>
      <InfoProvider>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </InfoProvider>
    </TrainerProvider>
  </SubscriptionProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
