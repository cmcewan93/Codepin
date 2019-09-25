const createResourcesElement = function(value) {
  // console.log(value.id);
  const $resource = `
  <div class="column">
    <img id="img_${value.id}" src="${value.imgurl}" style="width:100%"/>
    <p id="title_${value.id}">${ value.title }</p>
  </div>
  `;
  return $resource;
}

const renderResources = function(resources) {
  let img_id = "";
  let title_id = "";
  for(let resource in resources) {
    resources[resource].forEach(element => {
      img_id = "img#img_" + element.id;
      title_id = "p#title_" + element.id;
      $('#resource-container').prepend(createResourcesElement(element));
      let img = img_id;
      let title = title_id;
      //Redirect to a specific resource
      $(img).click(function() {
        alert($(title).text());
        window.location.href = `/resources/${element.id}`;
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
