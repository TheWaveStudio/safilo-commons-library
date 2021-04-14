const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { apiResponse } = require("./classes/adapters/apiResponse");

const server = express();

// eslint-disable-next-line no-unused-vars
morgan.token("body", (req, res) => JSON.stringify(req.body));
server.use(morgan("[:date[clf]] :method :url :status :response-time ms :body"));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors());

// catch 404 and forward to error handler
// eslint-disable-next-line no-unused-vars
server.use(function (req, res, next) {
  return res.status(404).json(apiResponse(404, "Endpoint not found"));
});

// error handler
// eslint-disable-next-line no-unused-vars
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

server.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://${process.env.HOST}:${process.env.PORT}`);
});

module.exports = server;
