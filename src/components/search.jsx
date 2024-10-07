import { useState } from 'react'; // Import useState from React
import PropTypes from 'prop-types'; // Import PropTypes for type-checking

// SearchForm component definition
const SearchForm = ({ onSearch }) => {
  // Local state for the search category and keyword
  const [category, setCategory] = useState(''); // State for selected category
  const [keyword, setKeyword] = useState(''); // State for search keyword

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Check if onSearch function is provided and call it with the category and keyword
    if (onSearch) {
      onSearch({ category, keyword });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow-md">
      {/* Category Selection */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Update category state on change
          className="mt-1 block w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="genre">Genre</option>
          <option value="release_year">Release Year</option>
          <option value="actor">Actor</option>
        </select>
      </div>

      {/* Keyword Input */}
      <div className="mb-4">
        <label htmlFor="keyword" className="block text-gray-700">Search:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} // Update keyword state on change
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter search keyword"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit" // Form submission button
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Search
      </button>
    </form>
  );
};

// PropTypes for type-checking the props passed to SearchForm
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function and is required
};

// Export the SearchForm component
export default SearchForm;
