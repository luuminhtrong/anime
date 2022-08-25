import axiosClient from "./axiosClient";

const animeEpisodesApi = {
  get: (id) => {
    const subUrl = `/anime/${id}/episodes`;
    return axiosClient.get(subUrl);
  }
};

export default animeEpisodesApi;