const express = require("express");
const router = express.Router();

const { authenticator } = require("../controllers/login");
const { checkRequest } = require("../middlewares/checkRequest");

router.post("", checkRequest, authenticator);

module.exports = router;
