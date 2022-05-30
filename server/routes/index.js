const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");

router.use("/user", userRouter);
router.use("/task", authMiddleware, taskRouter);

module.exports = router;
