import { useNavigate } from "react-router";
import { useState } from 'react';

export default function GamesForm({onSubmit}) {
    const navigate = useNavigate();
    const [game, setGame] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/game/${game}`);
        setGame('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="game-title">Video Game Title:</label>
        <input
          id="game-title"
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          placeholder="Enter video game title"
          required
        />
        <button type="submit">Search Game</button>
      </form>
    )
}