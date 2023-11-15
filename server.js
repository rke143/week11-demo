const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRecipeRouter = require('./routes/randomRecipe.routes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipesRouter);
app.use('/random', randomRecipeRouter);

app.listen(3000, () => {
    console.log('Server is running on Port 3000.');
});