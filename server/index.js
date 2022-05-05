require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(cookieParser());
app.use('/api', router);
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`start ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
