const express = require("express");
const Router = express.Router();
const dataManipulator = require("./userData"); //Differnt manipulator

Router.post('/:userName', (req, res) => {
    const userName = req.params.userName;
    try {
        const originUrl = req.body.url;
        if(isValidUrl(originUrl)){
            const newUrl = dataManipulator.urlDataSaver(userName, originUrl);
            res.send(newUrl);
         }else{
             res.status(403).send("Invalid URl");
         }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

function isValidUrl(url){
    if(url.substring(0,7) != "http://" && url.substring(0,8) != "https://"){
        return false;
    }
    return true;
}

module.exports = Router;