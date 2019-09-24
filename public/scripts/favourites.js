
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
    $(document).ready(()=> {
      $('#resource-container').prepend(createResourcesElement(resources[resource]));
    })
  }
}

//GET THE FAVOURITES BY USER
const loadFavourites = () => {
  $.ajax({
    method: "GET",
    url: "/api/favourites"
  }).done((resources) => {
    renderResources(resources);
  });;
}

$( document ).ready( () => {


  loadFavourites();
});

//GET THE RESOURCES from the local api

const loadFavourites = () => {
  $.ajax({
    method: "GET",
    url: "/api/favourites"
  }).done((resources) => {
    renderResources(resources);
  })
};