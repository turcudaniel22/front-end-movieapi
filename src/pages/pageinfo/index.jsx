const MovieDetails = () => {
  return (
    <div className="flex flex-col md:flex-row p-4"> {/* Main container with flex layout */}
      {/* Image on the Left */}
      <div className="md:w-1/3 mb-4 md:mb-0"> {/* Container for the movie poster */}
        <img
          src="https://via.placeholder.com/300" // Placeholder image URL
          alt="Movie Poster" // Alt text for the image
          className="w-full h-auto rounded-md" // Full width and auto height with rounded corners
        />
      </div>
      
      {/* Movie Details on the Right */}
      <div className="md:w-2/3 md:pl-6"> {/* Container for movie details */}
        <h1 className="text-3xl font-bold mb-2">Movie Title</h1> {/* Movie title */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Genre:</span> Action, Adventure {/* Genre information */}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Director:</span> John Doe {/* Director's name */}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Release Date:</span> August 14, 2024 {/* Release date */}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Cast:</span> Jane Smith, John Johnson, Emily Davis {/* Cast information */}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails; // Export the MovieDetails component
