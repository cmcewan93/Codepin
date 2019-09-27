// const createResourcesElement = function(value) {
//   // console.log(value.id);
//   const renderedResourcesArray = [];
//   if(!value.imgurl) {
//     renderedResourcesArray.push(`
//     <div id="${ value.id }" class="card text-white text-center p-3" data-toggle="modal" data-target="#exampleModalCenter">
//       <blockquote class="blockquote mb-0">
//         <p>${ value.description }</p>
//         <footer class="blockquote-footer">
//           <small>
//             Someone famous in <cite title="Source Title">Source Title</cite>
//           </small>
//         </footer>
//       </blockquote>
//     </div>
//     `)
//   } else if(!value.title && !value.description) {
//     renderedResourcesArray.push(`
//     <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
//       <img class="card-img" src="${ value.imgurl }" alt="Card image">
//     </div>
//     `)
//   } else {
//     renderedResourcesArray.push(`
//     <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
//       <img class="card-img-top" src="${ value.imgurl }" alt="Card image cap">
//       <div class="card-body">
//         <h5 class="card-title">${ value.title }</h5>
//         <p class="card-text">${ value.description }</p>
//       </div>
//     </div>
//     `)
//   }
//   return renderedResourcesArray.join('');
// }

// const renderResources = function(resources) {
//   for(let resource in resources) {
//     console.log(resources[resource]);
//     // resources[resource].forEach(element => {
//     //   $('#searched-resources').prepend(createResourcesElement(element));
//     //   //Redirect to a specific resource
//     //   $(`#${ element.id }`).click(function() {
//     //     // alert($(title).text());
//     //     // window.location.href = `/resources/${ element.id }`;
//     //   });

//     //   $(`#${ element.id }`).hover(function() {
//     //     $(`#${ element.id }`).css("opacity", 0.5);
//     //   }, function() {
//     //     $(`#${ element.id }`).css("opacity", 1);
//     //   });
//     // });
//   }
// }


// //GET THE SEARCHED RESOURCES
const searchResource = () => {
  $.ajax({
    method: "GET",
    url: "/api/searchedResources"
  }).done((resources) => {
    // renderResources(resources);
    console.log("resource", resources);
  });;
}

// searchResource();
