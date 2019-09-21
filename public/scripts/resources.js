$(() => {
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    for(resource in resources) {
      resources[resource].forEach(element => {
        $("<div>").text(element.title).appendTo($("body"));
        $("<div>").text(element.description).appendTo($("body"));
        $("<div>").text(element.created_at).appendTo($("body"));
      });
    }
  });;
});
