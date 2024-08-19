import  { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const FullScreenImage = ({ movie, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { 
      console.log(movie.poster);
      
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative flex flex-col  md:flex-row bg-gray-900 text-white rounded-lg shadow-lg max-w-screen-xl mx-4 md:mx-auto">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <img
            src={movie.poster  }
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg border-4 border-gray-700"
            style={{ maxHeight: '80vh' }}
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 p-6 md:p-8 bg-gray-800 rounded-lg md:rounded-l-none md:rounded-r-lg md:w-1/3 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-full text-lg shadow-md transition duration-300"
          >
            X
          </button>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <p className="text-lg"><strong>Genre:</strong> {movie.genre}</p>
          <p className="text-lg"><strong>Director:</strong> {movie.director}</p>
          <p className="text-lg"><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p className="text-lg"><strong>Cast:</strong> {movie.movieCast ? movie.movieCast.join(', ') : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

FullScreenImage.propTypes = {
  movie: PropTypes.shape({
    movieId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    movieCast: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FullScreenImage;
