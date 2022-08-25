import axiosClient from "./axiosClient";

const animeSynopsis = {
  get: (id, episode) => {
    const subUrl = `/anime/${id}/episodes/${episode}`;
    return axiosClient.get(subUrl);
  }
};

export default animeSynopsis;