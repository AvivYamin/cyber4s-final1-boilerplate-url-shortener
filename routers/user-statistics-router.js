'use strict';
const express = require('express');
const Router = express.Router();
const dataManipulator = require("./userData"); //Different manipulator


Router.get('/:userName', (req, res) => {
        try {
           const DB = dataManipulator.getMyUrls(req.params.userName);
           console.log(DB);
           if(DB){
                res.send(DB);
            }else{
                res.status(403).send("Invalid User Name");
            }
        } catch (error) {
            console.log(error);
            res.send(error);    
        }
        
})

module.exports = Router;