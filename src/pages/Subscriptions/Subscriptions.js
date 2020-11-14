import React from "react";
import "./Subscriptions.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SubscriptionsTopConainer from "../../components/SubscriptionsTopConainer/SubscriptionsTopConainer";
import SubscriptionsFilters from "../../components/SubscriptionsFilters/SubscriptionsFilters";
import SubscriptionsList from "../../components/SubscriptionsList/SubscriptionsList";
import Title from "../../components/Title/Title";
const Subscriptions = () => {
  return (
    <Wrapper>
      <SubscriptionsTopConainer />
      <Title />
      <SubscriptionsFilters />
      <SubscriptionsList />
    </Wrapper>
  );
};

export default Subscriptions;
