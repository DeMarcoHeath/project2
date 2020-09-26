// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // Add a new bike.
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBike = {
      bike_name: $("#newbike").val().trim(),
      rented: 0,
    };

    // Send the POST request.
    $.ajax("/api/rentals", {
      type: "POST",
      data: newBike,
    }).then(function () {
      console.log("Added new bike");
      // Reload the page to get the updated bike list.
      location.reload();
    });
  });

  $(".rentbike").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var rentedState = {
      rented: 1,
    };

    // Send the PUT request.
    $.ajax("/api/rentals/" + id, {
      type: "PUT",
      data: rentedState,
    }).then(function () {
      console.log("Bike Rented");
      location.reload();
    });
  });

  $(".returnbike").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/rentals/" + id,
    }).then(location.reload());
  });
});
