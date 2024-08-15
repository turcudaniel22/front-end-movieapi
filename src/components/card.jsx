
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  // Function to handle navigation to the movie details page
  const handleClick = (id) => {
    navigate(`/pageinfo/${id}`); // Navigate to /pageinfo/[movie_id]
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.id} // Use movie.id as the key
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-64 object-cover"
              src={movie.image}
              alt={movie.name}
            />
            <button
              onClick={() => handleClick(movie.id)} // Pass the movie's ID to handleClick
              className="mt-4 px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-black"
            >
              Info
            </button>
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
  );
};

// Define prop types for the MovieList component
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
