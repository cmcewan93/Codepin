

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

// loadFavourites();
// loadResources();
// searchResource();
