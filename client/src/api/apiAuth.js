import axios from "axios";
import api from "./axiosConfig";

export const apiAuth = {
  apiAuthLogin: (userName, password) =>
    api.post("user/login", {
      userName,
      password,
    }),
  apiAuthSignUp: (userName, password, firstName, lastName, age) =>
    api.post("user/registration", {
      userName,
      password,
      firstName,
      lastName,
      age,
    }),
  apiAuthRefreshToken: () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}user/refresh`, {
      withCredentials: true,
    }),
};
