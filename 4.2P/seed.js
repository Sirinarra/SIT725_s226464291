const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/recipeBoxDB");

const RecipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  cuisine: String,
  prepTimeMinutes: Number,
  description: String
});
const Recipe = mongoose.model("Recipe", RecipeSchema);

const sampleRecipes = [
  { title: "Spaghetti Aglio e Olio", image: "images/recipe1.jpg", cuisine: "Italian", prepTimeMinutes: 15, description: "Garlic, olive oil, chilli flakes and parsley tossed through spaghetti." },
  { title: "Butter Chicken", image: "images/recipe2.jpg", cuisine: "Indian", prepTimeMinutes: 40, description: "Tender chicken simmered in a rich tomato and butter curry sauce." },
  { title: "Classic Pancakes", image: "images/recipe3.jpg", cuisine: "American", prepTimeMinutes: 20, description: "Fluffy buttermilk pancakes with maple syrup and fresh berries." }
];

Recipe.insertMany(sampleRecipes).then(() => {
  console.log("Sample recipes saved!");
  mongoose.connection.close();
});