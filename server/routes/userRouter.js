const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const { body } = require('express-validator');

router.post('/login', userController.login);
router.post(
  '/registration',
  body('userName').isLength({ min: 3 }),
  body('password')
    .isLength({ min: 4 })
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/),
  body('repeatPassword', )
    .isLength({ min: 4 })
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
    .custom((value,{req}) => {
      if (value !== req.body.password) {
        throw new Error("passwordsNoMatch");
      } else {
        return value;
      }
    }),
  body('firstName').isLength({ min: 4 }),
  body('lastName').isLength({ min: 4 }),
  body('age').matches(/^[1-9][0-9]*$/),
  userController.registration,
);
router.get('/refresh', userController.refresh);

module.exports = router;
