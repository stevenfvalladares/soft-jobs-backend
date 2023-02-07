const moment = require("moment");

const checkRequest = async (req, res, next) => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  const url = req.url;
  const params = req.params;
  const query = req.query;
  const body = req.body;

  console.log(
    `\nLast consultation made with date: ${date}. \nConsulted route:${url}`
  );
  if (Object.values(params) != "" || undefined) {
    console.log(`- params: ${JSON.stringify(params.email)}`);
  }
  if (Object.values(query) != "" || undefined) {
    console.log(`- query: ${JSON.stringify(query)}`);
  }
  if (Object.values(body) != "" || undefined) {
    console.log(`- body: ${JSON.stringify(body)}`);
  }
  next();
};

module.exports = { checkRequest };
