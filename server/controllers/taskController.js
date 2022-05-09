const { Task } = require("../models/models");
const ApiError = require("../error/ApiError");

class TaskController {
  async createTask(req, res, next) {
    const { title, description, type } = req.body;
    const task = await Task.create({
      title,
      description,
      type,
    });
    return res.json({ task });
    try {
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TaskController();
