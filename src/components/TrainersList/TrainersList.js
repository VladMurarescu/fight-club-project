import React, { useContext } from "react";
import "./TrainersList.css";
import TrainerCard from "../TrainerCard/TrainerCard";
import LoadingComponent from "../LoadingComponent/LoadingComoponent";
import { TrainerContext } from "../../contexts/trainerContext";
const TrainersList = () => {
  const { trainers, loadingTrainers } = useContext(TrainerContext);

  if (loadingTrainers) {
    return <LoadingComponent />;
  }
  return (
    <div className="trainers-list-container">
      {trainers.map((trainer) => {
        return (
          <TrainerCard
            key={trainer.id}
            name={trainer.name}
            category={trainer.category}
            phone={trainer.phone}
            img={trainer.img}
          />
        );
      })}
    </div>
  );
};

export default TrainersList;
