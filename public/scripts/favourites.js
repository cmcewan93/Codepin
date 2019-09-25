const createResourcesElement = function(value) {
  const $resource = `
  <div class="column" id="${value.resource_id}">
    <article class="favourite-display">
      <header class="favourite-header">
        <span>${value.title}</span>
      </header>
      <img src="${value.imgurl}" class="favourite-image" style="width:100%" data-toggle="modal" data-target="#exampleModalCenter"/>
      <footer class="favourite-footer">
        ${convertDate(value.created_at)}
      </footer>
    </article>
  </div>
  `;
  return $resource;
}

/**
 * Adds a favourite to page and creates click event on each element that toggles the modal
 * @param {*} resources 
 */
const renderResources = function(resources) {
  for(let resource in resources) {
   $('#favourite-container').prepend(createResourcesElement(resources[resource]));
   $(`#${resources[resource].resource_id}`).on('click', function(e) {
    e.preventDefault();
    console.log(resources[resource]);
    loadFavouriteModal(resources[resource]);
     $('#favouriteModal').modal('toggle');
  });
  $(`#modal-favourite-button`).on('click', function(e) {
    e.preventDefault();
   

  });
  }
}


const loadFavourites = () => {
  $.ajax({
    method: "GET",
    url: "/api/favourites"
  }).done((resources) => {
    renderResources(resources);
  });;
}

/**
 * Dynamically creates a modal with the resource data passed in
 * @param {} resource 
 */

const loadFavouriteModal = (resource) => {
  $('#favouriteModal').remove();
  let date = convertDate(resource.created_at);
  $('body').append(`
  <div class="modal fade" id="favouriteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

  <div class = "modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="favouriteModalLongTitle">${resource.title}</h3>
        <h3 class="modal-title" id ="favouriteModalDate">Created at: ${date}</h3>
      </div>
      <div class="modal-body">
        <div id="modal-body-left">
         <img src="${resource.imgurl}" class="modal-image"></img> 
      </div>
        <div id="modal-body-right">
          <p>${resource.description}</p>
        </div>
      </div>
      <div class="modal-footer">
        <div id="modal-footer-left>
   
        </div>
        <div id="modal-footer-right">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="modal-favourite-button">Unfavourite</button>
         </div>
      </div>
    </div>
  </div>
</div>
  `)
}

const convertDate = (dateobj) => {
  let date = new Date(dateobj);

  // console.log(dateobj);
  // console.log(date.getMonth());
  let fdate = (date.getMonth() + 1)+'/'+ date.getDate()  +'/'+date.getFullYear()
  return fdate;
}


$(document).ready(()=> {

loadFavourites();

})
