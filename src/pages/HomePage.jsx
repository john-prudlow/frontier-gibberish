import { useNavigate } from "react-router";
import Results from "../components/Results";

export default function HomePage({ favorites }) {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Who can argue with that&#8230;</h2>
      <p>Welcome to the Frontier! Here you can find information on the movies and games that you enjoy.</p>
      {favorites.movies.length > 0 && (
      <>
        <h3>Favorite Movies</h3>
        {/* <Results /> */}
      </>
      )}
      {favorites.games.length > 0 && (
      <>
        <h3>Favorite Games</h3>
        {/* <Results /> */}
      </>
      )}
        
    </section>
  );
}