import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import './style.css';
import './css/responsive.css';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Games from "./pages/Games";
import Game from "./pages/Game";

function App() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState({ movies: [], games: [] });

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <Header />
      <Search query={query} onQueryChange={setQuery} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage favorites={favorites} />} />
          <Route path="/movies" element={<Movies query={query} />} />
          <Route path="/movie/:id/:title" element={<Movie/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/game/:id/:title" element={<Game/>} />
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="/contact" element={<ContactPage/>} />
          <Route path="/user-profile/:userId" element={<UserProfilePage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App