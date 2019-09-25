//GET THE RESOURCES from the local api

const createResourcesElement = function(value) {
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
    console.log(resources, "askdjaskd");
    $(document).ready(()=> {
      $('#resource-id-container').prepend(createResourcesElement(resources[resource]));
    })
    // console.log("asjdkasd", resources[resource].imgurl);
  }
}

//GET THE FAVOURITES BY USER
const loadResourceById = () => {
  $.ajax({
    method: "GET",
    url: "/api/resourceById"
  }).done((resources) => {
    // res.send(resources);
    renderResources(resources);
  });;
}
loadResourceById();
