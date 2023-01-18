import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "https://germsp.ru/test-search-products",
});

instance.interceptors.request.use((config) => {
  /* if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    } */
  config.headers.Authorization = `Bearer Vdhgor7ChDlFoNm7JezbOpwicH2RRT2s`;
  return config;
});

export const ApiService = {
  //Reg & Auth

  async searchArticles({ articles }: any) {
    return instance.post(articles).then((response) => {
      return response.data;
    });
  },
};
