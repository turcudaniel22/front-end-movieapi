import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

const SearchFilter = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/movie/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update filteredMovies when movies or data changes
    if (data) {
      setFilteredMovies(data);
    }
  }, [data]);

  const handleSearch = ({ category, keyword }) => {
    let filtered = movies;

    if (category) {
      filtered = filtered.filter(movie => movie.category === category);
    }

    if (keyword) {
      filtered = filtered.filter(movie =>
        movie.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

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

export default SearchFilter;
