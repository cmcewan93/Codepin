const createResourcesElement = function(value) {
  // <img src="${value.imgUrl}">
  const $resource = `
  <div class="column" id="${value.resource_id}">
    <article class="favourite-display">
      <header class="favourite-header">
        <span>${value.title}</span>
      </header>
      <img src="${value.imgurl}" class="favourite-image" style="width:100%"/>
      <footer class="favourite-footer">
        ${convertDate(value.created_at)}
      </footer>
    </article>
  </div>
  `;
  return $resource;
}

const renderResources = function(resources) {
  console.log(resources);
  for(let resource in resources) {
    //console.log(resources[resource].imgurl)
      $(document).ready(()=> {
        $('#favourite-container').prepend(createResourcesElement(resources[resource]));
        $(".column").on('click', function(e) {
          e.preventDefault();
          loadFavouriteModal(resources[resource]);
          // $("#favourite-modal").slideToggle();
        });
      })
  }
}

const loadFavourites = () => {
  $.ajax({
    method: "GET",
    url: "/api/favourites"
  }).done((resources) => {
    // console.log(resources, "asjdjahkda");
    renderResources(resources);
  });;
}

const loadFavouriteModal = (resource) => {
  $('body').append(`
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  `)
}

const convertDate = (dateobj) => {
  let date = new Date(parseInt(dateobj));
  let fdate = (date.getMonth() + 1)+'/'+ date.getDate()  +'/'+date.getFullYear()
  return fdate;
}

loadFavourites();



