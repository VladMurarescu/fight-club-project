import React from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import HomeTopContainer from "../../components/HomeTopContainer/HomeTopContainer";
import HomeInfosList from "../../components/HomeInfosList/HomeInfosList";
import Title from "../../components/Title/Title";
const Home = () => {
  return (
    <Wrapper>
      <HomeTopContainer />
      <Title />
      <HomeInfosList />
    </Wrapper>
  );
};

export default Home;
