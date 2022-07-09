const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require('./database/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Te amo Tici");
});

app.listen(3000, () => {
  console.log("Server running!");
});
