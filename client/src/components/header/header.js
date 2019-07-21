import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getVideos,
  addWatchedVideo,
  playVideo,
  getVideosSuccess
} from "../../actions";
import Search from "../search/search";
import { getFoundVideos, getWatchedVideoById } from "../../selectors";
import SearchResults from "../search-results/search-results";
import Icon from "../icon";
import "./header.scss";

class Header extends Component {
  state = {
    isSearchResultOpen: false
  };

  showSearchResults = () => {
    this.setState({
      isSearchResultOpen: true
    });
  };

  hideSearchResults = () => {
    this.setState({
      isSearchResultOpen: false
    });
  };

  playVideo = videoData => {
    const { getWatchedVideo, addWatchedVideo, playVideo } = this.props;
    if (getWatchedVideo(videoData.id)) {
      playVideo(videoData.id);
    } else {
      addWatchedVideo(videoData);
    }
    this.hideSearchResults();
  };

  render() {
    const { videos, getVideos } = this.props;
    const showResults =
      videos.length && this.state.isSearchResultOpen ? (
        <SearchResults results={videos} playVideo={this.playVideo} />
      ) : null;
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="logo">
              <Icon icon="youtube" iconClass="logo__icon" />
              You-mini
            </div>
            <div className="header__search">
              <Search
                getVideos={getVideos}
                showSearchResults={this.showSearchResults}
                hideSearchResults={this.hideSearchResults}
              />
              {showResults}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  videos: getFoundVideos(state),
  getWatchedVideo: id => getWatchedVideoById(state, id)
});

const mapDispatchToProps = dispatch => ({
  getVideos: query => dispatch(getVideos(query)),
  addWatchedVideo: videoData => dispatch(addWatchedVideo(videoData)),
  playVideo: id => dispatch(playVideo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
