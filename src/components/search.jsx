import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ category, keyword });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Kategori:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        >
          <option value="">Velg kategori</option>
          <option value="sjanger">Sjanger</option>
          <option value="utgivelsesår">Utgivelsesår</option>
          <option value="skuespiller">Skuespiller</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="keyword" className="block text-gray-700">Søk:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Skriv inn søkeord"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Søk
      </button>
    </form>
  );
};

// Define prop types for the SearchForm component
SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function and is required
};

export default SearchForm;
