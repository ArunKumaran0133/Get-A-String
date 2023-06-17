const express = require("express");
const Express = express();

Express.get("/", (request, response) => {
  response.send("Express JS");
});

Express.listen(3000);

module.exports = Express;
