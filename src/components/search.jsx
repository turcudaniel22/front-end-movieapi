import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure onSearch is defined
    if (onSearch) {
      onSearch({ category, keyword });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="genre">Genre</option>
          <option value="release_year">Release Year</option>
          <option value="actor">Actor</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="keyword" className="block text-gray-700">Search:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter search keyword"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
