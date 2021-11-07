const express = require("express");
const Router = express.Router();
const dataManipulator = require("./dataManipulator")

Router.get('/:id', (req, res) => {
    try {
        // const oldUrl = dataManipulator.handleRedirect(`http://localhost:3000/${req.params.id}`);
        const oldUrl = dataManipulator.handleRedirect(`https://short-url-aviv.herokuapp.com/${req.params.id}`);
        if(oldUrl){
            res.redirect(301, oldUrl);
        }else{
            res.status(403).send("Invalid URl");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;