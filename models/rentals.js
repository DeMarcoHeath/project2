// Import orm.js into rentals.js
var orm = require("../config/orm.js");

// The code that will call the ORM functions using bike specific input for the ORM.
var bike = {
  // Display all bikes in the db.
  selectAll: function (cb) {
    orm.selectAll("bikes", function (res) {
      cb(res);
    });
  },
  // Add a new bike to the db.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("bikes", cols, vals, function (res) {
      cb(res);
    });
  },
  // Change the rented status to true.
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("bikes", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // Delete a bike from the db.
  deleteOne: function (condition, cb) {
    orm.deleteOne("bikes", condition, function (res) {
      cb(res);
    });
  },
};

// Export at the end of the bike.js file.
module.exports = rentals;
