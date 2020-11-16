import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Subscription.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SubscriptionDetails from "../../components/SubscriptionDetails/SubscriptionDetails";
import SubscriptionImagesList from "../../components/SubscriptionImagesList/SubscriptionImagesList";
import LoadingComponent from "../../components/LoadingComponent/LoadingComoponent";
import { SubscriptionContext } from "../../contexts/subscriptionContext";
const Subscription = () => {
  const { id } = useParams();
  const { subscriptions, loadingSubscriptions } = useContext(
    SubscriptionContext
  );

  if (loadingSubscriptions) {
    return <LoadingComponent />;
  }

  const currentSub = subscriptions.find(
    (subscription) => subscription.id === parseInt(id)
  );

  console.log("abonamentul meu", currentSub);

  return (
    <Wrapper>
      <SubscriptionDetails
        name={currentSub.name}
        period={currentSub.period}
        price={currentSub.price}
        category={currentSub.category}
        id={currentSub.id}
        key={currentSub.id}
        img={currentSub.img}
        description={currentSub.description}
      />
      <SubscriptionImagesList images={currentSub.images} />
    </Wrapper>
  );
};

export default Subscription;
