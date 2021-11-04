require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//app.use("/public", express.static(`./public`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use('/shortmyurl', shortRouter);
app.use('/redirect', redirectRouter);

module.exports = app;


// http://localhost:3000/