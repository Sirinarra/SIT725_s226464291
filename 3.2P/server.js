var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Recipe data - same "cards from an API" shape as the workshop's kitten demo,
// but serving our own recipe domain from a real GET endpoint instead of a
// hardcoded array in scripts.js.
var recipes = [
  {
    id: 1,
    title: "Spaghetti Aglio e Olio",
    image: "images/recipe1.jpg",
    cuisine: "Italian",
    description: "Garlic, olive oil, chilli flakes and parsley tossed through spaghetti. Ready in 15 minutes."
  },
  {
    id: 2,
    title: "Butter Chicken",
    image: "images/recipe2.jpg",
    cuisine: "Indian",
    description: "Tender chicken simmered in a rich tomato and butter curry sauce, served with rice or naan."
  },
  {
    id: 3,
    title: "Classic Pancakes",
    image: "images/recipe3.jpg",
    cuisine: "American",
    description: "Fluffy buttermilk pancakes stacked high with maple syrup and fresh berries."
  }
];

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
});
