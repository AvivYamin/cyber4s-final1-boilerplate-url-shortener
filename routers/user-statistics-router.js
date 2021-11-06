'use strict';
const express = require('express');
const Router = express.Router();

Router.get('/:userName', (req, res) => {
        res.send(`Hey ${req.params.userName}`); 
})

module.exports = Router;