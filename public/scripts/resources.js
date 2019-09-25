const createResourcesElement = function(value) {
  console.log(value.id);
  const $resource = `
  <div class="column">
    <img id="img_${value.id}" src="${value.imgurl}" style="width:100%"/>
    <p id="title_${value.id}">${ value.title }</p>
  </div>
  `;
  return $resource;
}

const renderResources = function(resources) {
  let idNum = 0;
  let img_id = "";
  let title_id = "";
  for(let resource in resources) {
    resources[resource].forEach(element => {
      idNum++;
      img_id = "img#img_" + idNum;
      title_id = "p#title_" + idNum;
      $('#resource-container').prepend(createResourcesElement(element));
      let img = img_id;
      let title = title_id;
      //Redirect to a specific resource
      $(img).click(function() {
        alert($(title).text());
      });

      $(img).hover(function() {
        $(img).css("opacity", 0.5);
      }, function() {
        $(img).css("opacity", 1);
      });
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

const loadFavouriteModal = (resource) => {
  e.preventDefault();
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

loadResources();
