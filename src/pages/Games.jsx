import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';
import Card from "../components/Card";

export default function Games() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [game, setGame] = useState('');
  const [showResults, setShowResults] = useState(false);
  const apiURL = import.meta.env.VITE_GAME_API_URL;
  const apiKey = import.meta.env.VITE_GAME_API_KEY;
  console.log(apiURL + query);

  const handleclick = (event) => {
      event.preventDefault();
      navigate(`/game/${game.name}`);
      setGame('');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`${apiURL}${query}`, {
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
  }, [query]);

  return (
    <>
    {showResults && (
      <>
        <h2>Results</h2>
        <ul className="results">
          {game?.results?.map((game) => (
              <Card 
                id={game.id}
                title={game.name}
                date={game.year}
                imageURL={game.image}
            />
          ))}
        </ul>
      </>
    )}
  </>
  )
}