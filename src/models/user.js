const pool = require("../config/setting_postgresql").getInstance();

const createUser = async (payload) => {
  SQLquery = {
    text: "INSERT INTO users (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [payload.email, payload.password, payload.rol, payload.lenguage],
  };
  try {
    const results = await pool.query(SQLquery);
    return results.rows;
  } catch (error) {
    throw { code: 404, message: "error creating user query!" };
  }
};

const getUser = async (payload) => {
  SQLquery = {
    text: "SELECT email, rol, lenguage FROM users WHERE email = $1",
    values: [payload],
  };
  try {
    const results = await pool.query(SQLquery);
    return results.rows[0];
  } catch (error) {
    throw { code: 404, message: "error getting user query!" };
  }
};

const getUserKey = async (payload) => {
  SQLquery = {
    text: "SELECT email, password FROM users WHERE email = $1",
    values: [payload],
  };
  try {
    const results = await pool.query(SQLquery);
    return results.rows[0];
  } catch (error) {
    throw {
      code: 404,
      message: "error when performing the query to get the key!",
    };
  }
};

module.exports = { createUser, getUser, getUserKey };
