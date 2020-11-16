import React from "react";
import "./SubscriptionsFilters.css";
const SubscriptionsFilters = () => {
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
            />
            <span>
              <i className="search-icon fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="subscription-category">
          <label htmlFor="subscriptionSelect1">Categorie</label>
          <select name="subscriptionCategory" id="subscriptionSelect1">
            <option value="1"> optiune 1</option>
            <option value="2">optiune 2</option>
            <option value="3">optiune 3</option>
          </select>
        </div>
        <div className="subscription-period">
          <label htmlFor="subscriptionSelect2">Durată</label>
          <select name="subscriptionPeriod" id="subscriptionSelect2">
            <option value="1"> optiune 1</option>
            <option value="2">optiune 2</option>
            <option value="3">optiune 3</option>
          </select>
        </div>
        <div className="subscription-price">
          <label htmlFor="subscriptionPrice">Preț</label>
          <h4>50 lei</h4>
          <input
            type="range"
            name="price"
            min={0}
            max={100}
            className="price-input"
          />
        </div>
      </form>
    </div>
  );
};

export default SubscriptionsFilters;
