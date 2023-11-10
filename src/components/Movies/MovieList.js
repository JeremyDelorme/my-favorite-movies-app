import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
