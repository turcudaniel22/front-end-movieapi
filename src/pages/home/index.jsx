import SearchForm from '../../components/search'; // Adjust the path to your SearchForm component
import moviesData from '../data/movies.json'; // Adjust the path to your JSON file containing movie data
import MovieList from '../../components/card'; // Import the MovieList component
import { useState } from 'react'; // Import useState from React

// Home component definition
export default function Home() {
  // State for storing the complete list of movies and the filtered list
  const [movies] = useState(moviesData); // Set initial movies state from the JSON data
  const [filteredMovies, setFilteredMovies] = useState(moviesData); // State for filtered movies

  // Function to handle search input
  const handleSearch = ({ keyword }) => {
    // Filter movies based on the provided keyword
    const newFilteredMovies = movies.filter(movie =>
      movie.name.toLowerCase().includes(keyword.toLowerCase()) // Check if movie name includes the keyword
    );
    setFilteredMovies(newFilteredMovies); // Update the filtered movies state
  };

  // Render the component UI
  return (
    <div>
      <SearchForm onSearch={handleSearch} /> {/* Render the search form */}
      <div className="min-h-screen bg-gray-900 p-8"> {/* Container for the movies section */}
        <h1 className="text-3xl font-extrabold mb-12 text-center text-white">Movies</h1> {/* Title */}
        <MovieList movies={filteredMovies} /> {/* Render the list of filtered movies */}
      </div>
    </div>
  );
}
