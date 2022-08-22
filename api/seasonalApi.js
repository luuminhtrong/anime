import axiosClient from "./axiosClient";

const seasonalApi = {
  get: (year,season) => {
    const subUrl = `/seasons/${year}/${season}`;
    return axiosClient.get(subUrl);
  }
};

export default seasonalApi;