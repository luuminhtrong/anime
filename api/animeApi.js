import axiosClient from "./axiosClient";

export const dataAnmime = {
  get: () => {
    const subUrl = `/anime`;
    return axiosClient.get(subUrl);
  },
};

const searchApi = {
  get: (id) => {
    const subUrl = `/anime/${id}`;
    return axiosClient.get(subUrl);
  },
};

export default searchApi;
