const express = require("express");
const cors = require("cors");
const app = express();
const shortRouter = require("./routers/short-router");
const userShortRouter = require("./routers/user-short-router");
const redirectRouter = require("./routers/redirect-router");
const statisticsRouter = require("./routers/statistics-router");
const userNameRouter = require("./routers/user-statistics-router");


app.use(cors());
app.use(express.json());

app.use("/test", express.static(`./front/dist`));

app.get("", (req, res) => {
  res.sendFile(__dirname + "./front/dist/index.html");
});

app.use('/shortmyurl', shortRouter);
app.use('/shortmyurl/', userShortRouter);
// app.use('/', redirectRouter);
app.use('/statistics/', statisticsRouter);
app.use('/info', userNameRouter);

module.exports = app;


// http://localhost:3000/