import api from "./axiosConfig";

export const apiTask = {
  apiTaskCreate: (title, description, type) =>
    api.post("task/create-task", {
      title,
      description,
      type,
    }),
  apiFetchTasks: () => api.get("task/all-task"),
  apiAddAnswer: (answer, id) =>
    api.post("task/add-answer", {
      answer,
      id,
    }),
  apiFetchAnswers: (id) =>
    api.post("task/answers", {
      id,
    }),
};
