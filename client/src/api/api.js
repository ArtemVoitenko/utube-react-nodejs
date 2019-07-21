import axios from "axios";
import { API_SEARCH_BASE, API_URL } from "../constans";

export const getVideos = query => axios.get(`${API_SEARCH_BASE}${query}`);
export const addWatchedVideo = data => axios.post(API_URL, data);
export const getWatchedVideos = () => axios.get(API_URL);
export const removeVideo = id => axios.delete(API_URL, { data: { id: id } });

export default {
  getVideos,
  addWatchedVideo,
  getWatchedVideos,
  removeVideo
};
