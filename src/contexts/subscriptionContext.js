import React, { Component, createContext } from "react";
import axios from "axios";

export const SubscriptionContext = createContext();

export default class SubscriptionProvider extends Component {
  state = {
    subscriptions: [],
    loadingSubscriptions: true,
    subscriptionSearch: "",
    filteredSubscriptions: [],
    subscriptionCategory: "Selectează...",
    subscriptionPeriod: "Selectează...",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingSubscriptions: true });
    axios
      .get("https://next.json-generator.com/api/json/get/4JzGHNjKt")
      .then((response) => {
        const currentSubscriptions = response.data;
        let maxPrice = Math.max(
          ...currentSubscriptions.map((subscription) => subscription.price)
        );
        this.setState({
          ...this.state,
          subscriptions: currentSubscriptions,
          filteredSubscriptions: currentSubscriptions,
          loadingSubscriptions: false,
          maxPrice,
          price: maxPrice,
        });
      });
  }

  handleChangeSubscriptionInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmitSubscriptionInput = (e) => {
    e.preventDefault();
    const { subscriptions, subscriptionSearch } = this.state;
    let tempSubscriptions = [...subscriptions];
    if (subscriptionSearch !== "") {
      tempSubscriptions = tempSubscriptions.filter((subscription) =>
        subscription.name
          .toUpperCase()
          .includes(subscriptionSearch.toUpperCase())
      );
    }
    this.setState({
      ...this.state,
      filteredSubscriptions: tempSubscriptions,
      subscriptionCategory: "Selectează...",
      subscriptionPeriod: "Selectează...",
      price: this.state.maxPrice,
    });
  };
  handleChangeCategoryFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.categoryFilterSubscriptions
    );
  };

  categoryFilterSubscriptions = () => {
    const { subscriptions, subscriptionCategory } = this.state;
    let tempSubscriptions = [...subscriptions];

    if (subscriptionCategory === "All") {
      this.setState({
        filteredSubscriptions: tempSubscriptions,
        subscriptionSearch: "",
        subscriptionPeriod: "Selectează...",
        price: this.state.maxPrice,
      });
    }

    if (subscriptionCategory !== "All") {
      tempSubscriptions = tempSubscriptions.filter(
        (subscription) => subscription.category === subscriptionCategory
      );
      this.setState({
        filteredSubscriptions: tempSubscriptions,
        subscriptionSearch: "",
        subscriptionPeriod: "Selectează...",
        price: this.state.maxPrice,
      });
    }
  };

  handleChangePeriodFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.periodFilterSubscriptions
    );
  };

  periodFilterSubscriptions = () => {
    const { subscriptions, subscriptionPeriod } = this.state;
    let tempSubscriptions = [...subscriptions];

    if (subscriptionPeriod === "All") {
      this.setState({
        filteredSubscriptions: tempSubscriptions,
        subscriptionSearch: "",
        subscriptionCategory: "Selectează...",
        price: this.state.maxPrice,
      });
    }

    if (subscriptionPeriod !== "All") {
      tempSubscriptions = tempSubscriptions.filter(
        (subscription) => subscription.period === parseInt(subscriptionPeriod)
      );
      this.setState({
        filteredSubscriptions: tempSubscriptions,
        subscriptionSearch: "",
        subscriptionCategory: "Selectează...",
        price: this.state.maxPrice,
      });
    }
  };

  handleChangePriceFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      { ...this.state, [name]: value },
      this.priceFilterSubscriptions
    );
  };

  priceFilterSubscriptions = () => {
    const { price, subscriptions } = this.state;
    let tempSubscriptions = [...subscriptions];
    tempSubscriptions = tempSubscriptions.filter(
      (subscription) => subscription.price <= price
    );
    this.setState({
      ...this.state,
      filteredSubscriptions: tempSubscriptions,
      subscriptionCategory: "Selectează",
      subscriptionPeriod: "Selectează",
      subscriptionSearch: "",
    });
  };

  render() {
    console.log("subscriptions", this.state);
    return (
      <SubscriptionContext.Provider
        value={{
          ...this.state,
          handleChangeSubscriptionInput: this.handleChangeSubscriptionInput,
          handleSubmitSubscriptionInput: this.handleSubmitSubscriptionInput,
          handleChangeCategoryFilter: this.handleChangeCategoryFilter,
          handleChangePeriodFilter: this.handleChangePeriodFilter,
          handleChangePriceFilter: this.handleChangePriceFilter,
        }}
      >
        {this.props.children}
      </SubscriptionContext.Provider>
    );
  }
}
