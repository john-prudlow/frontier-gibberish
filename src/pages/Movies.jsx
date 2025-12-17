import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Results from "../components/Results";

export default function Movies() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("search") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = import.meta.env.VITE_MOVIE_API_URL;
  const searchPath = import.meta.env.VITE_MOVIE_API_SEARCH_PATH;
  const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN;
  const imgURL = import.meta.env.VITE_MOVIE_API_IMG_URL;

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiURL}${searchPath}${query}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();
        setMovies(result.results || []);
        localStorage.setItem("movies", JSON.stringify(result.results || []));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Something went wrong while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      {loading && (
        <p className="loading">
          <i className="fa-solid fa-spinner fa-spin"></i> Loading results&#8230;
        </p>
      )}
      {error && <p className="error">{error}</p>}
      {movies.length > 0 && (
      <>
        <h2>Results</h2><Results movies={movies} imageURL={imgURL} />
      </>
      )}
        {query && movies.length === 0 && !loading && !error && (
        <p>No movies were found for "{query}".</p>
      )}
    </>
  );
}