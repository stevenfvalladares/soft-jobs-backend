const bcrypt = require("bcryptjs");

const encrypt = (key) => {
  try {
    return bcrypt.hashSync(key);
  } catch (error) {
    throw "encryption error!";
  }
};

const decrypt = (key, encryptKey) => {
  try {
    const test = bcrypt.compareSync(key, encryptKey);
    return test;
  } catch (error) {
    throw "decryption error!";
  }
};

module.exports = { encrypt, decrypt };
