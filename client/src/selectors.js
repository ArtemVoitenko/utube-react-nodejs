export const getFoundVideos = state => state.foundVideos;

export const getWatchedVideoById = (state, id) =>
  state.watchedVideos.find(item => item.id === id);

export const getActiveVideoId = state => state.activeVideo;

export const getAllWatchedVideos = state => state.watchedVideos;
