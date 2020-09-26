"use strict";

$(document).on("click", ".burgerButtons", (event) => {
  var id = event.target.dataset.id;
  var devouredState = event.target.dataset.devouredState;

  var newDevouredState = {
    devoured: devouredState,
  };

  $.ajax("/api/rentals/" + id, {
    type: "PUT",
    data: newDevouredState,
  }).then(function () {
    location.reload();
  });
});

$(".create-form").on("submit", function (event) {
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burgerNameInput").val().trim(),
    devoured: $("[name=devoured]:checked").val().trim(),
  };

  $.ajax("/api/rentals", {
    type: "POST",
    data: newBurger,
  }).then(function () {
    location.reload();
  });
});

$(".deleteBurger").on("click", function (event) {
  var id = $(this).data("id");

  $.ajax("/api/rentals/" + id, {
    type: "DELETE",
  }).then(function () {
    location.reload();
  });
});
