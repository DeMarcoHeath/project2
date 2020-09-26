var express = require("express");
var router = express.Router();

var rental = require("../models/rentals.js");

router.get("/", function (req, res) {
  rental.selectAll(function (data) {
    var hbsObject = {
      rentals: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/rentals", function (req, res) {
  rental.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log(result);
    }
  );
});

router.put("/api/rentals/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  rental.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
// Delete bike from db.
router.delete("/api/rentals/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  rental.deleteOne(condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
