import React, { useContext } from "react";
import "./TrainersList.css";
import TrainerCard from "../TrainerCard/TrainerCard";
import LoadingComponent from "../LoadingComponent/LoadingComoponent";
import { TrainerContext } from "../../contexts/trainerContext";
const TrainersList = () => {
  const { filteredTrainers, loadingTrainers } = useContext(TrainerContext);

  if (loadingTrainers) {
    return <LoadingComponent />;
  }
  return (
    <div className="trainers-list-container">
      {filteredTrainers.map((trainer) => {
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
