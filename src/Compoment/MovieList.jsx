// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onMovieClick }) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
            ))}
        </div>
    );
}
