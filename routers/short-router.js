const express = require("express");
const Router = express.Router();
const shortid = require("shortid");

Router.post('/', (req, res) => {
    console.log(shortid.generate());
    try {
        console.log(req.body);
        res.send(res.statusCode);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;