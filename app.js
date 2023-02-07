const app = require("./server");

app.use("/", require("./src/routes/user"));
app.use("/login", require("./src/routes/login"));

// default route
app.get("*", (req, res) => {
  res
    .status(404)
    .send(`The requested URL${req.originalUrl} was not found on this server.`);
});

module.exports = app;
