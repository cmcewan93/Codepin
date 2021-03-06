const createResourcesElement = function(value) {
  const resource = `

<div class="card" style="width: 50rem;" id="${value.resource_id}">
    <img class="card-img-top" src="${value.imgurl}" alt="Card image cap" data-toggle="modal" data-target="#exampleModalCenter">
  <div class="card-body">
    <p class="card-text">${value.description}</p>
  </div>
</div>

  
  `
  return resource;
}

  // <div class="column" id="${value.resource_id}">
  //   <article class="favourite-display">
  //     <header class="favourite-header">
  //       <span>${value.title}</span>
  //     </header>
  //     <img src="${value.imgurl}" class="favourite-image" style="width:100%" data-toggle="modal" data-target="#exampleModalCenter"/>
  //     <footer class="favourite-footer">
  //       ${convertDate(value.created_at)}
  //     </footer>
  //   </article>
  // </div>

/**
 * Adds a favourite to page and creates click event on each element that toggles the modal
 * @param {*} resources
 */
const renderResources = function(resources) {
  for(let resource in resources) {
    //console.log(resources[resource].resource_id);
   $('#favourite-container').prepend(createResourcesElement(resources[resource]));
   $(`#${resources[resource].resource_id}`).on('click', function(e) {
    e.preventDefault();
    //console.log(resources[resource]);
    loadFavouriteModal(resources[resource]);
    $('#favouriteModal').modal('toggle');
  });
    $(`#${ resources[resource].resource_id }`).hover(function() {
      $(`#${ resources[resource].resource_id }`).css("opacity", 0.5);
    }, function() {
      $(`#${ resources[resource].resource_id }`).css("opacity", 1);
    });
    console.log('dsfdsfsdfas', resources[resource].siteurl);
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
 
const deleteFavourite = (favourite_id) => {
  console.log('ajax request:', favourite_id);
  $.ajax({
    method: 'POST',
    url: '/api/favourites/delete',
    data: {favourite_id}
  }).then(() => {
    loadFavourites();
  })
}



/**
 * Dynamically creates a modal with the resource data passed in
 * @param {} resource
 */

const loadFavouriteModal = (resource) => {
  console.log('This is your resource ', resource);
  /**
   * Removes current modal and event handlers associated with it
   */
  $('#favouriteModal').remove();
  $('#favouriteModal').on('hidden', function (e) {
    $('#modal-unfavourite-button').unbind(); // or $(this)        
});
  //convert date for modal
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
        <button type="button" class="btn btn-primary" id="modal-redirect-button">Go to Resource!</button>
        <div id="modal-footer-right">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="modal-unfavourite-button">Unfavourite</button>
         </div>
      </div>
    </div>
  </div>
</div>
  `)

  /**
   * Redirect user to the resource site url
   */

  $(`#modal-redirect-button`).click(function(e) {
     e.preventDefault();
     $(location).attr('href', `${resource.siteurl}`)
  });

  /**
   * Remove favourite from user's favourites on click
   */

  $(`#modal-unfavourite-button`).click(function(e) {
    console.log('deleting favourite', resource.favourite_id )
    e.preventDefault();
    $(`div#${resource.favourite_id}.card`).remove();
    deleteFavourite(resource.favourite_id);
    $('#favouriteModal').modal('toggle');
    // $(`div#${resource.favourite_id}.card`).remove();
 });

}

// Date conversion helper function
const convertDate = (dateobj) => {
  let date = new Date(dateobj);
  let fdate = (date.getMonth() + 1)+'/'+ date.getDate()  +'/'+date.getFullYear()
  return fdate;
}


$(document).ready(()=> {

loadFavourites();

})

