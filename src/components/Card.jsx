import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function Card({ item }) {
  const year = item.year ? String(item.year).split("-")[0] : "";
  const routeType = item.type || "item"; // fallback
  const route = `/${routeType}/${item.id}/${slugify(item.title || "")}`;

  return (
    <li data-id={item.id}>
      <Link to={route}>
        <h3>
          {item.title} {year ? `(${year})` : ""}
        </h3>
        {item.imageURL ? (
          <img src={item.imageURL} alt={item.title} />
        ) : (
          <div className="placeholderIMG">Image Not Available</div>
        )}
      </Link>
    </li>
  );
}