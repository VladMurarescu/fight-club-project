import React, { useContext } from "react";
import "./SubscriptionsFilters.css";
import { SubscriptionContext } from "../../contexts/subscriptionContext";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const SubscriptionsFilters = () => {
  const {
    subscriptions,
    subscriptionSearch,
    subscriptionCategory,
    subscriptionPeriod,
    handleChangeSubscriptionInput,
    handleSubmitSubscriptionInput,
    handleChangeCategoryFilter,
    handleChangePeriodFilter,
    handleChangePriceFilter,
    minPrice,
    maxPrice,
    price,
  } = useContext(SubscriptionContext);

  let tempSubscriptionsCategory = getUnique(subscriptions, "category");

  tempSubscriptionsCategory = [
    "Selectează...",
    "All",
    ...tempSubscriptionsCategory,
  ];

  tempSubscriptionsCategory = tempSubscriptionsCategory.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let tempSubscriptionsPeriod = getUnique(subscriptions, "period");

  tempSubscriptionsPeriod = [
    "Selectează...",
    "All",
    ...tempSubscriptionsPeriod,
  ];

  tempSubscriptionsPeriod = tempSubscriptionsPeriod.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <div className="subscriptions-filters-container">
      <form className="subscription-form-group">
        <div className="subscription-search">
          <label htmlFor="subscriptionInput">Abonament</label>
          <div className="search-input">
            <input
              type="text"
              id="subscriptionInput"
              name="subscriptionSearch"
              placeholder="Introduceti numele"
              value={subscriptionSearch}
              onChange={handleChangeSubscriptionInput}
            />
            <button onClick={handleSubmitSubscriptionInput}>
              <i className="search-icon fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="subscription-category">
          <label htmlFor="subscriptionSelect1">Categorie</label>
          <select
            name="subscriptionCategory"
            id="subscriptionSelect1"
            onChange={handleChangeCategoryFilter}
            value={subscriptionCategory}
          >
            {tempSubscriptionsCategory}
          </select>
        </div>
        <div className="subscription-period">
          <label htmlFor="subscriptionSelect2">Durată</label>
          <select
            name="subscriptionPeriod"
            id="subscriptionSelect2"
            value={subscriptionPeriod}
            onChange={handleChangePeriodFilter}
          >
            {tempSubscriptionsPeriod}
          </select>
        </div>
        <div className="subscription-price">
          <label htmlFor="subscriptionPrice">Preț</label>
          <h4>Până la {price} lei</h4>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="price-input"
            onChange={handleChangePriceFilter}
          />
        </div>
      </form>
    </div>
  );
};

export default SubscriptionsFilters;
