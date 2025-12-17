import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function Card({ id, title, date, imageURL }) {
  const year = date.split("-")[0];

  return (
    <li data-id={id}>
      <Link to={`/movie/${id}/${slugify(title)}`}>
        <h3>
          {title} {year ? `(${year})` : ""}
        </h3>
        {imageURL ? (
          <img src={imageURL} alt={title} />
        ) : (
          <div className="placeholderIMG">Image Not Available</div>
        )}
      </Link>
    </li>
  );
}
