import { handleActions } from "redux-actions";
import {
  getVideosSuccess,
  addWatchedVideoSuccess,
  playVideo,
  getWatchedVideosSuccess,
  removeVideoSuccess
} from "./actions";

const initialState = {
  foundVideos: [],
  watchedVideos: [],
  activeVideo: null
};

export default handleActions(
  {
    [getVideosSuccess]: (state, { payload }) => ({
      ...state,
      foundVideos: payload
    }),
    [addWatchedVideoSuccess]: (state, { payload }) => ({
      ...state,
      watchedVideos: [...state.watchedVideos, payload]
    }),
    [playVideo]: (state, { payload }) => ({
      ...state,
      activeVideo: payload
    }),
    [getWatchedVideosSuccess]: (state, { payload }) => ({
      ...state,
      watchedVideos: payload
    }),
    [removeVideoSuccess]: (state, { payload }) => {
      const removedVideoIdx = state.watchedVideos.findIndex(item => {
        return item._id === payload;
      });
      const newWatchedData = [
        ...state.watchedVideos.slice(0, removedVideoIdx),
        ...state.watchedVideos.slice(removedVideoIdx + 1)
      ];
      return {
        ...state,
        watchedVideos: newWatchedData
      };
    }
  },
  initialState
);
