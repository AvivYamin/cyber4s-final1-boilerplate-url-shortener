const express = require("express");
const Router = express.Router();

Router.post('/', (req, res) => {
    console.log("Yo");
    try {
        console.log(req.body);
        res.send("Success");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})