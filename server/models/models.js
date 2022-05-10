const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
});

const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
});

const Answer = sequelize.define("answer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  idTask: { type: DataTypes.INTEGER },
  answer: { type: DataTypes.STRING },
});

module.exports = {
  User,
  Task,
  Answer,
};
