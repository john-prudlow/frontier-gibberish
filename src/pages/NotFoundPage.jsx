import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}