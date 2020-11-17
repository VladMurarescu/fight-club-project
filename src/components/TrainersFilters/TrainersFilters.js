import React, { useContext } from "react";
import "./TrainersFilters.css";
import { TrainerContext } from "../../contexts/trainerContext";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const TrainersFilters = () => {
  const {
    trainers,
    trainerSearch,
    handleChangeTrainerInput,
    handleSubmitTrainerInput,
    trainerCategory,
    handleChangeFilter,
  } = useContext(TrainerContext);

  let tempTrainersCategory = getUnique(trainers, "category");

  tempTrainersCategory = ["Selectează...", "All", ...tempTrainersCategory];

  tempTrainersCategory = tempTrainersCategory.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
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
              onChange={handleChangeTrainerInput}
              value={trainerSearch}
            />
            <button onClick={handleSubmitTrainerInput}>
              <i className="search-icon fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="trainer-category">
          <label htmlFor="trainerSelect">Categorie</label>
          <select
            name="trainerCategory"
            id="trainerSelect"
            onChange={handleChangeFilter}
            value={trainerCategory}
          >
            {tempTrainersCategory}
          </select>
        </div>
      </form>
    </div>
  );
};

export default TrainersFilters;
