const fs = require('fs');
const path = require('path');
const shortid = require("shortid");

const pathToDbFile = path.resolve(__dirname, "../database/url-db.json");

function urlDataSaver(originalUrl){
    
     const validation = validateUrl(originalUrl); //URL existance validator
     if(validation != null){
         return(validation) //Returns the existent short URL from the database
     }else{
        const DB = JSON.parse(fs.readFileSync(pathToDbFile)); //Parse the database file into array
        const newUrlObject = urlGenerator(originalUrl); //Generates a new URL object with a short URL
        DB.push(newUrlObject); //Inserts the new object to the array
        fs.writeFileSync(pathToDbFile, JSON.stringify(DB)); //Overwrites the DB file with the new data
        return newUrlObject.newUrl; //Returns the new object 
    }
}

function urlGenerator(originalUrl){ 
    const newDynamicId = shortid.generate(); //Generates a unique dynamic ID 
    let count = 0;
    const newUrlObject = {newUrl: `http://localhost:3000/${newDynamicId}`, oldUrl: originalUrl, count: count, creationDate: new Date(Date.now())}; //Object with the old URL and the new unique one
    return newUrlObject;
}

function validateUrl(originalUrl){
    const DB = JSON.parse(fs.readFileSync(pathToDbFile)); //Parse the database file into array
    let usedUrl = null;
    DB.forEach(urlObject => {
        if(urlObject.oldUrl === originalUrl){ //Checks if the old url exists in the database
           usedUrl = urlObject.newUrl; //Inserts the used URL to the variable
        }
    });
    return usedUrl;
}

function handleRedirect(newUrl){
    let originalUrl = null;
    const DB = JSON.parse(fs.readFileSync(pathToDbFile)); //Parse the database file into array
    DB.forEach(urlObject => {
        if(urlObject.newUrl === newUrl){ //Checks if the new url exists in the database
           originalUrl = urlObject.oldUrl; //Inserts its old URL to the variable
           urlObject.count++;
        }
    });
    fs.writeFileSync(pathToDbFile, JSON.stringify(DB));
    return originalUrl;
}

function getStatistics(urlId){
    //urlId = urlId.substring(33);
    const shortUrl = urlId.replace('/statistics', ''); //Extracts the statistics from the URL
    let queryObject = null; 
    const DB = JSON.parse(fs.readFileSync(pathToDbFile)); //Parse the database file into array
    DB.forEach(urlObject => {
        if(urlObject.newUrl === shortUrl){ //Checks if the URL id exists in the database
            queryObject = urlObject; 
        }
    });
    return(queryObject); //returns the corresponding URL object of that id
}


module.exports = {
    urlDataSaver,
    handleRedirect,
    getStatistics
}