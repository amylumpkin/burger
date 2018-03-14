//import express
//import burger.js
//create the router and export the router at end of file

const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

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

router.post("/api", function(req, res){
    burger.create(["name", "devoured"], [req.body.name, req.body.sleepy], function(err,result){
        if(err) res.status(500).send(err);
        else res.json({ id: result.insertId });
    });
});
router.put("/api/:id", function(req, res){
    const condition = "id = " + req.params.id;
    console.log("condition", condtion);

    burger.update({devoured: req.body.devoured}, condition, function(err, results){
        if(err) res.status(500).send(err);
        else if (result.changedRows === 0)
             res.status(404).end();
        else res.status(200).end();
    });
});

router.delete("/api/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;

    burger.delete(condition, function(err, result) {
        if(err) res.status(500).send(err);
        else if (result.affectedRows == 0) 
             res.status(404).end();
        else res.status(200).end();
    });
});



//res.send("You're on the home page");// change this to res render index
});
module.exports = router;
