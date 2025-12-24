import Card from "../components/Card";

export default function Results({ items }) {
  return (
    <ul className="results">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
}