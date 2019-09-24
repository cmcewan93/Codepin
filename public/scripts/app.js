$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


$(".logout").on("click", function(event) {
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/logout',
  })
    .success(function() {
      location.href = "/";
    })
});
