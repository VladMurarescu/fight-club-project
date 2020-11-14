import React from "react";
import "./Trainers.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import TrainersTopContainer from "../../components/TrainersTopContainer/TrainersTopContainer";
import Title from "../../components/Title/Title";
import TrainersFilters from "../../components/TrainersFilters/TrainersFilters";
import TrainersList from "../../components/TrainersList/TrainersList";
const Trainers = () => {
  return (
    <Wrapper>
      <TrainersTopContainer />
      <Title />
      <TrainersFilters />
      <TrainersList />
    </Wrapper>
  );
};

export default Trainers;
