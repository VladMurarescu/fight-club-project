import React from "react";
import "./Subscription.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SubscriptionDetails from "../../components/SubscriptionDetails/SubscriptionDetails";
import SubscriptionImagesList from "../../components/SubscriptionImagesList/SubscriptionImagesList";
const Subscription = () => {
  return (
    <Wrapper>
      <SubscriptionDetails />
      <SubscriptionImagesList />
    </Wrapper>
  );
};

export default Subscription;
