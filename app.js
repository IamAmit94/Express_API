const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const userRoutes = require("./modules/users/route");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.listen(7000, () => {
  console.log("The current port running  is 7000 ");
});
