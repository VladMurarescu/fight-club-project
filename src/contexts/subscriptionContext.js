import React, { Component, createContext } from "react";
import axios from "axios";

export const SubscriptionContext = createContext();

export default class SubscriptionProvider extends Component {
  state = {
    subscriptions: [],
    loadingSubscriptions: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingSubscriptions: true });
    axios
      .get("https://next.json-generator.com/api/json/get/4JzGHNjKt")
      .then((response) => {
        const currentSubscriptions = response.data;
        this.setState({
          ...this.state,
          subscriptions: currentSubscriptions,
          loadingSubscriptions: false,
        });
      });
  }

  render() {
    console.log("subscriptions", this.state);
    return (
      <SubscriptionContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SubscriptionContext.Provider>
    );
  }
}
