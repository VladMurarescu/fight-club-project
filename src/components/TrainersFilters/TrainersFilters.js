import React from "react";
import "./TrainersFilters.css";
const TrainersFilters = () => {
  return (
    <div className="trainers-filters-container">
      <form className="form-group">
        <div className="trainer-search">
          <label htmlFor="trainerInput">Antrenor</label>
          <div className="search-input">
            <input
              type="text"
              id="trainerInput"
              name="trainerSearch"
              placeholder="Introduceti numele"
            />
            <span>
              <i className="search-icon fas fa-search"></i>
            </span>
          </div>
        </div>
        <div className="trainer-category">
          <label htmlFor="trainerSelect">Categorie</label>
          <select name="trainerCategory" id="trainerSelect">
            <option value="1"> optiune 1</option>
            <option value="2">optiune 2</option>
            <option value="3">optiune 3</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default TrainersFilters;
