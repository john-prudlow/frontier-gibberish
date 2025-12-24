import { useLocation, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import SearchForm from "../components/SearchForm";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useRef("/");
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isBackNav, setIsBackNav] = useState(false);

  const isMovieRoute =
    location.pathname === "/movies" ||
    location.pathname.startsWith("/movie/");

  const isGameRoute =
    location.pathname === "/games" ||
    location.pathname.startsWith("/game/");

  useEffect(() => {
    if (location.pathname !== "/movies") return; // only fire on /movies
    if (!query) return;
    setIsTyping(true);
    const timeoutId = setTimeout(() => {
        navigate(`/movies?search=${query}`, { replace: true });
        setIsTyping(false);
    }, 300);
    return () => clearTimeout(timeoutId);
    }, [query, navigate, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/games") return; // only fire on /movies
    if (!query) return;
    setIsTyping(true);
    const timeoutId = setTimeout(() => {
        navigate(`/games?search=${query}`, { replace: true });
        setIsTyping(false);
    }, 300);
    return () => clearTimeout(timeoutId);
    }, [query, navigate, location.pathname]);

  // useEffect(() => {
  //   if (isBackNav) {
  //     setIsBackNav(false);
  //     return;
  //   }

  //   // Clear search when leaving all movie/game routes
  //   if (!isMovieRoute && !isGameRoute) {
  //     setQuery("");
  //   }
  // }, [location.pathname, isBackNav, isMovieRoute, isGameRoute]);



  useEffect(() => {
    return () => {
      prevPath.current = location.pathname;
    };
  }, [location]);

  const goBack = () => {
    setIsBackNav(true);
    navigate(prevPath.current);
  };


  return (
    <>
      {location.pathname !== "/" && (
        <div className="search-bar">
          <button onClick={goBack} className="backBtn btn">
            <i className="fa-solid fa-left-long"></i>&nbsp;&nbsp;Go Back
          </button>
          {isMovieRoute && (
            <SearchForm
              id="movie-title"
              query={query}
              onQueryChange={setQuery}
              placeholder="Enter Movie Title"
              ariaLabel="Enter Movie Title"
            />
          )}
          {isGameRoute && (
            <SearchForm
              id="games-title"
              query={query}
              onQueryChange={setQuery}
              placeholder="Enter Video Game Title"
              ariaLabel="Enter Video Game Title"
            />
          )}
          {isTyping && (
            <span className="loading">
              <i className="fa-solid fa-spinner fa-spin"></i> Searching&#8230;
            </span>
          )}
        </div>
      )}
    </>
  );
}