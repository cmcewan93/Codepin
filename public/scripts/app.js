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
    <img src="${value}" style="width:100%"/>
  </div>
  `;
  return $resource;
}

const renderResources = function(resources) {
  for(let resource in resources) {
    resources[resource].forEach(element => {
      // console.log(element.title)
      $(document).ready(()=> {
        // console.log("Asdkaksdas", element);
        $('#resource-container').prepend(createResourcesElement(element.imgurl));
      })
    });

  }
}

$.ajax({
  method: "GET",
  url: "/api/resources"
}).done((resources) => {
  // console.log(resources, "asjdjahkda");
  renderResources(resources);
  // console.log("aWTFWFWFWF");
  // for(resource in resources) {
  //   console.log("asjhdakjshd", resources);
  //   resources[resource].forEach(element => {
  //     $("<div>").text(element.title).appendTo($("body"));
  //     $("<div>").text(element.description).appendTo($("body"));
  //     $("<div>").text(element.created_at).appendTo($("body"));
  //   });
  // }
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
      // $("<div>").text(element.title).appendTo($("#container"));
      // $("<div>").text(element.description).appendTo($("#container"));
      // $("<div>").text(element.created_at).appendTo($("#container"));

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
