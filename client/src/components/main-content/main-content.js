import React, { Component } from "react";
import { connect } from "react-redux";
import { getActiveVideoId, getAllWatchedVideos } from "../../selectors";
import { getWatchedVideos, playVideo, removeVideo } from "../../actions";
import Watched from "../watched/watched";
import VideoPlayer from "../video-player/video-player";
import "./main-content.scss";

class MainContent extends Component {
  componentDidMount() {
    this.props.getWatchedVideos();
  }

  render() {
    const { playVideo, watchedVideos, activeVideoId, removeVideo } = this.props;
    return (
      <div className="container">
        <div className="content">
          <Watched
            onPlayWatchedVideo={playVideo}
            removeWatchedVideo={removeVideo}
            watchedVideos={watchedVideos}
            activeVideo={activeVideoId}
          />
          <VideoPlayer videoId={activeVideoId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeVideoId: getActiveVideoId(state),
  watchedVideos: getAllWatchedVideos(state)
});

const mapDispatchToProps = dispatch => ({
  getWatchedVideos: () => dispatch(getWatchedVideos()),
  playVideo: id => dispatch(playVideo(id)),
  removeVideo: id => dispatch(removeVideo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);
