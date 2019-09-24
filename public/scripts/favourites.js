const createResourcesElement = function(value) {
  // <img src="${value.imgUrl}">
  const $resource = `
  <div class="column">
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
    console.log(resources[resource].imgurl)
      $(document).ready(()=> {
        $('#favourite-container').prepend(createResourcesElement(resources[resource]));
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

const convertDate = (dateobj) => {
  let date = new Date(parseInt(dateobj));
  let fdate = (date.getMonth() + 1)+'/'+ date.getDate()  +'/'+date.getFullYear()
  return fdate;
}

loadFavourites();


