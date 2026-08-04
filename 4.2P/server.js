var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/recipeBoxDB");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const RecipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  cuisine: String,
  prepTimeMinutes: Number,
  description: String
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

app.get("/api/recipes", async (req, res) => {
  const recipes = await Recipe.find({});
  res.json({ statusCode: 200, data: recipes, message: "Success" });
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
});
