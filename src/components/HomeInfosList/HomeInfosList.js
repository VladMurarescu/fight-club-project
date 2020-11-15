import React from "react";
import "./HomeInfosList.css";
import HomeInfoCard from "../HomeInfoCard/HomeInfoCard";
import infos from "../../localData/infos";
const HomeInfosList = () => {
  return (
    <div className="infos-list-container">
      {infos.map((info) => (
        <HomeInfoCard
          key={info.id}
          title={info.title}
          content={info.content}
          img={info.img}
        />
      ))}
    </div>
  );
};

export default HomeInfosList;
