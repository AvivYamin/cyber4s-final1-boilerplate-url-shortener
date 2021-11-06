const express = require("express");
const Router = express.Router();
const dataManipulator = require("./dataManipulator")

Router.get('/:id', (req, res) => {
    try {
         const urlObject = dataManipulator.getStatistics(`http://localhost:3000/statistics/${req.params.id}`);
         if(urlObject){
             res.send(urlObject);
         }else{
             res.status(403).send("Invalid URl");
         }  
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = Router;