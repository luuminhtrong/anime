import axiosClient from "./axiosClient";

const seasonalApi = {
  get: (year, season, page) => {
    const subUrl = `/seasons/${year}/${season}?page=${page}`;
    return axiosClient.get(subUrl);
  },
};

export default seasonalApi;
