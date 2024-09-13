// src/components/MovieCard.js
import React from 'react';

export default function MovieCard({ movie, onClick }) {
    return (
        <div className="movie-card" onClick={() => onClick(movie)}>
            <img src={movie.image} alt={movie.movieName} />
            <div>
                <h3>{movie.movieName}</h3>
                <p>Episode {movie.episode}</p>
            </div>
        </div>
    );
}
