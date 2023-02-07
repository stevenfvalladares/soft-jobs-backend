const { Pool } = require("pg");
require("dotenv").config({ path: "./.env" });

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  allowExitOnIdle: true,
});

const dbConnectPostgreSQL = () => {
  let instance;
  function createInstance() {
    const classObj = new Pool(config);
    return classObj;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
        console.log("New connection generated to the PostgreSQL database");
      } else {
        console.log("Connection to the database already exists");
      }
      return instance;
    },
  };
};

module.exports = dbConnectPostgreSQL;
