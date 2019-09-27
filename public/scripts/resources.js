
const createResourcesElement = function(value) {
  // console.log(value.id);
  const renderedResourcesArray = [];
  if(!value.imgurl) {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card text-white text-center p-3" data-toggle="modal" data-target="#exampleModalCenter">
      <blockquote class="blockquote mb-0">
        <p>${ value.description }</p>
        <footer class="blockquote-footer">
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    `)
  } else if(!value.title && !value.description) {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="card-img" src="${ value.imgurl }" alt="Card image">
    </div>
    `)
  } else {
    renderedResourcesArray.push(`
    <div id="${ value.id }" class="card" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="card-img-top" src="${ value.imgurl }" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${ value.title }</h5>
        <p class="card-text">${ value.description }</p>
      </div>
    </div>
    `)
  }
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
        <button type="button" class="btn btn-primary" id="modal-redirect-button">Go to Resource!</button>
        <div id="modal-footer-right">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="modal-favourite-button">Favourite</button>
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
   * Adds resource to user's favourite
   */

 $(`#modal-favourite-button`).click(function(e) {
  console.log('adding favourite', resource)
  e.preventDefault();
  addFavourite(resource);
  $('#resourceModal').modal('toggle');
});

}


const convertDate = (dateobj) => {
  let date = new Date(dateobj);

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

const addFavourite = (resource) => {
  //console.log('@@@@@@@', resource);
  // console.log(req.sess)
  $.ajax({
    method: "Post",
    url: "/api/favourites/add",
    data: {resource}
  })
}


loadResources();
