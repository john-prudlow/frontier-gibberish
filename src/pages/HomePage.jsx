import { useEffect, useState } from "react";
import Results from "../components/Results";

export default function HomePage() {
  const [favorites, setFavorites] = useState({ movies: [], games: [] });

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  return (
    <>
    <section className={"intro"}>
      <h2>Now who can argue with that&#8230;?</h2>
      <p>Welcome to the Frontier! Here you can find information on the movies and games that you enjoy.</p>
    </section>
    {favorites.movies.length > 0 && (
      <section className={"favorites"}>
          <h3>Favorite Movies</h3>
          <Results items={favorites.movies} />
      </section>
    )}
    {favorites.games.length > 0 && (
      <section className={"favorites"}>
        <h3>Favorite Games</h3>
        <Results items={favorites.games} />
      </section>
    )}
    </>
  );
}