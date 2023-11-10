const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
    },
    // Add more fields as needed for your movie model
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
