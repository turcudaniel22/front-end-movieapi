import { useEffect, useState } from 'react'; // Import necessary hooks from React
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import SearchForm from './SearchForm'; // Import the SearchForm component
import MovieList from './MovieList'; // Import the MovieList component

// SearchFilter component definition
const SearchFilter = ({ movies }) => {
  // State for filtered movies, initial state set to the full list of movies
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [data, setData] = useState(null); // State for fetched movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Effect to fetch movie data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/movie/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Set the fetched data to state
      } catch (error) {
        setError(error); // Set error if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  // Effect to update filteredMovies when data is fetched
  useEffect(() => {
    if (data) {
      setFilteredMovies(data); // Update filteredMovies with fetched data
    }
  }, [data]); // Runs whenever data changes

  // Function to handle search functionality
  const handleSearch = ({ category, keyword }) => {
    let filtered = movies; // Start with the original movies array

    // Filter by category if provided
    if (category) {
      filtered = filtered.filter(movie => movie.category === category);
    }

    // Filter by keyword if provided
    if (keyword) {
      filtered = filtered.filter(movie =>
        movie.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    // Update the state with the filtered movies
    setFilteredMovies(filtered);
  };

  // Loading state UI
  if (loading) return <p>Loading...</p>;
  // Error state UI
  if (error) return <p>Error: {error.message}</p>;

  // Render the component UI
  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} /> {/* Render the search form */}
      <MovieList movies={filteredMovies} /> {/* Render the filtered movie list */}
    </div>
  );
};

// PropTypes for type-checking the props passed to SearchFilter
SearchFilter.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      info: PropTypes.string,
      category: PropTypes.string, // Ensure 'category' is defined in your prop types
    })
  ).isRequired,
};

// Export the SearchFilter component
export default SearchFilter;
