import * as Sequelize from "sequelize";
import productFactory from "./product";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config.json")[env];

const sequelize = new Sequelize(config.url || process.env.DATABSE_CONNECTION_URI, config);

const db = {
  sequelize,
  Sequelize,
  Product: productFactory(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
