import axios from "axios";
import { HOST_URL } from "../utils/helper";

const api = axios.create({
  baseURL: HOST_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }
    return Promise.reject(error);
  },
);

function apiServer(token?: string) {
  return api.create({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
}

export {
  api,
  apiServer,
};
