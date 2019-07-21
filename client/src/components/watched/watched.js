import React from "react";
import "./watched.scss";

const Watched = ({
  removeWatchedVideo,
  onPlayWatchedVideo,
  watchedVideos,
  activeVideo
}) => {
  const renderItems = () => {
    return [...watchedVideos].reverse().map(video => {
      return (
        <li
          key={video.id}
          className={`watched__item ${
            activeVideo === video.id ? "active" : ""
          }`}
          onClick={() => {
            onPlayWatchedVideo(video.id);
          }}
        >
          <img src={video.thumb} alt={video.title} className="watched__thumb" />
          <p className="watched__title">{video.title}</p>

          <button
            className="watched__remove"
            onClick={e => {
              e.stopPropagation();
              removeWatchedVideo(video._id);
            }}
          >
            {"remove"}
          </button>
        </li>
      );
    });
  };
  return (
    <div className="sidebar">
      <p className="sidebar__title">Watched videos</p>
      {watchedVideos ? (
        <ul className="watched">{renderItems()}</ul>
      ) : (
        <p className="sidebar__message">List empty</p>
      )}
    </div>
  );
};

export default Watched;
