const createResourcesElement = function(value) {
  // console.log(value.id);
  const $resource = `
  <div class="column">
    <div class="card" style="width: 18rem;">
      <img id="img_${ value.id } class="card-img-top" src="${ value.imgurl }" alt="Card image cap">
      <div class="card-body">
        <p id="title_${ value.id } class="card-text"> ${ value.title } </p>
      </div>
    </div>
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
        // alert($(title).text());
        window.location.href = `/resources/${ element.id }`;
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


loadResources();
