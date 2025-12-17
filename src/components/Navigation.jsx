import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/movies">Movies</Link>
        </li>
        <li>
            <Link to="/games">Video Games</Link>
        </li>
        {/* <li>
            <Link to="/quotes">Quotes</Link>
        </li>
        <li>
            <Link to="/quote/123">Quote (ID: 123)</Link>
        </li> */}
        {/* <li>
            <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
            <Link to="/user-profile/123">User Profile (ID: 123)</Link>
        </li> */}
      </ul>
    </nav>
  );
}