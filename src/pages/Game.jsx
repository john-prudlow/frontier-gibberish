import { useParams } from "react-router";
import { useEffect, useState } from "react";
import GamesForm from "./Games";
import Card from "../components/Card";

export default function Game() {
  const params = useParams();
  const [game, setGame] = useState(null);
  const apiURL = import.meta.env.VITE_GAME_API_URL;
  const apiKey = import.meta.env.VITE_GAME_API_KEY;
  console.log(apiURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`${apiURL}${params.game}`, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey,
        }
      });
      const result = await response.json();
      setGame(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.game]);

  return (
    <>
    <GamesForm />
    <h2>Results</h2>
    <ul className="results">
        {game?.results?.map((game) => (
            <Card 
                id={game.id}
                title={game.name}
                date={game.year}
                imageURL={game.image}
                description={game.short_description}
            />
        ))}
    </ul>
    </>
  );
}