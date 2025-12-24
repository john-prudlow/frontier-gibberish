import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [favorites, setFavorites] = useState({ movies: [], games: [] });

  useEffect(() => {
    const search = localStorage.getItem("games");
    if (search) {
      const games = JSON.parse(search);
      const match = games.find((g) => g.id === Number(id));
      setGame(match);
    }

    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, [id]);

  const handleClick = () => {
    if (!game) return;

    const newFavorite = {
      id: game.id,
      title: game.title,
      imageURL: game.imageURL,
      description: game.description,
      type: "game"
    };

    if (favorites.games.some((fav) => fav.id === game.id)) return;

    const updated = {
      ...favorites,
      games: [...favorites.games, newFavorite],
    };

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
      {game ? (
        <div className="details">
          {game.imageURL && (
            <img src={game.imageURL} alt={game.title} className="thumb" />
          )}
          <div className="summary">
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <button className="addFavoriteBtn btn" onClick={handleClick}>
              <i className="fa-solid fa-plus"></i> Add to Favorites
            </button>
          </div>
        </div>
      ) : (
        <p>Game not found</p>
      )}
    </>
  );
}