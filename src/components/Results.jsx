import { useNavigate } from "react-router";
import { slugify } from "../utils/slugify";
import Card from "../components/Card";

export default function Results({movies, imageURL}) {
    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate(`/movie/${movie.id}/${slugify(movie.title)}`);
    };

    return (
    <>
    <ul className="results">
        {movies.map((movie) => (
        <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            date={movie.release_date}
            imageURL={movie.poster_path ? `${imageURL}${movie.poster_path}` : ""}
            onClick={() => handleClick(movie)}
        />
        ))}
    </ul>
    </>
    )
}