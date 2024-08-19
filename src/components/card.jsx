import { useEffect, useState } from 'react';
import FullScreenImage from './FullScreenImage';

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/movie/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        } 
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => {
        setError(error);
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleImageClick = (movies) => {
    setSelectedMovie(movies);
  };

  const closeFullScreen = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {error && <p className="text-red-500 text-center">Failed to load movies: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.movieId}  // Assuming movie.id is unique and available
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(movie)}
            >
              {console.log('Image URL:', movie.poster)}
              <img
                className="w-full h-64 object-cover"
                src={movie.poster} 
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-semibold text-white text-center">
                  {movie.title}
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

export default MovieList;
