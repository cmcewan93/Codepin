
const createResourcesElement = function(value) {
  // console.log(value.id);
  const renderedResourcesArray = [];
  if(!value.likes) {
    value.likes = 0;
  }
  if(!value.imgurl) {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card text-white text-center p-3" data-toggle="modal" data-target="#exampleModalCenter">
      <blockquote class="blockquote mb-0">
        <p>${ value.description }</p>
        <span><i class="far fa-thumbs-up" style="color: #ff9900";>${ value.likes }</i></span>
      </blockquote>
    </div>
    `)
  } else if(!value.title && !value.description) {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="card-img" src="${ value.imgurl }" alt="Card image">
      <span style="margin-left: 5px; margin-"><i class="far fa-thumbs-up" style="color: #ff9900";>${ value.likes }</i></span>
    </div>
    `)
  } else {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="card-img-top" src="${ value.imgurl }" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${ value.title }</h5>
        <p class="card-text">${ value.description }</p>
        <span><i class="far fa-thumbs-up" style="color: #ff9900";>${ value.likes }</i></span>
      </div>
    </div>
    `)
  }
//   const $resource = `

// <div class="card">
//   <img class="card-img-top" src="${ value.imgurl }" alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//   </div>
// </div>
// <div class="card p-3 text-right">
//   <blockquote class="blockquote mb-0">
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//     <footer class="blockquote-footer">
//       <small class="text-muted">
//         Someone famous in <cite title="Source Title">Source Title</cite>
//       </small>
//     </footer>
//   </blockquote>
// </div>

  // `;
  return renderedResourcesArray.join('');
}

const renderResources = function(resources) {
  for(let resource in resources) {
    resources[resource].forEach(element => {
      $('#resources').prepend(createResourcesElement(element));
      //Redirect to a specific resource
      $(`#${ element.id }`).click(function() {
        // alert($(title).text());
        // window.location.href = `/resources/${ element.id }`;
        loadResourceModal(element);
        $('#resourceModal').modal('toggle');
      });

      $(`#${ element.id }`).hover(function() {
        $(`#${ element.id }`).css("opacity", 0.5);
      }, function() {
        $(`#${ element.id }`).css("opacity", 1);
      });
    });
  }
}

/**
 * Dynamically creates a modal with the resource data passed in
 * @param {} resource
 */

const loadResourceModal = (resource) => {
  $('#resourceModal').remove();
  let date = convertDate(resource.created_at);
  console.log(date);
  $('body').append(`
  <div class="modal fade" id="resourceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

  <div class = "modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="resourceModalLongTitle">${resource.title}</h3>
        <h3 class="modal-title" id ="resourceModalDate">Created at: ${date}</h3>
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
          <button type="button" class="btn btn-primary" id="modal-favourite">Unfavourite</button>
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
