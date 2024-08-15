
import SearchForm from '../../components/search'; // Adjust the path to your SearchForm component
import moviesData from '../data/movies.json'; // Adjust the path to your JSON file
import MovieList from '../../components/card'; // Import the MovieList component
import { useState } from 'react';

export default function Home() {
  const [movies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);


  const handleSearch = ({ keyword }) => {
    // Filter movies based on the keyword
    const newFilteredMovies = movies.filter(movie =>
      movie.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredMovies(newFilteredMovies);
  };

  

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className="min-h-screen bg-gray-900 p-8">
        <h1 className="text-3xl font-extrabold mb-12 text-center text-white">Movies</h1>
        <MovieList movies={filteredMovies} /> 
      </div>
    </div>
  );
}
