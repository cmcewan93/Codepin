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
    resources[resource].forEach(element => {
      $(document).ready(()=> {
        $('#resource-container').prepend(createResourcesElement(element));
      })
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
