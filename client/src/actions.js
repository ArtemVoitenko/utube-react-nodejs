import { createAction } from "redux-actions";
import api from "./api/api";

export const getVideosSuccess = createAction("GET_VIDEOS_SUCCESS");
export const addWatchedVideoSuccess = createAction("ADD_WATCHED_VIDEO_SUCCESS");
export const playVideo = createAction("PLAY_VIDEO");
export const getWatchedVideosSuccess = createAction(
  "GET_WATCHED_VIDEOS_SUCCESS"
);
export const removeVideoSuccess = createAction("REMOVE_VIDEO_SUCCESS");

export const getVideos = query => dispatch => {
  api
    .getVideos(query)
    .then(({ data }) => dispatch(getVideosSuccess(data.items)));
};

export const addWatchedVideo = data => dispatch => {
  api.addWatchedVideo(data).then(({ data }) => {
    dispatch(addWatchedVideoSuccess(data));
    dispatch(playVideo(data.id));
  });
};

export const getWatchedVideos = () => dispatch => {
  api
    .getWatchedVideos()
    .then(({ data }) => dispatch(getWatchedVideosSuccess(data.items)));
};

export const removeVideo = id => dispatch => {
  api.removeVideo(id).then(({ data }) => {
    dispatch(removeVideoSuccess(data.id));
  });
};
