import React, { Component, createContext } from "react";
import axios from "axios";

export const TrainerContext = createContext();

export default class TrainerProvider extends Component {
  state = {
    trainers: [],
    loadingTrainers: true,
    trainerSearch: "",
    filteredTrainers: [],
    trainerCategory: "All",
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
          filteredTrainers: currentTrainers,
          loadingTrainers: false,
        });
      });
  }

  handleChangeTrainerInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmitTrainerInput = (e) => {
    e.preventDefault();
    const { trainers, trainerSearch } = this.state;
    let tempTrainers = [...trainers];
    if (trainerSearch !== "") {
      tempTrainers = tempTrainers.filter((trainer) =>
        trainer.name.toUpperCase().includes(trainerSearch.toUpperCase())
      );
    }
    this.setState({
      ...this.state,
      filteredTrainers: tempTrainers,
      trainerCategory: "Selectează...",
    });
  };
  handleChangeFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.filterTrainers
    );
  };

  filterTrainers = () => {
    const { trainers, trainerCategory } = this.state;
    let tempTrainers = [...trainers];

    if (trainerCategory === "All") {
      this.setState({
        filteredTrainers: tempTrainers,
        trainerSearch: "",
      });
    }

    if (trainerCategory !== "All") {
      tempTrainers = tempTrainers.filter(
        (trainer) => trainer.category === trainerCategory
      );
      this.setState({
        filteredTrainers: tempTrainers,
        search: "",
      });
    }
  };

  render() {
    return (
      <TrainerContext.Provider
        value={{
          ...this.state,
          handleChangeTrainerInput: this.handleChangeTrainerInput,
          handleSubmitTrainerInput: this.handleSubmitTrainerInput,
          handleChangeFilter: this.handleChangeFilter,
        }}
      >
        {this.props.children}
      </TrainerContext.Provider>
    );
  }
}
