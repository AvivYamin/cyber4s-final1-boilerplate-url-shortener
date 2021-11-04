const express = require("express");
const Router = express.Router();

Router.get('/', (req, res) => {
    console.log("Hey");
    try {
        console.log(req.body);
        res.send("Great Success" + res.status);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;