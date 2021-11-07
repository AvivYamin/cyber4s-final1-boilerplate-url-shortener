const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const shortRouter = require("./routers/short-router");
const userShortRouter = require("./routers/user-short-router");
const redirectRouter = require("./routers/redirect-router");
const statisticsRouter = require("./routers/statistics-router");
const userNameRouter = require("./routers/user-statistics-router");


app.use(cors());
app.use(express.json());


// app.use("/", express.static(path.resolve(`./front/dist`)));

 app.get("/", (req, res) => {
  console.log("hey");
   res.sendFile(path.resolve("./front/dist/index.html"));

 });

 app.use('/shortmyurl', shortRouter);
 app.use('/shortmyurl/', userShortRouter);
 app.use('/', redirectRouter);
 app.use('/statistics/', statisticsRouter);
 app.use('/info', userNameRouter);

module.exports = app;


// http://localhost:3000/