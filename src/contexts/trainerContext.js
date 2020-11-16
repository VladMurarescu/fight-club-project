import React, { Component, createContext } from "react";
import axios from "axios";

export const TrainerContext = createContext();

export default class TrainerProvider extends Component {
  state = {
    trainers: [],
    loadingTrainers: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingTrainers: true });
    axios
      .get("https://next.json-generator.com/api/json/get/NJJEH4oFt")
      .then((response) => {
        const currentTrainers = response.data;
        this.setState({
          ...this.state,
          trainers: currentTrainers,
          loadingTrainers: false,
        });
      });
  }

  render() {
    return (
      <TrainerContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </TrainerContext.Provider>
    );
  }
}
