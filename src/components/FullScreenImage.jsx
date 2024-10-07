import { useEffect } from 'react';  // Importing the useEffect hook from React
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking props

const FullScreenImage = ({ movie, onClose }) => {
  // Effect to handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => { 
      console.log(movie.poster);  // Logging the movie poster URL for debugging purposes
      
      // Close the full-screen view if the Escape key is pressed
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Adding event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);  // Dependency array ensures effect runs again if onClose changes

  // Function to handle overlay click to close the full-screen view
  const handleOverlayClick = (e) => {
    // Close the view if the click target is the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
      onClick={handleOverlayClick}  // Closing the full-screen view on overlay click
    >
      <div className="relative flex flex-col md:flex-row bg-gray-900 text-white rounded-lg shadow-lg max-w-screen-xl mx-4 md:mx-auto">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <img
            src={movie.poster}  // Displaying the movie poster
            alt={movie.title}  // Alt text for the image
            className="w-full h-full object-cover rounded-lg border-4 border-gray-700"
            style={{ maxHeight: '80vh' }}  // Limiting max height of the image
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 p-6 md:p-8 bg-gray-800 rounded-lg md:rounded-l-none md:rounded-r-lg md:w-1/3 relative">
          <button
            onClick={onClose}  // Closing the full-screen view when button is clicked
            className="absolute top-4 right-4 bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-full text-lg shadow-md transition duration-300"
          >
            X  {/* Close button */}
          </button>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>  {/* Displaying the movie title */}
          <p className="text-lg"><strong>Genre:</strong> {movie.genre}</p>  {/* Displaying the movie genre */}
          <p className="text-lg"><strong>Director:</strong> {movie.director}</p>  {/* Displaying the director's name */}
          <p className="text-lg"><strong>Release Date:</strong> {movie.releaseDate}</p>  {/* Displaying the release date */}
          <p className="text-lg"><strong>Cast:</strong> {movie.movieCast ? movie.movieCast.join(', ') : 'N/A'}</p>  {/* Displaying the cast; if no cast, show 'N/A' */}
        </div>
      </div>
    </div>
  );
};

// PropTypes for type-checking props passed to the component
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

export default FullScreenImage;  // Exporting the FullScreenImage component for use in other parts of the application
