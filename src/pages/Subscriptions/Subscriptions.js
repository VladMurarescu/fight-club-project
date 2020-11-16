import React from "react";
import "./Subscriptions.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SubscriptionsFilters from "../../components/SubscriptionsFilters/SubscriptionsFilters";
import SubscriptionsList from "../../components/SubscriptionsList/SubscriptionsList";
import Title from "../../components/Title/Title";
import SubscriptionsTopContainer from "../../components/SubscriptionsTopContainer/SubscriptionsTopConainer";
const Subscriptions = () => {
  return (
    <Wrapper>
      <SubscriptionsTopContainer />
      <Title title="Abonamentele din care poți alege" />
      <SubscriptionsFilters />
      <SubscriptionsList />
    </Wrapper>
  );
};

export default Subscriptions;
