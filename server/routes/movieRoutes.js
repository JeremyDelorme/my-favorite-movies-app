const express = require('express');
const router = express.Router();
const passport = require('passport');
const Movie = require('../models/movie');

// Get all movies
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Other movie routes for CRUD operations

module.exports = router;
