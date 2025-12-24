import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Results from "../components/Results";

export default function Games() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("search") || "";

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = import.meta.env.VITE_GAME_API_URL; // Web app uses the Game Brain API: https://api.gamebrain.co/v1/games?query=
  const apiKey = import.meta.env.VITE_GAME_API_KEY; // // Add account API key to .env file to get results from API

  const normalizeGames = (results) =>
  (results || []).map((g) => ({
    id: g.id,
    title: g.name,
    year: g.year ? String(g.year) : "",
    imageURL: g.image || "",
    description: g.short_description,
    type: "game",
  }));

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiURL}${query}`, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey,
        }
      });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();
        const normalized = normalizeGames(result.results);
        setGames(normalized);
        localStorage.setItem("games", JSON.stringify(normalized));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Something went wrong while fetching games.");
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
      {games.length > 0 && (
        <>
          <h2>Results</h2>
          <Results items={games} />
        </>
      )}
      {query && games.length === 0 && !loading && !error && (
        <p>No games were found for "{query}".</p>
      )}
    </>
  );
}