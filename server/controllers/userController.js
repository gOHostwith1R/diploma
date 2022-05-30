const { User } = require("../models/models");
const bcrypt = require("bcrypt");
const ApiError = require("../error/ApiError");
const { validationResult } = require("express-validator");
const TokenService = require("../service/TokenService");
class UserController {
  async registration(req, res, next) {
    try {
      const { userName, password, firstName, lastName, age } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest(errors.errors));
      }
      const candidate = await User.findOne({ where: { userName } });
      if (candidate) {
        return next(ApiError.userExists("User such exists"));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        userName,
        password: hashPassword,
        firstName,
        lastName,
        age,
      });

      const tokens = TokenService.generateToken({
        userName: user.userName,
        firstName: user.firstName,
      });
      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: user.userName });
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { userName, password } = req.body;
      if (!userName && !password) {
        return next(ApiError.badRequest("Поля пустые"));
      }
      const user = await User.findOne({ where: { userName } });
      if (!user) {
        return next(ApiError.badRequest("Имя пользователя или пароль не верные"));
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return next(ApiError.badRequest("Имя пользователя или пароль не верные"));
      }
      const tokens = TokenService.generateToken({
        userName: user.userName,
        firstName: user.firstName,
      });
      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: user.userName });
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      if (!refreshToken) {
        return next(ApiError.unauthorizedError("Не авторизован"));
      }
      const checkRefreshToken = TokenService.validateRefreshToken(refreshToken);
      if (!checkRefreshToken) {
        return next(ApiError.unauthorizedError("Не авторизован"));
      }
      const userData = TokenService.decodeRefreshToken(refreshToken);
      const tokens = TokenService.generateToken({
        userName: userData.userName,
        firstName: userData.firstName,
      });

      res.cookie("refreshToken", tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: userData.userName });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
