import React, { useContext } from "react";
import "./HomeInfosList.css";
import HomeInfoCard from "../HomeInfoCard/HomeInfoCard";
import LoadingComponent from "../LoadingComponent/LoadingComoponent";
// import infos from "../../localData/infos";
import { InfoContext } from "../../contexts/infoContext";
const HomeInfosList = () => {
  const { infos, loadingInfo } = useContext(InfoContext);

  if (loadingInfo) {
    return <LoadingComponent />;
  }
  // console.log("stare card:", value);
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
