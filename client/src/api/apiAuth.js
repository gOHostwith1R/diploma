import axios from "axios";

export const apiAuth = {
  apiAuthLogin: (userName, password) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}user/login`, {
      userName,
      password,
    }),
};
