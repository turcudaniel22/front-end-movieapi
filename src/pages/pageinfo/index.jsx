

const MovieDetails = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Image on the Left */}
      <div className="md:w-1/3 mb-4 md:mb-0">
        <img
          src="https://via.placeholder.com/300"
          alt="Movie Poster"
          className="w-full h-auto rounded-md"
        />
      </div>
      
      {/* Movie Details on the Right */}
      <div className="md:w-2/3 md:pl-6">
        <h1 className="text-3xl font-bold mb-2">Movie Title</h1>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Genre:</span> Action, Adventure</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Director:</span> John Doe</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Release Date:</span> August 14, 2024</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Cast:</span> Jane Smith, John Johnson, Emily Davis</p>
      </div>
    </div>
  );
};

export default MovieDetails;
