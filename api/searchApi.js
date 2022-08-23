import axiosClient from "./axiosClient";

const searchApi = {
  get: (value) => {
    const subUrl = `/anime?q=${value}`;
    return axiosClient.get(subUrl);
  }
};

export default searchApi;