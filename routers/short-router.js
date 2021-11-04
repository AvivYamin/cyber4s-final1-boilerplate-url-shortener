const express = require("express");
const Router = express.Router();
const shortid = require("shortid");

Router.post('/', (req, res) => {
    console.log(shortid.generate());
    try {
        let originUrl = req.body.url;
        if(isValidUrl(originUrl)){
            console.log(originUrl);
            res.send("Great Success");
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