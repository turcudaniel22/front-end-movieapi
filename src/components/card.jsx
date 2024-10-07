import { useEffect, useState } from 'react';  // Importing necessary hooks from React
import FullScreenImage from './FullScreenImage';  // Importing the FullScreenImage component

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);  // State to keep track of the selected movie for full-screen view
  const [movies, setMovies] = useState([]);  // State to store the list of movies fetched from the API
  const [error, setError] = useState(null);  // State to handle any errors during the fetch operation

  useEffect(() => {
    // Fetching movies from the API when the component mounts
    fetch('http://localhost:8080/api/v1/movie/all')
      .then((response) => {
        // Checking if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');  // Throwing an error if the response is not ok
        } 
        return response.json();  // Parsing the JSON from the response
      })
      .then((data) => setMovies(data))  // Updating the movies state with the fetched data
      .catch((error) => {
        setError(error);  // Setting the error state if there is an error during the fetch
        console.error('There was a problem with the fetch operation:', error);  // Logging the error to the console
      });
  }, []);  // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle when a movie image is clicked
  const handleImageClick = (movies) => {
    setSelectedMovie(movies);  // Setting the selected movie for full-screen view
  };

  // Function to close the full-screen view
  const closeFullScreen = () => {
    setSelectedMovie(null);  // Resetting selected movie to null to close full-screen
  };

  return (
    <div>
      {/* Displaying error message if there is an error */}
      {error && <p className="text-red-500 text-center">Failed to load movies: {error.message}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length > 0 ? (
          // Mapping over the movies array to render movie cards
          movies.map((movie) => (
            <div
              key={movie.movieId}  // Using movieId as a unique key for each movie
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(movie)}  // Setting up click handler to open the full-screen view
            >
              <img
                className="w-full h-64 object-cover"  // Styling the image
                src={movie.poster}  // Movie poster URL
                alt={movie.title}  // Alt text for the image
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Overlay to show movie title */}
                <h2 className="text-2xl font-semibold text-white text-center">
                  {movie.title} {/* Display the movie title */}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No movies found</p>  // Message when no movies are available
        )}
      </div>

      {/* Rendering FullScreenImage component if a movie is selected */}
      {selectedMovie && (
        <FullScreenImage movie={selectedMovie} onClose={closeFullScreen} />
      )}
    </div>
  );
};

export default MovieList;  // Exporting the MovieList component for use in other parts of the application
