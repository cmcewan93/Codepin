// import { render } from "node-sass";

// // // // // $(() => {
// // // // //   $.ajax({
// // // // //     method: "GET",
// // // // //     url: "/api/users"
// // // // //   }).done((users) => {
// // // // //     for(user of users) {
// // // // //       $("<div>").text(user.name).appendTo($("body"));
// // // // //     }
// // // // //   });;
// // // // // });

//GET THE RESOURCES from the local api

const createResourcesElement = function(value) {
  console.log(value, "asdhakjdhas");
  // <img src="${value.imgUrl}">
  const $resource = `
  <div class="column">
    <img src="${value.imgurl}" style="width:100%"/>
  </div>
  `;
  return $resource;
}

const renderResources = function(resources) {
  for(let resource in resources) {
    resources[resource].forEach(element => {
      $(document).ready(()=> {
        $('#resource-container').prepend(createResourcesElement(element));
      })
    });
  }
}

const loadResources = () => {
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    // console.log(resources, "asjdjahkda");
    renderResources(resources);
  });;
}


//GET THE SEARCHED RESOURCES
const searchResource = () => {
  $.ajax({
    method: "GET",
    url: "/api/searchedResource"
  }).done((resources) => {
    console.log("aWTFWFWFWF");
    for(resource in resources) {
      console.log("asjhdakjshd", resources);
      resources[resource].forEach(element => {
        // $("<div>").text(element.title).appendTo($("#container"));
        // $("<div>").text(element.description).appendTo($("#container"));
        // $("<div>").text(element.created_at).appendTo($("#container"));

      });
    }
  });;
}

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

loadResources();
