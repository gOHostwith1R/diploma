import api from "./axiosConfig";

export const apiTask = {
  apiTaskCreate: (title, description, type, userName) =>
    api.post("task/create-task", {
      title,
      description,
      type,
      userName,
    }),
  apiFetchTasks: () => api.get("task/all-task"),
  apiAddAnswer: (answer, id, userName) =>
    api.post("task/add-answer", {
      answer,
      id,
      userName,
    }),
  apiFetchAnswers: (id) =>
    api.post("task/answers", {
      id,
    }),
};
