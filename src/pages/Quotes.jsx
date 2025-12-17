import { useNavigate } from "react-router";

export default function Quotes() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Quotes</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}