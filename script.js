jQuery(document).ready(function ($) {
    $("#consoles").html("<p>Loading...</p>");
    const request = axios.get("http://csc225.mockable.io/consoles");
    request.then(function (response) {
      const consoles = response.data;
      const consolesHtml = consoles
        .map(function (em) {
          const { id, name, image } = em;
          return `<div class="consoles" id="console" data-id="${id}">${name}</div>`; }).join("");
          $("#consoles").html(consolesHtml);
        }); 
    
     $("#consoles").on("click","#console",function(){
        const id= $(this).attr("data-id");
        $("#consolespop").html("<p>Loading...</p>");
        const request = axios.get(`http://csc225.mockable.io/consoles/${id}`);
        request.then(function(response){
        const {id, name, image, price, country, releaseYear} = response.data;
        $("#consolespop").html(
        `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Price: $${price}</p>
    <p class="card-text">Country: ${country}</p>
    <p class="card-text">Release Year: ${releaseYear}</p>
  </div>
  </div>
        `
        )
        });
     });
    });