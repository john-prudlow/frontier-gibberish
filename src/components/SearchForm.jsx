export default function SearchForm({
  id,
  query,
  onQueryChange,
  onSearch,
  placeholder = "Enter search term",
  ariaLabel = "Search"
}) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(); }}>
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        id={id}
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        required
      />
    </form>
  );
}