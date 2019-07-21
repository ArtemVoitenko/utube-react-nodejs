import React, { Component } from "react";
import "./search.scss";
import { DebounceInput } from "react-debounce-input";
class Search extends Component {
  state = {
    query: ""
  };
  onSearchInput = e => {
    const query = e.target.value;
    const { getVideos, showSearchResults, hideSearchResults } = this.props;
    this.setState({
      query
    });
    if (query.length > 3) {
      getVideos(query);
      showSearchResults();
    } else {
      hideSearchResults();
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div className="search">
        <DebounceInput
          className="search__input"
          onChange={this.onSearchInput}
          debounceTimeout={500}
          onFocus={this.onSearchInput}
          value={query}
          placeholder="Type search query"
        />
      </div>
    );
  }
}

export default Search;
