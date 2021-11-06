const express = require("express");
const Router = express.Router();
const dataManipulator = require("./dataManipulator")

Router.get('/:id', (req, res) => {
    try {
         const urlObject = dataManipulator.getStatistics(`http://localhost:3000/statistics/${req.params.id}`);
        // if(oldUrl){
        //     res.redirect(301, oldUrl);
        // }else{
        //     res.status(403).send("Invalid URl");
        console.log(`hello from ${req.params.id}`)
        res.send(urlObject);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;