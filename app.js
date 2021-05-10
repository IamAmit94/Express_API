const express = require("express");
const app = express();

const mySql = require("mysql");
const bodyParser = require("body-parser");
const connection = require("./database/db");
const userRoutes = require("./modules/users/route");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.listen(7000, () => {
  console.log("The current running port is 7000");
});
