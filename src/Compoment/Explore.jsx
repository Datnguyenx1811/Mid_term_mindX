// src/components/Explore.js
import React from 'react';

export default function Explore({ movie }) {
    return (
        <div className="explore">
            <h2>{movie.movieName}</h2>
            <img src={movie.image} alt={movie.movieName} />
            <p>{movie.description}</p>
        </div>
    );
}
