const { Task, Answer } = require("../models/models");

class TaskController {
  async createTask(req, res, next) {
    const { title, description, type, userName } = req.body;
    try {
      const task = await Task.create({
        title,
        description,
        type,
        userName,
      });
      return res.json({ task });
    } catch (e) {
      next(e);
    }
  }
  async getAllTask(req, res, next) {
    try {
      const tasks = await Task.findAll();
      return res.json(tasks);
    } catch (e) {
      next(e);
    }
  }
  async addAnswer(req, res, next) {
    const { id: idTask, answer, userName } = req.body;
    console.log(idTask, answer, userName);
    try {
      const answerTask = await Answer.create({
        idTask,
        answer,
        userName,
      });
      return res.json({ answerTask });
    } catch (e) {
      next(e);
    }
  }
  async getAnswers(req, res, next) {
    const { id: idTask } = req.body;
    try {
      const answers = await Answer.findAll({ where: { idTask } });

      return res.json(answers);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TaskController();
