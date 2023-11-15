const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await db.query('SELECT * FROM recipe;');  
        res.json(recipes.rows);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;