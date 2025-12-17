import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";

export default function Movie() {
  const navigate = useNavigate();
  const {id, title} = useParams();
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState({ movies: [], games: [] });

  useEffect(() => {
    const search = localStorage.getItem("movies");
    if (search) {
      const movies = JSON.parse(search);
      const match = movies.find((m) => m.id === Number(id));
      setMovie(match);
    }

    // Load favorites from localStorage on mount
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [id]);

  const handleClick = () => {
    if (!movie) return;

    const newFavorite = {
      id: movie.id,
      title: movie.title,
      imageURL: movie.poster_path
        ? `${import.meta.env.VITE_MOVIE_API_IMG_URL}${movie.poster_path}`
        : "",
      description: movie.overview,
    };

    // Check if already in favorites.movies
    const exists = favorites.movies.some((fav) => fav.id === movie.id);
    if (exists) {
      console.log("Already in favorites:", favorites.movies);
      return;
    }

    const updated = {
      ...favorites,
      movies: [...favorites.movies, newFavorite],
    };

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    console.log("FAVORITES:", updated);
  };
  
  return (
    <>
    {movie ? (
        <div className="details">
          {movie.poster_path && (
            <img
              src={`${import.meta.env.VITE_MOVIE_API_IMG_URL}${movie.poster_path}`}
              alt={movie.title}
              className={"thumb"}
            />
          )}
          <div className="summary">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <button className={"addFavoriteBtn btn"} onClick={handleClick}><i className="fa-solid fa-plus"></i> Add to Favorites</button>
          </div>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
}