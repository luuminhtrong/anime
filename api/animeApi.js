import axiosClient from "./axiosClient";

const searchApi = {
  get: (id) => {
    const subUrl = `/anime/${id}`;
    return axiosClient.get(subUrl);
  }
};

export default searchApi;