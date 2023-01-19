import axios from "axios";
import { IRequest } from "../common/types";

const instance = axios.create({
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer Vdhgor7ChDlFoNm7JezbOpwicH2RRT2s`;
  return config;
});

export const ApiService = {
  async searchArticles(searchArticles: IRequest) {
    return instance
      .post("https://germsp.ru/test-search-products", searchArticles)
      .then((response) => {
        return response.data;
      });
  },
};
