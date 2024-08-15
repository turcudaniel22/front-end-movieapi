import PropTypes from 'prop-types';
import { useState } from 'react';
import FullScreenImage from './FullScreenImage';

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeFullScreen = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(movie)}
            >
              <img
                className="w-full h-64 object-cover"
                src={movie.image}
                alt={movie.name}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white text-center">
                  {movie.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No movies found</p>
        )}
      </div>

      {selectedMovie && (
        <FullScreenImage movie={selectedMovie} onClose={closeFullScreen} />
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      info: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
