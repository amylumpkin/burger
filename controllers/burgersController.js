//import express
//import burger.js
//create the router and export the router at end of file

const express = require("express");

const router = express.Router();

//import model burger.js to use its database functions
//const burger = require("../models/burger");

router.get("/", function(req, res) {
    burgers.all(function(err, data) {
        if(err) res.status(500).send(err);
        else {
            const hbsObject = { burgers: data };
            console.log(hbsObject);
            res.render("index", hbsObject); //render index hb file
        }
    });





//res.send("You're on the home page");// change this to res render index
});
module.exports = router;
