import React, { Component, createContext } from "react";
import axios from "axios";

export const InfoContext = createContext();

export default class InfoProvider extends Component {
  state = {
    infos: [],
    loadingInfo: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingInfo: true });
    axios
      .get("https://next.json-generator.com/api/json/get/EkniVEjFY")
      .then((response) => {
        const currentInfos = response.data;

        this.setState({
          ...this.state,
          infos: currentInfos,
          loadingInfo: false,
        });
      });
  }

  render() {
    console.log("stare aplicatie: ", this.state);
    return (
      <InfoContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}
