const { Task } = require("../models/models");
const ApiError = require("../error/ApiError");

class TaskController {
  async createTask(req, res, next) {
    const { title, description, type } = req.body;
    try {
      const task = await Task.create({
        title,
        description,
        type,
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
}

module.exports = new TaskController();
