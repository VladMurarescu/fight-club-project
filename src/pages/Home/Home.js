import React from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import HomeInfosList from "../../components/HomeInfosList/HomeInfosList";
import Title from "../../components/Title/Title";
import HomeTopContainer from "../../components/HomeTopContainer/HomeTopContainer";
const Home = () => {
  return (
    <Wrapper>
      <HomeTopContainer />
      <Title title="ce vei găsi la noi" />
      <HomeInfosList />
    </Wrapper>
  );
};

export default Home;
