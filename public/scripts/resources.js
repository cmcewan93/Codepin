// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/resources"
//   }).done((resources) => {
//     console.log("aWTFWFWFWF");
//     for(resource in resources) {
//       console.log("asjhdakjshd", resources);
//       resources[resource].forEach(element => {
//         $("<div>").text(element.title).appendTo($("body"));
//         $("<div>").text(element.description).appendTo($("body"));
//         $("<div>").text(element.created_at).appendTo($("body"));
//       });
//     }
//   });;
// });
