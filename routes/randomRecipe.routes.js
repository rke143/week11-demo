const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipeQuery = 'SELECT id, recipeName, instructions FROM recipe ORDER BY RANDOM() LIMIT 1';
        const recipeResult = await db.query(recipeQuery);
        const selectedRecipe = recipeResult.rows[0];

        const ingredientQuery = 'SELECT b.ingredientName FROM ingredient b INNER JOIN IngredientInRecipe c ON b.id = c.ingredientId WHERE c.recipeId = $1';
        const ingredientResult = await db.query(ingredientQuery, [selectedRecipe.id]);
        const ingredients = ingredientResult.rows;

        res.json({ recipe: selectedRecipe, ingredients });

    } catch (error) {
        console.error('Error fetching recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;