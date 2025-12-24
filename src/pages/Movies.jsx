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

  const apiURL = import.meta.env.VITE_MOVIE_API_URL; // Web app uses tmdb API: https://api.themoviedb.org/3
  const searchPath = import.meta.env.VITE_MOVIE_API_SEARCH_PATH;
  const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN; // Add account token to .env file to get results from API
  const imgURL = import.meta.env.VITE_MOVIE_API_IMG_URL;

  const normalizeMovies = (results) =>
    (results || []).map((m) => ({
      id: m.id,
      title: m.title,
      year: m.release_date,
      poster_path: m.poster_path,
      imageURL: m.poster_path ? `${imgURL}${m.poster_path}` : "",
      description: m.overview,
      type: "movie"
    }));

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
        const normalized = normalizeMovies(result.results);
        setMovies(normalized);
        // ✅ persist normalized movies so Movie.jsx can read them
        localStorage.setItem("movies", JSON.stringify(normalized));
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
          <h2>Results</h2>
          <Results items={movies} />
        </>
      )}
      {query && movies.length === 0 && !loading && !error && (
        <p>No movies were found for "{query}".</p>
      )}
    </>
  );
}