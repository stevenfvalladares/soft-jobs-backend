const { decrypt } = require("../helpers/encrypting");
const { sign } = require("../middlewares/authenticated");
const { getUserKey } = require("../models/user");

const authenticator = async (req, res) => {
  const { email, password } = req.body;
  email.toLowerCase();
  password.toLowerCase();
  try {
    const user = await getUserKey(email);
    if (user === undefined) {
      res.status(500).send("error user not found!");
    } else {
      const decryptKey = decrypt(password, user.password);
      if (decryptKey === false) {
        res.status(500).send("error token decrypt!");
      } else {
        const tokenJwt = await sign({ email });
        res.status(200).send(tokenJwt);
      }
    }
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

module.exports = { authenticator };
