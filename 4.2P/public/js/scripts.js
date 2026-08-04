const submitForm = () => {
  let formData = {};
  formData.recipe_name = $('#recipe_name').val();
  formData.cuisine = $('#cuisine').val();
  formData.notes = $('#notes').val();

  console.log("New recipe submitted: ", formData);
};

const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p>' + item.cuisine + '</p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' + item.description + '</p>' +
      '</div></div></div>';
    $("#card-section").append(itemToAppend);
  });
};

// Fetch recipes from our own GET REST endpoint (server.js -> GET /api/recipes)
// instead of using a hardcoded array, then render them as Materialize cards.
const loadRecipes = () => {
  fetch("/api/recipes")
    .then(response => response.json())
    .then(result => addCards(result.data))
    .catch(err => console.error("Failed to load recipes: ", err));
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#formSubmit').click(() => {
    submitForm();
  });

  loadRecipes();
});
