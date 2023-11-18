const Sequelize = require("sequelize");

const sequelize = new Sequelize("Kim2", "root", "abdu", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
