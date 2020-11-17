import React, { useContext } from "react";
import "./SubscriptionsList.css";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import LoadingComponent from "../LoadingComponent/LoadingComoponent";
import { SubscriptionContext } from "../../contexts/subscriptionContext";
const SubscriptionsList = () => {
  const { filteredSubscriptions, loadingSubscriptions } = useContext(
    SubscriptionContext
  );
  if (loadingSubscriptions) {
    return <LoadingComponent />;
  }
  return (
    <div className="subscriptions-list">
      {filteredSubscriptions.map((subscription) => {
        return (
          <SubscriptionCard
            name={subscription.name}
            period={subscription.period}
            price={subscription.price}
            category={subscription.category}
            id={subscription.id}
            key={subscription.id}
            img={subscription.img}
          />
        );
      })}
    </div>
  );
};

export default SubscriptionsList;
