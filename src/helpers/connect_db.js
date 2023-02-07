const { Pool } = require("pg");
const { setting } = require("../config/setting");

const Connection = (() => {
  let instance;
  function createInstance() {
    const classObj = new Pool(setting);
    return classObj;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
        console.log("New connection to the database");
      } else {
        console.log("Connection to the database already exists");
      }
      return instance;
    },
  };
})();

module.exports = Connection;
