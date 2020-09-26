 branch4
"use strict";

const express = require("express");
const router = express.Router();
const burger = require("./models/rentals.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var burgerId = "id = " + req.params.id;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    burgerId,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

// "use strict";

// const express = require("express");
// const router = express.Router();
// const burger = require("./models/burger.js");

// router.get("/", function (req, res) {
//   burger.all(function (data) {
//     var hbsObject = {
//       burgers: data,
//     };
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function (req, res) {
//   burger.create(
//     ["burger_name", "devoured"],
//     [req.body.burger_name, req.body.devoured],
//     function (result) {
//       res.json({ id: result.insertId });
//     }
//   );
// });

// router.put("/api/burgers/:id", function (req, res) {
//   var burgerId = "id = " + req.params.id;

//   burger.update(
//     {
//       devoured: req.body.devoured,
//     },
//     burgerId,
//     function (result) {
//       if (result.changedRows === 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     }
//   );
// });

// router.delete("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows === 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// module.exports = router;
master
