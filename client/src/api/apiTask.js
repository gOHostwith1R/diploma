import axios from "axios";

export const apiTask = {
  apiTaskCreate: (title, description, type) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}task/create-task`, {
      title,
      description,
      type,
    }),
  apiFetchTasks: () =>
    axios.get(`${process.env.REACT_APP_SERVER_URL}task/all-task`),
  apiAddAnswer: (answer, id) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}task/add-answer`, {
      answer,
      id,
    }),
  apiFetchAnswers: (id) =>
    axios.post(`${process.env.REACT_APP_SERVER_URL}task/answers`, {
      id,
    }),
};
