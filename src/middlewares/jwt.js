const jwt = require("jsonwebtoken");

const privateKey = process.env.JWT_SECRET_KEY;

const sign = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });
};

const validation = (req, res, next) => {
  try {
    const token = req.header("authorization");
    const jwtToken = token.split(" ")[1];
    jwt.verify(jwtToken, privateKey);
    next();
  } catch (error) {
    throw { code: 401, message: "error validating credentials!" };
  }
};

const decode = (token) => {
  try {
    const jwtToken = token.split(" ")[1];
    const tokenDecode = jwt.decode(jwtToken);
    return tokenDecode;
  } catch (error) {
    throw { code: 401, message: "error decoding token!" };
  }
};

module.exports = { sign, validation, decode };
