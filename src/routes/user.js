const express = require("express");
const router = express.Router();

const { createUsers, getUsers } = require("../controllers/user");
const { checkRequest } = require("../middlewares/checkRequest");
const { validation } = require("../middlewares/authenticated");

router.post("/users", checkRequest, createUsers);
router.get("/users", checkRequest, validation, getUsers);

module.exports = router;
