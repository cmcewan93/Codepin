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
      let language = title_id;
      $(img_id).click(function() {
        alert($(language).text());
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
