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

//GET THE RESOURCES from the local api
$.ajax({
  method: "GET",
  url: "/api/resources"
}).done((resources) => {
  console.log("aWTFWFWFWF");
  for(resource in resources) {
    console.log("asjhdakjshd", resources);
    resources[resource].forEach(element => {
      $("<div>").text(element.title).appendTo($("body"));
      $("<div>").text(element.description).appendTo($("body"));
      $("<div>").text(element.created_at).appendTo($("body"));
    });
  }
});;

//GET THE SEARCHED RESOURCES
$.ajax({
  method: "GET",
  url: "/api/searchedResource"
}).done((resources) => {
  console.log("aWTFWFWFWF");
  for(resource in resources) {
    console.log("asjhdakjshd", resources);
    resources[resource].forEach(element => {
      $("<div>").text(element.title).appendTo($("body"));
      $("<div>").text(element.description).appendTo($("body"));
      $("<div>").text(element.created_at).appendTo($("body"));
    });
  }
});;

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
