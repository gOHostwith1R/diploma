const Router = require("express");
const taskController = require("../controllers/taskController");
const router = new Router();
const { body } = require("express-validator");

router.post("/create-task", taskController.createTask);
router.get("/all-task", taskController.getAllTask);
router.post("/add-answer", taskController.addAnswer);
router.post("/answers", taskController.getAnswers);

module.exports = router;
