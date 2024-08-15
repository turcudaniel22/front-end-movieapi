import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

const SearchFilter = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

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
    })
  ).isRequired,
};

export default SearchFilter;
