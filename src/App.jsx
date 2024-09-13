// src/App.js
import React, { useState } from 'react';

import { movies } from './data/movies';
import './App.css';
import Header from './Compoment/Header';
import Explore from './Compoment/Explore';
import MovieList from './Compoment/Movielist';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="root">
            <Header />
            <h1 className='a'>Explore</h1>
            <h2 className='b'>What are you gonna watch today ?</h2>
            <Explore movie={selectedMovie} />
            <h1 className='c' >New Relase</h1>
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </div>
    );
}

export default App;
