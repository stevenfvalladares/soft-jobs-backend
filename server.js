const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(3000, console.log("Server running from port 3000"));

module.exports = app;
