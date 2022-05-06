import axios from "axios";

export const apiAuth = {
  apiAuthLogin: (userName, password) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}user/login`, {
      userName,
      password,
    }),
  apiAuthSignUp: (userName, password, firstName, lastName, age) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/registration`, {
      userName,
      password,
      firstName,
      lastName,
      age,
    }),
};
