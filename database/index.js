const { Sequelize, Op  } = require("sequelize");


const DB_PORT = process.env.DB_PORT || 5432;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'socket';
const DB_USER = process.env.DB_USER || 'socket';
const DB_PASSWORD = process.env.DB_PASSWORD || 'socket';


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    // operatorsAliases: {
    //   $gt: Op.gt,
    //   $gte: Op.gte,
    //   $eq: Op.eq,
    //   $lt: Op.lt,
    //   $lte: Op.lte,
    //   $contains: Op.contains,
    //   $contained: Op.contained,
    //   $iLike: Op.iLike,
    //   $like: Op.like,
    //   $or: Op.or,
    //   $in: Op.in,
    // }
});



(async () => {

  await sequelize.sync({ force: true });
  
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();


module.exports = sequelize ;