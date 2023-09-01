require("./config/mongoConnection");
require('dotenv').config();
const express = require("express");
const routes = require("./routes.js");
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
