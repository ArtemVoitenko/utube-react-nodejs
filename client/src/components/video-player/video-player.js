import React from "react";
import YouTube from "react-youtube";
import "./video-player.scss";
const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: "780",
    width: "1280",
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <div className="video-player__wrapper">
      {videoId ? (
        <YouTube
          videoId={videoId}
          className={"video-player__iframe"}
          containerClassName={"video-player"}
          opts={opts}
        />
      ) : (
        <div className="video-player__mock">Search to play video</div>
      )}
    </div>
  );
};
export default VideoPlayer;
