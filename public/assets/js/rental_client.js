// "use strict";

// $(document).on("click", ".burgerButtons", (event) => {
//   var id = event.target.dataset.id;
//   var rentedState = event.target.dataset.rentedState;

//   var newrentedState = {
//     rented: rentedState,
//   };

//   $.ajax("/api/rentals/" + id, {
//     type: "PUT",
//     data: newrentedState,
//   }).then(function () {
//     location.reload();
//   });
// });

// $(".create-form").on("submit", function (event) {
//   event.preventDefault();

//   var newBurger = {
//     bike_name: $("#burgerNameInput").val().trim(),
//     rented: $("[name=rented]:checked").val().trim(),
//   };

//   $.ajax("/api/rentals", {
//     type: "POST",
//     data: newBurger,
//   }).then(function () {
//     location.reload();
//   });
// });

// $(".deleteBurger").on("click", function (event) {
//   var id = $(this).data("id");

//   $.ajax("/api/rentals/" + id, {
//     type: "DELETE",
//   }).then(function () {
//     location.reload();
//   });
// });
