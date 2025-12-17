import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Quote() {
  // grab the parameters from our address bar/ url
  const params = useParams();
  const [quotes, setQuotes] = useState(null);
  const apiURL = 'https://movie-quotes-api.vercel.app/api/v1/quotes';
  console.log(apiURL);

  //    <Route path="/user-profile/:userId" element={<UserProfile />} />
  // the params.userId is coming in from :userId
  // and that user id pulls the value from the address bar
  // i.e. if we visit this page (http://localhost:5173/user-profile/123)
  // params.userId will be?????

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();

        // Filter quotes by movie title
        const filtered = data.filter(
          (quote) => quote.movie.toLowerCase() === params.movie.toLowerCase()
        );

        setQuotes(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
        {quotes?.results?.map((movie) => (
            <li key={movie.id}>
            {movie.title} ({movie.year})
            {movie.quotes}
            </li>
        ))}
    </ul>
  );
}