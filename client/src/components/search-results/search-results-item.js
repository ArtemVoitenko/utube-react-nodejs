import React from "react";
import "./search-results-item.scss";
const SearchResultsItem = ({ id, title, thumb, playVideo }) => {
  return (
    <div className="search-item">
      <img src={thumb} alt={title} className="search-item__thumb" />
      <p className="search-item__title">{title}</p>
      <button
        className="search-item__play"
        onClick={() => {
          playVideo({ id, thumb, title });
        }}
      >
        play
      </button>
    </div>
  );
};

export default SearchResultsItem;
