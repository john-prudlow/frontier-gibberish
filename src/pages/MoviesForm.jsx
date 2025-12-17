import { useState } from 'react';

export default function MoviesForm() {
  const [query, setQuery] = useState('');

  return (
    <form>
      <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
      <input
        id="movie-title"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Movie Title"
        aria-label="Enter Movie Title"
        required
      />
    </form>
  )
}