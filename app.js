const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();

const router = require("./controller/userController");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./config")

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;