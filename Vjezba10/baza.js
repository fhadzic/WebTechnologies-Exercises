const Sequelize = require("sequelize");
const sequelize = new Sequelize("imenikWT", "root", "", {
   host: "127.0.0.1",
   dialect: "mysql"
});

const db={};


module.exports = sequelize;