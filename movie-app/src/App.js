// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';


function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dreams within dreams.',
      posterURL: 'https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg',
      rating: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the world he lives in is a simulation.',
      posterURL: 'https://m.media-amazon.com/images/I/613ypTLZHsL.jpg',
      rating: 8.7,
    },
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (filters.title === '' || movie.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.rating === '' || movie.rating >= filters.rating)
    );
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => handleAddMovie({
        title: 'Avatar',
        description: 'A visually stunning science fiction movie.',
        posterURL: 'https://example.com/avatar.jpg',
        rating: 7.8
      })}>
        Add Avatar
      </button>
    </div>
  );
}

export default App;
