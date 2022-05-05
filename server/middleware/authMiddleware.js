const ApiError = require('../error/ApiError');
const TokenService = require('../service/TokenService');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(ApiError.unauthorizedError('Unauthorized error'));
    }

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.unauthorizedError('Unauthorized error'));
    }
    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.unauthorizedError('Unauthorized error'));
    }
    next()
  } catch (e) {
    next(e);
  }
};
