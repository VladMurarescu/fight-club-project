import React from "react";
import "./Subscription.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import TopContainer from "../../components/TopContainer/TopContainer";
import SubscriptionDetails from "../../components/SubscriptionDetails/SubscriptionDetails";
import SubscriptionImagesList from "../../components/SubscriptionImagesList/SubscriptionImagesList";
const Subscription = () => {
  return (
    <Wrapper>
      <TopContainer />
      <SubscriptionDetails />
      <SubscriptionImagesList />
    </Wrapper>
  );
};

export default Subscription;
