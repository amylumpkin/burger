const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(err, data) {
        if(err) res.status(500).send(err);
        else {
            const handlebarsObject = { burger: data };
            console.log(handlebarsObject);
            res.render("index", handlebarsObject);
        }
    });
});

router.post("/api", function(req, res) {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(err,result) {
        if(err) res.status(500).send(err);
        else    res.json({ id: result.insertId });
    });
});

router.put("/api/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({sleepy: req.body.sleepy},condition,function(err, result) {
      if(err) res.status(500).send(err);
      
      else if (result.changedRows === 0) 
          // If no rows were changed, then the ID must not exist, so 404
          res.status(404).end();
      
      else res.status(200).end();

    }
  );
});

router.delete("/api/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;

    burger.delete(condition, function(err, result) {
        if(err) res.status(500).send(err);

        else if (result.affectedRows == 0) 
          // If no rows were changed, then the ID must not exist, so 404
            res.status(404).end();

        else res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;
