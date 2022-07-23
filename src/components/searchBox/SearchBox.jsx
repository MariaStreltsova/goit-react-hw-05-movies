import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      // console.log(error)
      return;
    }
    onSubmit(searchQuery);
    resetState();
  };

  const resetState = () => {
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchQuery"
        value={searchQuery}
        onChange={handleQueryChange}
      />
      <button type="submit">
        <label>Search</label>
      </button>
    </form>
  );
}
