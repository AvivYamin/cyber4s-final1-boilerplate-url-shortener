require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const shortRouter = require("./routers/short-router");
const redirectRouter = require("./routers/redirect-router");

app.use(cors());
app.use(express.json());

//app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/shortmyurl', shortRouter);
app.use('/redirect', redirectRouter);

module.exports = app;


// http://localhost:3000/